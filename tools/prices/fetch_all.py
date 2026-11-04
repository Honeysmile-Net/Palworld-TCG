import json,subprocess,sys
def q(filters,frm=0,size=50):
    body={"algorithm":"sales_dismax","from":frm,"size":size,"filters":{"term":filters,"range":{},"match":{}},"listingSearch":{"filters":{"term":{},"range":{},"exclude":{"channelExclusion":0}},"context":{"cart":{}}},"context":{"cart":{},"shippingCountry":"US"},"settings":{"useFuzzySearch":False,"didYouMean":{}},"sort":{}}
    out=subprocess.run(['curl','-sS','-X','POST','https://mp-search-api.tcgplayer.com/v1/search/request?q=&isList=false','-H','content-type: application/json','-H','origin: https://www.tcgplayer.com','-d',json.dumps(body)],capture_output=True,text=True).stdout
    return json.loads(out)['results'][0]
r=q({"productLineName":["palworld-official-card-game"]},0,1)
sets=[(a['urlValue'],a['value'],a['count']) for a in r['aggregations']['setName']]
print(sets)
allr=[]
for uv,name,cnt in sets:
    for frm in range(0,int(cnt)+50,50):
        res=q({"productLineName":["palworld-official-card-game"],"setName":[uv]},frm,50)['results']
        for x in res: x['_set']=name
        allr+=res
        if len(res)<50: break
rows=[{'set':x['_set'],'id':int(x['productId']),'name':x['productName'],'num':(x.get('customAttributes') or {}).get('number'),'rar':x.get('rarityName'),'market':x.get('marketPrice'),'low':x.get('lowestPrice'),'listings':x.get('totalListings')} for x in allr]
json.dump(rows,open(sys.argv[1] if len(sys.argv)>1 else 'all_tcg.json','w'))
print(len(rows))
