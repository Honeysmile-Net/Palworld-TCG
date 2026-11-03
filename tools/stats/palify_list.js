const { chromium } = require('playwright'); const fs = require('fs');
(async () => {
  const b = await chromium.launch({ proxy: { server: process.env.HTTPS_PROXY } });
  const p = await b.newPage();
  await p.goto('https://palify.org/decks', { waitUntil: 'domcontentloaded', timeout: 90000 });
  await p.getByRole('button', { name: /Show more decks/ }).waitFor({ timeout: 60000 }); await p.waitForTimeout(3000);
  const N = +(process.env.MORE || 30);
  for (let i = 0; i < N; i++) {
    const more = p.getByRole('button', { name: /Show more decks/ });
    if (!(await more.count())) { console.log('no more at', i); break; }
    try { await more.click({ timeout: 20000 }); } catch (e) { console.log('stuck', i); break; }
    await p.waitForTimeout(1500);
  }
  const r = await p.evaluate(() => { const ids = [...new Set([...document.querySelectorAll('a[href^="/decks/"]')].map(a => a.getAttribute('href').split('?')[0]).filter(h => /^\/decks\/[0-9a-f-]{36}$/.test(h)))]; const dated = []; document.querySelectorAll('a[href^="/decks/"]').forEach(a => { const h = a.getAttribute('href'); if (!/^\/decks\/[0-9a-f-]{36}$/.test(h)) return; let e = a; for (let i = 0; i < 6 && e && !/· \w{3} \d+, \d{4}/.test(e.innerText || ''); i++) e = e.parentElement; const m = e && (e.innerText || '').match(/· (\w{3} \d+, \d{4})/); dated.push([h, m ? m[1] : '']); }); return { dated, ids, txt: (document.body.innerText.match(/[\d,]+ of [\d,]+ decks/) || [''])[0], last: [...document.body.innerText.matchAll(/· (\w{3} \d+, \d{4})/g)].map(m => m[1]).slice(-3) }; });
  console.log(r.ids.length, r.txt, r.last);
  fs.writeFileSync('ids_dated_new.json', JSON.stringify(r.dated));
  await b.close();
})();
