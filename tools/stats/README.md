# tools/stats — อัปเดตแท็บ STATS อัตโนมัติ

ดึงสถิติเด็คจาก **Palify** (palify.org/decks) และ meta จาก **palworldtcg.gg** แล้วเขียนลง `meta.js` ที่ราก repo

```
cd tools/stats && bash run.sh
```

- `palify_list.js` → รายการเด็คล่าสุด (`ids_dated_new.json`)
- `make_ids.py` → รวมวันที่ + สร้าง `ids_fetch.txt` (เด็คใหม่ + เด็คเดิมทั้งหมด)
- `palify_scrape.js` → ผล W-L และการ์ดในเด็ค (`decks_new.json`)
- `ptg_scrape.js` → tier list, decklist ตัวแทน, matchup ของ palworldtcg.gg (`ptg_meta_new.json`)
- `build_meta.py` / `build_ptg.py` → `../../meta.js`
- `decks.json` = snapshot รอบก่อน (ใช้เทียบ "เด็คใหม่ / เกมเพิ่ม") · `stamp.txt` = เวลาอัปเดตรอบก่อน
- ถ้า Palify ดึงได้ไม่ถึง 80% ของรอบก่อน จะไม่เขียนทับข้อมูล Palify เดิม
- `codes.json` = รหัสการ์ดทั้งหมดใน binder (สร้างใหม่เมื่อเพิ่มการ์ดชุดใหม่)
