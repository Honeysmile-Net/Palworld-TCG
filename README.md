# Palworld Card Binder

Static single-file binder. Open `index.html`, or enable GitHub Pages (Settings → Pages → branch `main`, folder `/`).

## Card art

Art lives in `images/`, 100 files per folder, numbered in binder order:

```
images/1/001-<Card Name> <Subtitle> -<Rarity>-.<ext>
...
images/1/100-...
images/2/101-...
```

Examples:

```
images/1/015-Chillet Dragon Whisperer -RR-.png
images/1/010-Shadowbeak Seed of Despair -RR-.jpeg
images/1/025-Aurora Guide -C-.png
```

Notes:

- **Case sensitive** on GitHub Pages — `-RR-` ≠ `-rr-`, `Sky` ≠ `sky`.
- The extension must match the card entry (`.png` unless the entry sets `ext:'jpeg'`). Hover a pocket to see the exact filename it looks for.
- A pocket with no matching file stays in its empty "Drop art" state.
- Drag-and-drop onto a pocket is local preview only — not saved when hosted.
- Numbers follow the order cards first appear in the binder (DECK page first, then the collection pages). Adding or removing cards can shift later numbers — re-check the hover tooltips after edits.

## Editing the list

Card entries live in the `const C = { … }` block inside `index.html`; page layout in `const PAGES` (collection) and `const DECK` (deck page).
