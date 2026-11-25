#!/usr/bin/env node
// Check card art against the card list in index.html, and rebuild art-index.js.
//
//   node tools/art/check_art.js            report only (exit code 1 if a card's art is missing)
//   node tools/art/check_art.js --write    also rewrite art-index.js from the files on disk
//   node tools/art/check_art.js --json     machine-readable report
//
// The report lists:
//   missing   cards with no local file. "official" means the page shows the official
//             art from the web instead, so the gap is easy to miss in the binder.
//   near      a file that is almost the expected one (different case or extension):
//             usually a naming mistake, with the fix to make.
//   orphans   files in the art folders that no card points to.
//   index     paths missing from, or stale in, art-index.js.
'use strict';
const fs = require('fs');
const path = require('path');
const { ROOT, loadCards, hasOfficialArt } = require('./lib');

const args = new Set(process.argv.slice(2));
const WRITE = args.has('--write');
const JSON_OUT = args.has('--json');
const INDEX_JS = path.join(ROOT, 'art-index.js');

const { ART, CARDS: RAW } = loadCards();
// CARDS is keyed by entry name (pengulletR); ART by slug (pengullet-r). Key both by slug.
const CARDS = {};
for (const k of Object.keys(RAW)) CARDS[RAW[k].slug] = RAW[k];
const decode = (p) => { try { return decodeURIComponent(p); } catch (e) { return p; } };
const enc = (rel) => rel.split('/').map(encodeURIComponent).join('/');

// Every folder a card points into is an art folder; scan them all.
const wanted = {};        // decoded relative path -> [slug]
for (const slug of Object.keys(ART)) {
  if (!ART[slug] || /^https?:/.test(ART[slug])) continue;
  const rel = decode(ART[slug]);
  (wanted[rel] = wanted[rel] || []).push(slug);
}
const dirs = [...new Set(Object.keys(wanted).map((p) => path.posix.dirname(p)))].sort();
const onDisk = {};        // relative path -> true
const byLower = {};       // lower-case path without extension -> [relative paths]
for (const d of dirs) {
  const abs = path.join(ROOT, d);
  if (!fs.existsSync(abs)) continue;
  for (const f of fs.readdirSync(abs)) {
    const rel = d + '/' + f;
    if (!fs.statSync(path.join(abs, f)).isFile() || f.startsWith('.')) continue;
    onDisk[rel] = true;
    const k = rel.toLowerCase().replace(/\.[^./]+$/, '');
    (byLower[k] = byLower[k] || []).push(rel);
  }
}

const missing = [], near = [];
for (const rel of Object.keys(wanted).sort()) {
  if (onDisk[rel]) continue;
  for (const slug of wanted[rel]) {
    const card = CARDS[slug] || {};
    missing.push({ slug, code: card.code || '', file: rel, official: hasOfficialArt(card) });
  }
  const close = byLower[rel.toLowerCase().replace(/\.[^./]+$/, '')] || [];
  for (const c of close) near.push({ expected: rel, found: c, slugs: wanted[rel] });
}
const nearFiles = new Set(near.map((n) => n.found));
// A file no card points to can still be used: changing a card's rarity in the binder
// (setRarity -> localArtFor) looks for the same card's file at the new rarity.
const rarityOf = (rel) => (rel.match(/-([A-Z0-9]+)-\.[^.]+$/i) || [])[1] || '';
const variantKey = {};
for (const slug of Object.keys(CARDS)) {
  const c = CARDS[slug], p = ART[slug] && decode(ART[slug]);
  if (p && rarityOf(p)) variantKey[p.replace(/-[A-Z0-9]+-(\.[^.]+)$/i, '')] = slug;
}
// ...and an unused file may simply be a byte-for-byte copy of art a card already uses.
const hash = (rel) => require('crypto').createHash('md5').update(fs.readFileSync(path.join(ROOT, rel))).digest('hex');
let usedByHash = null;
const copyOf = (rel) => {
  if (!usedByHash) { usedByHash = {}; for (const p of Object.keys(wanted)) if (onDisk[p]) usedByHash[hash(p)] = p; }
  return usedByHash[hash(rel)] || '';
};
const orphans = Object.keys(onDisk).filter((p) => !wanted[p] && !nearFiles.has(p)).sort()
  .map((p) => ({ file: p, variantOf: variantKey[p.replace(/-[A-Z0-9]+-(\.[^.]+)$/i, '')] || '', copyOf: copyOf(p) }));

