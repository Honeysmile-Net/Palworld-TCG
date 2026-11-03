# รายการเด็คที่จะดึง: เด็คใหม่ (ลงวันที่ 3 วันล่าสุด) + เด็คเดิมทั้งหมดใน decks.json
import json, datetime
old = json.load(open('ids_dated.json')); new_d = json.load(open('ids_dated_new.json')) if __import__('os').path.exists('ids_dated_new.json') else []
seen = {}
for h, d in old + new_d:
    if d: seen[h] = d
dated = [[h, d] for h, d in seen.items()]
json.dump(dated, open('ids_dated.json', 'w'))
D = json.load(open('decks.json'))
have = {'/decks/' + d['id'] for d in D}
today = datetime.datetime.utcnow().date()
recent = {(today - datetime.timedelta(days=i)).strftime('%b %-d, %Y') for i in range(0, 4)}
new = list(dict.fromkeys(h for h, d in dated if d in recent and h not in have))
open('ids_fetch.txt', 'w').write('\n'.join(new + sorted(have)) + '\n')
print('new', len(new), 'total', len(new) + len(have))
