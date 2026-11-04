# usage: python3 -I build_prices.py "2026-10-30 22:45" <prev_all_tcg.json>   (อ่าน all_tcg.json ในโฟลเดอร์นี้ → เขียน ../../prices.js)
import json, re, subprocess, sys
import os
S = os.path.dirname(os.path.abspath(__file__)) + '/'
PJ = os.path.abspath(S + '../../prices.js')
stamp = sys.argv[1]
src = open(PJ, encoding='utf-8').read()
P = json.loads(subprocess.run(['node', '-e', "global.window={};require('%s');console.log(JSON.stringify(window.PAL_PRICES))" % PJ], capture_output=True, text=True).stdout)
a = json.load(open(S + 'all_tcg.json'))
m = {re.sub(r'^E', '', x['num'].strip()): x for x in a if x['num'] and '2nd Edition' not in x['name']}
newp, low, d, ch = {}, [], {}, []
for k in m:
    if k not in P['p'] and re.match(r'^(BP|TD|SS|PR|SOUL)\d*-\d{3}[A-Z]*$', k) and (m[k]['market'] is not None or m[k]['low'] is not None):
        P['p'][k] = m[k]['market'] if m[k]['market'] is not None else m[k]['low']; print('new key', k)
for k, old in P['p'].items():
    x = m.get(k)
    if not x:
        newp[k] = old
        if k in P['low']: low.append(k)
        continue
    v = x['market'] if x['market'] is not None else x['low']
    odd = x['market'] is not None and x['low'] and x['market'] < 0.5 * x['low']  # market จากการขายผิดปกติ ต่ำกว่าราคาตั้งขายต่ำสุดเกินครึ่ง → ใช้ราคาตั้งขาย
    if odd: v = x['low']
    if v is None: v = old
    newp[k] = round(v, 2)
    if x['market'] is None or (x['listings'] or 0) < 3 or odd: low.append(k)
    d[k] = [x['market'], x['low'], int(x['listings'] or 0), x['id']]
    if old and abs(v - old) / old >= 0.15 and abs(v - old) >= 1: ch.append((k, old, v, x['name']))
items = list(newp.items())
lines = ['    ' + ','.join(f"'{k}':{v}" for k, v in items[i:i+8]) + ',' for i in range(0, len(items), 8)]
lines[-1] = lines[-1].rstrip(',')
s = re.sub(r"  p: \{\n.*?\n  \},\n", lambda _: '  p: {\n' + '\n'.join(lines) + '\n  },\n', src, count=1, flags=re.S)
s = re.sub(r"  low: \[.*?\]\n", lambda _: "  low: [" + ','.join(f"'{k}'" for k in low) + "]\n", s, count=1, flags=re.S)
s = re.sub(r"updated: '[^']*',", f"updated: '{stamp}',", s, count=1)
s = re.sub(r"source: 'TCGplayer market price \(ทุกชุด · [^)]*\)'", f"source: 'TCGplayer market price (ทุกชุด · {stamp})'", s, count=1)
s = re.sub(r"^// [0-9-]+( [0-9:]+)?: ทุกชุด", f"// {stamp}: ทุกชุด", s, count=1, flags=re.M)
s = re.sub(r"window\.PAL_PRICES\.d = \{.*?\};", lambda _: 'window.PAL_PRICES.d = ' + json.dumps(d, separators=(',', ':')) + ';', s, flags=re.S)
open(PJ, 'w', encoding='utf-8').write(s)
print('keys', len(newp), 'low', len(low), 'changed', len(ch), 'up', sum(1 for c in ch if c[2] > c[1]))
for k, o, n, nm in sorted(ch, key=lambda t: -abs(t[2] - t[1]))[:20]: print(f"  {k:14s} ${o:>8.2f} -> ${n:>8.2f} ({(n-o)/o:+.0%}) {nm[:42]}")
import statistics as st
for lab, L in (('prev', json.load(open(sys.argv[2]))), ('now', a)):
    r = {}
    for x in L:
        if x['set'].startswith('BP02') and x['rar'] and '2nd' not in x['name']:
            v = x['market'] if x['market'] is not None else x['low']
            if v: r.setdefault(x['rar'], []).append(v)
    print(lab, {k.split()[0][:5] + (k.split()[1][:3] if len(k.split()) > 1 else ''): round(st.mean(v), 2) for k, v in r.items() if k in ('Double Rare', 'Super Rare', 'Over Super Rare', 'Super Parallel', 'Super Special Parallel')},
          [(x['name'][15:], x['market']) for x in L if x['set'].startswith('BP02') and x['rar'] in (None, 'None')])

# ── ประวัติราคา: เพิ่มจุดของรอบนี้ต่อท้าย แล้วฝังลง prices.js เป็น window.PAL_PRICES.h ──
HP = S + 'price_hist.json'
try: H = json.load(open(HP))
except Exception: H = {'t': [], 'p': {}, 'l': {}}
if not H['t'] or H['t'][-1] != stamp:
    i = len(H['t']); H['t'].append(stamp)
    for k, v in newp.items(): H['p'].setdefault(k, [None] * i).append(v)
    for k, v in d.items(): H['l'].setdefault(k, [None] * i).append(v[1])
    for D in (H['p'], H['l']):
        for k in D:
            while len(D[k]) < i + 1: D[k].append(None)
    json.dump(H, open(HP, 'w'), separators=(',', ':'))
s = open(PJ, encoding='utf-8').read()
s = re.sub(r"\n// h = ประวัติราคา.*?\nwindow\.PAL_PRICES\.h = \{.*?\};\n", "\n", s, flags=re.S)
s = s.rstrip('\n') + "\n// h = ประวัติราคา TCGplayer: t = เวลาที่อัปเดต, p = ราคาที่ใช้ ($), l = ราคาตั้งขายต่ำสุด ($)\nwindow.PAL_PRICES.h = " + json.dumps(H, separators=(',', ':')) + ";\n"
open(PJ, 'w', encoding='utf-8').write(s)
print('history points', len(H['t']))
