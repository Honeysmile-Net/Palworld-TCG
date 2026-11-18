// Shared helpers for the art tools: read the card list straight from index.html, so the tools
// never keep their own copy of the naming rules.
//
// index.html is a bundle: the app source is one JSON-encoded string inside
// <script type="__bundler/template">. We decode it, cut out the card-data section
// (from `const C = {` to the line that copies `artFrom` art) and run that code in a
// Node sandbox with small browser stubs. The result is the page's own ART map
// (slug -> image path, URL-encoded) and CARDS (slug -> card entry).
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const INDEX = path.join(ROOT, 'index.html');
const TEMPLATE_OPEN = '<script type="__bundler/template">';

function readTemplate(indexPath = INDEX) {
  const html = fs.readFileSync(indexPath, 'utf8');
  const a = html.indexOf(TEMPLATE_OPEN);
  if (a < 0) throw new Error('bundler template not found in ' + indexPath);
  const start = a + TEMPLATE_OPEN.length;
  const end = html.indexOf('</script>', start);
  return { html, start, end, template: JSON.parse(html.slice(start, end)) };
}

// Encode a template string back exactly the way the bundler does (checked byte for byte).
function encodeTemplate(template) {
  return JSON.stringify(template).replace(/<\//g, '<\\u002F');
}

function writeTemplate(template, indexPath = INDEX) {
  const { html, start, end } = readTemplate(indexPath);
  fs.writeFileSync(indexPath, html.slice(0, start) + encodeTemplate(template) + html.slice(end));
}

const DATA_START = 'const C = {';
const DATA_END = "if (from && ART[from]) ART[s] = ART[from];\n});";

function loadCards(indexPath = INDEX) {
  const { template } = readTemplate(indexPath);
  const a = template.indexOf(DATA_START);
  const b = template.indexOf(DATA_END, a);
  if (a < 0 || b < 0) throw new Error('card-data section not found: the markers in tools/art/lib.js need updating');
  const code = template.slice(a, b + DATA_END.length) +
    '\n;globalThis.__out = { ART, CARDS, localArtFor: typeof localArtFor === "function" ? localArtFor : null };';
  const store = {};
  const noop = () => {};
  const ctx = {
    console, window: {}, navigator: { language: 'th' }, location: { search: '', hash: '' },
    document: { readyState: 'complete', documentElement: {}, querySelector: () => null, getElementById: () => null, addEventListener: noop },
    setTimeout: noop, clearTimeout: noop, setInterval: noop,
    fetch: () => ({ then: () => ({ catch: noop }) }),
    localStorage: { getItem: (k) => (k in store ? store[k] : null), setItem: (k, v) => { store[k] = String(v); }, removeItem: (k) => { delete store[k]; } },
  };
  vm.createContext(ctx);
  vm.runInContext(code, ctx, { filename: 'index.html#card-data' });
  return ctx.__out;
}

// Official art the page falls back to when a card has no local file (mirrors officialArtList in index.html).
function hasOfficialArt(card) {
  const code = String(card.code || '').trim().toUpperCase();
  return /^E?(BP|TD|PR)/.test(code) && code.indexOf('-') >= 0;
}

module.exports = { ROOT, INDEX, readTemplate, encodeTemplate, writeTemplate, loadCards, hasOfficialArt };
