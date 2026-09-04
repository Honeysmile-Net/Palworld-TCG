# Palworld Card Binder

Static single-file binder. Open `index.html`, or enable GitHub Pages (Settings → Pages → branch `main`, folder `/`).

## Card art

Art lives in `images/`, named:

```
images/<Type>/<Color>/<Card Name> <Subtitle> -<Rarity>-.<ext>
```

Examples:

```
images/Pal/Blue/Chillet Dragon Whisperer -RR-.png
images/Pal/Purple/Shadowbeak Seed of Despair -RR-.jpeg
images/Event/Blue/Aurora Guide -C-.png
images/Structure/Purple/Medieval Medicine Workbench -C-.png
```

Notes:

- **Case sensitive** on GitHub Pages — `-RR-` ≠ `-rr-`, `Sky` ≠ `sky`.
- Extension must match what the card entry expects (`.png` unless the entry sets `ext:'jpeg'`); hover a pocket to see the exact filename it looks for.
- A pocket with no matching file stays in its empty "Drop art" state.
- Drag-and-drop onto a pocket is local preview only — not saved when hosted.

## Editing the list

Card entries live in the `const C = { … }` block inside `index.html`; page layout in `const PAGES` (collection) and `const DECK` (deck page).
