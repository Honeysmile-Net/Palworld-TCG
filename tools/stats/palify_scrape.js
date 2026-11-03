const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  const b = await chromium.launch({ proxy: { server: process.env.HTTPS_PROXY } });
  const ctx = await b.newContext();
  await ctx.route(/\.(png|jpe?g|webp|gif|woff2?)(\?|$)/, r => r.abort());
  const ids = fs.readFileSync('ids_fetch.txt', 'utf8').split('\n').filter(Boolean); console.log('ids', ids.length);
  const out = []; let k = 0;
  const work = async () => {
    const q = await ctx.newPage();
    while (k < ids.length) {
      const id = ids[k++];
      for (let t = 0; t < 2; t++) {
        try {
          await q.goto('https://palify.org' + id, { waitUntil: 'domcontentloaded', timeout: 45000 });
          await q.waitForSelector('a[href^="/card/"]', { timeout: 20000 });
          const d = await q.evaluate(() => {
            const T = document.body.innerText;
            const wl = T.match(/(\d+)W[–-](\d+)L/);
            const h1 = document.querySelector('h1');
            const by = (T.match(/\nby\n+([^\n]+)/) || [])[1] || '';
            const sh = T.match(/SHARE THIS DECK\n+(\d+)\n(\d+)\n(\d+)/);
            const cards = {};
            document.querySelectorAll('a[href^="/card/"]').forEach(a => {
              const m = (a.innerText || '').match(/×\s*(\d+)/); if (!m) return;
              const s = a.getAttribute('href').replace('/card/', '').split('?')[0];
              cards[s] = (cards[s] || 0) + +m[1];
            });
            const after = T.split('\nby\n')[1] || '';
            const lines = after.split('\n').map(x => x.trim()).filter(Boolean);
            const arch = lines.slice(1).find(l => !/^(Red|Blue|Green|Purple|Colorless|Yellow)$/.test(l) && l !== 'SHARE THIS DECK') || '';
            return { name: h1 ? h1.innerText.trim() : '', by, arch, w: wl ? +wl[1] : 0, l: wl ? +wl[2] : 0, up: sh ? +sh[1] : 0, cp: sh ? +sh[2] : 0, views: sh ? +sh[3] : 0, cards: Object.entries(cards) };
          });
          d.id = id.split('/').pop(); d.total = d.cards.reduce((a, c) => a + c[1], 0);
          d.bp2 = d.cards.filter(c => /^bp02-/.test(c[0])).reduce((a, c) => a + c[1], 0);
          out.push(d); break;
        } catch (e) { if (t) console.log('fail', id, e.message.slice(0, 80)); }
      }
      if (out.length % 50 === 0) console.log('done', out.length);
    }
    await q.close();
  };
  await Promise.all(Array.from({ length: 8 }, work));
  fs.writeFileSync('decks_new.json', JSON.stringify(out));
  console.log('saved', out.length);
  await b.close();
})();
