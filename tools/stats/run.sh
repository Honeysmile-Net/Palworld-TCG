#!/bin/bash
# อัปเดตสถิติ STATS: Palify + palworldtcg.gg → ../../meta.js
# ใช้: cd tools/stats && bash run.sh   (ต้องมี playwright + HTTPS_PROXY)
set -u
cd "$(dirname "$0")"
STAMP=$(TZ=Asia/Bangkok date '+%-d %b %Y %H:%M' | sed 's/Jan/ม.ค./;s/Feb/ก.พ./;s/Mar/มี.ค./;s/Apr/เม.ย./;s/May/พ.ค./;s/Jun/มิ.ย./;s/Jul/ก.ค./;s/Aug/ส.ค./;s/Sep/ก.ย./;s/Oct/ต.ค./;s/Nov/พ.ย./;s/Dec/ธ.ค./')
PREV=$(cat stamp.txt)
echo "== Palify list"; MORE=16 timeout 500 node palify_list.js || echo "list failed (ใช้รายการเดิม)"
python3 -I make_ids.py
echo "== Palify decks"; rm -f decks_new.json; timeout 3000 node palify_scrape.js > palify_scrape.log 2>&1; tail -1 palify_scrape.log
OK_P=$(python3 -I -c "
import json,os
if not os.path.exists('decks_new.json'): print(0); raise SystemExit
n=[x for x in json.load(open('decks_new.json')) if x.get('bp2',0)>0]; o=json.load(open('decks.json'))
print(1 if len(n) >= 0.8*len(o) else 0)
if len(n) >= 0.8*len(o): json.dump(n, open('decks_new.json','w'))")
echo "== palworldtcg.gg"; rm -f ptg_meta_new.json; timeout 900 node ptg_scrape.js > ptg_scrape.log 2>&1; tail -1 ptg_scrape.log
OK_T=$(python3 -I -c "
import json,os
print(1 if os.path.exists('ptg_meta_new.json') and len(json.load(open('ptg_meta_new.json'))['rows'])>=10 else 0)")
[ "$OK_T" = 1 ] && mv ptg_meta_new.json ptg_meta.json
if [ "$OK_P" = 1 ]; then
  python3 -I build_meta.py decks_new.json decks.json ids_dated.json "$STAMP" "$PREV" ../../meta.js && mv decks_new.json decks.json && echo "$STAMP" > stamp.txt
else
  echo "Palify ไม่ครบ — ใช้ข้อมูล Palify เดิมใน meta.js"
fi
python3 -I build_ptg.py ptg_meta.json ../../meta.js
echo "RESULT palify=$OK_P ptg=$OK_T stamp=$STAMP"
