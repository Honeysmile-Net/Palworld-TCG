#!/usr/bin/env node
// Card data lives in data/cards.js; index.html carries a copy inside its bundle.
//
//   node tools/cards/build.js            copy data/cards.js into index.html
//   node tools/cards/build.js --check    exit 1 if index.html and data/cards.js differ
//   node tools/cards/build.js --extract  copy the block from index.html back to data/cards.js
//                                        (use this if index.html was edited directly)
//
// data/cards.js is plain JavaScript: the card list (C, WISH_ROWS), counts and lots, the change
// log, the deck (DECK_SLUGS) and the album layout (ALBUM_PAGES, ALBUM2_PAGES). The browser never
// loads it as a separate file: it runs inside the page, between the two marker lines below, so the
// page keeps working as one bundle (and offline). Edit data/cards.js, run this script, commit both.
'use strict';
const fs = require('fs');
const path = require('path');
const L = require('../art/lib');

const DATA = path.join(L.ROOT, 'data', 'cards.js');
const START = '// ===== cards-data:start — generated from data/cards.js by tools/cards/build.js; edit that file, not this block =====\n';
const END = '// ===== cards-data:end =====\n';

function block(template) {
  const a = template.indexOf(START), b = template.indexOf(END);
  if (a < 0 || b < a) throw new Error('cards-data markers not found in index.html');
  return { a: a + START.length, b };
}

const mode = process.argv[2] || '';
let { template: t } = L.readTemplate();
const { a, b } = block(t);
const inPage = t.slice(a, b);

if (mode === '--extract') {
  fs.mkdirSync(path.dirname(DATA), { recursive: true });
  fs.writeFileSync(DATA, inPage);
  console.log(`data/cards.js written from index.html (${inPage.split('\n').length} lines)`);
} else {
  const src = fs.readFileSync(DATA, 'utf8');
  if (mode === '--check') {
    if (src === inPage) { console.log('index.html matches data/cards.js'); }
    else { console.error('index.html is out of date: run node tools/cards/build.js'); process.exitCode = 1; }
  } else if (src === inPage) {
    console.log('index.html already up to date');
  } else {
    L.writeTemplate(t.slice(0, a) + src + t.slice(b));
    L.loadCards(); // fails loudly if the new data doesn't run
    console.log('index.html updated from data/cards.js');
  }
}
