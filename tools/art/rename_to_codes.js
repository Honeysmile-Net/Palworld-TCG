#!/usr/bin/env node
// One-off migration (18 Nov 2026): name card art by card code instead of binder number.
//
//   before: images/1/028-Pengullet Yearning for the Sky -SR-.png   (number = position in the list)
//   after:  images/cards/BP01/BP01-028-SR.png                      (code + rarity)
//
// The number tied each file to the card's place in the list, so inserting a catalog row
// shifted every later file. A code never moves. The script:
//   1. switches the path builders in index.html to cardArtPath(card, rar);
//   2. moves every art file (and its WebP thumbnail) with `git mv`, so history is kept;
//   3. removes byte-identical copies no card uses;
//   4. rebuilds art-index.js and checks every card still finds its file.
// Run with --dry to print the moves without changing anything.
'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');
const L = require('./lib');

const DRY = process.argv.includes('--dry');
const decode = (p) => decodeURIComponent(p);
const bySlug = (cards) => { const o = {}; for (const k of Object.keys(cards)) o[cards[k].slug] = cards[k]; return o; };

const before = L.loadCards();
let { template: t } = L.readTemplate();
function rep(oldS, newS) {
  const n = t.split(oldS).length - 1;
  if (n !== 1) throw new Error(`expected 1 match, found ${n}: ${oldS.slice(0, 70)}`);
  t = t.replace(oldS, newS);
}

rep(`const ART = {};
function indexCards() {`, `const ART = {};
// รูปการ์ด: images/cards/<ชุด>/<รหัส>-<ระดับ>.<นามสกุล> เช่น images/cards/BP01/BP01-028-SR.png
// ชื่อไฟล์ผูกกับรหัสการ์ด ไม่ใช่ลำดับใน binder — แทรก/ลบการ์ดได้โดยรูปไม่เลื่อน
// (รหัสที่ลงท้ายด้วยระดับอยู่แล้ว เช่น BP01-028SR ตัดท้ายออกก่อน · การ์ดที่ไม่มีรหัสใช้ slug ในโฟลเดอร์ misc)
function cardArtPath(card, rar) {
  const r = String(rar || card.rar || '').toUpperCase();
  let code = String(card.code || '').trim().toUpperCase();
  if (r && code.length > r.length && code.slice(-r.length) === r && /\\d$/.test(code.slice(0, -r.length))) code = code.slice(0, -r.length);
  const set = code ? code.split('-')[0] : 'misc';
  return 'images/cards/' + set + '/' + encodeURIComponent((code || card.slug) + '-' + r) + '.' + (card.ext || 'png');
}
function indexCards() {`);

rep(`    const num = String(card.no).padStart(3, '0');
    const folder = Math.floor((card.no - 1) / 100) + 1;
    if (card.art) { ART[card.slug] = card.art; return; }
    ART[card.slug] = 'images/' + folder + '/' + num + '-' +
      encodeURIComponent((card.file || (card.name + ' ' + card.sub)) + ' -' + card.rar + '-') + '.' + (card.ext || 'png');`,
`    if (card.art) { ART[card.slug] = card.art; return; }
    ART[card.slug] = cardArtPath(card, card.rar);`);

rep(`function localArtFor(card, rar) {
  const num = String(card.no).padStart(3, '0');
  const folder = Math.floor((card.no - 1) / 100) + 1;
  return 'images/' + folder + '/' + num + '-' +
    encodeURIComponent((card.file || (card.name + ' ' + card.sub)) + ' -' + rar + '-') + '.' + (card.ext || 'png');
}`, `function localArtFor(card, rar) { return cardArtPath(card, rar); }`);

// Work out the moves from the page's own code: old path -> new path, per card.
const tmp = path.join(require('os').tmpdir(), 'pal-index-new.html');
const html = fs.readFileSync(L.INDEX, 'utf8');
const r0 = L.readTemplate();
fs.writeFileSync(tmp, html.slice(0, r0.start) + L.encodeTemplate(t) + html.slice(r0.end));
const after = L.loadCards(tmp);
const B = bySlug(before.CARDS);

const moves = {};  // old relative path -> new relative path
for (const slug of Object.keys(before.ART)) {
  if (B[slug] && B[slug].artFrom) continue;               // borrowed art: follows its source card
  const from = decode(before.ART[slug]), to = decode(after.ART[slug]);
  if (moves[from] && moves[from] !== to) throw new Error(`${from} would move to two places`);
  moves[from] = to;
}
const targets = Object.values(moves);
if (new Set(targets).size !== targets.length) throw new Error('two files would get the same new name');

const ROOT = L.ROOT, abs = (p) => path.join(ROOT, p);
const thumbOf = (p) => p.replace(/^images\//, 'images/thumb/').replace(/\.[^.]+$/, '.webp');
let moved = 0, thumbs = 0, missing = [];
for (const [from, to] of Object.entries(moves)) {
  if (!fs.existsSync(abs(from))) { missing.push(from); continue; }
  if (DRY) { console.log(from, '->', to); continue; }
  fs.mkdirSync(path.dirname(abs(to)), { recursive: true });
  execFileSync('git', ['mv', from, to], { cwd: ROOT });
  moved++;
  const tf = thumbOf(from), tt = thumbOf(to);
  if (fs.existsSync(abs(tf))) { fs.mkdirSync(path.dirname(abs(tt)), { recursive: true }); execFileSync('git', ['mv', tf, tt], { cwd: ROOT }); thumbs++; }
}

// Leftovers in the old numbered folders: delete only exact copies of art that was kept.
const md5 = (f) => crypto.createHash('md5').update(fs.readFileSync(f)).digest('hex');
const kept = new Set(targets.filter((p) => fs.existsSync(abs(p))).map((p) => md5(abs(p))));
const left = [];
for (const d of [...new Set(Object.keys(moves).map((p) => path.posix.dirname(p)))]) {
  if (!fs.existsSync(abs(d))) continue;
  for (const f of fs.readdirSync(abs(d))) {
    const rel = d + '/' + f;
    if (!DRY && kept.has(md5(abs(rel)))) { execFileSync('git', ['rm', '-q', rel], { cwd: ROOT }); const th = thumbOf(rel); if (fs.existsSync(abs(th))) execFileSync('git', ['rm', '-q', th], { cwd: ROOT }); console.log('removed duplicate', rel); }
    else left.push(rel);
  }
}

if (!DRY) {
  fs.copyFileSync(tmp, L.INDEX);
  execFileSync('node', [path.join(__dirname, 'check_art.js'), '--write'], { cwd: ROOT, stdio: 'inherit' });
}
console.log(`\n${DRY ? 'would move' : 'moved'} ${DRY ? Object.keys(moves).length : moved} files, ${thumbs} thumbnails` +
  (missing.length ? `; ${missing.length} cards had no file to move:\n  ${missing.join('\n  ')}` : '') +
  (left.length ? `\nstill in old folders:\n  ${left.join('\n  ')}` : ''));
