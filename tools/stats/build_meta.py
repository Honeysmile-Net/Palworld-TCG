# สร้าง meta.js สำหรับแท็บ STATS จากผลสแกน Palify
# ใช้: python3 -I build_meta.py <decks_new.json> <decks_prev.json> <ids_dated.json> <stamp> <prev_stamp> <out meta.js>
import json, re, sys, datetime
cur, prev, dated, stamp, pstamp, out = sys.argv[1:7]
codes = {re.sub(r'[^a-z0-9]', '', c.lower()): c for c in json.load(open('codes.json'))}
D = [x for x in json.load(open(cur)) if x.get('bp2', 0) > 0 and x.get('total', 0) >= 40]
P = {x['id']: x for x in json.load(open(prev))}
old3 = {}
DT = {}
for h, d in json.load(open(dated)):
    if d: DT.setdefault(h.split('/')[-1], d)
def code_of(s):
    m = re.match(r'([a-z]+\d*)-(\d{3})', s)
    if not m: return s.upper()
    k = m.group(1) + m.group(2)
    if k not in codes and ('e' + k) in codes: k = 'e' + k
    return codes.get(k, (m.group(1) + '-' + m.group(2)).upper())
def code_known(s):
    m = re.match(r'([a-z]+\d*)-(\d{3})', s)
    return bool(m) and ((m.group(1) + m.group(2)) in codes or ('e' + m.group(1) + m.group(2)) in codes)
def label(s):
    parts = s.split('-')[2:] if re.match(r'[a-z]+\d*-\d{3}-', s) else s.split('-')
    return ' '.join(p.capitalize() for p in parts)
g = lambda x: x['w'] + x['l']
decks = []
for x in D:
    for src in (P, old3):
        y = src.get(x['id'])
        if y:
            for f in ('arch', 'by'):
                if not x.get(f) and y.get(f): x[f] = y[f]
    p = P.get(x['id'])
    decks.append({'id': x['id'], 'name': x.get('name', ''), 'by': x.get('by', ''), 'arch': x.get('arch', ''), 'w': x['w'], 'l': x['l'], 'bp2': x['bp2'],
                  'date': DT.get(x['id'], ''), 'isNew': p is None, 'dg': (g(x) - g(p)) if p and g(x) > g(p) else 0,
                  'cards': [([code_of(s), n] if code_known(s) else [code_of(s), n, label(s)]) for s, n in x['cards']]})
pa = {}
for y in P.values():
    a = pa.setdefault(y.get('arch') or '?', [0, 0, 0]); a[0] += 1; a[1] += y['w']; a[2] += y['l']
meta = {'updated': stamp, 'prevUpdated': pstamp, 'prevGames': sum(g(y) for y in P.values()), 'prevArch': pa, 'decks': decks}
open(out, 'w', encoding='utf-8').write('// สถิติเด็คจาก Palify (palify.org/decks) · สร้างโดย build_meta.py\nwindow.PAL_META = ' + json.dumps(meta, ensure_ascii=False, separators=(',', ':')) + ';\n')
print('decks', len(decks), 'new', sum(d['isNew'] for d in decks), 'bytes', len(open(out, 'rb').read()))
