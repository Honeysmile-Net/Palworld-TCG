# เพิ่มข้อมูล palworldtcg.gg (ptg_meta.json) เข้า meta.js เป็น PAL_META.ptg
# ใช้: python3 -I build_ptg.py <ptg_meta.json> <meta.js>
import json, re, sys

src, mjs = sys.argv[1:3]
codes = {re.sub(r'[^a-z0-9]', '', c.lower()): c for c in json.load(open('codes.json'))}
def code_of(s):
    m = re.match(r'([a-z]+\d*)-(\d{3})', s)
    if not m: return s.upper()
    k = m.group(1) + m.group(2)
    if k not in codes and ('e' + k) in codes: k = 'e' + k
    return codes.get(k, (m.group(1) + '-' + m.group(2)).upper())
d = json.load(open(src))
CL = r'(?:Red|Blue|Green|Purple|Colorless)'
archs = []
for a in d['rows']:
    t = a['text']
    m = re.match(r'^(\d+) (.+?) (' + CL + r'(?: / ' + CL + r')?) ([\d.]+)%', t)
    tail = re.search(r'([\d.]+)% (?:[▲▼→·]+ ?[\d.]* ?)?([\d,]+) (1ST|2ND) ([+-]\d+)(?: (\$\d+|—))?$', t)
    raw = re.search(r'raw ([\d.]+)%', t)
    if not m or not tail: print('skip', t); continue
    archs.append({'rank': int(m.group(1)), 'name': m.group(2), 'colors': m.group(3), 'wr': float(m.group(4)), 'raw': float(raw.group(1)) if raw else None,
                  'play': float(tail.group(1)), 'games': int(tail.group(2).replace(',', '')), 'turn': tail.group(3), 'turnd': tail.group(4),
                  'price': tail.group(5) if tail.group(5) and tail.group(5) != '—' else '', 'tier': a.get('tier', ''), 'first': a.get('first', ''),
                  'slug': a['slug'], 'list': [[code_of(s), n] for s, n in a['list']], 'usage': [[code_of(s), w, dl] for s, w, dl in a['usage']]})
mx = d.get('matrix') or []
labels = [int(re.match(r'(\d+)', r[0]).group(1)) for r in mx[1:] if re.match(r'(\d+)', r[0] or '')]
cells = [[(int(c.rstrip('%')) if re.match(r'^\d+%$', c) else None) for c in r[1:]] for r in mx[1:]]
ptg = {'updated': d['updated'], 'games': sum(a['games'] for a in archs), 'archs': archs, 'matrix': {'ranks': labels, 'cells': cells}}
s = open(mjs, encoding='utf-8').read()
# เก็บรอบก่อนไว้เทียบ (เมื่อ palworldtcg.gg อัปเดตวันใหม่)
def akey(colors):
    cs = sorted(colors.split(' / ')); return 'Mono-' + cs[0] if len(cs) == 1 else '/'.join(cs)
def arch_sum(archs):
    out = {}
    for a in archs:
        w = round(a['games'] * a['wr'] / 100); x = out.setdefault(akey(a['colors']), [0, 0, 0]); x[0] += 1; x[1] += w; x[2] += a['games'] - w
    return out
m = re.search(r'\nwindow\.PAL_META\.ptg = (.*);\n', s)
if m:
    old_ptg = json.loads(m.group(1))
    if old_ptg.get('updated') != ptg['updated']:
        ptg['prev'] = {'updated': old_ptg.get('updated'), 'arch': arch_sum(old_ptg.get('archs', []))}
    elif old_ptg.get('prev'):
        ptg['prev'] = old_ptg['prev']
s = re.sub(r'\nwindow\.PAL_META\.ptg = .*;\n', '\n', s)
s += 'window.PAL_META.ptg = ' + json.dumps(ptg, ensure_ascii=False, separators=(',', ':')) + ';\n'
open(mjs, 'w', encoding='utf-8').write(s)
print('archs', len(archs), 'matrix', len(labels), 'games', ptg['games'])
