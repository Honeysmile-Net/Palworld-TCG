# Palworld Card Binder

A static site that shows a Palworld TCG collection as a binder: the cards owned, the album layout, decks, prices and news. The entry point is `index.html`. Host it with GitHub Pages (Settings → Pages → branch `main`, folder `/`), or serve the folder locally with `python3 -m http.server`. Opening `index.html` straight from disk (`file://`) can't load `collection.json`, so the saved collection won't appear.

## What's in the repo

| File | What it holds | Written by |
|---|---|---|
| `collection.json` | **The save file:** counts, rarity adjustments, decks, album layout, sale prices | You, from the binder's ⬇ button, then push to GitHub |
| `data/cards.js` | **The card list:** entries, catalog rows, counts and lots, change log, starting deck, default album | By hand, then `node tools/cards/build.js` |
| `index.html` | The app, with a copy of `data/cards.js` built in | `tools/cards/build.js` (and the app code by hand, with care) |
| `images/cards/` | Card art, one file per card (see "Card art") | You |
| `art-index.js` | List of art files, so the page doesn't have to probe each one | `node tools/art/check_art.js --write` |
| `prices.js`, `meta.js` | Prices and tournament stats | The pipelines in `tools/` ([tools/stats/README.md](tools/stats/README.md)) |
| `news.js`, `events.js`, `game-logs.js` | News, calendar events, game logs | `tools/news/` and by hand |

## Card art

Each card's art file is named by its **card code and rarity**, in a folder per set:

```text
images/cards/<SET>/<CODE>-<RARITY>.<ext>
```

```text
images/cards/BP01/BP01-028-R.png        Pengullet – Yearning for the Sky (R)
images/cards/BP01/BP01-028-SR.png       the same card, SR
images/cards/TD01/TD01-008-TSR.png      Stone Pit (TSR)
images/cards/BP01/BP01-001-SP.jpeg      an entry with ext:'jpeg'
images/cards/misc/tombat-SP.jpeg        a card with no code uses its slug
```

Rules:

- **Code:** written in upper case. If the code already ends in the rarity (`BP01-028SR`), that ending is dropped (`BP01-028-SR`).
- **Extension:** `.png` unless the entry sets `ext` (`'jpeg'`, `'jpg'`, `'webp'`). An entry with `art:` uses that path instead.
- **Case:** GitHub Pages is case sensitive (`-SR` ≠ `-sr`). macOS and Windows are not, so a wrong-case name can work locally and break only after you push.
- **Order:** the binder's order doesn't affect file names. You can insert or move cards without renaming art.
- **Changing a card's code:** this changes its file name. Run the checker afterwards.

### When a card has no local file

The page looks for art in this order:

1. the local file;
2. official art from `en.palworld-official-cardgame.com` or `palworldtcg.gg`, for codes starting with BP, TD or PR;
3. an empty pocket ("Drop art", or "ยังไม่มี" for cards you don't own).

Because of step 2, a misnamed file is easy to miss: the pocket still shows a picture. Two ways to catch it:

- **Checker:** `node tools/art/check_art.js` lists cards with no local file, files that almost match (wrong case or extension, with the fix), files no card uses, and paths missing from `art-index.js`. Add `--write` to rebuild `art-index.js`. Run it after adding or renaming art.
- **Binder:** in edit mode (any host other than `*.github.io`, or `?edit=1`), the 🖼 button marks pockets with no local file. Blue "รูปทางการ" means official art is covering it. Red "ไม่มีรูป" means the pocket is empty.

Dragging an image onto a pocket only previews it in this browser tab. Nothing is written to the repo, and it's gone after a reload. In edit mode, a box then shows the exact file name and folder that pocket needs, with a button to download the image under that name, converted to the right format. Move the file into that folder and commit it.

## Editing the card list

Most changes don't need code: counts, decks, album pages and sale prices live in `collection.json`. Edit them in the binder, download the file with ⬇, and push it.

The card definitions live in `data/cards.js`, a plain JavaScript file:

- **`const C`:** hand-written card entries. Each needs a unique `slug`, plus `code`, `rar`, `name`, `sub`, and optional `ext` or `art`.
- **`WISH_ROWS`:** the catalog of every printing, one array per row.
- **Counts:** the counts and lots.
- **`LOG`:** the change log.
- **`DECK_SLUGS`:** the starting deck.
- **`ALBUM_PAGES` / `ALBUM2_PAGES`:** the default album layout.

After editing:

```text
node tools/cards/build.js          # copy data/cards.js into index.html
node tools/art/check_art.js        # every card still finds its art?
```

Then commit both files. The page doesn't load `data/cards.js` on its own. The build copies it into the bundle in `index.html`, between two `cards-data` marker lines, so the page still works as one file.

- **Check sync:** `node tools/cards/build.js --check` says whether the two match.
- **If `index.html` was edited directly:** `node tools/cards/build.js --extract` copies the block back into `data/cards.js`.

The rest of the app is also inside `index.html`, as one JSON-encoded string in `<script type="__bundler/template">`. To change it, decode it, edit it, and encode it back with `tools/art/lib.js` (`readTemplate` / `writeTemplate`). Then open the page to check it still loads.
