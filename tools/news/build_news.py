# news_raw.json (+ extra.json from web search) -> ../../news.js ; images -> ../../news/img/
import json, os, re, sys, hashlib, datetime, urllib.request, io
H = os.path.dirname(os.path.abspath(__file__)); R = os.path.abspath(H + '/../..'); IMG = R + '/news/img'; os.makedirs(IMG, exist_ok=True)
raw = json.load(open(H + '/news_raw.json'))
extra = json.load(open(H + '/extra.json')) if os.path.exists(H + '/extra.json') else []
seen = json.load(open(H + '/seen.json')) if os.path.exists(H + '/seen.json') else {}
now = datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=7)))
stamp = now.strftime('%Y-%m-%d %H:%M'); first_run = not seen
MON = {m: i + 1 for i, m in enumerate(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])}
def iso(d):
    m = re.match(r'([A-Z][a-z]{2})[a-z]*\.? (\d{1,2}), (\d{4})', d or '')
    return f'{m.group(3)}-{MON[m.group(1)]:02d}-{int(m.group(2)):02d}' if m else (d or '')
def fetch(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'}); return urllib.request.urlopen(req, timeout=30).read()
def local_img(url, w):
    if not url: return ''
    name = hashlib.sha1(url.encode()).hexdigest()[:12] + '.webp'; path = f'{IMG}/{name}'
    if not os.path.exists(path):
        try:
            from PIL import Image
            im = Image.open(io.BytesIO(fetch(url))).convert('RGB'); im.thumbnail((w, w * 2)); im.save(path, 'WEBP', quality=82)
        except Exception as e: print('img fail', url[:80], e); return ''
    return 'news/img/' + name
def mark(key):
    if key not in seen: seen[key] = stamp
    return (not first_run) and seen[key] >= (now - datetime.timedelta(days=3)).strftime('%Y-%m-%d %H:%M')
items, ids = [], set()
for x in raw.get('official', []):
    if x['url'] in ids: continue
    ids.add(x['url']); items.append({'src': 'official', 'date': iso(x['date']), 'title': x['title'], 'cat': x.get('cat', '').title(), 'url': x['url'], 'img': local_img(x.get('img'), 480), 'isNew': mark(x['url'])})
for x in extra:
    if not x.get('url') or x['url'] in ids: continue
    ids.add(x['url']); items.append({'src': x.get('src', 'web'), 'date': x.get('date', ''), 'title': x.get('title', ''), 'text': x.get('text', ''), 'url': x['url'], 'img': '', 'isNew': mark(x['url'])})
up, uids = [], set()
for c in raw.get('upcoming', []):
    if not c.get('code') or c['code'] in uids: continue
    uids.add(c['code']); up.append({'code': c['code'], 'name': c['name'], 'set': c.get('set', ''), 'setName': c.get('setName', '').title(), 'url': c['url'], 'img': local_img(c.get('img'), 360), 'isNew': mark('card:' + c['code'])})
rv = [{'code': c['code'], 'name': c['name'], 'url': c['url']} for c in raw.get('reveals', [])][:40]
items.sort(key=lambda x: x.get('date') or '', reverse=True)
N = {'updated': stamp, 'upSets': raw.get('upSets', []), 'items': items[:80], 'upcoming': up, 'reveals': rv, 'revealHead': raw.get('revealHead', ''), 'sets': raw.get('sets', []), 'x': {'handle': 'PalworldOCG_EN'}}
open(R + '/news.js', 'w', encoding='utf-8').write('// Palworld OCG news — built by tools/news (official site, palworldtcg.gg spoilers, palify sets, web search for X posts and leaks)\nwindow.PAL_NEWS = ' + json.dumps(N, ensure_ascii=False, indent=0) + ';\n')
json.dump(seen, open(H + '/seen.json', 'w'), ensure_ascii=False, indent=0)
print('news.js', len(items), 'items', len(up), 'upcoming', len(rv), 'reveals')