// art-index.js: both the URL-encoded and the plain path of every art file, each mapped to itself
// (the format the page reads in preload() and thumbPath()).
const files = Object.keys(onDisk).sort();
const index = {};
for (const rel of files) { index[enc(rel)] = enc(rel); index[rel] = rel; }
let indexDiff = { added: [], removed: [] };
try {
  const s = fs.readFileSync(INDEX_JS, 'utf8');
  const cur = JSON.parse(s.slice(s.indexOf('{'), s.indexOf(';\n')));
  indexDiff = {
    added: Object.keys(index).filter((k) => !(k in cur) && !k.includes('%')),
    removed: Object.keys(cur).filter((k) => !(k in index) && !k.includes('%')),
  };
} catch (e) { indexDiff.error = 'could not read art-index.js: ' + e.message; }

// Byte-identical art files: keep one (the last by name, e.g. -SSP over -SP) and alias the others to it,
// so the artifact only needs to serve one copy (it has a file-count cap).
const alias = {};
{ const byHash = {};
  for (const rel of files) if (/^images\/cards\//.test(rel)) (byHash[hash(rel)] = byHash[hash(rel)] || []).push(rel);
  for (const g of Object.values(byHash)) if (g.length > 1) { g.sort(); const keep = g[g.length - 1];
    for (const r of g.slice(0, -1)) { alias[r] = keep; alias[enc(r)] = enc(keep); index[r] = keep; index[enc(r)] = enc(keep); } } }
if (WRITE) {
  fs.writeFileSync(INDEX_JS, 'window.PAL_THUMBS = ' + JSON.stringify(index) + ';\nwindow.PAL_ALIAS = ' + JSON.stringify(alias) + ';\n');
}
if (process.argv.includes('--aliases')) console.log(JSON.stringify(Object.keys(alias).filter(k => !k.includes('%'))));

const report = {
  cards: Object.keys(CARDS).length, artFiles: files.length, folders: dirs,
  missing, near, orphans, index: indexDiff, wroteIndex: WRITE,
};

if (JSON_OUT) {
  console.log(JSON.stringify(report, null, 2));
} else {
  const off = missing.filter((m) => m.official).length;
  console.log(`Cards: ${report.cards} · art files: ${files.length} in ${dirs.length} folders`);
  console.log(`\nMissing local art: ${missing.length} (${off} show official art from the web instead, ${missing.length - off} show an empty pocket)`);
  for (const m of missing) console.log(`  ${m.official ? '[official]' : '[empty]   '} ${m.slug.padEnd(22)} ${m.code.padEnd(12)} ${m.file}`);
  if (near.length) {
    console.log(`\nAlmost matching (likely a naming mistake): ${near.length}`);
    for (const n of near) console.log(`  rename "${n.found}"\n      -> "${n.expected}"   (${n.slugs.join(', ')})`);
  }
  console.log(`\nFiles no card uses: ${orphans.length}`);
  for (const o of orphans) console.log('  ' + o.file +
    (o.copyOf ? `   (same image as ${o.copyOf}: safe to delete)` : o.variantOf ? `   (another rarity of ${o.variantOf}: used if you change its rarity in the binder)` : ''));
  if (indexDiff.error) console.log('\n' + indexDiff.error);
  else {
    console.log(`\nart-index.js: ${indexDiff.added.length} files not listed, ${indexDiff.removed.length} listed files gone` +
      (WRITE ? ' → rewritten' : (indexDiff.added.length + indexDiff.removed.length ? ' → run with --write to fix' : '')));
    for (const a of indexDiff.added) console.log('  + ' + a);
    for (const r of indexDiff.removed) console.log('  - ' + r);
  }
}
process.exitCode = missing.length ? 1 : 0;
