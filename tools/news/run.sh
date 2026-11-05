#!/bin/bash
# อัปเดตข่าวแท็บ NEWS: เว็บ official + palworldtcg.gg spoilers/upcoming sets + palify sets -> ../../news.js (+ news/img)
# extra.json = ข่าวจาก X / ข่าวหลุด ที่ได้จากการค้นเว็บ (scheduled task เติมให้) — ไม่บังคับ
set -u
cd "$(dirname "$0")"
timeout 600 node fetch_news.js > fetch.log 2>&1; tail -1 fetch.log
OK=$(python3 -I -c "
import json
try: d=json.load(open('news_raw.json')); print(1 if len(d.get('official',[]))>=5 else 0)
except Exception: print(0)")
if [ "$OK" = 1 ]; then python3 -I build_news.py; echo "RESULT news=1"; else echo "RESULT news=0 (ดึงข่าวไม่ได้ — ใช้ news.js เดิม)"; fi
