#!/bin/bash
# อัปเดตราคา TCGplayer → ../../prices.js (หน้าเว็บโหลด prices.js สดทุกครั้งที่เปิด)
set -u
cd "$(dirname "$0")"
STAMP=$(TZ=Asia/Bangkok date '+%Y-%m-%d %H:%M')
timeout 600 python3 -I fetch_all.py all_tcg_new.json > fetch.log 2>&1; tail -1 fetch.log
OK=$(python3 -I -c "
import json,os
if not os.path.exists('all_tcg_new.json'): print(0); raise SystemExit
n=json.load(open('all_tcg_new.json')); o=json.load(open('all_tcg.json'))
print(1 if len(n)>=0.9*len(o) and sum(1 for x in n if x.get('market') is not None)>=0.5*sum(1 for x in o if x.get('market') is not None) else 0)" 2>/dev/null || echo 0)
if [ "$OK" = 1 ]; then
  mv all_tcg.json all_tcg_prev.json && mv all_tcg_new.json all_tcg.json
  python3 -I build_prices.py "$STAMP" all_tcg_prev.json | head -25
  echo "RESULT prices=1 stamp=$STAMP"
else
  rm -f all_tcg_new.json; echo "RESULT prices=0 (ดึงไม่ครบ — ใช้ราคาเดิม)"
fi
