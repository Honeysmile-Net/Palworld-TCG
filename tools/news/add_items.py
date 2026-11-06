# Merge items found by web search into extra.json.
# usage: python3 -I tools/news/add_items.py items.json   (array of {url, title, text?, date?, src?})
# - X status URLs get their post date from the status ID (snowflake), src "x"; facebook.com -> "fb"
# - dedupes by URL (normalised), keeps the newest 40, then rebuild with build_news.py
import json, os, re, sys, datetime
H = os.path.dirname(os.path.abspath(__file__)); P = H + '/extra.json'
cur = json.load(open(P)) if os.path.exists(P) else []
new = json.load(open(sys.argv[1]))
def norm(u): return re.sub(r'[?#].*$', '', (u or '').strip()).replace('twitter.com/', 'x.com/').rstrip('/')
def xdate(u):
    m = re.search(r'x\.com/[^/]+/status/(\d{15,20})', u)
    if not m: return ''
    ms = (int(m.group(1)) >> 22) + 1288834974657
    return datetime.datetime.fromtimestamp(ms / 1000, datetime.timezone(datetime.timedelta(hours=7))).strftime('%Y-%m-%d')
seen = {norm(x['url']) for x in cur}; added = 0
for x in new:
    u = norm(x.get('url'))
    if not u or u in seen: continue
    src = x.get('src') or ('x' if 'x.com/' in u else 'fb' if 'facebook.com/' in u else 'web')
    t = re.sub(r'\s*/\s*X\s*$', '', x.get('title', '')).strip()
    t = re.sub(r'^Palworld OFFICIAL CARD GAME on X:\s*', '', t).strip(' "“”')
    item = {'src': src, 'date': x.get('date') or xdate(u), 'title': t[:180], 'url': u, 'text': (x.get('text') or '')[:160]}
    cur.append(item); seen.add(u); added += 1
cur.sort(key=lambda x: x.get('date') or '', reverse=True)
json.dump(cur[:40], open(P, 'w'), ensure_ascii=False, indent=1)
print('added', added, 'total', len(cur[:40]))
