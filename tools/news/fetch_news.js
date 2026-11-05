// Fetch Palworld OCG news: official EN news list, palworldtcg.gg spoilers (latest reveals), palify sets -> news_raw.json
const { chromium } = require('playwright'); const fs = require('fs');
(async () => {
  const b = await chromium.launch({ proxy: process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined });
  const p = await b.newPage(); const out = { at: new Date().toISOString(), official: [], reveals: [], sets: [] };
  const go = async u => { await p.goto(u, { waitUntil: 'domcontentloaded', timeout: 60000 }); await p.waitForTimeout(5000); };
  // official news (3 pages)
  for (const u of ['https://en.palworld-official-cardgame.com/news/', 'https://en.palworld-official-cardgame.com/news/page/2/', 'https://en.palworld-official-cardgame.com/news/page/3/']) {
    try { await go(u);
      const r = await p.evaluate(() => [...document.querySelectorAll('a[href*="/news/post"]')].map(a => { const t = (a.innerText || '').split('\n').map(s => s.trim()).filter(Boolean);
        const img = a.querySelector('img'); const date = t.find(x => /^[A-Z][a-z]{2}\.? \d{1,2}, \d{4}$/.test(x)) || ''; const cat = t.find(x => /^[A-Z]{4,}$/.test(x)) || '';
        const title = t.filter(x => x !== date && x !== cat).sort((x, y) => y.length - x.length)[0] || '';
        return { url: a.href, title, date, cat, img: img ? img.src : '' }; }).filter(x => x.title));
      out.official.push(...r);
    } catch (e) { console.log('official fail', u, e.message.slice(0, 80)); }
  }
  // spoilers / reveals
  try { await go('https://palworldtcg.gg/spoilers');
    out.revealHead = await p.evaluate(() => (document.body.innerText.match(/Every revealed card[^\n]*/) || [''])[0]);
    out.reveals = await p.evaluate(() => [...document.querySelectorAll('a')].map(a => { const t = (a.innerText || '').split('\n').map(s => s.trim()).filter(Boolean); const code = t.find(x => /^[A-Z]{2,5}\d{0,2}-\d{3}/.test(x));
      if (!code) return null; const img = a.querySelector('img'); return { name: t.find(x => x !== code && x !== '✦') || '', code, url: a.href, img: img ? (img.currentSrc || img.src) : '' }; }).filter(Boolean));
  } catch (e) { console.log('spoilers fail', e.message.slice(0, 80)); }
  // palify sets
  try { await go('https://palify.org/sets');
    out.sets = await p.evaluate(() => { const T = document.body.innerText.split('\n').map(s => s.trim()).filter(Boolean); const r = [];
      for (let i = 0; i < T.length; i++) if (/^(BP|TD|PR|SS|EB|SOUL)\d*$/.test(T[i]) && /cards$/.test(T[i + 3] || '')) r.push({ code: T[i], name: T[i + 1], type: T[i + 2], count: T[i + 3] }); return r; });
  } catch (e) { console.log('sets fail', e.message.slice(0, 80)); }
  // upcoming sets on palify (not yet in the binder)
  const KNOWN = ['BP01', 'BP02', 'PR', 'SS01', 'TD01', 'TD02'];
  out.upcoming = [];
  for (const st of out.sets.filter(x => !KNOWN.includes(x.code))) {
    try { await go('https://palify.org/set/' + st.code.toLowerCase());
      const cs = await p.evaluate(() => [...document.querySelectorAll('a[href^="/card/"]')].map(a => { const t = (a.innerText || '').split('\n').map(s => s.trim()).filter(Boolean); const im = a.querySelector('img');
        return { url: 'https://palify.org' + a.getAttribute('href'), name: t[0] || '', code: t.find(x => /^[A-Z]+\d*-\d{3}/.test(x)) || '', img: im ? (im.currentSrc || im.src) : '' }; }));
      cs.forEach(c => { c.set = st.code; c.setName = st.name; }); out.upcoming.push(...cs);
    } catch (e) { console.log('set fail', st.code, e.message.slice(0, 80)); }
  }
  // upcoming sets on palworldtcg.gg (release date, how many cards revealed, revealed cards)
  out.upSets = [];
  const codes = [...new Set(['bp03', 'td03', 'td04'].concat(out.sets.filter(x => !KNOWN.includes(x.code)).map(x => x.code.toLowerCase())))];
  for (const c of codes) {
    try { await go('https://palworldtcg.gg/set/' + c);
      const r = await p.evaluate(() => { const T = document.body.innerText; if (!/UPCOMING/.test(T)) return null;
        const name = (T.match(/UPCOMING\n+([^\n]+)/) || [])[1] || ''; const rel = (T.match(/Releases ([A-Z][a-z]+ \d{1,2}, \d{4})/) || [])[1] || ''; const nrev = +((T.match(/(\d+) revealed publicly/) || [])[1] || 0);
        const cards = [...document.querySelectorAll('a[href*="/card/"]')].map(a => { const t = (a.innerText || '').split('\n').map(s => s.trim()).filter(Boolean); const im = a.querySelector('img');
          return { url: a.href, name: t.find(x => !/^[A-Z]{2,5}\d{0,2}-\d{3}/.test(x) && x !== '✦') || '', code: t.find(x => /^[A-Z]{2,5}\d{0,2}-\d{3}/.test(x)) || '', img: im ? (im.currentSrc || im.src) : '' }; }).filter(x => x.code);
        return { name, rel, nrev, cards }; });
      if (r) { out.upSets.push({ code: c.toUpperCase(), name: r.name, release: r.rel, revealed: r.nrev, url: 'https://palworldtcg.gg/set/' + c });
        r.cards.forEach(x => { x.set = c.toUpperCase(); x.setName = r.name; x.img = ''; out.upcoming.push(x); }); }
    } catch (e) { console.log('upset fail', c, e.message.slice(0, 80)); }
  }
  fs.writeFileSync('news_raw.json', JSON.stringify(out, null, 1));
  console.log('official', out.official.length, 'reveals', out.reveals.length, 'sets', out.sets.length);
  await b.close();
})();
