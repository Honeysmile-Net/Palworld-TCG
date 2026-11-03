// ดึง meta จาก palworldtcg.gg: tier list + decklist ตัวแทน + card usage + matchup matrix → ptg_meta.json
const { chromium } = require('playwright'); const fs = require('fs');
(async () => {
  const b = await chromium.launch({ proxy: { server: process.env.HTTPS_PROXY } });
  const p = await b.newPage({ viewport: { width: 1600, height: 1200 } });
  await p.goto('https://palworldtcg.gg/meta', { waitUntil: 'networkidle', timeout: 90000 }); await p.waitForTimeout(1500);
  const head = await p.locator('body').innerText();
  const updated = (head.match(/Updated (\d{4}-\d{2}-\d{2})/) || [])[1] || '';
  const games = (head.match(/~?([\d,]+) online games/) || [])[1] || '';
  const rows = await p.$$eval('a[href*="/meta/decks/"]', as => { const seen = new Set(); return as.map(a => ({ href: a.getAttribute('href'), text: (a.innerText || '').replace(/\s+/g, ' ').trim() })).filter(r => /^\d+ /.test(r.text) && !seen.has(r.href) && seen.add(r.href)); });
  console.log('rows', rows.length, JSON.stringify(rows[0]));
  const out = { updated, games, rows: [], matrix: null };
  for (const r of rows) {
    const url = 'https://palworldtcg.gg' + r.href.split('?')[0];
    const a = { text: r.text, slug: r.href.split('/').pop().split('?')[0], list: [], usage: [] };
    try {
      await p.goto(url, { waitUntil: 'networkidle', timeout: 90000 });
      const t = await p.locator('body').innerText();
      a.tier = (t.match(/CASUAL\n([SABCD])\n/) || [])[1] || '';
      a.wr = (t.match(/Win rate[^\d]{0,20}([\d.]+)%/i) || [])[1] || '';
      a.first = (t.match(/Going 1st[^\d]{0,30}(\d+)%/i) || [])[1] || '';
      const dl = p.getByRole('button', { name: /^Decklist$/ }).or(p.getByRole('tab', { name: /^Decklist$/ }));
      if (await dl.count()) { await dl.first().click(); await p.waitForTimeout(1500); }
      const links = await p.$$eval('a[href*="/card/"]', as => as.map(a => [a.getAttribute('href').split('#')[0].replace('/card/', ''), (a.innerText || '').replace(/\s+/g, ' ').trim()]));
      const seen = new Set();
      links.forEach(([s, t]) => { if (/^\d+$/.test(t) && !seen.has(s)) { seen.add(s); a.list.push([s, +t]); } });
      const useen = new Set();
      links.forEach(([s, t]) => { const m = t.match(/^(.*?)([\d.]+)%([+-][\d.]+)$/); if (m && !useen.has(s)) { useen.add(s); a.usage.push([s, +m[2], +m[3]]); } });
      const mu = await p.locator('body').innerText();
      const best = mu.split(/Best into/i)[1] || ''; a.overviewText = (mu.match(/Best into[\s\S]{0,600}/i) || [''])[0];
    } catch (e) { console.log('fail', url, e.message.slice(0, 80)); }
    console.log(a.slug, a.list.reduce((t, x) => t + x[1], 0), 'cards', a.usage.length, 'usage');
    out.rows.push(a);
  }
  // matchup matrix
  await p.goto('https://palworldtcg.gg/meta/matchups', { waitUntil: 'networkidle', timeout: 90000 });
  const t16 = p.getByRole('button', { name: /^TOP 16$/ }); if (await t16.count()) { await t16.first().click(); await p.waitForTimeout(1500); }
  out.matrix = await p.$$eval('table', ts => { const t = ts[0]; if (!t) return null; return [...t.rows].map(r => [...r.cells].map(c => (c.innerText || '').replace(/\s+/g, ' ').trim())); });
  fs.writeFileSync('ptg_meta_new.json', JSON.stringify(out, null, 1));
  console.log('saved', out.rows.length, 'matrix', out.matrix && out.matrix.length);
  await b.close();
})();
