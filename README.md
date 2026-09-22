# Palworld Card Binder

Static binder. Open `index.html`, or enable GitHub Pages (Settings → Pages → branch `main`, folder `/`).

Two files matter:

| file | role |
| --- | --- |
| `index.html` | หน้าเว็บ (โค้ด + แคตตาล็อกการ์ด) |
| `collection.json` | **ไฟล์ save** — จำนวนที่ถืออยู่ · rarity override · เด็ค |

## อัปเดตคอลเลกชัน (ไม่ต้องแตะโค้ด)

1. เปิดเว็บ แก้จำนวน +/− ตามจริง
2. กดปุ่มเขียว **⬇ collection.json**
3. เอาไฟล์ที่ได้ push ทับ `collection.json` ในรีโพ

หน้าเว็บ `fetch('collection.json')` ตอนโหลด แล้วใช้ค่าจากไฟล์เป็นค่าตั้งต้น — คนอื่นที่เปิดดูจะเห็นค่าเดียวกับในไฟล์เสมอ (ที่เขากดแก้เองอยู่แค่เบราว์เซอร์เขา และถูกล้างทุกครั้งที่ `version` ในไฟล์เปลี่ยน).

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
