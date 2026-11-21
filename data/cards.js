// Binder card data. Edit here, then run: node tools/cards/build.js (copies this file into index.html).
// C = hand-written entries (slug, code, rar, name, sub, ext…) · WISH_ROWS = catalog rows
// [code, name, sub, cost, tone, rar, dir, badge, ext, artFrom, remark, {code,file}] · DECK_SLUGS = starting deck
// ALBUM_PAGES / ALBUM2_PAGES = default album layout (12 slugs per page; collection.json overrides once saved).
// Art file names come from code + rarity (see README), so the order of rows doesn't matter for images.
const TONE = {
  blue:   { edge:'#4fb3e8', bg:'linear-gradient(165deg,#d9f0ff,#a9dcf7)',  gem:'color:#fff;background:linear-gradient(180deg,#5cc0f0,#2a8fce);border:2px solid #fff' },
  purple: { edge:'#a67ce8', bg:'linear-gradient(165deg,#ece2ff,#cdb6f7)',  gem:'color:#fff;background:linear-gradient(180deg,#a97ff0,#6f45cd);border:2px solid #fff' },
  gray:   { edge:'#b6c6cf', bg:'linear-gradient(165deg,#f4f8fa,#dbe6ec)',  gem:'color:#fff;background:linear-gradient(180deg,#a7b8c4,#6b7f8f);border:2px solid #fff' },
  red:    { edge:'#ef6a52', bg:'linear-gradient(165deg,#ffe1da,#ffb3a3)',  gem:'color:#fff;background:linear-gradient(180deg,#ff8163,#d8412a);border:2px solid #fff' },
  green:  { edge:'#7cc86a', bg:'linear-gradient(165deg,#e2f7d9,#bde8ac)',  gem:'color:#fff;background:linear-gradient(180deg,#8ed77a,#4f9c3d);border:2px solid #fff' },
  gold:   { edge:'#f0b23f', bg:'linear-gradient(165deg,#fff3d4,#ffdf9e 60%,#ffcf72)', gem:'color:#5a3a05;background:linear-gradient(180deg,#ffe08a,#f2b23c);border:2px solid #fff' }
};

const C = {
  pengulletR:  { no:3, slug:'pengullet-r', code:'BP01-028',  name:'Pengullet',      sub:'Yearning for the Sky', cost:4, tone:'blue', badge:'', rar:'R',   dir:'Pal/Blue' },
  pengulletSR: { no:14, slug:'pengullet-sr', code:'BP01-028SR', name:'Pengullet',   sub:'Yearning for the Sky', cost:4, tone:'gold', badge:'', rar:'SR',  dir:'Pal/Blue', foil:true },
  chilletRR:   { no:15, slug:'chillet-rr', code:'BP01-025',   name:'Chillet',        sub:'Dragon Whisperer',     cost:5, tone:'blue', badge:'LUCKY', rar:'RR',  dir:'Pal/Blue', foil:true },
  elphAqua:    { no:6, slug:'elph-aqua', code:'TD01-012',    name:'Elphidran Aqua', sub:'Gentle Ripples',       cost:6, tone:'blue', badge:'', rar:'TD', dir:'Pal/Blue' },
  cryolinx:    { no:5, slug:'cryolinx', code:'BP01-038',     name:'Cryolinx',       sub:'Arctic Ordeal',        cost:6, tone:'blue', badge:'', rar:'C',   dir:'Pal/Blue' },
  relaxaurus:  { no:28, slug:'relaxaurus', code:'BP01-026', name:'Relaxaurus',     sub:'Hungry Gunner',        cost:7, tone:'blue', badge:'', rar:'RR',  dir:'Pal/Blue', ext:'png', foil:true },
  jormuntideR: { no:16, slug:'jorm-r', code:'BP01-027', name:'Jormuntide',     sub:'Surging Sea Serpent',  cost:8, tone:'blue', badge:'LUCKY', rar:'R',   dir:'Pal/Blue', foil:true },
  jormuntideOsr:{no:17, slug:'jorm-osr', code:'BP01-027OSR', name:'Jormuntide', sub:'Surging Sea Serpent',  cost:8, tone:'gold', badge:'LUCKY', rar:'OSR', dir:'Pal/Blue', foil:true },
  jormIgnisSP:{ no:23, slug:'jorm-ignis-sp', code:'BP01-001SP', name:'Jormuntide Ignis', sub:'Savage Lava Dragon', cost:8, tone:'gold', badge:'LUCKY', rar:'SP', dir:'Pal/Red', ext:'jpeg', foil:true },
  elphidran:  { no:24, slug:'elphidran', code:'BP01-098', name:'Elphidran',      sub:'Gentle Radiance',           cost:4, tone:'gray',   badge:'',         rar:'U',  dir:'Pal/Colorless' },
  leezpunk:   { no:1, slug:'leezpunk', code:'TD02-014',   name:'Leezpunk',       sub:'Treasure Bandit',           cost:3, tone:'purple', badge:'',         rar:'TD', dir:'Pal/Purple' },
  daedream:   { no:18, slug:'daedream', code:'BP01-082',  name:'Daedream',       sub:'Deep Slumber', cost:3, tone:'purple', badge:'',         rar:'U',  dir:'Pal/Purple' },
  daedreamF:  { no:31, slug:'daedream-first', code:'BP01-080', name:'Daedream',   sub:'First Slumber',             cost:2, tone:'purple', badge:'',         rar:'C',  dir:'Pal/Purple' },
  depresso:   { no:32, slug:'depresso', code:'BP01-079',  name:'Depresso',       sub:'Late Night Hustler', cost:2, tone:'purple', badge:'',         rar:'U',  dir:'Pal/Purple' },
  menasting:  { no:7, slug:'menasting', code:'BP01-084',  name:'Menasting',      sub:'Darkness-Dwelling Scorpion',cost:5, tone:'purple', badge:'LUCKY',    rar:'U',  dir:'Pal/Purple' },
  tombat:     { no:19, slug:'tombat',     name:'Tombat',         sub:'Out of Nowhere!?',          cost:5, tone:'gold',   badge:'SP', foil:true, rar:'SP', dir:'Pal/Purple', ext:'jpeg', file:'Tombat Out of Nowhere' },
  maraith:    { no:20, slug:'maraith', code:'BP01-085',   name:'Maraith',        sub:'Twilight Messenger',        cost:6, tone:'purple', badge:'',         rar:'U',  dir:'Pal/Purple' },
  blazehowl:  { no:8, slug:'blazehowl', code:'TD02-017',  name:'Blazehowl Noct', sub:'Darkflame Defender',        cost:6, tone:'purple', badge:'',         rar:'TD', dir:'Pal/Purple' },
  katress:    { no:21, slug:'katress', code:'BP01-075',   name:'Katress',        sub:'Abyssal Sorcerer',          cost:6, tone:'purple', badge:'LUCKY', foil:false, rar:'R', dir:'Pal/Purple' },
  pyrin:      { no:9, slug:'pyrin', code:'BP01-077',      name:'Pyrin Noct',     sub:'Steed of Azure Flames',     cost:7, tone:'purple', badge:'', foil:true, rar:'R',  dir:'Pal/Purple' },
  shadowbeak: { no:10, slug:'shadowbeak', code:'BP01-074', name:'Shadowbeak',     sub:'Seed of Despair',           cost:8, tone:'purple', badge:'LUCKY', foil:true, rar:'RR', dir:'Pal/Purple' },
  lyleen:     { no:22, slug:'lyleen', code:'BP01-078', name:'Lyleen Noct',    sub:'Providence of the Goddess', cost:8, tone:'purple', badge:'', foil:false, rar:'R', dir:'Pal/Purple' },
  zoeRr:      { no:12, slug:'zoe-rr', code:'BP01-095',     name:"Zoe's Strategy", sub:'Event',                     cost:3, tone:'purple', badge:'',         rar:'RR', dir:'Event/Purple', file:"Zoe's Strategy" },
  blackMkt:   { no:26, slug:'black-mkt', code:'BP01-097',  name:'Black Marketeer', sub:'Event',                    cost:5, tone:'purple', badge:'',         rar:'C',  dir:'Event/Purple', file:'Black Marketeer' },
  aurora:     { no:25, slug:'aurora', code:'BP01-048',   name:'Aurora Guide',   sub:'Event',                     cost:2, tone:'blue',   badge:'QUICK',    rar:'C',  dir:'Event/Blue', file:'Aurora Guide' },
  strike:     { no:11, slug:'strike', code:'TD02-021',     name:'Strike from the Darkness', sub:'Event',           cost:4, tone:'purple', badge:'',         rar:'C',  dir:'Event/Purple', file:'Strike from the Darkness' },
  sphere:     { no:27, slug:'sphere', code:'BP01-047',   name:'Pal Sphere',     sub:'Event',                     cost:4, tone:'blue',   badge:'',         rar:'U',  dir:'Event/Blue', file:'Pal Sphere' },
  astegon:    { no:34, slug:'astegon', code:'TD02-012',   name:'Astegon',        sub:'Aegis Wyvern of Death', cost:8, tone:'purple', badge:'LUCKY',    rar:'TD', dir:'Pal/Purple' },
  medical:    { no:35, slug:'medical', code:'TD02-022',   name:'Medical Supplies', sub:'Event',                   cost:7, tone:'purple', badge:'',         rar:'TD', dir:'Event/Purple', file:'Medical Supplies' },
  necklace:   { no:33, slug:'necklace', code:'BP01-094',  name:"Daedream's Necklace", sub:'Gear',              cost:3, tone:'purple', badge:'',         rar:'C',  dir:'Gear/Purple', file:"Daedream's Necklace" },
  rocket:     { no:4, slug:'rocket', code:'BP01-044',     name:'Pengullet Rocket Launcher', sub:'Gear',           cost:4, tone:'blue',   badge:'', foil:true, rar:'R',  dir:'Gear/Blue', file:'Pengullet Rocket Launcher' },
  flyer:      { no:2, slug:'flyer', code:'TD01-014',      name:'Pengullet',      sub:'Frequent Flyer',            cost:3, tone:'blue',   badge:'',         rar:'TD', dir:'Pal/Blue' },
  penking:    { no:29, slug:'penking', code:'BP01-031',  name:'Penking',        sub:'Mighty Warrior of the Deep', cost:5, tone:'blue',   badge:'',         rar:'U',  dir:'Pal/Blue' },
  shoddyBed:  { no:30, slug:'shoddy-bed', code:'BP01-089', name:'Shoddy Bed',     sub:'Structure',                 cost:2, tone:'purple', badge:'',         rar:'U',  dir:'Structure/Purple', file:'Shoddy Bed' },
  bench:      { no:13, slug:'bench', code:'BP01-090',      name:'Medieval Medicine Workbench', sub:'Structure',  cost:4, tone:'purple', badge:'',         rar:'U',  dir:'Structure/Purple', file:'Medieval Medicine Workbench' }
};

// การ์ด BP01 ที่ยังขาด (ต่อ 4 ใบ) — แท็บ WISHLIST
const WISHLIST = [
  { title:'ขาด 1 ใบ', items:[
    { no:'BP01-001', name:'Jormuntide Ignis – Savage Lava Dragon', need:1, price:250 },
    { no:'BP01-050', name:'Digtoise – Seismic Drillback', need:1, price:180 } ] },
  { title:'ขาด 2 ใบ', items:[
    { no:'BP01-002', name:'Suzaku – Hellfire Wings', need:2, price:200 },
    { no:'BP01-023', name:"Axel's Strategy", need:2, price:140, trade:2 } ] },
  { title:'ขาด 3 ใบ', items:[
    { no:'BP01-046', name:"Victor's Strategy", need:3, price:220, trade:2 },
    { no:'BP01-073', name:'Helzephyr – Wings of the Moonless Night', need:3, price:130, trade:3 } ] }
];

const PAGES = [
  { tab:'ALL',    label:'ALL',       sub:'', items:[] },
  { tab:'BLUE',   label:'BLUE',      sub:'', items:[[C.flyer,4],[C.pengulletR,3],[C.pengulletSR,1],[C.chilletRR,4],[C.penking,2],[C.elphAqua,4],[C.cryolinx,5],[C.relaxaurus,4],[C.jormuntideR,3],[C.jormuntideOsr,1],[C.aurora,4],[C.sphere,3],[C.rocket,4]] },
  { tab:'PURPLE', label:'PURPLE',    sub:'', items:[[C.leezpunk,4],[C.daedreamF,4],[C.depresso,3],[C.daedream,5],[C.menasting,5],[C.maraith,4],[C.blazehowl,4],[C.katress,1],[C.pyrin,5],[C.shadowbeak,4],[C.astegon,1],[C.lyleen,3],[C.zoeRr,4],[C.blackMkt,2],[C.strike,4],[C.medical,1],[C.necklace,4],[C.shoddyBed,2],[C.bench,4]] },
  { tab:'RED',    label:'RED',       sub:'', items:[] },
  { tab:'GREEN',  label:'GREEN',     sub:'', items:[] },
  { tab:'COLORLESS', short:'CLR', label:'COLORLESS', sub:'', items:[[C.elphidran,1]] },
  { tab:'BP02-ALL', label:'ALL', sub:'', items:[] },
  { tab:'BP02-BLUE', label:'BLUE', sub:'', items:[] },
  { tab:'BP02-PURPLE', label:'PURPLE', sub:'', items:[] },
  { tab:'BP02-RED', label:'RED', sub:'', items:[] },
  { tab:'BP02-GREEN', label:'GREEN', sub:'', items:[] },
  { tab:'BP02-COLORLESS', short:'CLR', label:'COLORLESS', sub:'', items:[] },
  { tab:'BP03-ALL', label:'ALL', sub:'', items:[] },
  { tab:'BP03-BLUE', label:'BLUE', sub:'', items:[] },
  { tab:'BP03-PURPLE', label:'PURPLE', sub:'', items:[] },
  { tab:'BP03-RED', label:'RED', sub:'', items:[] },
  { tab:'BP03-GREEN', label:'GREEN', sub:'', items:[] },
  { tab:'BP03-COLORLESS', short:'CLR', label:'COLORLESS', sub:'', items:[] },
  { tab:'SOUL',   label:'SOUL',      sub:'', items:[] }
];

const LOT_0922 = {"w-bp01-099":1,"w-td02-023":3,"w-bp01-100":1,"w-td02-024":4,"elphidran":1,"w-bp01-011":1,"w-bp01-021":2,"w-bp01-006":2,"w-bp01-009":2,"w-bp01-012":1,"w-bp01-007":2,"w-bp01-017":1,"w-bp01-016":1,"w-bp01-010":1,"w-bp01-013":1,"w-bp01-018":1,"w-bp01-024":1,"w-bp01-014":1,"w-bp01-008":1,"w-bp01-034":3,"w-bp01-033":2,"w-bp01-032":1,"cryolinx":1,"w-bp01-036":3,"w-bp01-035":1,"penking":2,"aurora":2,"w-bp01-043":1,"sphere":2,"w-bp01-042":2,"w-bp01-041":2,"w-bp01-071":1,"w-bp01-067":1,"w-bp01-056":1,"w-bp01-057":1,"w-bp01-058":1,"w-bp01-065":1,"w-bp01-068":1,"w-bp01-069":1,"w-bp01-062":1,"w-bp01-055":2,"w-td02-001":5,"w-td02-003":4,"w-td02-002":4,"w-td02-004":5,"w-td02-005":6,"w-td02-009":3,"w-td02-011":4,"w-td02-006":4,"w-td02-010":4,"w-td02-007":4,"w-td02-008":3,"w-bp01-061":2,"w-bp01-060":1,"menasting":1,"w-bp01-081":2,"w-td02-016":2,"black-mkt":1,"w-bp01-087":2,"w-td02-020":4,"w-bp01-091":1,"depresso":2,"w-td02-018":4,"maraith":1,"w-bp01-083":1,"w-bp01-092":3,"daedream":1,"w-td02-019":4,"bench":2};
// ตราประทับ "ส่วนต่างถูกบันทึกลงไฟล์แล้ว" — bump ทุกครั้งที่เขียน diff จากเครื่องลงไฟล์
// ถ้าไม่ตรงกับที่เบราว์เซอร์จำไว้ = ไฟล์ใหม่กว่า → ล้างส่วนต่างในเครื่อง ไม่งั้นจะนับซ้ำสองเท่า
const ADJ_BAKED_AT = '2026-09-22c';
try {
  if (localStorage.getItem('palbinder.stockAdjBakedAt') !== ADJ_BAKED_AT) {
    localStorage.setItem('palbinder.stockAdj', '{}');
    localStorage.setItem('palbinder.rarAdj', '{}');
    localStorage.setItem('palbinder.stockAdjBakedAt', ADJ_BAKED_AT);
  }
} catch (e) {}
const FIX_0922B = {'w-bp01-051osr':-1,'w-bp01-050osr':-1};
const FIX_0922C = {'jorm-osr':-1,'w-bp01-002':1,'w-bp01-049':-1,'w-bp01-074osr':1}; // 2026-10-12: Lyleen RR −1 (ขาย ผู้ซื้อ) · 2026-10-13: Shadowbeak OSR 1 → 2 // 2026-10-12: Suzaku RR 2 → 3
const FIX_0922 = {"w-bp01-001osr":-1,"w-bp01-095sp":-1,"w-bp01-023sp":-1,"w-bp01-046osr":-1,"w-bp01-046":1,"w-bp01-074osr":-1,"w-bp01-075osr":-1,"w-bp01-073osr":-1,"w-bp01-015sp":-1};
const LOG_LATER = [
  { date:'2026-10-13', note:'บันทึกจากเครื่อง — Shadowbeak – Seed of Despair (OSR, BP01-074OSR) 1 → 2', changes:[['w-bp01-074osr',1]] },
  { date:'2026-10-13', note:'บันทึกจากเครื่อง — Strike from the Darkness (C, TD02-021) 6 → 7', changes:[['strike',1]] },
  { date:'2026-10-12', note:'ขายให้ ผู้ซื้อ ฿250 — ตัดออกจาก stock 1 ใบ — Lyleen – Blessing of the Goddess (RR, BP01-049) ×1', changes:[['w-bp01-049',-1]] },
  { date:'2026-10-12', note:'บันทึกจากเครื่อง — Suzaku – Hellfire Wings (RR, BP01-002) 2 → 3', changes:[['w-bp01-002',1]] },
  { date:'2026-10-09', note:'แลก Zoe\'s Strategy RR ×2 → OSR ×1 (อัปเดต stock แล้ว) — Zoe\'s Strategy (RR, BP01-095) 4 → 2 · Zoe\'s Strategy (OSR, BP01-095OSR) 2 → 3', changes:[['zoe-rr',-2],['w-bp01-095osr',1]] },
  { date:'2026-10-08', note:'แก้ระดับ Lamball – My First Pal — TD (TD01-023) 2 → 6 · PR (EPR-001) 6 → 0 · TSR (TD01-023TSR) 2 → 0', changes:[['w-td01-023',4],['w-epr-001',-6],['w-td01-023tsr',-2]] },
  { date:'2026-10-08', note:'บันทึกจากเครื่อง — Zoe\'s Strategy (RR, BP01-095) 3 → 4 · Zoe\'s Strategy (OSR, BP01-095OSR) 1 → 2 · Katress – Abyssal Sorcerer (R, BP01-075) 4 → 5 · Lyleen Noct (R, BP01-078) 4 → 5 · Lamp (R, BP01-088) 3 → 4', changes:[['zoe-rr',1],['w-bp01-095osr',1],['katress',1],['lyleen',1],['w-bp01-088',1]] },
  { date:'2026-10-08', note:'บันทึกจากเครื่อง — Dark Cannon (C, BP01-096) 5 → 6 · Daedream\'s Necklace (C, BP01-094) 9 → 10 · Shoddy Bed (C, BP01-089) 6 → 8 · Wooden Wall (C, BP01-091) 5 → 6 · Medieval Medicine Workbench (C, BP01-090) 10 → 11 · Viewing Cage (C, BP01-092) 4 → 5', changes:[['w-bp01-096',1],['necklace',1],['shoddy-bed',2],['w-bp01-091',1],['bench',1],['w-bp01-092',1]] },
  { date:'2026-10-08', note:'บันทึกจากเครื่อง — Daedream – First Slumber (C, BP01-080) 9 → 10 · Depresso (U, BP01-079) 9 → 10 · Nox (C, BP01-086) 4 → 6 · Loupmoon (C, BP01-087) 6 → 7 · Vanwyrm (U, BP01-083) 4 → 5 · Lovander (C, BP01-081) 4 → 6 · Menasting (U, BP01-084) 10 → 11 · Maraith (U, BP01-085) 8 → 9', changes:[['daedream-first',1],['depresso',1],['w-bp01-086',2],['w-bp01-087',1],['w-bp01-083',1],['w-bp01-081',2],['menasting',1],['maraith',1]] },
  { date:'2026-10-08', note:'บันทึกจากเครื่อง — Gobfin Ignis – Blazing Hothead (R, BP01-003) 4 → 5 · Bushi – Ephemeral Blade (R, BP01-004) 4 → 5 · Bushi – Ephemeral Blade (SR, BP01-004SR) 0 → 1 · Pump-Action Shotgun (R, BP01-020) 6 → 7', changes:[['w-bp01-003',1],['w-bp01-004',1],['w-bp01-004sr',1],['w-bp01-020',1]] },
  { date:'2026-10-08', note:'บันทึกจากเครื่อง — Treasure Chest Found! (C, BP01-024) 4 → 5 · Makeshift Handgun (C, BP01-021) 4 → 5 · Stone Pickaxe (C, BP01-022) 4 → 5 · Flame Cauldron (U, BP01-017) 5 → 6 · Alarm Bell (C, BP01-018) 5 → 6', changes:[['w-bp01-024',1],['w-bp01-021',1],['w-bp01-022',1],['w-bp01-017',1],['w-bp01-018',1]] },
  { date:'2026-10-08', note:'บันทึกจากเครื่อง — Antique Curtain (R, BP01-039) 4 → 5 · Rooby (C, BP01-011) 4 → 5 · Flambelle (C, BP01-012) 5 → 6 · Univolt (U, BP01-009) 4 → 5 · Kitsun (U, BP01-007) 4 → 5 · Pyrin – Cinder Steed (C, BP01-013) 4 → 5 · Ragnahawk (U, BP01-010) 4 → 5 · Blazehowl – Hellflame Defender (C, BP01-014) 5 → 6', changes:[['w-bp01-039',1],['w-bp01-011',1],['w-bp01-012',1],['w-bp01-009',1],['w-bp01-007',1],['w-bp01-013',1],['w-bp01-010',1],['w-bp01-014',1]] },
  { date:'2026-10-08', note:'บันทึกจากเครื่อง — Found an Egg! (C, BP01-071) 4 → 6 · Blessing of the Flower Spirit (C, BP01-072) 4 → 5 · Digtoise\'s Headband (U, BP01-068) 5 → 6 · Ranch (U, BP01-066) 5 → 7 · Feed Box (U, BP01-065) 5 → 6 · No Pals Beyond Sign (C, BP01-067) 6 → 7', changes:[['w-bp01-071',2],['w-bp01-072',1],['w-bp01-068',1],['w-bp01-066',2],['w-bp01-065',1],['w-bp01-067',1]] },
  { date:'2026-10-08', note:'บันทึกจากเครื่อง — Tanzee – Cheerful Worker (C, BP01-060) 4 → 5 · Beegarde – Knight of the Flower Garden (C, BP01-061) 5 → 7 · Lifmunk – Promising Newbie (C, BP01-056) 4 → 5 · Dumud – Mellow Bounty (U, BP01-057) 5 → 6 · Gumoss – Curious Sprout (U, BP01-058) 4 → 5 · Digtoise – Keen Needleback (U, BP01-059) 5 → 7', changes:[['w-bp01-060',1],['w-bp01-061',2],['w-bp01-056',1],['w-bp01-057',1],['w-bp01-058',1],['w-bp01-059',2]] },
  { date:'2026-10-08', note:'บันทึกจากเครื่อง — Lifmunk – Promising Newbie (SR, BP01-056SR) 0 → 1 · Petallia – Sweet Blessings (R, BP01-051) 4 → 5 · Lyleen – Blessing of the Goddess (RR, BP01-049) 3 → 4 · Warsect – Iron Fortress (R, BP01-054) 4 → 5 · Cola Vending Machine (R, BP01-064) 4 → 5', changes:[['w-bp01-056sr',1],['w-bp01-051',1],['w-bp01-049',1],['w-bp01-054',1],['w-bp01-064',1]] },
  { date:'2026-10-08', note:'บันทึกจากเครื่อง — Chillet – Dragon Whisperer (RR, BP01-025) 4 → 5 · Azurobe – Water Dragon Waltz (R, BP01-029) 2 → 3 · Pengullet – Yearning for the Sky (R, BP01-028) 6 → 7', changes:[['chillet-rr',1],['w-bp01-029',1],['pengullet-r',1]] },
  { date:'2026-10-08', note:'บันทึกจากเครื่อง — Aurora Guide (C, BP01-048) 9 → 10 · Pal Sphere (U, BP01-047) 7 → 8 · Grappling Gun (U, BP01-045) 4 → 6 · Antique Mirror (C, BP01-042) 4 → 5 · Sphere Workbench (C, BP01-043) 5 → 7 · Antique Dresser (U, BP01-040) 5 → 7 · Hot Spring (U, BP01-041) 6 → 7', changes:[['aurora',1],['sphere',1],['w-bp01-045',2],['w-bp01-042',1],['w-bp01-043',2],['w-bp01-040',2],['w-bp01-041',1]] },
  { date:'2026-10-08', note:'บันทึกจากเครื่อง — Mau Cryst (C, BP01-035) 4 → 5 · Teafant (C, BP01-034) 7 → 8 · Fuack (U, BP01-032) 3 → 4 · Celaray (C, BP01-036) 7 → 8 · Surfent (C, BP01-037) 4 → 5 · Penking (U, BP01-031) 7 → 8 · Cryolinx (C, BP01-038) 10 → 11', changes:[['w-bp01-035',1],['w-bp01-034',1],['w-bp01-032',1],['w-bp01-036',1],['w-bp01-037',1],['penking',1],['cryolinx',1]] },
  { date:'2026-10-08', note:'บันทึกจากเครื่อง — Direhowl – Proud Fang (C, BP01-099) +1 (4 → 5) · The Adventure Begins (U, BP01-100) +1 (5 → 6) · Elphidran – Gentle Radiance (C, BP01-098) +1 (9 → 10)', changes:[['w-bp01-099',1],['w-bp01-100',1],['elphidran',1]] },
  { date:'2026-10-08', note:'บันทึกจากเครื่อง — Jormuntide Ignis – Savage Lava Dragon (RR, BP01-001) +1 (1 → 2)', changes:[['w-bp01-001',1]] },
  { date:'2026-10-08', note:'แยกออกไปแลกกับเพื่อน (ออกจาก stock + album) — Relaxaurus ×3 (7 → 4) · Leezpunk ×2 (10 → 8) · Blazehowl Noct ×2 (10 → 8) · Strike from the Darkness ×4 (10 → 6) · Medical Supplies ×2 (7 → 5) — แลกกับ Axel\'s Strategy ×2 · Victor\'s Strategy ×2 · Helzephyr ×3', changes:[['relaxaurus',-3],['leezpunk',-2],['blazehowl',-2],['strike',-4],['medical',-2]] },
  { date:'2026-10-04', note:'เข้า stock 24 ใบ (ไม่ฟอยล์) — Kelpsea Ignis (TD) ×2 · Mossanda Lux (TD) ×2 · Ignis Breath (TD) ×2 · Foxparks – A Toasty Hug (TD) ×2 · Arsox (TD) ×3 · Stone Pit (TD) ×2 · Primitive Furnace (U) ×1 · Rooby (C) ×1 · Jolthog (TD) ×2 · Weapon Workbench (TD) ×2 · Blazamut (TD) ×1 · Grizzbolt (TD) ×2 · Single-Shot Rifle (TD) ×2', changes:[['w-td01-003',2],['w-td01-006',2],['w-td01-011',2],['w-td01-004',2],['w-td01-005',3],['w-td01-008',2],['w-bp01-016',1],['w-bp01-011',1],['w-td01-002',2],['w-td01-009',2],['w-td01-007',1],['w-td01-001',2],['w-td01-010',2]] },
  { date:'2026-10-04', note:'เข้า stock 2 ใบ (ไม่ฟอยล์) — Primitive Workbench (TD, ETD01-020) ×2', changes:[['w-td01-020',2]] },
  { date:'2026-10-06', note:'พัสดุ Shopee ถึง — เข้า stock 5 ใบ (EBP01): Sparkit – Hazardous Contact ×1 (3 → 4) · Univolt – Valiant Thunderclap ×1 (3 → 4) · Antique Mirror ×1 (3 → 4) · Vanwyrm – Marauder of the Skies ×1 (3 → 4) · Lamp (R ฟอยล์) ×1 (3 → 4)', changes:[['w-bp01-008',1],['w-bp01-009',1],['w-bp01-042',1],['w-bp01-083',1],['w-bp01-088',1]] },
  { date:'2026-10-04', note:'เข้า stock 22 ใบ (ไม่ฟอยล์ · TD ฟ้า) — Pengullet – Frequent Flyer ×2 · Jolthog Cryst ×3 · Mammorest Cryst ×2 · Elphidran Aqua ×2 · Single-Shot Sphere Launcher ×2 · Suzaku Aqua ×2 · Hangyu Cryst ×2 · Crystal Breath ×2 · Hot Spring ×1 · Reindrix ×2 · Antique Wooden Chair ×2', changes:[['flyer',2],['w-td01-013',3],['w-td01-018',2],['elph-aqua',2],['w-td01-021',2],['w-td01-017',2],['w-td01-015',2],['w-td01-022',2],['w-bp01-041',1],['w-td01-016',2],['w-td01-019',2]] },
  { date:'2026-10-04', note:'เข้า stock 4 ใบ (ไม่ฟอยล์) — Lamball – My First Pal (TD, ETD01-023) ×2 · Ribbuny – Little Princess (TD, ETD01-024) ×2', changes:[['w-td01-023',2],['w-td01-024',2]] },
  { date:'2026-10-04', note:'เข้า stock 3 ใบ (ฟอยล์ EBP01) — Loupmoon – Glinting Moonlight (C) ×1 · No Pals Beyond Sign (C) ×1 · Digtoise\'s Headband (U) ×1', changes:[['w-bp01-087',1],['w-bp01-067',1],['w-bp01-068',1]] },
  { date:'2026-10-04', note:'เข้า stock 12 ใบ (ฟอยล์ EBP01 ทั้งหมด · เรทปกติ ยกเว้น Digtoise OSR) — Reptyro – Ore Gorger (R) ×2 · Suzaku – Hellfire Wings (RR) ×1 · Bushi – Ephemeral Blade (R) ×1 · Katress – Abyssal Sorcerer (R) ×1 · Elizabee (R) ×1 · Warsect – Iron Fortress (R) ×2 · Digtoise – Seismic Drillback (OSR) ×2 · Breeding Farm (R) ×1 · Cola Vending Machine (R) ×1 · ใส่ album หน้า 13 ช่อง 9–12 + หน้า 14 ช่อง 1–8', changes:[['w-bp01-005',2],['w-bp01-002',1],['w-bp01-004',1],['katress',1],['w-bp01-053',1],['w-bp01-054',2],['w-bp01-050osr',2],['w-bp01-063',1],['w-bp01-064',1]] },
  { date:'2026-10-04', note:'เข้า stock 1 ใบ — Blazehowl – Hellflame Defender (PR, EPR-003) จาก promo pack · เพิ่มเข้าแคตตาล็อก', changes:[['w-epr-003',1]] },
  { date:'2026-10-02', note:'เข้า stock 2 ใบ — Gobfin Ignis – Blazing Hothead (R ฟอยล์ EBP01) ×1 (3 → 4) · Blazamut – Molten Sovereign (TSR) ×1 (0 → 1) · ใส่ album หน้า 14 ช่อง 7–8', changes:[['w-bp01-003',1],['w-td01-007tsr',1]] },
  { date:'2026-10-01', note:'พัสดุ Shopee KPT Card Shop ถึงครบ — เข้า stock + album หน้า 14: Reptyro Cryst (R) ×2 (2 → 4) · Breeding Farm (R) ×1 (2 → 3) · Elizabee (R) ×1 (2 → 3) · Gobfin Ignis (R) ×2 (1 → 3)', changes:[['w-bp01-030',2],['w-bp01-063',1],['w-bp01-053',1],['w-bp01-003',2]] },
  { date:'2026-10-01', note:'ตรวจ album หน้า 13 — เพิ่ม Bushi – Ephemeral Blade (R) ×2 (1 → 3) · Antique Curtain (R) ×2 (2 → 4)', changes:[['w-bp01-004',2],['w-bp01-039',2]] },
  { date:'2026-09-27', note:'แลกการ์ดกับน้อง — ออก: Zoe\'s Strategy ×1 · Chillet ×1 · Lyleen ×2 · Lyleen Noct ×1 · Lily\'s Strategy ×1 · Shadowbeak ×2 · Jormuntide ×2 · Hanging Trap ×2 · Viewing Cage ×2 · Pyrin Noct ×3 (17 ใบ) — รับ: Digtoise (OSR) ×2 · Suzaku (RR) ×1 · Reptyro (R) ×2 · Warsect (R) ×2 · Katress (R) ×1 · Elizabee (R) ×1 · Breeding Farm (R) ×1 · Cola Vending Machine (R) ×1 · Bushi (R) ×1 — ไม่มี SR ≈ $59 / ฿1,970 (ยังไม่นับเข้า)', changes:[["zoe-rr",-1],["chillet-rr",-1],["w-bp01-049",-2],["lyleen",-1],["w-bp01-070",-1],["shadowbeak",-2],["jorm-r",-2],["w-td02-019",-2],["w-bp01-092",-2],["pyrin",-3]] },
  { date:'2026-09-27', note:'ตรวจ album หน้า 13 — Suzaku – Hellfire Wings (RR) มีจริง 1 ใบ (2 → 1)', changes:[['w-bp01-002',-1]] },
  { date:'2026-09-27', note:'ตรวจ album หน้า 12 — พบ Lyleen – Blessing of the Goddess (OSR) ×1 (0 → 1) · Shadowbeak (OSR) ×1 ตรง', changes:[['w-bp01-049-osr',1]] },
  { date:'2026-09-26', note:'บันทึกจากเครื่อง — ตัด Pyrin Noct – Steed of Azure Flames (SR) −1', changes:[['w-bp01-077sr',-1]] },
  { date:'2026-09-26', note:'แก้เรทติ้ง — Tombat – Out of Nowhere ย้าย SP ×3 → R (R รวม 7, ไม่มี SP)', changes:[['w-bp01-076',3],['tombat',-3]] },
  { date:'2026-09-26', note:'บันทึกจากเครื่อง — Foxparks – A Toasty Hug ย้าย TSR ×4 → TD (TD 6 · TSR 0)', changes:[['w-td01-004',4],['w-etd01-005',-4]] },
  { date:'2026-09-26', note:'บันทึกจากเครื่อง — ตัด Pump-Action Shotgun (SR) −2', changes:[['w-bp01-020sr',-2]] },
  { date:'2026-09-26', note:'บันทึกจากเครื่อง — ตัด Foxparks\' Harness (SR) −1', changes:[['w-bp01-019sr',-1]] },
  { date:'2026-09-26', note:'บันทึกจากเครื่อง — ตัด Warsect – Iron Fortress (SR) −2', changes:[['w-bp01-054sr',-2]] },
  { date:'2026-09-26', note:'บันทึกจากเครื่อง — ตัด Elizabee – Queen of the Flower Garden (SR) −1', changes:[['w-bp01-053sr',-1]] },
  { date:'2026-09-26', note:'บันทึกจากเครื่อง — ตัด Lyleen – Blessing of the Goddess (OSR) −1', changes:[['w-bp01-049-osr',-1]] },
  { date:'2026-09-26', note:'บันทึกจากเครื่อง — ตัด Rushoar – Reckless Destruction (SR) −1', changes:[['w-bp01-052sr',-1]] },
  { date:'2026-09-26', note:'บันทึกจากเครื่อง — ตัด Bushi – Ephemeral Blade (R) −2 (เหลือ 1)', changes:[['w-bp01-004',-2]] },
  { date:'2026-09-26', note:'บันทึกจากเครื่อง — ตัด Reptyro – Ore Gorger (SR) −1', changes:[['w-bp01-005sr',-1]] },
  { date:'2026-09-26', note:'แก้เรทติ้ง — Bushi – Ephemeral Blade ย้าย SR ×2 → R (R รวม 3, ไม่มี SR)', changes:[['w-bp01-004',2],['w-bp01-004sr',-2]] },
  { date:'2026-09-26', note:'ตรวจ album หน้า 12 — เพิ่ม Mounted Machine Gun (R) ×1 (รวม 6)', changes:[['w-bp01-015',1]] },
  { date:'2026-09-26', note:'ตรวจ album หน้า 11 — แก้เรทติ้ง Breeding Farm SR→R (R 2) · Cola Vending Machine SR ×2→R (R 3) · Lamp SR ×2→R (R 2 · SR 1)', changes:[['w-bp01-063',1],['w-bp01-063sr',-1],['w-bp01-064',2],['w-bp01-064sr',-2],['w-bp01-088',2],['w-bp01-088sr',-2]] },
  { date:'2026-09-26', note:'ตรวจ album หน้า 10 — แก้เรทติ้ง Meat Cleaver SR ×3 → R (+1 = 4) · Antique Curtain SR ×2 → R (2)', changes:[['w-bp01-093',4],['w-bp01-093sr',-3],['w-bp01-039',2],['w-bp01-039sr',-2]] },
  { date:'2026-09-26', note:'ตรวจ album หน้า 9 — เพิ่ม Axel\'s Strategy (RR) ×1 · Pump-Action Shotgun (R) ×2 · Foxparks\' Harness (R) ×1', changes:[['w-bp01-023',1],['w-bp01-020',2],['w-bp01-019',1]] },
  { date:'2026-09-26', note:'ตรวจ album หน้า 8 — เพิ่ม Tombat – Out of Nowhere!? (R) ×1 · Warsect – Iron Fortress (R) ×1', changes:[['tombat',1],['w-bp01-054',1]] },
  { date:'2026-09-26', note:'บันทึกจากเครื่อง — ตัด Jormuntide Ignis – Savage Lava Dragon (OSR) −1', changes:[['w-bp01-001osr',-1]] },
  { date:'2026-09-26', note:'ตรวจ album หน้า 7 — เพิ่ม Jormuntide Ignis – Savage Lava Dragon (RR) ×1 · Reptyro – Ore Gorger (R) ×1 · Elizabee – Queen of the Flower Garden (R) ×1 · Katress – Abyssal Sorcerer (R) ×1', changes:[['w-bp01-001',1],['w-bp01-005',1],['w-bp01-053',1],['katress',1]] },
  { date:'2026-09-26', note:'ตรวจ album หน้า 6 — เพิ่ม Bushi – Ephemeral Blade (R) ×1 · Gobfin Ignis – Blazing Hothead (R) ×1 · Digtoise – Seismic Drillback (RR) ×1 · Warsect – Iron Fortress (R) ×1 · Depresso – Late Night Hustler (SR) ×1', changes:[['w-bp01-004',1],['w-bp01-003',1],['w-bp01-050',1],['w-bp01-054',1],['w-bp01-079sr',1]] },
  { date:'2026-09-26', note:'แก้เรทติ้ง — Lyleen Noct – Providence of the Goddess ย้าย SR ×2 → R (รวม R 5 ใบ, ไม่มี SR)', changes:[['lyleen',2],['w-bp01-078sr',-2]] },
  { date:'2026-09-26', note:'ตรวจ album หน้า 4 — เพิ่ม Helzephyr – Wings of the Moonless Night (RR) ×1', changes:[['w-bp01-073',1]] },
  { date:'2026-09-26', note:'ตรวจ album หน้า 1 — เพิ่ม Gumoss – Curious Sprout (EPR-006 PR) ×2 · Jormuntide – Surging Sea Serpent (OSR) ×1', changes:[['w-epr-006',2],['jorm-osr',1]] },
  { date:'2026-09-26', note:'บันทึกจากเครื่อง — Daedream\'s Necklace ×5 (คืนกลับ)', changes:[['necklace',5]] },
  { date:'2026-09-26', note:'บันทึกจากเครื่อง — Tanzee – Cheerful Worker ×1', changes:[['w-bp01-060',1]] },
  { date:'2026-09-26', note:'บันทึกจากเครื่อง — Suzaku Aqua ×1 · ตัด Celaray −1 · Mau Cryst −1', changes:[['w-td01-017',1],['w-bp01-036',-1],['w-bp01-035',-1]] },
  { date:'2026-09-26', note:'บันทึกจากเครื่อง — ตัด Mossanda – Guard Captain −1 · Broncherry −1 · Refined Metal Spear −1', changes:[['w-td02-001',-1],['w-td02-006',-1],['w-td02-010',-1]] },
  { date:'2026-09-26', note:'บันทึกจากเครื่อง — Ignis Breath (TD) ×1 · Beegarde ×1 · Digtoise – Keen Needleback ×1 · ตัด Kitsun −1 · Ignis Breath (TSR) −1 · Gumoss – Dreamy Seedling −1 · Dinossom −1 · Gumoss – Curious Sprout −1', changes:[['w-td01-011',1],['w-bp01-061',1],['w-bp01-059',1],['w-bp01-007',-1],['w-td01-011tsr',-1],['w-td02-002',-1],['w-td02-004',-1],['w-bp01-058',-1]] },
  { date:'2026-09-26', note:'บันทึกจากเครื่อง — Daedream – First Slumber ×1 · Viewing Cage ×1', changes:[['daedream-first',1],['w-bp01-092',1]] },
  { date:'2026-09-26', note:'บันทึกจากเครื่อง — Medical Supplies ×2 · Strike from the Darkness ×1 · ตัด Daedream\'s Necklace −5 · Meat Cleaver −1 · Viewing Cage −1', changes:[['medical',2],['strike',1],['necklace',-5],['w-bp01-093',-1],['w-bp01-092',-1]] },
  { date:'2026-09-26', note:'บันทึกจากเครื่อง — Astegon ×4 · Incineram ×2 · ตัด Loupmoon −1', changes:[['astegon',4],['w-td02-016',2],['w-bp01-087',-1]] },
  { date:'2026-09-26', note:'บันทึกจากเครื่อง — Hoocrates ×6 · Leezpunk ×4 · Cawgnito ×4 · Nox ×3 · Daedream – First Slumber ×1 · Depresso (U) ×1 · ตัด Depresso (SR) −1', changes:[['w-td02-013',6],['leezpunk',4],['w-td02-015',4],['w-bp01-086',3],['daedream-first',1],['depresso',1],['w-bp01-079sr',-1]] },
  { date:'2026-09-25', note:'เข้า stock 2 ใบ — Foxparks\' Harness (R ฟอยล์) ×1 · Foxparks – Light of Courage (U) ×1', changes:[['w-bp01-019',1],['w-bp01-006',1]] },
  { date:'2026-09-22', note:'บันทึกจากเครื่อง — ลด Jormuntide – Surging Sea Serpent (OSR) 2 → 1', changes: Object.keys(FIX_0922C).map(s => [s, FIX_0922C[s]]) },
  { date:'2026-09-22', note:'บันทึกจากเครื่อง — ตัด OSR ที่ไม่มีจริงออก 2 ใบ: Petallia – Sweet Blessings (OSR) · Digtoise – Seismic Drillback (OSR)', changes: Object.keys(FIX_0922B).map(s => [s, FIX_0922B[s]]) },
  { date:'2026-09-22', note:'บันทึกจากเครื่อง — ปรับเด็ค 50 ใบ: เข้า Leezpunk ×4 · Medieval Medicine Workbench ×4 · Pengullet Rocket Launcher ×4 · Lyleen Noct (R) ×2 · เพิ่ม Blazehowl Noct 2→4 · Cryolinx 3→4 · ลด Relaxaurus 4→2 · Strike from the Darkness 3→2 · ตัดออก Jormuntide R · Pyrin Noct · Elphidran ×4 · Aurora Guide ×4 · Pal Sphere · Single-Shot Sphere Launcher ×2', changes:[] },
  { date:'2026-09-22', note:'บันทึกจากเครื่อง — แก้สต็อกการ์ดพิมพ์พิเศษ 9 รายการ: ตัด SP/OSR ที่ไม่มีจริงออก (Zoe\'s Strategy SP · Axel\'s Strategy SP · Katress OSR · Helzephyr OSR · Mounted Machine Gun SP · Victor\'s Strategy OSR) · ลด Jormuntide Ignis OSR 3 → 2 และ Shadowbeak OSR 2 → 1 · Victor\'s Strategy เป็น RR ปกติ ×1', changes: Object.keys(FIX_0922).map(s => [s, FIX_0922[s]]) },
  { date:'2026-09-22', note:'ล็อตใหญ่ 141 ใบ (ไม่ฟอยล์ทั้งหมด) — เขียว 60 ใบ (TD02 46: Eikthyrdeer Terra ×6 · Mossanda ×5 · Dinossom ×5 · Flopie/Gumoss/Stone Blast/Broncherry/Refined Metal Spear/Mammorest ×4 | BP01 14: Vaelet ×2 · Beegarde ×2 · Lifmunk/Dumud/Gumoss/Wumpo Botan/Feed Box/No Pals Beyond Sign/Digtoise\'s Headband/Farming Hat/Found an Egg! ×1) · ม่วง 31 ใบ (Cawgnito Hat ×4 · Felbat ×4 · Hanging Trap ×4 · Viewing Cage ×3) · น้ำเงิน 22 ใบ (Teafant ×3 · Celaray ×3) · แดง 18 ใบ · ไร้สี 10 ใบ (Chikipi ×4 · Cattiva ×3)', changes: Object.keys(LOT_0922).map(s => [s, LOT_0922[s]]) },
  { date:'2026-09-22', note:'เข้า stock 1 ใบ — Jormuntide Ignis – Savage Lava Dragon (OSR) ×1 (2 → 3)', changes:[['w-bp01-001osr',1]] },
  { date:'2026-09-21', note:'ยืนยันเรทติ้ง — Katress – Abyssal Sorcerer (EBP01-075) เป็น R ปกติทุกใบ (เอาสถานะฟอยล์ออก) · EBP01-075OSR / 075SP ยังไม่มีในมือ', changes:[] },
  { date:'2026-09-21', note:'แก้เรทติ้ง — Lyleen Noct – Providence of the Goddess (EBP01-078) ย้ายจาก SP ไป R ทั้ง 2 ใบ (อาร์ตปกติ ไม่ใช่ฟอยล์)', changes:[] },
  { date:'2026-09-20', note:'แก้เรทติ้ง — Relaxaurus – Hungry Gunner (EBP01-026) ย้ายจาก R ไป RR ทุกใบ', changes:[] },
  { date:'2026-09-20', note:'ชุดฟอยล์ EBP01 (ชุดที่ 9) เข้า stock 7 ใบ — Vaelet – Bewitching Blossom (SR) ×1 · Jormuntide – Surging Sea Serpent (OSR) ×1 · Relaxaurus – Hungry Gunner (R ฟอยล์) ×1 · Lyleen – Blessing of the Goddess (RR) ×1 · Rushoar – Reckless Destruction (R) ×1 · Elizabee – Queen of the Flower Garden (R) ×1 · Breeding Farm (R) ×1', changes:[['w-bp01-055sr',1],['jorm-osr',1],['relaxaurus',1],['w-bp01-049',1],['w-bp01-052',1],['w-bp01-053',1],['w-bp01-063',1]] },
  { date:'2026-09-20', note:'ชุดฟอยล์ EBP01 (ชุดที่ 8) เข้า stock 12 ใบ — Reptyro Cryst – Glacial Devourer (R) ×1 · Azurobe – Water Dragon Waltz (SR) ×1 · Pengullet Rocket Launcher (R) ×1 · Jormuntide – Surging Sea Serpent (R) ×1 · Pyrin Noct – Steed of Azure Flames (R) ×1 · Shadowbeak – Seed of Despair (RR) ×1 · Tombat – Out of Nowhere!? (R) ×1 · Katress – Abyssal Sorcerer (R) ×1 · Reptyro – Ore Gorger (R) ×1 · Axel\'s Strategy (RR) ×1 · Foxparks\' Harness (R) ×1 · Mounted Machine Gun (R) ×1', changes:[['w-bp01-030',1],['w-bp01-029sr',1],['rocket',1],['jorm-r',1],['pyrin',1],['shadowbeak',1],['w-bp01-076',1],['katress',1],['w-bp01-005',1],['w-bp01-023',1],['w-bp01-019',1],['w-bp01-015',1]] },
  { date:'2026-09-20', note:'ชุดฟอยล์ (ชุดที่ 7) เข้า stock 5 ใบ — Cattiva – My First Pal (TSR) ×1 · Flopie – Snack Lover (TSR) ×1 · Meat Cleaver (SR) ×1 · Pengullet – Yearning for the Sky (R ฟอยล์) ×1 · Jormuntide Ignis – Savage Lava Dragon (OSR) ×1', changes:[['w-td02-023tsr',1],['w-td02-003tsr',1],['w-bp01-093sr',1],['pengullet-r',1],['w-bp01-001osr',1]] },
  { date:'2026-09-20', note:'ตัดออกจาก stock 2 ใบ — Kelpsea Ignis – Balmy Magma ×2', changes:[['w-td01-003',-2]] },
  { date:'2026-09-21', note:'แก้เรทติ้ง — Elphidran Aqua – Gentle Ripples ×6 เป็น TD ธรรมดาทั้งหมด (เดิมลงเป็น TDR)', changes:[] },
  { date:'2026-09-21', note:'แก้สต็อก — Suzaku – Hellfire Wings (SP) ไม่มีจริง ตัดออก 1 ใบ (ล็อตฟอยล์ EBP01 18 ก.ย. ที่จริง 19 ใบ)', changes:[['w-bp01-002sp',-1]] },
  { date:'2026-09-20', note:'แก้เรทติ้ง — Suzaku Aqua – Way of the Current และ Mammorest Cryst – Roar of the Tundra ไม่ใช่ฟอยล์ ย้าย TSR → TD อย่างละ 1 ใบ (Mammorest – Roar of the Wilds ยังเป็น TSR ตามเดิม)', changes:[['w-td01-017tsr',-1],['w-td01-017',1],['w-td01-018tsr',-1],['w-td01-018',1]] },
  { date:'2026-09-20', note:'เพิ่มแท็บ SOUL — Soul (Dawn of Palpagos) เข้า stock 3 ใบ — Red Blue ×1 · Green Purple ×1 · Foil ×1', changes:[['w-soul-01',1],['w-soul-02',1],['w-soul-03',1]] },
  { date:'2026-09-20', note:'แก้เรทติ้ง — Lyleen – Blessing of the Goddess 2 ใบ ย้ายจาก OSR ไป RR (OSR 3 → 1 · RR 2 → 4)', changes:[['w-bp01-049-osr',-2],['w-bp01-049',2]] },
  { date:'2026-09-19', note:'ตัดออกจาก stock 2 ใบ — Nox – The Silent One ×1 · Mossanda Lux – Vanguard Captain ×1', changes:[['w-bp01-086',-1],['w-td01-006',-1]] },
  { date:'2026-09-19', note:'ชุด BP01 Purple Pal เข้า stock 23 ใบ — Menasting – Darkness-Dwelling Scorpion ×4 · Loupmoon – Glinting Moonlight ×4 · Maraith – Twilight Messenger ×3 · Depresso – Late Night Hustler ×3 · Vanwyrm – Marauder of the Skies ×2 · Lovander – Heartstealer ×2 · Daedream – First Slumber ×2 · Daedream – Deep Slumber ×2 · Nox – The Silent One ×1', changes:[['menasting',4],['w-bp01-087',4],['maraith',3],['depresso',3],['w-bp01-083',2],['w-bp01-081',2],['daedream-first',2],['daedream',2],['w-bp01-086',1]] },
  { date:'2026-09-19', note:'ชุด BP01 Purple (Structure/Gear/Event) เข้า stock 26 ใบ — Dark Cannon ×5 · Wooden Wall ×4 · Shoddy Bed ×4 · Daedream\'s Necklace ×4 · Black Marketeer ×4 · Medieval Medicine Workbench ×3 · Viewing Cage ×2', changes:[['w-bp01-096',5],['w-bp01-091',4],['shoddy-bed',4],['necklace',4],['black-mkt',4],['bench',3],['w-bp01-092',2]] },
  { date:'2026-09-19', note:'ชุด BP01 Red Pal เข้า stock 22 ใบ — Blazehowl – Hellflame Defender ×4 · Kitsun – Wyrmbane Fangs ×3 · Pyrin – Cinder Steed ×3 · Ragnahawk – Emberwing Striker ×3 · Flambelle – Scorching Tears ×3 · Rooby – Brave Sparks ×2 · Sparkit – Hazardous Contact ×2 · Foxparks – Light of Courage ×1 · Univolt – Valiant Thunderclap ×1', changes:[['w-bp01-014',4],['w-bp01-007',3],['w-bp01-013',3],['w-bp01-010',3],['w-bp01-012',3],['w-bp01-011',2],['w-bp01-008',2],['w-bp01-006',1],['w-bp01-009',1]] },
  { date:'2026-09-19', note:'ชุด BP01 Red (Structure/Gear/Event) เข้า stock 17 ใบ — Alarm Bell ×4 · Stone Pickaxe ×4 · Flame Cauldron ×3 · Treasure Chest Found! ×3 · Primitive Furnace ×2 · Makeshift Handgun ×1', changes:[['w-bp01-018',4],['w-bp01-022',4],['w-bp01-017',3],['w-bp01-024',3],['w-bp01-016',2],['w-bp01-021',1]] },
  { date:'2026-09-19', note:'ชุด BP01 Blue Pal เข้า stock 26 ใบ — Surfent – Swift Swimmer ×4 · Cryolinx – Arctic Ordeal ×4 · Teafant – Fountain of Cheer ×4 · Celaray – Loop De Loop ×4 · Mau Cryst – Harbinger of Riches ×4 · Penking – Mighty Warrior of the Deep ×3 · Fuack – Manic Wave Ripper ×2 · Wumpo – Frostpeak Sentinel ×1', changes:[['w-bp01-037',4],['cryolinx',4],['w-bp01-034',4],['w-bp01-036',4],['w-bp01-035',4],['penking',3],['w-bp01-032',2],['w-bp01-033',1]] },
  { date:'2026-09-19', note:'ชุด BP01 Blue (Structure/Gear/Event) เข้า stock 21 ใบ — Antique Dresser ×5 · Grappling Gun ×4 · Sphere Workbench ×4 · Hot Spring ×3 · Aurora Guide ×2 · Pal Sphere ×2 · Antique Mirror ×1', changes:[['w-bp01-040',5],['w-bp01-045',4],['w-bp01-043',4],['w-bp01-041',3],['aurora',2],['sphere',2],['w-bp01-042',1]] },
  { date:'2026-09-19', note:'ชุด BP01 Colorless เข้า stock 10 ใบ — The Adventure Begins ×4 · Direhowl – Proud Fang ×3 · Elphidran – Gentle Radiance ×3', changes:[['w-bp01-100',4],['w-bp01-099',3],['elphidran',3]] },
  { date:'2026-09-19', note:'ชุด BP01 Green Pal เข้า stock 21 ใบ — Digtoise – Keen Needleback ×4 · Lifmunk – Promising Newbie ×3 · Wumpo Botan – Tropical Sentinel ×3 · Dumud – Mellow Bounty ×3 · Gumoss – Curious Sprout ×2 · Tanzee – Cheerful Worker ×2 · Beegarde – Knight of the Flower Garden ×2 · Vaelet – Bewitching Blossom ×1 · Farming Hat ×1', changes:[['w-bp01-059',4],['w-bp01-056',3],['w-bp01-062',3],['w-bp01-057',3],['w-bp01-058',2],['w-bp01-060',2],['w-bp01-061',2],['w-bp01-055',1],['w-bp01-069',1]] },
  { date:'2026-09-19', note:'ชุด BP01 Green (Structure/Gear/Event) เข้า stock 24 ใบ — Feed Box ×4 · Ranch ×4 · No Pals Beyond Sign ×4 · Digtoise\'s Headband ×3 · Farming Hat ×3 · Blessing of the Flower Spirit ×3 · Found an Egg! ×3', changes:[['w-bp01-065',4],['w-bp01-066',4],['w-bp01-067',4],['w-bp01-068',3],['w-bp01-069',3],['w-bp01-072',3],['w-bp01-071',3]] },
  { date:'2026-09-18', note:'ชุด TD02 Purple เข้า stock 27 ใบ — Hoocrates – Embodiment of Wisdom ×3 · Cawgnito – Looming Shadow ×2 · Incineram – Lurking Stalker ×2 · Blazehowl Noct – Darkflame Defender ×2 · Felbat – Lifestealer ×2 · Astegon – Aegis Wyvern of Death ×2 · Leezpunk – Treasure Bandit ×2 · Cattiva – My First Pal ×2 · Chikipi – My First Pal ×2 · Hanging Trap ×2 · Cawgnito Hat ×2 · Strike from the Darkness ×2 · Medical Supplies ×2', changes:[['w-td02-013',3],['w-td02-015',2],['w-td02-016',2],['blazehowl',2],['w-td02-018',2],['astegon',2],['leezpunk',2],['w-td02-023',2],['w-td02-024',2],['w-td02-019',2],['w-td02-020',2],['strike',2],['medical',2]] },
  { date:'2026-09-18', note:'ชุด TD01 Blue เข้า stock 23 ใบ — Jolthog Cryst – Stoic Yet Innocent ×3 · Pengullet – Frequent Flyer ×2 · Hangyu Cryst – Frigid Wanderer ×2 · Reindrix – Icy Gaze ×2 · Elphidran Aqua – Gentle Ripples ×2 · Antique Wooden Chair ×2 · Primitive Workbench ×2 · Single-Shot Sphere Launcher ×2 · Crystal Breath ×2 · Mammorest Cryst – Roar of the Tundra ×1 + TSR ×1 · Suzaku Aqua – Way of the Current (TSR) ×1 · Grizzbolt – Rumbling Tank ×1', changes:[['w-td01-013',3],['flyer',2],['w-td01-015',2],['w-td01-016',2],['elph-aqua',2],['w-td01-019',2],['w-td01-020',2],['w-td01-021',2],['w-td01-022',2],['w-td01-018',1],['w-td01-018tsr',1],['w-td01-017tsr',1],['w-td01-001',1]] },
  { date:'2026-09-18', note:'เข้า stock 4 ใบ — Ignis Breath (TSR) ×1 · Stone Pit ×1 · Blazamut – Molten Sovereign ×1 · Arsox – Burning Spoils ×1', changes:[['w-td01-011tsr',1],['w-td01-008',1],['w-td01-007',1],['w-td01-005',1]] },
  { date:'2026-09-18', note:'ชุดฟอยล์ EBP01 (ชุดที่ 6) เข้า stock 3 ใบ — Jormuntide Ignis – Savage Lava Dragon (OSR) ×1 · Bushi – Ephemeral Blade (SR) ×1 · Gobfin Ignis – Blazing Hothead (SR) ×1', changes:[['w-bp01-001osr',1],['w-bp01-004sr',1],['w-bp01-003sr',1]] },
  { date:'2026-09-18', note:'ชุดฟอยล์ EBP01 (ชุดที่ 5) เข้า stock 9 ใบ — Rushoar – Reckless Destruction (SR) ×1 · Lyleen – Blessing of the Goddess (OSR) ×1 · Warsect – Iron Fortress (SR) ×1 · Reptyro Cryst – Glacial Devourer (SR) ×1 · Lyleen Noct – Providence of the Goddess (SR) ×1 · Foxparks\' Harness (SR) ×1 · Pump-Action Shotgun (SR) ×1 · Reptyro – Ore Gorger (SR) ×1 · Axel\'s Strategy (SP) ×1', changes:[['w-bp01-052sr',1],['w-bp01-049-osr',1],['w-bp01-054sr',1],['w-bp01-030sr',1],['w-bp01-078sr',1],['w-bp01-019sr',1],['w-bp01-020sr',1],['w-bp01-005sr',1],['w-bp01-023sp',1]] },
  { date:'2026-09-18', note:'ชุดฟอยล์ EBP01 (ชุดที่ 4) เข้า stock 9 ใบ — Jormuntide – Surging Sea Serpent (OSR) ×1 · Relaxaurus – Hungry Gunner (RR) ×1 · Chillet – Dragon Whisperer (RR) ×1 · Digtoise – Seismic Drillback (OSR) ×1 · Pengullet Rocket Launcher (R) ×1 + (SR) ×1 · Breeding Farm (SR) ×1 · Elizabee – Queen of the Flower Garden (SR) ×1 · Cola Vending Machine (SR) ×1', changes:[['jorm-osr',1],['relaxaurus',1],['chillet-rr',1],['w-bp01-050osr',1],['rocket',1],['w-bp01-044sr',1],['w-bp01-063sr',1],['w-bp01-053sr',1],['w-bp01-064sr',1]] },
  { date:'2026-09-18', note:'ชุดฟอยล์ EBP01 (ชุดที่ 3) เข้า stock 9 ใบ — Petallia – Sweet Blessings (R, EBP01-051) ×1 · Pyrin Noct – Steed of Azure Flames (SR) ×1 · Shadowbeak – Seed of Despair (OSR) ×1 · Azurobe – Water Dragon Waltz (SR) ×1 · Zoe\'s Strategy (OSR) ×1 + (SP) ×1 · Katress – Abyssal Sorcerer (OSR) ×1 · Mounted Machine Gun (SP) ×1 · Gobfin Ignis – Blazing Hothead (SR) ×1', changes:[['w-bp01-051',1],['w-bp01-077sr',1],['w-bp01-074osr',1],['w-bp01-029sr',1],['w-bp01-095osr',1],['w-bp01-095sp',1],['w-bp01-075osr',1],['w-bp01-015sp',1],['w-bp01-003sr',1]] },
  { date:'2026-09-18', note:'ชุดฟอยล์ EBP01 (ชุดที่ 2) เข้า stock 9 ใบ — Lamp (SR) ×2 · Antique Curtain (SR) ×1 · Meat Cleaver (SR) ×1 · Penking – Mighty Warrior of the Deep (SR) ×1 · Depresso – Late Night Hustler (SR) ×1 · Shadowbeak – Seed of Despair (OSR) ×1 · Tombat – Out of Nowhere!? (R) ×1 · Pengullet – Yearning for the Sky (R) ×1', changes:[['w-bp01-088sr',2],['w-bp01-039sr',1],['w-bp01-093sr',1],['w-bp01-031sr',1],['w-bp01-079sr',1],['w-bp01-074osr',1],['w-bp01-076',1],['pengullet-r',1]] },
  { date:'2026-09-18', note:'ชุดฟอยล์ EBP01 เข้า stock 20 ใบ — Cola Vending Machine (SR) · Azurobe – Water Dragon Waltz (SR) · Pengullet – Yearning for the Sky (R) · Meat Cleaver (SR) · Lyleen Noct – Providence of the Goddess (SR) · Lovander – Heartstealer (SR) · Helzephyr – Wings of the Moonless Night (OSR) · Gobfin Ignis – Blazing Hothead (SR) · Pump-Action Shotgun (SR) · Lamp (SR) · Warsect – Iron Fortress (SR) · Petallia – Sweet Blessings (OSR) · Victor\'s Strategy (OSR) · Antique Curtain (SR) · Foxparks\' Harness (SR) · Suzaku – Hellfire Wings (SP) · Bushi – Ephemeral Blade (SR) · Lily\'s Strategy (RR) ×1 + (OSR) ×1 + (SP) ×1', changes:[['w-bp01-064sr',1],['w-bp01-029sr',1],['pengulletR',1],['w-bp01-093sr',1],['w-bp01-078sr',1],['w-bp01-081sr',1],['w-bp01-073osr',1],['w-bp01-003sr',1],['w-bp01-020sr',1],['w-bp01-088sr',1],['w-bp01-054sr',1],['w-bp01-051osr',1],['w-bp01-046osr',1],['w-bp01-039sr',1],['w-bp01-019sr',1],['w-bp01-002sp',1],['w-bp01-004sr',1],['w-bp01-070',1],['w-bp01-070osr',1],['w-bp01-070sp',1]] },
  { date:'2026-09-18', note:'เข้า stock 4 ใบ — Lamball – My First Pal (TSR) ×2 · Ribbuny – Little Princess (TSR) ×1 · Ribbuny – Little Princess (TD) ×1', changes:[['w-td01-023tsr',2],['w-etd01-024',1],['w-td01-024',1]] },
  { date:'2026-09-18', note:'ชุด TD01 Red เข้า stock 18 ใบ — Jolthog – Shocking Yet Innocent ×2 · Kelpsea Ignis – Balmy Magma ×2 · Foxparks – A Toasty Hug ×2 · Arsox – Burning Spoils ×2 · Mossanda Lux – Vanguard Captain ×2 · Weapon Workbench ×2 · Single-Shot Rifle ×2 · Grizzbolt – Rumbling Tank ×1 · Blazamut – Molten Sovereign ×1 · Stone Pit ×1 · Ignis Breath ×1', changes:[['w-td01-002',2],['w-td01-003',2],['w-td01-004',2],['w-td01-005',2],['w-td01-006',2],['w-td01-009',2],['w-td01-010',2],['w-td01-001',1],['w-td01-007',1],['w-td01-008',1],['w-td01-011',1]] },
  { date:'2026-09-18', note:'เข้า stock 7 ใบ — Nox – The Silent One ×1 · Makeshift Handgun ×1 · Aurora Guide ×1 · Ranch ×1 · Lyleen – Blessing of the Goddess (OSR) ×1 · Cola Vending Machine ×1 · Azurobe – Water Dragon Waltz (SR) ×1', changes:[['w-bp01-086',1],['w-bp01-021',1],['aurora',1],['w-bp01-066',1],['w-bp01-049-osr',1],['w-bp01-064',1],['w-bp01-029sr',1]] },
  { date:'2026-09-18', note:'ล็อตค้างส่ง (1,080 บาท) ถึงแล้ว — เข้า stock 7 ใบ — Tombat – Out of Nowhere!? ×2 · Petallia – Sweet Blessings ×2 (3 → 5) · Lyleen – Blessing of the Goddess ×1 (1 → 2) · Lily\'s Strategy ×2 (1 → 3) — ครบตามใบสั่งซื้อ', changes:[['tombat',2],['w-bp01-051',2],['w-bp01-049',1],['w-bp01-070',2]] },
  { date:'2026-09-18', note:'ชุด TD02 Green เข้า stock 27 ใบ — Gumoss – Dreamy Seedling ×3 · Eikthyrdeer Terra – Guardian of Nature ×3 · Refined Metal Spear ×3 · Broncherry – Brimming Adoration ×3 · Campfire ×3 · Mossanda – Guard Captain ×2 · Flopie – Snack Lover ×2 · Mammorest – Roar of the Wilds ×1 + TSR ×1 · Berry Plantation ×2 · Stone Blast ×2 · Dinossom – Radiant Fragrance ×2 (3 → 5)', changes:[['w-td02-002',3],['w-td02-005',3],['w-td02-010',3],['w-td02-006',3],['w-td02-009',3],['w-td02-001',2],['w-td02-003',2],['w-td02-007',1],['w-td02-007tsr',1],['w-td02-008',2],['w-td02-011',2],['w-td02-004',2]] },
  { date:'2026-09-18', note:'เข้า stock 7 ใบ — Meat Cleaver (Gear) ×1 · Viewing Cage ×1 · Flambelle – Scorching Tears ×1 · Primitive Furnace (4 → 5) · Gumoss – Curious Sprout (1 → 2) · Medieval Medicine Workbench (4 → 5) · Daedream – First Slumber (4 → 5)', changes:[['w-bp01-093',1],['w-bp01-092',1],['w-bp01-012',1],['w-bp01-016',1],['w-bp01-058',1],['bench',1],['daedream-first',1]] },
  { date:'2026-09-16', note:'ล็อตสั่งซื้อ Red/Purple ถึงแล้ว (ไทยโพสต์) เข้า stock 30 ใบ — Suzaku – Hellfire Wings ×2 · Foxparks – A Toasty Hug ×4 · Cattiva – My First Pal ×4 · Lamball – My First Pal ×4 · Mounted Machine Gun ×4 · Primitive Furnace ×4 · Stone Pit ×4 · Pump-Action Shotgun ×4 — ครบตามใบสั่งซื้อ 2,420 บาท', changes:[['w-bp01-002',2],['w-etd01-005',4],['w-td02-023',4],['w-epr-001',4],['w-bp01-015',4],['w-bp01-016',4],['w-etd01-006',4],['w-bp01-020',4]] },
  { date:'2026-09-16', note:'เข้า stock 4 ใบ — Rushoar – Reckless Destruction ×2 (4 → 6) · Zoe\'s Strategy (3 → 4) · Dinossom – Radiant Fragrance (2 → 3)', changes:[['w-bp01-052',2],['zoe-rr',1],['w-td02-004',1]] },
  { date:'2026-09-16', note:'เพิ่ม Lamball – My First Pal (PR, EPR-001 Bushiroad Expo 2026) เข้าแคตตาล็อก — ยังไม่มีการ์ดในมือ (0 ใบ)', changes:[] },
  { date:'2026-09-13', note:'เอา Jormuntide Ignis – Savage Lava Dragon (SP) ออกจากคอลเลกชัน', changes:[['jorm-ignis-sp',-1]] },
  { date:'2026-09-13', note:'เอา Tombat – Out of Nowhere!? (SP) ออกจากคอลเลกชัน', changes:[['tombat',-1]] },
  { date:'2026-09-13', note:'เจอเพิ่ม — Jormuntide – Surging Sea Serpent (R) มี 3 ใบ (1 → 3)', changes:[['jorm-r',2]] },
  { date:'2026-09-13', note:'Fuack – Manic Wave Ripper (PR) เข้า stock 1 ใบ', changes:[['w-bp01-032-pr',1]] },
  { date:'2026-09-13', note:'เข้า stock เพิ่ม 4 ใบ — Rushoar – Reckless Destruction ×2 (2 → 4) · Petallia – Sweet Blessings (2 → 3) · Tombat – Out of Nowhere!? (1 → 2)', changes:[['w-bp01-052',2],['w-bp01-051',1],['w-bp01-076',1]] },
  { date:'2026-09-13', note:'ล็อต Omocha Lab (J&T 831976915792) ถึงแล้ว — Relaxaurus (3 → 4) · Shadowbeak (3 → 4) · Pyrin Noct (4 → 5)', changes:[['relaxaurus',1],['shadowbeak',1],['pyrin',1]] },
  { date:'2026-09-12', note:"ล็อต Omocha Lab (J&T 831971319550) ถึงแล้ว — Lily's Strategy · Tombat – Out of Nowhere!?", changes:[['w-bp01-070',1],['w-bp01-076',1]] },
  { date:'2026-09-12', note:'Petallia – Sweet Blessings เข้า stock 2 ใบ', changes:[['w-bp01-051',2]] },
  { date:'2026-09-12', note:'Elphidran – Gentle Radiance เข้าเพิ่ม 4 ใบ (1 → 5)', changes:[['elphidran',4]] },
  { date:'2026-09-12', note:'ชุดใหม่เข้า stock — Dinossom ×2 · Wumpo · Dumud · Celaray · Gumoss · Blessing of the Flower Spirit · Flame Cauldron · Daedream\'s Necklace (4 → 5)', changes:[['w-td02-004',2],['w-bp01-033',1],['w-bp01-057',1],['w-bp01-036',1],['w-bp01-058',1],['w-bp01-072',1],['w-bp01-017',1],['necklace',1],['w-bp01-052',1]] },
  { date:'2026-09-12', note:'ล็อต ผู้ขาย ถึงแล้ว — Lyleen (Blessing of the Goddess) OSR', changes:[['w-bp01-049-osr',1]] },
  { date:'2026-09-12', note:'ล็อต ผู้ขาย ถึงแล้ว — Rushoar (Reckless Destruction) · Lyleen (Blessing of the Goddess) RR', changes:[['w-bp01-052',1],['w-bp01-049',1]] },
  { date:'2026-09-10', note:'ล็อต ผู้ขาย ถึงแล้ว — Relaxaurus (2 → 3) · Shadowbeak (2 → 3) · Pyrin Noct (3 → 4)', changes:[['relaxaurus',1],['shadowbeak',1],['pyrin',1]] },
  { date:'2026-09-09', note:"เพิ่ม Zoe's Strategy อีก 1 ใบ (2 → 3)", changes:[['zoe-rr',1]] },
  { date:'2026-09-08', note:'ชุด BP01 Nocturnal / Night + การ์ด TD02', changes:[['maraith',4],['depresso',3],['daedream-first',4],['daedream',5],['necklace',4],['astegon',1],['medical',1]] }
];

const LOG = (() => {
  const later = {};
  LOG_LATER.forEach(e => e.changes.forEach(([s, n]) => { later[s] = (later[s] || 0) + n; }));
  const base = [];
  PAGES.forEach(p => p.items.forEach(([card, n]) => {
    const rest = n - (later[card.slug] || 0);
    if (rest > 0) base.push([card.slug, rest]);
  }));
  return LOG_LATER.concat([{ date:'Initial', note:'บันทึกคอลเลกชันครั้งแรก', changes: base, initial:true }]);
})();

const NOTES = [
];

const GUIDE = {
  title: 'Red · Purple — Control "Felbat Church Pastor" (อันดับ 4)',
  thesis: 'เด็คแดง/ม่วงที่ยิงด้วย gear ไม่ใช่ตัวตี: Single-Shot Rifle (1500 ใส่ 1 ตัว) และ Pump-Action Shotgun (1200 ใส่ทั้งสนามศัตรู) เป็น removal หลัก · Suzaku บวกดาเมจนอกการต่อสู้ทุกใบ +200 · Shadowbeak ทำให้เป็นกลางคืน = AUTO ของ Pal ทำงานสองครั้ง · Medical Supplies / Zoe คืนตัวจาก graveyard มายิงซ้ำ',
  why: [
    ['gear ยิงดาเมจแทนการต่อสู้ 12 ใบ', 'ไม่ต้องแลกตัว ไม่ต้องกลัวบล็อก · Reptyro ค้นเจอ gear ◇6↓ เองได้ทุกเทิร์น'],
    ['Suzaku CONT +200 ดาเมจนอกการต่อสู้', 'Rifle 1500 → 1700 · Shotgun 1200 → 1400 กวาดสนามทีเดียว'],
    ['Interrupt 11 ใบ (Blazehowl · Blazehowl Noct · Foxparks Toasty)', 'ยกเลิกการโจมตีได้ตลอด — เด็คช้าแต่ไม่เคยตายฟรี'],
    ['15 unique / 50 ใบ', 'จั่วได้ของที่ต้องการเกือบทุกมือ ไม่มีใบตายในเด็ค']
  ],
  sections: [
    { name:'PAL · แดง', items:[
      { n:3, name:'Reptyro', sub:'Ore Gorger', code:'BP01-005', cost:8, tone:'red', slug:'w-bp01-005', role:'ลง = ได้ 3 Material · 1/เทิร์น จ่าย 3 Material ค้น 5 ใบดึง gear ◇6↓ ลงสนามฟรี (Rifle / Harness)' },
      { n:3, name:'Blazehowl', sub:'Hellflame Defender', code:'BP01-014', cost:7, tone:'red', slug:'w-bp01-014', role:'Power 1200 ตัวยืน · หรือทิ้งจากมือเป็น Interrupt ยกเลิกการโจมตี' },
      { n:1, name:'Suzaku', sub:'Hellfire Wings', code:'BP01-002', cost:7, tone:'red', lucky:true, slug:'w-bp01-002', role:'CONT ดาเมจนอกการต่อสู้ของการ์ดแดงทุกใบ +200 · ลงก็ยิงเองอีก 1 ครั้ง' },
      { n:4, name:'Foxparks', sub:'A Toasty Hug', code:'TD01-004', cost:4, tone:'red', slug:'w-etd01-005', role:'Interrupt ราคาถูกสุด ◇1 — ใบหลักที่ใช้กันเกมแพ้' },
      { n:4, name:'Foxparks', sub:'Light of Courage', code:'BP01-006', cost:2, tone:'red', slug:'w-bp01-006', role:'ตัวเปิด ◇1 Brave 300 · เป้าหมายของ Harness (ชื่อ Foxparks ได้สกิลเพิ่ม)' }
    ]},
    { name:'PAL · ม่วง', items:[
      { n:3, name:'Shadowbeak', sub:'Seed of Despair', code:'BP01-074', cost:8, tone:'purple', lucky:true, slug:'shadowbeak', role:'พัก = กลางคืน · กลางคืน AUTO ของ Pal ทำงาน 2 ครั้ง (Menasting คืนตัว 2 / Leezpunk ทิ้งมือ 2)' },
      { n:4, name:'Blazehowl Noct', sub:'Darkflame Defender', code:'TD02-017', cost:6, tone:'purple', slug:'blazehowl', role:'Interrupt อีก 4 ใบ · Power 900 ยืนบล็อกได้จริง' },
      { n:4, name:'Menasting', sub:'Darkness-Dwelling Scorpion', code:'BP01-084', cost:5, tone:'purple', lucky:true, slug:'menasting', role:'Retaliate ลากศัตรูตายด้วย · ตายแล้วคืน Pal ปกติจาก graveyard ขึ้นมือ' },
      { n:4, name:'Leezpunk', sub:'Treasure Bandit', code:'TD02-014', cost:3, tone:'purple', slug:'leezpunk', role:'◇1 ตัวเปิด · ตายแล้วศัตรูทิ้งมือ 1 — เป้าหมาย butcher ของ Shadowbeak' }
    ]},
    { name:'GEAR · removal หลัก', items:[
      { n:4, name:'Pump-Action Shotgun', sub:'Gear', code:'BP01-020', cost:7, tone:'red', slug:'w-bp01-020', role:'ลง = 1200 ใส่ Pal ศัตรูทุกตัว (มี Suzaku = 1400) — ใบปิดเกม' },
      { n:4, name:'Single-Shot Rifle', sub:'Gear', code:'TD01-010', cost:4, tone:'red', slug:'w-td01-010', role:'ลง = 1500 ใส่ 1 ตัว · ◇6↓ จึงดึงได้ด้วย Reptyro' },
      { n:4, name:"Foxparks' Harness", sub:'Gear', code:'BP01-019', cost:3, tone:'red', slug:'w-bp01-019', role:'+200 ให้ใครก็ได้ · ถ้าเป็น Foxparks ได้สกิลยิงตอนโจมตีเพิ่ม' }
    ]},
    { name:'EVENT', items:[
      { n:4, name:"Zoe's Strategy", sub:'Event', code:'BP01-095', cost:3, tone:'purple', slug:'zoe-rr', role:'เลือกโหมด: ลบทรัพยากรศัตรู 5 / คืน Pal จาก graveyard + ศัตรูทิ้งมือ / butcher → ลบ Pal' },
      { n:2, name:'Strike from the Darkness', sub:'Event', code:'TD02-021', cost:4, tone:'purple', slug:'strike', role:'ลบ Pal อะไรก็ได้ 1 ตัว ไม่สนขนาด — ไว้ตัวที่ยิงไม่ตาย' },
      { n:2, name:'Medical Supplies', sub:'Event', code:'TD02-022', cost:7, tone:'purple', slug:'medical', role:'คืน Pal ◇5↓ จาก graveyard ลงสนามแบบพัก (Menasting / Leezpunk / Foxparks)' }
    ]}
  ],
  turns: [
    ['T1–2 · 2–4 soul', 'Foxparks Light of Courage / Leezpunk ยืนรับ · ลง Harness ไว้ก่อนถ้าไม่มีอย่างอื่น'],
    ['T3 · 6 soul', 'Single-Shot Rifle ยิง 1500 ใส่ตัวคุ้มที่สุด (ไม่ต้องรอ) · หรือ Leezpunk + Zoe กดมือศัตรู'],
    ['T4 · 8 soul', 'Menasting ยืนเป็นกำแพง Retaliate · เก็บ Blazehowl/Foxparks ในมือไว้ Interrupt เสมอ'],
    ['T5 · 10 soul', 'Reptyro ลง = 3 Material แล้วเริ่มค้น Rifle ฟรีทุกเทิร์น · หรือ Suzaku ก่อนถ้าจะยิงชุดใหญ่'],
    ['T6+ · 12 soul', 'Pump-Action Shotgun กวาดสนาม (Suzaku อยู่ = 1400) · Shadowbeak พัก = กลางคืน ให้ AUTO ยิงซ้ำ · Medical Supplies คืนตัวมายิงอีก'],
    ['วิธีชนะ', 'ไม่แลกตัว: ยิงด้วย gear จนศัตรูไม่มีตัวลง แล้วให้ Reptyro/Blazehowl ตัว Strike 3 เก็บ 2–3 ครั้ง · การ์ด Interrupt 11 ใบคือชีวิตของเด็ค อย่าทิ้งทิ้ง']
  ],
  matchups: [
    ['vs แดง Aggro', 'Rifle ยิงตัว Brave ทันทีอย่ารอ · Menasting ยืนบล็อก Retaliate · Shotgun 1 ใบล้างสนามพลิกเกมได้เลย'],
    ['vs ฟ้า Rest-Lock', 'ไม่แคร์การสั่งพักมาก เพราะ gear ยิงเองไม่ต้องใช้ตัวตี · Strike from the Darkness เก็บ Relaxaurus / Jormuntide'],
    ['vs เขียว Ramp', 'Zoe โหมดแรกลบ Berries 5 ลูกชะลอ ramp · เก็บ Shotgun ไว้ช่วงที่ตัวใหญ่ลงมาพร้อมกัน']
  ]
};

// การ์ดทั้งชุดที่ยังไม่มีในสต๊อก (แสดงเป็น monotone จนกว่าจะเพิ่มจำนวน) — no เริ่ม 36
const WISH_ROWS = [
  // Red · BP01
  ['BP01-002','Suzaku','Hellfire Wings',7,'red','RR','Pal/Red','LUCKY'],
  ['BP01-003','Gobfin Ignis','Blazing Hothead',4,'red','R','Pal/Red'],
  ['BP01-004','Bushi','Ephemeral Blade',5,'red','R','Pal/Red','LUCKY'],
  ['BP01-005','Reptyro','Ore Gorger',8,'red','R','Pal/Red'],
  ['BP01-006','Foxparks','Light of Courage',2,'red','U','Pal/Red'],
  ['BP01-007','Kitsun','Wyrmbane Fangs',5,'red','U','Pal/Red'],
  ['BP01-008','Sparkit','Hazardous Contact',3,'red','U','Pal/Red'],
  ['BP01-009','Univolt','Valiant Thunderclap',4,'red','U','Pal/Red'],
  ['BP01-010','Ragnahawk','Emberwing Striker',6,'red','U','Pal/Red','LUCKY'],
  ['BP01-011','Rooby','Brave Sparks',2,'red','C','Pal/Red'],
  ['BP01-012','Flambelle','Scorching Tears',3,'red','C','Pal/Red'],
  ['BP01-013','Pyrin','Cinder Steed',6,'red','C','Pal/Red'],
  ['BP01-014','Blazehowl','Hellflame Defender',7,'red','C','Pal/Red'],
  ['BP01-015','Mounted Machine Gun','Structure',4,'red','R','Structure/Red'],
  ['BP01-016','Primitive Furnace','Structure',2,'red','U','Structure/Red'],
  ['BP01-017','Flame Cauldron','Structure',2,'red','U','Structure/Red'],
  ['BP01-018','Alarm Bell','Structure',3,'red','C','Structure/Red'],
  ['BP01-019',"Foxparks' Harness",'Gear',3,'red','R','Gear/Red'],
  ['BP01-020','Pump-Action Shotgun','Gear',7,'red','R','Gear/Red'],
  ['BP01-021','Makeshift Handgun','Gear',2,'red','C','Gear/Red'],
  ['BP01-022','Stone Pickaxe','Gear',3,'red','C','Gear/Red'],
  ['BP01-023',"Axel's Strategy",'Event',4,'red','RR','Event/Red'],
  ['BP01-024','Treasure Chest Found!','Event',2,'red','C','Event/Red'],
  // Blue · BP01
  ['BP01-029','Azurobe','Water Dragon Waltz',6,'blue','R','Pal/Blue','LUCKY'],
  ['BP01-030','Reptyro Cryst','Glacial Devourer',8,'blue','R','Pal/Blue'],
  ['BP01-032','Fuack','Manic Wave Ripper',2,'blue','U','Pal/Blue'],
  ['BP01-033','Wumpo','Frostpeak Sentinel',7,'blue','U','Pal/Blue','LUCKY'],
  ['BP01-034','Teafant','Fountain of Cheer',2,'blue','C','Pal/Blue'],
  ['BP01-035','Mau Cryst','Harbinger of Riches',3,'blue','C','Pal/Blue'],
  ['BP01-036','Celaray','Loop De Loop',3,'blue','C','Pal/Blue'],
  ['BP01-037','Surfent','Swift Swimmer',4,'blue','C','Pal/Blue'],
  ['BP01-039','Antique Curtain','Structure',5,'blue','R','Structure/Blue'],
  ['BP01-040','Antique Dresser','Structure',4,'blue','U','Structure/Blue'],
  ['BP01-041','Hot Spring','Structure',6,'blue','U','Structure/Blue'],
  ['BP01-042','Antique Mirror','Structure',1,'blue','C','Structure/Blue'],
  ['BP01-043','Sphere Workbench','Structure',2,'blue','C','Structure/Blue'],
  ['BP01-045','Grappling Gun','Gear',5,'blue','U','Gear/Blue'],
  ['BP01-046',"Victor's Strategy",'Event',3,'blue','RR','Event/Blue'],
  // Green · BP01
  ['BP01-049','Lyleen','Blessing of the Goddess',7,'green','RR','Pal/Green','LUCKY'],
  ['BP01-050','Digtoise','Seismic Drillback',6,'green','RR','Pal/Green','LUCKY'],
  ['BP01-051','Petallia','Sweet Blessings',6,'green','R','Pal/Green'],
  ['BP01-052','Rushoar','Reckless Destruction',2,'green','R','Pal/Green'],
  ['BP01-053','Elizabee','Queen of the Flower Garden',5,'green','R','Pal/Green','LUCKY'],
  ['BP01-054','Warsect','Iron Fortress',8,'green','R','Pal/Green'],
  ['BP01-055','Vaelet','Bewitching Blossom',8,'green','U','Pal/Green','LUCKY'],
  ['BP01-056','Lifmunk','Promising Newbie',3,'green','C','Pal/Green'],
  ['BP01-057','Dumud','Mellow Bounty',4,'green','U','Pal/Green'],
  ['BP01-058','Gumoss','Curious Sprout',4,'green','U','Pal/Green'],
  ['BP01-059','Digtoise','Keen Needleback',5,'green','U','Pal/Green'],
  ['BP01-060','Tanzee','Cheerful Worker',2,'green','C','Pal/Green'],
  ['BP01-061','Beegarde','Knight of the Flower Garden',3,'green','C','Pal/Green'],
  ['BP01-062','Wumpo Botan','Tropical Sentinel',7,'green','C','Pal/Green'],
  ['BP01-063','Breeding Farm','Structure',3,'green','R','Structure/Green'],
  ['BP01-064','Cola Vending Machine','Structure',6,'green','R','Structure/Green'],
  ['BP01-065','Feed Box','Structure',2,'green','U','Structure/Green'],
  ['BP01-066','Ranch','Structure',2,'green','U','Structure/Green'],
  ['BP01-067','No Pals Beyond Sign','Structure',5,'green','C','Structure/Green'],
  ['BP01-068',"Digtoise's Headband",'Gear',3,'green','U','Gear/Green'],
  ['BP01-069','Farming Hat','Gear',3,'green','C','Gear/Green'],
  ['BP01-070',"Lily's Strategy",'Event',3,'green','RR','Event/Green'],
  ['BP01-071','Found an Egg!','Event',2,'green','C','Event/Green'],
  ['BP01-072','Blessing of the Flower Spirit','Event',3,'green','C','Event/Green'],
  // Purple · BP01
  ['BP01-073','Helzephyr','Wings of the Moonless Night',7,'purple','RR','Pal/Purple','LUCKY'],
  ['BP01-081','Lovander','Heartstealer',5,'purple','C','Pal/Purple'],
  ['BP01-083','Vanwyrm','Marauder of the Skies',4,'purple','U','Pal/Purple'],
  ['BP01-086','Nox','The Silent One',3,'purple','C','Pal/Purple'],
  ['BP01-087','Loupmoon','Glinting Moonlight',4,'purple','C','Pal/Purple'],
  ['BP01-088','Lamp','Structure',4,'purple','R','Structure/Purple'],
  ['BP01-091','Wooden Wall','Structure',3,'purple','C','Structure/Purple'],
  ['BP01-092','Viewing Cage','Structure',3,'purple','C','Structure/Purple'],
  ['BP01-093','Meat Cleaver','Gear',2,'purple','R','Gear/Purple'],
  ['BP01-096','Dark Cannon','Event',3,'purple','C','Event/Purple','QUICK'],
  // TD02 Green · Purple
  ['TD02-001','Mossanda','Guard Captain',5,'green','TD','Pal/Green'],
  ['TD02-002','Gumoss','Dreamy Seedling',2,'green','TD','Pal/Green','','webp'],
  ['TD02-003','Flopie','Snack Lover',3,'green','TD','Pal/Green'],
  ['TD02-004','Dinossom','Radiant Fragrance',4,'green','TD','Pal/Green'],
  ['TD02-005','Eikthyrdeer Terra','Guardian of Nature',6,'green','TD','Pal/Green'],
  ['TD02-006','Broncherry','Brimming Adoration',7,'green','TD','Pal/Green','LUCKY'],
  ['TD02-007','Mammorest','Roar of the Wilds',8,'green','TD','Pal/Green','LUCKY'],
  ['TD02-008','Berry Plantation','Structure',1,'green','TD','Structure/Green'],
  ['TD02-009','Campfire','Structure',3,'green','TD','Structure/Green'],
  ['TD02-010','Refined Metal Spear','Gear',6,'green','TD','Gear/Green'],
  ['TD02-011','Stone Blast','Event',2,'green','TD','Event/Green','QUICK'],
  ['TD02-013','Hoocrates','Embodiment of Wisdom',2,'purple','TD','Pal/Purple'],
  ['TD02-015','Cawgnito','Looming Shadow',4,'purple','TD','Pal/Purple'],
  ['TD02-016','Incineram','Lurking Stalker',5,'purple','TD','Pal/Purple'],
  ['TD02-018','Felbat','Lifestealer',7,'purple','TD','Pal/Purple','LUCKY'],
  ['TD02-019','Hanging Trap','Structure',2,'purple','TD','Structure/Purple'],
  ['TD02-020','Cawgnito Hat','Gear',4,'purple','TD','Gear/Purple'],
  ['TD02-023','Cattiva','My First Pal',2,'gray','TD','Pal/Colorless','','webp'],
  ['TD02-024','Chikipi','My First Pal',2,'gray','TD','Pal/Colorless','','webp'],
  // Eternal Ascent · การ์ดที่หลุด (LEAK 20 พ.ย. 2026) — เลขการ์ดที่ลงท้าย L0x เป็นเลขชั่วคราว จนกว่าจะประกาศเลขจริง
  ['TD04-L01','Depresso','Caffeine Intake',3,'purple','TD','Pal/Purple','','png','','LEAK 20 พ.ย. 2026 · Eternal Ascent · TD04 ฟ้าม่วง · เลขการ์ดชั่วคราว'],
  ['TD04-L02','Pengullet','Invincible Bullet?',5,'blue','TD','Pal/Blue','','png','','LEAK 20 พ.ย. 2026 · Eternal Ascent · TD04 ฟ้าม่วง · เลขการ์ดชั่วคราว · Rank Up'],
  ['TD03-016','Petallia','New Life',6,'green','TD','Pal/Green','','png','','LEAK 20 พ.ย. 2026 · Eternal Ascent · TD03 แดงเขียว'],
  ['TD03-L01','Suzaku','Manifested Blaze',8,'red','TD','Pal/Red','','png','','LEAK 20 พ.ย. 2026 · Eternal Ascent · TD03 แดงเขียว · เลขการ์ดชั่วคราว'],
  ['ETD01-024','Ribbuny','Little Princess',2,'gray','TSR','Pal/Colorless','','jpg','','Error print — ไม่มีคำว่า STRIKE บนการ์ด (misprint version)'],
  ['ETD01-006','Stone Pit','Structure',1,'red','TD','Structure/Red'],
  ['ETD01-005','Foxparks','A Toasty Hug',4,'red','TSR','Pal/Red','QUICK','jpg'],
  ['BP01-049-OSR','Lyleen','Blessing of the Goddess',7,'gold','OSR','Pal/Green','LUCKY'],
  ['BP01-076','Tombat','Out of Nowhere!?',5,'purple','R','Pal/Purple','','','','',{ file:'Tombat Out of Nowhere' }],
  ["BP01-032-PR", "Fuack", "Manic Wave Ripper", 2, "blue", "PR", "Pal/Blue", "", "png"],
  ["EPR-001", "Lamball", "My First Pal", 2, "gray", "PR", "Pal/Colorless", "", "jpg"],
  ["EPR-006", "Gumoss", "Curious Sprout", 4, "green", "PR", "Pal/Green", "", "png"],
  ['BP01-079SR','Depresso','Late Night Hustler',2,'gold','SR','Pal/Purple'],
  ['BP01-080SR','Daedream','First Slumber',2,'gold','SR','Pal/Purple'],
  ['BP01-093SR','Meat Cleaver','Gear',2,'gold','SR','Gear/Purple'],
  ['TD02-014TSR','Leezpunk','Treasure Bandit',3,'gold','TSR','Pal/Purple'],
  ['BP01-076SR','Tombat','Out of Nowhere!?',5,'gold','SR','Pal/Purple','','','','',{ file:'Tombat Out of Nowhere' }],
  ['BP01-081SR','Lovander','Heartstealer',5,'gold','SR','Pal/Purple'],
  ['BP01-088SR','Lamp','Structure',4,'gold','SR','Structure/Purple'],
  ['BP01-095OSR',"Zoe's Strategy",'Event',3,'gold','OSR','Event/Purple'],
  ['BP01-095SP',"Zoe's Strategy",'Event',3,'gold','SP','Event/Purple'],
  ['TD02-016TSR','Incineram','Lurking Stalker',5,'gold','TSR','Pal/Purple'],
  ['TD02-021TSR','Strike from the Darkness','Event',4,'gold','TSR','Event/Purple'],
  ['BP01-077SR','Pyrin Noct','Steed of Azure Flames',7,'gold','SR','Pal/Purple'],
  ['BP01-078','Lyleen Noct','Providence of the Goddess',8,'purple','R','Pal/Purple'],
  ['BP01-078SR','Lyleen Noct','Providence of the Goddess',8,'gold','SR','Pal/Purple'],
  ['BP01-075OSR','Katress','Abyssal Sorcerer',6,'gold','OSR','Pal/Purple','LUCKY'],
  ['BP01-075SP','Katress','Abyssal Sorcerer',6,'gold','SP','Pal/Purple','LUCKY'],
  ['TD02-018TSR','Felbat','Lifestealer',7,'gold','TSR','Pal/Purple','LUCKY'],
  ['BP01-073OSR','Helzephyr','Wings of the Moonless Night',7,'gold','OSR','Pal/Purple','LUCKY'],
  ['BP01-073SSP','Helzephyr','Wings of the Moonless Night',7,'gold','SSP','Pal/Purple','LUCKY'],
  ['TD02-012TSP','Astegon','Aegis Wyvern of Death',8,'gold','TSP','Pal/Purple','LUCKY'],
  ['TD02-012TSR','Astegon','Aegis Wyvern of Death',8,'gold','TSR','Pal/Purple','LUCKY'],
  ['BP01-074OSR','Shadowbeak','Seed of Despair',8,'gold','OSR','Pal/Purple','LUCKY'],
  ['BP01-074SP','Shadowbeak','Seed of Despair',8,'gold','SP','Pal/Purple','LUCKY'],
  ['BP01-052SR','Rushoar','Reckless Destruction',2,'gold','SR','Pal/Green'],
  ['BP01-056SR','Lifmunk','Promising Newbie',3,'gold','SR','Pal/Green'],
  ['BP01-063SR','Breeding Farm','Structure',3,'gold','SR','Structure/Green'],
  ['TD02-003TSR','Flopie','Snack Lover',3,'gold','TSR','Pal/Green'],
  ['BP01-058TSR','Gumoss','Curious Sprout',4,'gold','TSR','Pal/Green','','','w-bp01-058'],
  ['TD02-008TSR','Berry Plantation','Structure',1,'gold','TSR','Structure/Green'],
  ['BP01-070OSR',"Lily's Strategy",'Event',3,'gold','OSR','Event/Green'],
  ['BP01-070SP',"Lily's Strategy",'Event',3,'gold','SP','Event/Green'],
  ['TD02-001TSP','Mossanda','Guard Captain',5,'gold','TSP','Pal/Green'],
  ['TD02-001TSR','Mossanda','Guard Captain',5,'gold','TSR','Pal/Green'],
  ['BP01-053SR','Elizabee','Queen of the Flower Garden',5,'gold','SR','Pal/Green','LUCKY'],
  ['BP01-050OSR','Digtoise','Seismic Drillback',6,'gold','OSR','Pal/Green','LUCKY'],
  ['BP01-050SP','Digtoise','Seismic Drillback',6,'gold','SP','Pal/Green','LUCKY'],
  ['BP01-051OSR','Petallia','Sweet Blessings',6,'gold','OSR','Pal/Green'],
  ['BP01-051SP','Petallia','Sweet Blessings',6,'gold','SP','Pal/Green'],
  ['BP01-064SR','Cola Vending Machine','Structure',6,'gold','SR','Structure/Green'],
  ['TD02-006TSR','Broncherry','Brimming Adoration',7,'gold','TSR','Pal/Green','LUCKY'],
  ['BP01-049SSP','Lyleen','Blessing of the Goddess',7,'gold','SSP','Pal/Green','LUCKY'],
  ['TD02-007TSR','Mammorest','Roar of the Wilds',8,'gold','TSR','Pal/Green','LUCKY'],
  ['BP01-054SR','Warsect','Iron Fortress',8,'gold','SR','Pal/Green'],
  ['BP01-055SR','Vaelet','Bewitching Blossom',8,'gold','SR','Pal/Green','LUCKY'],
  ['BP01-025OSR','Chillet','Dragon Whisperer',5,'gold','OSR','Pal/Blue','LUCKY'],
  ['BP01-025SSP','Chillet','Dragon Whisperer',5,'gold','SSP','Pal/Blue','LUCKY'],
  ['BP01-026OSR','Relaxaurus','Hungry Gunner',7,'gold','OSR','Pal/Blue'],
  ['BP01-026SP','Relaxaurus','Hungry Gunner',7,'gold','SP','Pal/Blue'],
  ['BP01-027SP','Jormuntide','Surging Sea Serpent',8,'gold','SP','Pal/Blue','LUCKY'],
  ['BP01-029SR','Azurobe','Water Dragon Waltz',6,'gold','SR','Pal/Blue','LUCKY'],
  ['BP01-030SR','Reptyro Cryst','Glacial Devourer',8,'gold','SR','Pal/Blue'],
  ['BP01-031SR','Penking','Mighty Warrior of the Deep',5,'gold','SR','Pal/Blue'],
  ['BP01-039SR','Antique Curtain','Structure',5,'gold','SR','Structure/Blue'],
  ['BP01-044SR','Pengullet Rocket Launcher','Gear',4,'gold','SR','Gear/Blue'],
  ['BP01-046OSR',"Victor's Strategy",'Event',3,'gold','OSR','Event/Blue'],
  ['BP01-046SP',"Victor's Strategy",'Event',3,'gold','SP','Event/Blue'],
  ['BP01-047SR','Pal Sphere','Event',4,'gold','SR','Event/Blue'],
  ['TD01-013','Jolthog Cryst','Stoic Yet Innocent',2,'blue','TD','Pal/Blue'],
  ['TD01-015','Hangyu Cryst','Frigid Wanderer',4,'blue','TD','Pal/Blue'],
  ['TD01-016','Reindrix','Icy Gaze',5,'blue','TD','Pal/Blue'],
  ['TD01-017','Suzaku Aqua','Way of the Current',7,'blue','TD','Pal/Blue','LUCKY'],
  ['TD01-017TSR','Suzaku Aqua','Way of the Current',7,'gold','TSR','Pal/Blue','LUCKY'],
  ['TD01-018','Mammorest Cryst','Roar of the Tundra',8,'blue','TD','Pal/Blue','LUCKY'],
  ['TD01-018TSR','Mammorest Cryst','Roar of the Tundra',8,'gold','TSR','Pal/Blue','LUCKY'],
  ['TD01-019','Antique Wooden Chair','Structure',2,'blue','TD','Structure/Blue'],
  ['TD01-020','Primitive Workbench','Structure',3,'blue','TD','Structure/Blue'],
  ['TD01-021','Single-Shot Sphere Launcher','Gear',3,'blue','TD','Gear/Blue'],
  ['TD01-022','Crystal Breath','Event',2,'blue','TD','Event/Blue','QUICK'],
  ['TD01-022TSR','Crystal Breath','Event',2,'gold','TSR','Event/Blue','QUICK'],
  ['TD01-012TSP','Elphidran Aqua','Gentle Ripples',6,'gold','TSP','Pal/Blue'],
  ['TD01-012TSR','Elphidran Aqua','Gentle Ripples',6,'gold','TSR','Pal/Blue'],
  ['TD01-014TSR','Pengullet','Frequent Flyer',3,'gold','TSR','Pal/Blue'],
  ['BP01-001','Jormuntide Ignis','Savage Lava Dragon',8,'red','RR','Pal/Red','LUCKY'],
  ['BP01-001OSR','Jormuntide Ignis','Savage Lava Dragon',8,'gold','OSR','Pal/Red','LUCKY'],
  ['BP01-001SSP','Jormuntide Ignis','Savage Lava Dragon',8,'gold','SSP','Pal/Red','LUCKY'],
  ['BP01-002OSR','Suzaku','Hellfire Wings',7,'gold','OSR','Pal/Red','LUCKY'],
  ['BP01-002SP','Suzaku','Hellfire Wings',7,'gold','SP','Pal/Red','LUCKY'],
  ['BP01-003SR','Gobfin Ignis','Blazing Hothead',4,'gold','SR','Pal/Red'],
  ['BP01-004SR','Bushi','Ephemeral Blade',5,'gold','SR','Pal/Red','LUCKY'],
  ['BP01-005SR','Reptyro','Ore Gorger',8,'gold','SR','Pal/Red'],
  ['BP01-006SR','Foxparks','Light of Courage',2,'gold','SR','Pal/Red'],
  ['BP01-007SR','Kitsun','Wyrmbane Fangs',5,'gold','SR','Pal/Red'],
  ['BP01-015SP','Mounted Machine Gun','Structure',4,'gold','SP','Structure/Red'],
  ['BP01-019SR',"Foxparks' Harness",'Gear',3,'gold','SR','Gear/Red'],
  ['BP01-020SR','Pump-Action Shotgun','Gear',7,'gold','SR','Gear/Red'],
  ['BP01-023OSR',"Axel's Strategy",'Event',4,'gold','OSR','Event/Red'],
  ['BP01-023SP',"Axel's Strategy",'Event',4,'gold','SP','Event/Red'],
  ['TD01-001','Grizzbolt','Rumbling Tank',7,'red','TDR','Pal/Red','LUCKY'],
  ['TD01-001TSP','Grizzbolt','Rumbling Tank',7,'gold','TSP','Pal/Red','LUCKY'],
  ['TD01-001TSR','Grizzbolt','Rumbling Tank',7,'gold','TSR','Pal/Red','LUCKY'],
  ['TD01-002','Jolthog','Shocking Yet Innocent',2,'red','TD','Pal/Red'],
  ['TD01-003','Kelpsea Ignis','Balmy Magma',3,'red','TD','Pal/Red'],
  ['TD01-004','Foxparks','A Toasty Hug',4,'red','TD','Pal/Red'],
  ['TD01-005','Arsox','Burning Spoils',5,'red','TD','Pal/Red'],
  ['TD01-005TSR','Arsox','Burning Spoils',5,'gold','TSR','Pal/Red'],
  ['TD01-006','Mossanda Lux','Vanguard Captain',6,'red','TD','Pal/Red'],
  ['TD01-007','Blazamut','Molten Sovereign',8,'red','TD','Pal/Red','LUCKY'],
  ['TD01-007TSR','Blazamut','Molten Sovereign',8,'gold','TSR','Pal/Red','LUCKY'],
  ['TD01-008','Stone Pit','Structure',1,'red','TD','Structure/Red'],
  ['TD01-009','Weapon Workbench','Structure',3,'red','TD','Structure/Red'],
  ['TD01-010','Single-Shot Rifle','Gear',4,'red','TD','Gear/Red'],
  ['TD01-011','Ignis Breath','Event',2,'red','TD','Event/Red','QUICK'],
  ['TD01-011TSR','Ignis Breath','Event',2,'gold','TSR','Event/Red','QUICK'],
  ['TD02-023TSR','Cattiva','My First Pal',2,'gold','TSR','Pal/Colorless','','','w-td02-023'],
  ['TD02-024TSR','Chikipi','My First Pal',2,'gold','TSR','Pal/Colorless','','','w-td02-024'],
  ['BP01-100','The Adventure Begins','Event',2,'gray','U','Event/Colorless'],
  ['BP01-100SR','The Adventure Begins','Event',2,'gold','SR','Event/Colorless'],
  ['TD01-023','Lamball','My First Pal',2,'gray','TD','Pal/Colorless','','','w-epr-001'],
  ['TD01-023TSR','Lamball','My First Pal',2,'gold','TSR','Pal/Colorless','','','w-epr-001'],
  ['TD01-024','Ribbuny','Little Princess',2,'gray','TD','Pal/Colorless','','','w-etd01-024'],
  ['BP01-099','Direhowl','Proud Fang',3,'gray','C','Pal/Colorless'],
  // Soul (Dawn of Palpagos) — การ์ดวิญญาณ ไม่นับในเด็ค 50 ใบ
  ['SOUL-01','Soul','Red Blue · PR',0,'red','SOUL','Soul','','','','',{ code:'PR-SOUL-006', file:'Soul Red Blue' }],
  ['SOUL-02','Soul','Green Purple · PR',0,'green','SOUL','Soul','','','','',{ code:'PR-SOUL-005', file:'Soul Green Purple' }],
  ['SOUL-03','Soul','Purple Foil · PR',0,'gold','SOUL','Soul','','','','',{ code:'PR-SOUL-007', file:'Soul Foil' }],
  ['SOUL-05','Soul','ESOUL-001 · TD',0,'gray','SOUL','Soul','','','','',{ code:'ESOUL-001', file:'Soul ESOUL-001' }],
  ['SOUL-06','Soul','ESOUL-002 · SSS',0,'gold','SOUL','Soul','','','','',{ code:'ESOUL-002', file:'Soul ESOUL-002' }],
  ['SOUL-07','Soul','ESOUL-003 · PR',0,'gray','SOUL','Soul','','','','',{ code:'ESOUL-003', file:'Soul ESOUL-003' }],
  ['SOUL-08','Soul','ESOUL-004 · PR',0,'gray','SOUL','Soul','','','','',{ code:'ESOUL-004', file:'Soul ESOUL-004' }],
  ['SOUL-09','Soul','ESOUL-008 · PR (Nox)',0,'purple','SOUL','Soul','','','','',{ code:'ESOUL-008', file:'Soul ESOUL-008' }],
  ["EPR-003", "Blazehowl", "Hellflame Defender", 7, "red", "PR", "Pal/Red", "", "jpg"],
  // BP02 · Legends Awaken — การ์ดที่เปิดเผยแล้ว (palworldtcg.gg · 2026-10-12) · cost 0 / rar TBA = ยังไม่ยืนยัน
  ["BP02-001", "Orserk", "Thunderclap Roar", 8, "red", "RR", "Pal/Red", ""],
  ["BP02-003", "Faleris", "Marcus' Soaring Wings", 8, "red", "RR", "Pal/Red", "LUCKY"],
  ["BP02-007", "Flambelle", "Feverish Tears", 2, "red", "U", "Pal/Red", ""],
  ["BP02-010", "Relaxaurus Lux", "Party Time", 7, "red", "U", "Pal/Red", "LUCKY"],
  ["BP02-013", "Foxparks", "Breathing Practice", 3, "red", "C", "Pal/Red", ""],
  ["BP02-018", "Rocket Launcher", "Gear", 8, "red", "R", "Gear/Red", ""],
  ["BP02-022", "Axel's Gambit", "Event", 5, "red", "R", "Event/Red", "LUCKY"],
  ["BP02-023", "Marcus' Turf", "Event", 1, "red", "R", "Event/Red", ""],
  ["BP02-025", "Frostallion", "Everlasting Rime", 8, "blue", "RR", "Pal/Blue", "LUCKY"],
  ["BP02-026", "Foxcicle", "Aurora Hymn", 5, "blue", "R", "Pal/Blue", ""],
  ["BP02-027", "Sweepa", "Record Breaker", 6, "blue", "R", "Pal/Blue", "LUCKY"],
  ["BP02-028", "Sibelyx", "Silken Spinner", 7, "blue", "R", "Pal/Blue", "LUCKY"],
  ["BP02-029", "Jolthog Cryst", "Midwinter Awakening", 3, "blue", "U", "Pal/Blue", ""],
  ["BP02-034", "Swee", "Hibernating Together", 3, "blue", "C", "Pal/Blue", ""],
  ["BP02-044", "Frostallion Saddle", "Gear", 2, "blue", "U", "Gear/Blue", ""],
  ["BP02-045", "Sweepa Saddle", "Gear", 3, "blue", "U", "Gear/Blue", ""],
  ["BP02-046", "Victor's Gambit", "Event", 2, "blue", "RR", "Event/Blue", "LUCKY"],
  ["BP02-049", "Anubis", "Noble Reaper", 7, "green", "RR", "Pal/Green", "LUCKY"],
  ["BP02-051", "Bristla", "Regal Gaze", 4, "green", "R", "Pal/Green", ""],
  ["BP02-055", "Beegarde", "Faithful Honor", 2, "green", "U", "Pal/Green", ""],
  ["BP02-056", "Lifmunk", "Hidden Power", 3, "green", "U", "Pal/Green", ""],
  ["BP02-068", "Lifmunk's Submachine Gun", "Gear", 2, "green", "R", "Gear/Green", ""],
  ["BP02-071", "Lily's Gambit", "Event", 5, "green", "RR", "Event/Green", "LUCKY"],
  ["BP02-072", "Seed Machine Gun", "Event", 1, "green", "U", "Event/Green", ""],
  ["BP02-073", "Frostallion Noct", "Eternal Darkness", 8, "purple", "RR", "Pal/Purple", "LUCKY"],
  ["BP02-074", "Selyne", "Saya's Moonlit Beacon", 8, "purple", "RR", "Pal/Purple", ""],
  ["BP02-080", "Mau", "Greed Beckons", 3, "purple", "U", "Pal/Purple", ""],
  ["BP02-092", "Frostallion Noct Saddle", "Gear", 2, "purple", "U", "Gear/Purple", ""],
  ["BP02-094", "Zoe's Gambit", "Event", 6, "purple", "RR", "Event/Purple", "LUCKY"],
  ["BP02-097", "Jetragon", "Legendary Guardian Dragon", 8, "gray", "RR", "Pal/Colorless", "LUCKY"],
  ["BP02-097SP","Jetragon","Legendary Guardian Dragon",8,"gold","SP","Pal/Colorless","LUCKY"],
  ["BP02-099", "Eikthyrdeer", "Warden of the Woods", 6, "gray", "C", "Pal/Colorless", ""],
  ["BP02-095", "Saya's Crescent Moon", "Event", 3, "purple", "R", "Event/Purple", ""],
  ["BP02-082", "Daedream", "Blissful Dreams", 2, "purple", "C", "Pal/Purple", ""],
  // ⚠ no = 36 + index — เพิ่มแถวใหม่ต่อท้ายเท่านั้น ห้ามแทรกกลาง (เลขรูปทุกใบหลังจุดแทรกจะเลื่อน)
  // SS01 · Sleeve & Card Set Vol.1 (2026-10-16) — แสดงรวมในแท็บ BP02
  ["SS01-001","Grizzbolt","Cascading Voltage",6,"red","R","Pal/Red",""],
  ["SS01-001OSR","Grizzbolt","Cascading Voltage",6,"gold","OSR","Pal/Red",""],
  ["SS01-002","Chillet","Final Frostneedle",6,"blue","R","Pal/Blue",""],
  ["SS01-002OSR","Chillet","Final Frostneedle",6,"gold","OSR","Pal/Blue",""],
  ["SS01-003","Depresso","Midnight Overdrive",3,"purple","R","Pal/Purple",""],
  ["SS01-003OSR","Depresso","Midnight Overdrive",3,"gold","OSR","Pal/Purple",""],
  ["SS01-004","Cattiva","Brimming Bravado",3,"gray","R","Pal/Colorless",""],
  ["SS01-004OSR","Cattiva","Brimming Bravado",3,"gold","OSR","Pal/Colorless",""],
  ["SS01-005","Quivern","Breath of the Wyvern",6,"gray","R","Pal/Colorless","LUCKY"],
  ["SS01-005OSR","Quivern","Breath of the Wyvern",6,"gold","OSR","Pal/Colorless","LUCKY"],
  ["BP02-004", "Chillet Ignis", "Ember-Clad Dragon", 5, "red", "R", "Pal/Red", ""],
  ["BP02-009", "Arsox", "Blazing Fury", 6, "red", "U", "Pal/Red", ""],
  ["BP02-033", "Pengullet", "Locked and Loaded", 2, "blue", "C", "Pal/Blue", ""],
  ["BP02-043", "Stun Baton", "Gear", 8, "blue", "R", "Gear/Blue", ""],
  ["BP02-050", "Mammorest", "Gaia Crusher", 8, "green", "RR", "Pal/Green", ""],
  ["BP02-063", "Beware of Mammorest Sign", "Structure", 6, "green", "R", "Structure/Green", ""],
  ["BP02-001SSP", "Orserk", "Thunderclap Roar", 8, "gold", "SSP", "Pal/Red", ""],
  ["BP02-025SSP", "Frostallion", "Everlasting Rime", 8, "gold", "SSP", "Pal/Blue", "LUCKY"],
  ["BP02-049SSP", "Anubis", "Noble Reaper", 7, "gold", "SSP", "Pal/Green", "LUCKY"],
  ["BP02-073SSP", "Frostallion Noct", "Eternal Darkness", 8, "gold", "SSP", "Pal/Purple", "LUCKY"],
  ["BP02-097SSP", "Jetragon", "Legendary Guardian Dragon", 8, "gold", "SSP", "Pal/Colorless", "LUCKY"],
  ["BP01-038-PR", "Cryolinx", "Arctic Ordeal", 6, "blue", "PR", "Pal/Blue", "", "png"],
  ["BP01-012-PR", "Flambelle", "Scorching Tears", 3, "red", "PR", "Pal/Red", "", "png"],
  // BP02 reveal 2026-10-18
  ["BP02-087", "Electric Medicine Workbench", "Structure", 4, "purple", "R", "Structure/Purple", ""],
  ["BP02-077", "Shroomer Noct", "Spores of the Void", 5, "purple", "R", "Pal/Purple", "LUCKY"],
  // BP02 reveal 2026-10-19
  ["BP02-075", "Tombat", "Resonance of Shadows", 4, "purple", "R", "Pal/Purple", ""],
  ["BP02-079", "Nox", "One-Way Ticket", 3, "purple", "U", "Pal/Purple", ""],
  // BP02 reveal 2026-10-20
  ["BP02-075SP", "Tombat", "Resonance of Shadows", 4, "gold", "SP", "Pal/Purple", ""],
  // BP02 reveal 2026-10-20 (เรทปกติยังไม่ประกาศ)
  ["BP02-002SP", "Katress Ignis", "Scathing Counter", 6, "gold", "SP", "Pal/Red", "LUCKY"],
  // BP02 reveal 2026-10-21
  ["BP02-069", "Refined Metal Axe", "Gear", 4, "green", "C", "Gear/Green", ""],
  ["BP02-054", "Quivern Botan", "Meadow's Grace", 8, "green", "R", "Pal/Green", "LUCKY"],
  ["BP02-100", "Awakening of Legends", "Event", 2, "gray", "C", "Event/Colorless", ""],
  ["BP02-051SP", "Bristla", "Regal Gaze", 4, "gold", "SP", "Pal/Green", ""],
  // BP02 reveal 2026-10-22
  ["BP02-094SP", "Zoe's Gambit", "Event", 6, "gold", "SP", "Event/Purple", "LUCKY"],
  // SP ของใบที่มี SSP (ใช้รูปเดียวกับ SSP) — 2026-10-22
  ['BP01-073SP','Helzephyr','Wings of the Moonless Night',7,'gold','SP','Pal/Purple','LUCKY'],
  ['BP01-049SP','Lyleen','Blessing of the Goddess',7,'gold','SP','Pal/Green','LUCKY'],
  ['BP01-025SP','Chillet','Dragon Whisperer',5,'gold','SP','Pal/Blue','LUCKY'],
  ['BP02-001SP','Orserk','Thunderclap Roar',8,'gold','SP','Pal/Red'],
  ['BP02-025SP','Frostallion','Everlasting Rime',8,'gold','SP','Pal/Blue','LUCKY'],
  ['BP02-049SP','Anubis','Noble Reaper',7,'gold','SP','Pal/Green','LUCKY'],
  ['BP02-073SP','Frostallion Noct','Eternal Darkness',8,'gold','SP','Pal/Purple','LUCKY'],
  // BP02 reveal 2026-10-22
  ["BP02-027SP", "Sweepa", "Record Breaker", 6, "gold", "SP", "Pal/Blue", "LUCKY"],
  ["BP02-026SP", "Foxcicle", "Aurora Hymn", 5, "gold", "SP", "Pal/Blue", ""],
  // BP02 leak 2026-10-23
  ["BP02-090", "Fine Bed", "Structure", 3, "purple", "C", "Structure/Purple", ""],
  ["BP02-066", "Pioneer Ranch", "Structure", 1, "green", "C", "Structure/Green", ""],
  ["BP02-048", "Iceberg", "Event", 3, "blue", "C", "Event/Blue", ""],
  ["BP02-037", "Kingpaca Cryst", "Frosty Solitude", 6, "blue", "C", "Pal/Blue", ""],
  ["BP02-083SR", "Wixen Noct", "Honeyed Temptation", 7, "gold", "SR", "Pal/Purple", ""],
  ["BP02-078SR", "Kitsun Noct", "Umbral Prowler", 6, "gold", "SR", "Pal/Purple", "LUCKY"],
  ["BP02-076SR", "Prixter", "Nightfall Stinger", 4, "gold", "SR", "Pal/Purple", ""],
  ["BP02-053SR", "Dumud", "Bountiful Earth", 5, "gold", "SR", "Pal/Green", "LUCKY"],
  ["BP02-014", "Beakon", "Thunderbolt Glory", 7, "red", "C", "Pal/Red", ""],
  ["BP02-012", "Jolthog", "10-Million-Volt Barrier", 3, "red", "C", "Pal/Red", ""],
  ["BP02-008SR", "Dazzi", "Thunder Maiden", 4, "gold", "SR", "Pal/Red", ""],
  ["BP02-005SR", "Rayhound", "Soaring Flash", 4, "gold", "SR", "Pal/Red", ""],
  ["BP02-015", "Improved Furnace", "Structure", 2, "red", "U", "Structure/Red", ""],
  ["BP02-002", "Katress Ignis", "Scathing Counter", 6, "red", "RR", "Pal/Red", "LUCKY"],
  ["BP02-003SP", "Faleris", "Marcus' Soaring Wings", 8, "gold", "SP", "Pal/Red", "LUCKY"],
  // PR — รางวัล Challenger Cup
  ["EPR-011", "Lovander", "Heartstealer", 5, "purple", "PR", "Pal/Purple", "", "png", "", "Top 4 for Challenger cup October 2026"],
  ["BP02-074OSR", "Selyne", "Saya's Moonlit Beacon", 8, "gold", "OSR", "Pal/Purple", "", "png"],
  ["BP02-097OSR", "Jetragon", "Legendary Guardian Dragon", 8, "gold", "OSR", "Pal/Colorless", "LUCKY", "png"],
  ["BP02-001OSR", "Orserk", "Thunderclap Roar", 8, "gold", "OSR", "Pal/Red", "", "png"],
  ["BP02-002OSR", "Katress Ignis", "Scathing Counter", 6, "gold", "OSR", "Pal/Red", "LUCKY", "png"],
  ["BP02-003OSR", "Faleris", "Marcus' Soaring Wings", 8, "gold", "OSR", "Pal/Red", "LUCKY", "png"],
  ["BP02-022OSR", "Axel's Gambit", "Event", 5, "gold", "OSR", "Event/Red", "LUCKY", "png"],
  ["BP02-046OSR", "Victor's Gambit", "Event", 2, "gold", "OSR", "Event/Blue", "LUCKY", "png"],
  ["BP02-027OSR", "Sweepa", "Record Breaker", 6, "gold", "OSR", "Pal/Blue", "LUCKY", "png"],
  ["BP02-025OSR", "Frostallion", "Everlasting Rime", 8, "gold", "OSR", "Pal/Blue", "LUCKY", "png"],
  ["BP02-026OSR", "Foxcicle", "Aurora Hymn", 5, "gold", "OSR", "Pal/Blue", "", "png"],
  ["BP02-049OSR", "Anubis", "Noble Reaper", 7, "gold", "OSR", "Pal/Green", "LUCKY", "png"],
  ["BP02-050OSR", "Mammorest", "Gaia Crusher", 8, "gold", "OSR", "Pal/Green", "", "png"],
  ["BP02-051OSR", "Bristla", "Regal Gaze", 4, "gold", "OSR", "Pal/Green", "", "png"],
  ["BP02-071OSR", "Lily's Gambit", "Event", 5, "gold", "OSR", "Event/Green", "LUCKY", "png"],
  ["BP02-094OSR", "Zoe's Gambit", "Event", 6, "gold", "OSR", "Event/Purple", "LUCKY", "png"],
  ["BP02-073OSR", "Frostallion Noct", "Eternal Darkness", 8, "gold", "OSR", "Pal/Purple", "LUCKY", "png"],
  ["BP02-074SP", "Selyne", "Saya's Moonlit Beacon", 8, "gold", "SP", "Pal/Purple", "", "png"],
  ["BP02-004SP", "Chillet Ignis", "Ember-Clad Dragon", 5, "gold", "SP", "Pal/Red", ""],
  ["BP02-022SP", "Axel's Gambit", "Event", 5, "gold", "SP", "Event/Red", "LUCKY", "png"],
  ["BP02-046SP", "Victor's Gambit", "Event", 2, "gold", "SP", "Event/Blue", "LUCKY"],
  ["BP02-071SP", "Lily's Gambit", "Event", 5, "gold", "SP", "Event/Green", "LUCKY"],
  ["BP02-047SR", "Love Overload", "Event", 2, "gold", "SR", "Event/Blue", "", "png"],
  ["BP02-047", "Love Overload", "Event", 2, "blue", "R", "Event/Blue", "", "png"],
  ["BP02-039", "Antique Cabinet", "Structure", 6, "blue", "R", "Structure/Blue", "", "png"],
  ["BP02-040", "Water Fountain", "Structure", 2, "blue", "U", "Structure/Blue", "", "png"],
  ["BP02-041", "High Quality Hot Spring", "Structure", 3, "blue", "U", "Structure/Blue", "", "png"],
  ["BP02-042", "Antique Partition", "Structure", 2, "blue", "C", "Structure/Blue", "", "png"],
  ["BP02-030", "Gobfin", "Sunken Memories", 4, "blue", "U", "Pal/Blue", "", "png"],
  ["BP02-031", "Broncherry Aqua", "The Shape of Love", 5, "blue", "U", "Pal/Blue", "LUCKY", "png"],
  ["BP02-032", "Kingpaca Cryst", "Prideful Solitude", 8, "blue", "U", "Pal/Blue", "", "png"],
  ["BP02-035", "Kelpsea", "Spirited Splash", 2, "blue", "C", "Pal/Blue", "", "png"],
  ["BP02-036", "Celaray", "Carefree Wanderer", 4, "blue", "C", "Pal/Blue", "", "png"],
  ["BP02-038", "Suzaku Aqua", "Tide Summoner", 7, "blue", "C", "Pal/Blue", "", "png"],
  ["BP02-053", "Dumud", "Bountiful Earth", 5, "green", "R", "Pal/Green", "LUCKY", "png"],
  ["BP02-052", "Fuddler", "Claw-Honing Mole", 3, "green", "R", "Pal/Green", "", "png"],
  ["BP02-064", "Mill", "Structure", 2, "green", "U", "Structure/Green", "", "png"],
  ["BP02-065", "Electric Kitchen", "Structure", 4, "green", "U", "Structure/Green", "", "png"],
  ["BP02-067", "Wooden Chest", "Structure", 2, "green", "C", "Structure/Green", "", "png"],
  ["BP02-057", "Eikthyrdeer Terra", "Will of Nature", 6, "green", "U", "Pal/Green", "LUCKY", "png"],
  ["BP02-058", "Digtoise", "Pulverizing Whirl", 7, "green", "U", "Pal/Green", "", "png"],
  ["BP02-059", "Cinnamoth", "Wings of Allure", 2, "green", "C", "Pal/Green", "", "png"],
  ["BP02-060", "Hangyu", "Heaven's Grip", 4, "green", "C", "Pal/Green", "", "png"],
  ["BP02-061", "Surfent Terra", "Conqueror of the Sands", 5, "green", "C", "Pal/Green", "", "png"],
  ["BP02-062", "Dazemu", "Stride of Oblivion", 6, "green", "C", "Pal/Green", "", "png"],
  ["BP02-070", "Old Bow", "Gear", 1, "green", "C", "Gear/Green", "", "png"],
  ["BP02-076", "Prixter", "Nightfall Stinger", 4, "purple", "R", "Pal/Purple", "", "png"],
  ["BP02-078", "Kitsun Noct", "Umbral Prowler", 6, "purple", "R", "Pal/Purple", "LUCKY", "png"],
  ["BP02-083", "Wixen Noct", "Honeyed Temptation", 7, "purple", "C", "Pal/Purple", "", "png"],
  ["BP02-088", "Chandelier", "Structure", 5, "purple", "U", "Structure/Purple", "", "png"],
  ["BP02-089", "Bear Trap (Small)", "Structure", 2, "purple", "C", "Structure/Purple", "", "png"],
  ["BP02-081", "Sootseer", "Grave Robber", 7, "purple", "U", "Pal/Purple", "LUCKY", "png"],
  ["BP02-084", "Killamari", "Abyssal Terror", 2, "purple", "C", "Pal/Purple", "", "png"],
  ["BP02-085", "Bushi Noct", "Blade of Regret", 5, "purple", "C", "Pal/Purple", "", "png"],
  ["BP02-086", "Incineram Noct", "Predator of Doom", 6, "purple", "C", "Pal/Purple", "", "png"],
  ["BP02-091", "Dark Grenade", "Gear", 2, "purple", "U", "Gear/Purple", "", "png"],
  ["BP02-093", "Poison Arrow Crossbow", "Gear", 8, "purple", "U", "Gear/Purple", "", "png"],
  ["BP02-096", "Poison Fog", "Event", 2, "purple", "C", "Event/Purple", "", "png"],
  ["BP02-098", "Melpaca", "A Fluffy Gift", 3, "gray", "U", "Pal/Colorless", "", "png"],
  ["BP02-005", "Rayhound", "Soaring Flash", 4, "red", "R", "Pal/Red", "", "png"],
  ["BP02-008", "Dazzi", "Thunder Maiden", 4, "red", "U", "Pal/Red", "", "png"],
  ["BP02-006", "Mossanda Lux", "Apex Grenadier", 5, "red", "R", "Pal/Red", "LUCKY", "png"],
  ["BP02-016", "Coal Quarry", "Structure", 3, "red", "U", "Structure/Red", "", "png"],
  ["BP02-017", "Mine", "Structure", 2, "red", "C", "Structure/Red", "", "png"],
  ["BP02-019", "Flamethrower", "Gear", 8, "red", "U", "Gear/Red", "", "png"],
  ["BP02-020", "Musket", "Gear", 2, "red", "C", "Gear/Red", "", "png"],
  ["BP02-021", "Mossanda Lux's Grenade Launcher", "Gear", 3, "red", "C", "Gear/Red", "", "png"],
  ["BP02-004SR", "Chillet Ignis", "Ember-Clad Dragon", 5, "gold", "SR", "Pal/Red", "", "png"],
  ["BP02-034SR", "Swee", "Hibernating Together", 3, "gold", "SR", "Pal/Blue", "", "png"],
  ["BP02-006SR", "Mossanda Lux", "Apex Grenadier", 5, "gold", "SR", "Pal/Red", "LUCKY"],
  ["BP02-007SR", "Flambelle", "Feverish Tears", 2, "gold", "SR", "Pal/Red"],
  ["BP02-011", "Leezpunk Ignis", "Hot-Blooded Finish", 2, "red", "C", "Pal/Red"],
  ["BP02-018SR", "Rocket Launcher", "Gear", 8, "gold", "SR", "Gear/Red"],
  ["BP02-023SR", "Marcus' Turf", "Event", 1, "gold", "SR", "Event/Red"],
  ["BP02-024", "Flame Funnel", "Event", 3, "red", "C", "Event/Red"],
  ["BP02-028SR", "Sibelyx", "Silken Spinner", 7, "gold", "SR", "Pal/Blue", "LUCKY"],
  ["BP02-033SR", "Pengullet", "Locked and Loaded", 2, "gold", "SR", "Pal/Blue"],
  ["BP02-039SR", "Antique Cabinet", "Structure", 6, "gold", "SR", "Structure/Blue"],
  ["BP02-043SR", "Stun Baton", "Gear", 8, "gold", "SR", "Gear/Blue"],
  ["BP02-050SP", "Mammorest", "Gaia Crusher", 8, "gold", "SP", "Pal/Green"],
  ["BP02-052SR", "Fuddler", "Claw-Honing Mole", 3, "gold", "SR", "Pal/Green"],
  ["BP02-054SR", "Quivern Botan", "Meadow's Grace", 8, "gold", "SR", "Pal/Green", "LUCKY"],
  ["BP02-055SR", "Beegarde", "Faithful Honor", 2, "gold", "SR", "Pal/Green"],
  ["BP02-056SR", "Lifmunk", "Hidden Power", 3, "gold", "SR", "Pal/Green"],
  ["BP02-063SR", "Beware of Mammorest Sign", "Structure", 6, "gold", "SR", "Structure/Green"],
  ["BP02-068SR", "Lifmunk's Submachine Gun", "Gear", 2, "gold", "SR", "Gear/Green"],
  ["BP02-075SR", "Tombat", "Resonance of Shadows", 4, "gold", "SR", "Pal/Purple"],
  ["BP02-077SR", "Shroomer Noct", "Spores of the Void", 5, "gold", "SR", "Pal/Purple", "LUCKY"],
  ["BP02-079SR", "Nox", "One-Way Ticket", 3, "gold", "SR", "Pal/Purple"],
  ["BP02-082SR", "Daedream", "Blissful Dreams", 2, "gold", "SR", "Pal/Purple"],
  ["BP02-087SR", "Electric Medicine Workbench", "Structure", 4, "gold", "SR", "Structure/Purple"],
  ["BP02-095SR", "Saya's Crescent Moon", "Event", 3, "gold", "SR", "Event/Purple"],
  ["BP02-100SR", "Awakening of Legends", "Event", 2, "gold", "SR", "Event/Colorless"],
  ['SOUL-10','Soul','ESOUL-011 · SSS (BP02)',0,'gold','SOUL','Soul','','','','',{ code:'ESOUL-011', file:'Soul ESOUL-011' }],
  // ── PR Card Pack Vol.2 (Shop Tournament Nov 2026 – Jan 2027) · แสดงในแท็บ BP02 · no 441–457
  ["EPR-021", "Relaxaurus Lux", "Party Time", 7, "red", "PR", "Pal/Red", "LUCKY", "png", "", "PR Card Pack Vol.2 · รางวัล Shop Tournament พ.ย. 2026 – ม.ค. 2027"],
  ["EPR-021S", "Relaxaurus Lux", "Party Time", 7, "gold", "PR", "Pal/Red", "LUCKY", "png", "", "PR Card Pack Vol.2 · รางวัล Shop Tournament พ.ย. 2026 – ม.ค. 2027 · ลาย S (รูปเต็มใบ)"],
  ["EPR-022", "Foxparks", "Breathing Practice", 3, "red", "PR", "Pal/Red", "", "png", "", "PR Card Pack Vol.2 · รางวัล Shop Tournament พ.ย. 2026 – ม.ค. 2027"],
  ["EPR-022S", "Foxparks", "Breathing Practice", 3, "gold", "PR", "Pal/Red", "", "png", "", "PR Card Pack Vol.2 · รางวัล Shop Tournament พ.ย. 2026 – ม.ค. 2027 · ลาย S (รูปเต็มใบ)"],
  ["EPR-023", "Jolthog Cryst", "Midwinter Awakening", 3, "blue", "PR", "Pal/Blue", "", "png", "", "PR Card Pack Vol.2 · รางวัล Shop Tournament พ.ย. 2026 – ม.ค. 2027"],
  ["EPR-023S", "Jolthog Cryst", "Midwinter Awakening", 3, "gold", "PR", "Pal/Blue", "", "png", "", "PR Card Pack Vol.2 · รางวัล Shop Tournament พ.ย. 2026 – ม.ค. 2027 · ลาย S (รูปเต็มใบ)"],
  ["EPR-024", "Frostallion Saddle", "Gear", 2, "blue", "PR", "Gear/Blue", "", "png", "", "PR Card Pack Vol.2 · รางวัล Shop Tournament พ.ย. 2026 – ม.ค. 2027"],
  ["EPR-025", "Dazemu", "Stride of Oblivion", 6, "green", "PR", "Pal/Green", "", "png", "", "PR Card Pack Vol.2 · รางวัล Shop Tournament พ.ย. 2026 – ม.ค. 2027"],
  ["EPR-025S", "Dazemu", "Stride of Oblivion", 6, "gold", "PR", "Pal/Green", "", "png", "", "PR Card Pack Vol.2 · รางวัล Shop Tournament พ.ย. 2026 – ม.ค. 2027 · ลาย S (รูปเต็มใบ)"],
  ["EPR-026", "Seed Machine Gun", "Event", 1, "green", "PR", "Event/Green", "", "png", "", "PR Card Pack Vol.2 · รางวัล Shop Tournament พ.ย. 2026 – ม.ค. 2027"],
  ["EPR-026S", "Seed Machine Gun", "Event", 1, "gold", "PR", "Event/Green", "", "png", "", "PR Card Pack Vol.2 · รางวัล Shop Tournament พ.ย. 2026 – ม.ค. 2027 · ลาย S (รูปเต็มใบ)"],
  ["EPR-027", "Mau", "Greed Beckons", 3, "purple", "PR", "Pal/Purple", "", "png", "", "PR Card Pack Vol.2 · รางวัล Shop Tournament พ.ย. 2026 – ม.ค. 2027"],
  ["EPR-027S", "Mau", "Greed Beckons", 3, "gold", "PR", "Pal/Purple", "", "png", "", "PR Card Pack Vol.2 · รางวัล Shop Tournament พ.ย. 2026 – ม.ค. 2027 · ลาย S (รูปเต็มใบ)"],
  ["EPR-028", "Frostallion Noct Saddle", "Gear", 2, "purple", "PR", "Gear/Purple", "", "png", "", "PR Card Pack Vol.2 · รางวัล Shop Tournament พ.ย. 2026 – ม.ค. 2027"],
  ["EPR-029", "Eikthyrdeer", "Warden of the Woods", 6, "gray", "PR", "Pal/Colorless", "", "png", "", "PR Card Pack Vol.2 · รางวัล Shop Tournament พ.ย. 2026 – ม.ค. 2027"],
  ["EPR-029S", "Eikthyrdeer", "Warden of the Woods", 6, "gold", "PR", "Pal/Colorless", "", "png", "", "PR Card Pack Vol.2 · รางวัล Shop Tournament พ.ย. 2026 – ม.ค. 2027 · ลาย S (รูปเต็มใบ)"],
  ['SOUL-11','Soul','ESOUL-018 · PR Card Pack Vol.2',0,'green','SOUL','Soul','','','','PR Card Pack Vol.2 · รางวัล Shop Tournament พ.ย. 2026 – ม.ค. 2027',{ code:'ESOUL-018', file:'Soul ESOUL-018' }],
  // ── PR Card Pack Vol.1 (ที่ยังไม่มี) + Vol.1.5 (ลาย S) · no 458–468
  ["EPR-007", "Digtoise", "Keen Needleback", 5, "green", "PR", "Pal/Green", "", "png", "", "PR Card Pack Vol.1 · รางวัลเข้าร่วม Shop Tournament ส.ค. – ต.ค. 2026"],
  ["EPR-008", "Daedream", "Deep Slumber", 3, "purple", "PR", "Pal/Purple", "", "png", "", "PR Card Pack Vol.1 · รางวัลเข้าร่วม Shop Tournament ส.ค. – ต.ค. 2026"],
  ["EPR-009", "Loupmoon", "Glinting Moonlight", 4, "purple", "PR", "Pal/Purple", "", "png", "", "PR Card Pack Vol.1 · รางวัลเข้าร่วม Shop Tournament ส.ค. – ต.ค. 2026"],
  ["EPR-002S", "Flambelle", "Scorching Tears", 3, "gold", "PR", "Pal/Red", "", "png", "", "PR Card Pack Vol.1.5 · รางวัลแชมป์ Shop Tournament ก.ย. – ต.ค. 2026 · ลาย S (รูปเต็มใบ)"],
  ["EPR-003S", "Blazehowl", "Hellflame Defender", 7, "gold", "PR", "Pal/Red", "", "png", "", "PR Card Pack Vol.1.5 · รางวัลแชมป์ Shop Tournament ก.ย. – ต.ค. 2026 · ลาย S (รูปเต็มใบ)"],
  ["EPR-004S", "Fuack", "Manic Wave Ripper", 2, "gold", "PR", "Pal/Blue", "", "png", "", "PR Card Pack Vol.1.5 · รางวัลแชมป์ Shop Tournament ก.ย. – ต.ค. 2026 · ลาย S (รูปเต็มใบ)"],
  ["EPR-005S", "Cryolinx", "Arctic Ordeal", 6, "gold", "PR", "Pal/Blue", "", "png", "", "PR Card Pack Vol.1.5 · รางวัลแชมป์ Shop Tournament ก.ย. – ต.ค. 2026 · ลาย S (รูปเต็มใบ)"],
  ["EPR-006S", "Gumoss", "Curious Sprout", 4, "gold", "PR", "Pal/Green", "", "png", "", "PR Card Pack Vol.1.5 · รางวัลแชมป์ Shop Tournament ก.ย. – ต.ค. 2026 · ลาย S (รูปเต็มใบ)"],
  ["EPR-007S", "Digtoise", "Keen Needleback", 5, "gold", "PR", "Pal/Green", "", "png", "", "PR Card Pack Vol.1.5 · รางวัลแชมป์ Shop Tournament ก.ย. – ต.ค. 2026 · ลาย S (รูปเต็มใบ)"],
  ["EPR-008S", "Daedream", "Deep Slumber", 3, "gold", "PR", "Pal/Purple", "", "png", "", "PR Card Pack Vol.1.5 · รางวัลแชมป์ Shop Tournament ก.ย. – ต.ค. 2026 · ลาย S (รูปเต็มใบ)"],
  ["EPR-009S", "Loupmoon", "Glinting Moonlight", 4, "gold", "PR", "Pal/Purple", "", "png", "", "PR Card Pack Vol.1.5 · รางวัลแชมป์ Shop Tournament ก.ย. – ต.ค. 2026 · ลาย S (รูปเต็มใบ)"],
  ['SOUL-12','Soul','ESOUL-017 · PR (Legends Awaken Release)',0,'gold','SOUL','Soul','','','','รางวัลผู้เข้าร่วม Legends Awaken Release Tournament · 1–30 พ.ย. 2026',{ code:'ESOUL-017', file:'Soul ESOUL-017' }],
  ['TD01-008TSR','Stone Pit','Structure',1,'gold','TSR','Structure/Red'],
  ['SOUL-13','Soul','ESOUL-019 · PR (Christmas Snowdown)',0,'blue','SOUL','Soul','','','','รางวัลผู้เข้าร่วม Christmas Snowdown 2026 (แชมป์ได้เพิ่ม 1 ใบ) · 1–31 ธ.ค. 2026',{ code:'ESOUL-019', file:'Soul ESOUL-019' }],
  ["EPR-012", "Foxparks", "Light of Courage", 2, "gold", "PR", "Pal/Red", "", "png", "", "Special PR Card Pack Vol.1 · Masters League"],
  ["EPR-013", "Treasure Chest Found!", "Event", 2, "gold", "PR", "Event/Red", "", "png", "", "Special PR Card Pack Vol.1 · Masters League"],
  ["EPR-014", "Pengullet", "Yearning for the Sky", 4, "gold", "PR", "Pal/Blue", "", "png", "", "Special PR Card Pack Vol.1 · Masters League"],
  ["EPR-015", "Found an Egg!", "Event", 2, "gold", "PR", "Event/Green", "", "png", "", "Special PR Card Pack Vol.1 · Masters League"],
  ["EPR-016", "Depresso", "Late Night Hustler", 2, "gold", "PR", "Pal/Purple", "", "png", "", "Special PR Card Pack Vol.1 · Masters League"],
  ["EPR-017", "Leezpunk", "Treasure Bandit", 3, "gold", "PR", "Pal/Purple", "", "png", "", "Special PR Card Pack Vol.1 · Masters League"],
  ["EPR-018", "Lamball", "My First Pal", 2, "gold", "PR", "Pal/Colorless", "", "png", "", "Special PR Card Pack Vol.1 · Masters League"],
  ["EPR-019", "Chikipi", "My First Pal", 2, "gold", "PR", "Pal/Colorless", "", "png", "", "Special PR Card Pack Vol.1 · Masters League"],
  ["EPR-020", "Cattiva", "My First Pal", 2, "gold", "PR", "Pal/Colorless", "", "png", "", "Masters League · ลายเต็มใบมีตราประทับ (รางวัล 7-2)"],
];
const WISH = {};
const C_CODES = {}; Object.keys(C).forEach(k => { if (C[k].code) C_CODES[C[k].code.toUpperCase()] = 1; });
WISH_ROWS.forEach((r, i) => {
  if (C_CODES[r[0].toUpperCase()]) return; // ใบเดียวกับที่มีในสต๊อกแล้ว (เช่น BP01-078) — ไม่สร้างซ้ำ
  const slug = 'w-' + r[0].toLowerCase();
  WISH[slug] = { no: 36 + i, slug, code: r[0], name: r[1], sub: r[2], cost: r[3], tone: r[4], rar: r[5], dir: r[6], badge: r[7] || '', wish: true };
  if (r[8]) WISH[slug].ext = r[8];
  if (r[9]) WISH[slug].artFrom = r[9];
  if (r[10]) WISH[slug].remark = r[10];
  if (r[11] && r[11].code) WISH[slug].code = r[11].code;
  if (r[11] && r[11].file) WISH[slug].file = r[11].file;
  if (/[!?]/.test(r[2])) WISH[slug].file = (r[1] + ' ' + r[2]).replace(/[!?]/g, '');
});

const CARDS = Object.assign({}, C, WISH);

const BASE_COUNTS = {};
PAGES.forEach(p => p.items.forEach(([card, n]) => { BASE_COUNTS[card.slug] = (BASE_COUNTS[card.slug] || 0) + n; }));
// การ์ดจากแคตตาล็อกที่ซื้อเข้ามาทีหลัง (ไม่ได้อยู่ใน PAGES ตั้งต้น)
const EXTRA_COUNTS = { 'w-bp01-052': 6, 'w-bp01-049': 1, 'w-bp01-049-osr': 1,
  'w-td02-004': 3,
  'w-bp01-002': 2, 'w-epr-001': 4, 'w-td02-023': 4, 'w-etd01-005': 4, 'w-etd01-006': 4, 'w-bp01-015': 4, 'w-bp01-016': 4, 'w-bp01-020': 4, 'w-bp01-033': 1, 'w-bp01-057': 1, 'w-bp01-036': 1, 'w-bp01-058': 1, 'w-bp01-072': 1, 'w-bp01-017': 1, 'necklace': 1, 'elphidran': 4, 'w-bp01-051': 3, 'w-bp01-032-pr': 1, 'w-bp01-070': 1, 'w-bp01-076': 2,
  'w-bp01-093': 1, 'w-bp01-092': 1, 'w-bp01-012': 1,
  'w-td02-001': 2, 'w-td02-002': 3, 'w-td02-003': 2, 'w-td02-005': 3, 'w-td02-006': 3,
  'w-td02-007': 1, 'w-td02-007tsr': 1, 'w-td02-008': 2, 'w-td02-009': 3, 'w-td02-010': 3, 'w-td02-011': 2 };
EXTRA_COUNTS['w-td02-004'] += 2;
EXTRA_COUNTS['w-bp01-016'] += 1; EXTRA_COUNTS['w-bp01-058'] += 1;
const TD02_PURPLE_LOT = { 'w-td02-013':3, 'w-td02-015':2, 'w-td02-016':2, 'w-td02-018':2, 'w-td02-019':2, 'w-td02-020':2, 'w-td02-023':2, 'w-td02-024':2, 'blazehowl':2, 'astegon':2, 'leezpunk':2, 'strike':2, 'medical':2 };
Object.keys(TD02_PURPLE_LOT).forEach(s => { EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + TD02_PURPLE_LOT[s]; });
EXTRA_COUNTS['w-bp01-051'] += 2; EXTRA_COUNTS['w-bp01-049'] += 1; EXTRA_COUNTS['w-bp01-070'] += 2;
BASE_COUNTS['tombat'] = (BASE_COUNTS['tombat'] || 0) + 2;
['w-bp01-086','w-bp01-021','w-bp01-066','w-bp01-049-osr','w-bp01-064','w-bp01-029sr'].forEach(s => { EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + 1; });
BASE_COUNTS['aurora'] = (BASE_COUNTS['aurora'] || 0) + 1;
EXTRA_COUNTS['w-bp01-086'] = (EXTRA_COUNTS['w-bp01-086'] || 0) - 1;
EXTRA_COUNTS['w-bp01-049-osr'] = (EXTRA_COUNTS['w-bp01-049-osr'] || 0) - 2;
EXTRA_COUNTS['w-bp01-049'] = (EXTRA_COUNTS['w-bp01-049'] || 0) + 2;
EXTRA_COUNTS['w-td01-006'] = (EXTRA_COUNTS['w-td01-006'] || 0) - 1;
['w-td01-023tsr','w-td01-023tsr','w-etd01-024','w-td01-024'].forEach(s => { EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + 1; });
BASE_COUNTS['pengullet-r'] = (BASE_COUNTS['pengullet-r'] || 0) + 1;
const FOIL_LOT = { 'w-bp01-064sr':1, 'w-bp01-029sr':1, 'w-bp01-093sr':1, 'w-bp01-078sr':1, 'w-bp01-081sr':1, 'w-bp01-073osr':1, 'w-bp01-003sr':1, 'w-bp01-020sr':1, 'w-bp01-088sr':1, 'w-bp01-054sr':1, 'w-bp01-051osr':1, 'w-bp01-046osr':1, 'w-bp01-039sr':1, 'w-bp01-019sr':1, 'w-bp01-004sr':1, 'w-bp01-070':1, 'w-bp01-070osr':1, 'w-bp01-070sp':1 };
Object.keys(FOIL_LOT).forEach(s => { EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + FOIL_LOT[s]; });
['w-bp01-001osr','w-bp01-004sr','w-bp01-003sr'].forEach(s => { EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + 1; });
const GREEN_UTIL_LOT = { 'w-bp01-065':4, 'w-bp01-066':4, 'w-bp01-067':4, 'w-bp01-068':3, 'w-bp01-069':3, 'w-bp01-071':3, 'w-bp01-072':3 };
Object.keys(GREEN_UTIL_LOT).forEach(s => { EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + GREEN_UTIL_LOT[s]; });
const GREEN_PAL_LOT = { 'w-bp01-059':4, 'w-bp01-056':3, 'w-bp01-062':3, 'w-bp01-057':3, 'w-bp01-058':2, 'w-bp01-060':2, 'w-bp01-061':2, 'w-bp01-055':1, 'w-bp01-069':1 };
Object.keys(GREEN_PAL_LOT).forEach(s => { EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + GREEN_PAL_LOT[s]; });
const COLORLESS_LOT = { 'w-bp01-100':4, 'w-bp01-099':3, 'elphidran':3 };
Object.keys(COLORLESS_LOT).forEach(s => { EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + COLORLESS_LOT[s]; });
const BLUE_UTIL_LOT = { 'w-bp01-040':5, 'w-bp01-045':4, 'w-bp01-043':4, 'w-bp01-041':3, 'aurora':2, 'sphere':2, 'w-bp01-042':1 };
Object.keys(BLUE_UTIL_LOT).forEach(s => { EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + BLUE_UTIL_LOT[s]; });
const BLUE_PAL_LOT = { 'w-bp01-037':4, 'cryolinx':4, 'w-bp01-034':4, 'w-bp01-036':4, 'w-bp01-035':4, 'penking':3, 'w-bp01-032':2, 'w-bp01-033':1 };
Object.keys(BLUE_PAL_LOT).forEach(s => { EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + BLUE_PAL_LOT[s]; });
const RED_UTIL_LOT = { 'w-bp01-018':4, 'w-bp01-022':4, 'w-bp01-017':3, 'w-bp01-024':3, 'w-bp01-016':2, 'w-bp01-021':1 };
Object.keys(RED_UTIL_LOT).forEach(s => { EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + RED_UTIL_LOT[s]; });
const RED_PAL_LOT = { 'w-bp01-014':4, 'w-bp01-007':3, 'w-bp01-013':3, 'w-bp01-010':3, 'w-bp01-012':3, 'w-bp01-011':2, 'w-bp01-008':2, 'w-bp01-006':1, 'w-bp01-009':1 };
Object.keys(RED_PAL_LOT).forEach(s => { EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + RED_PAL_LOT[s]; });
const PURPLE_UTIL_LOT = { 'w-bp01-096':5, 'w-bp01-091':4, 'shoddy-bed':4, 'necklace':4, 'black-mkt':4, 'bench':3, 'w-bp01-092':2 };
Object.keys(PURPLE_UTIL_LOT).forEach(s => { EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + PURPLE_UTIL_LOT[s]; });
const PURPLE_PAL_LOT = { 'menasting':4, 'w-bp01-087':4, 'maraith':3, 'depresso':3, 'w-bp01-083':2, 'w-bp01-081':2, 'daedream-first':2, 'daedream':2, 'w-bp01-086':1 };
Object.keys(PURPLE_PAL_LOT).forEach(s => { EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + PURPLE_PAL_LOT[s]; });
const FOIL_LOT_E = { 'w-bp01-052sr':1, 'w-bp01-049-osr':1, 'w-bp01-054sr':1, 'w-bp01-030sr':1, 'w-bp01-078sr':1, 'w-bp01-019sr':1, 'w-bp01-020sr':1, 'w-bp01-005sr':1, 'w-bp01-023sp':1 };
Object.keys(FOIL_LOT_E).forEach(s => { EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + FOIL_LOT_E[s]; });
const FOIL_LOT_D = { 'w-bp01-044sr':1, 'w-bp01-063sr':1, 'w-bp01-053sr':1, 'w-bp01-064sr':1, 'w-bp01-050osr':1 };
Object.keys(FOIL_LOT_D).forEach(s => { EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + FOIL_LOT_D[s]; });
BASE_COUNTS['jorm-osr'] = (BASE_COUNTS['jorm-osr'] || 0) + 1;
BASE_COUNTS['chillet-rr'] = (BASE_COUNTS['chillet-rr'] || 0) + 1;
BASE_COUNTS['relaxaurus'] = (BASE_COUNTS['relaxaurus'] || 0) + 1;
BASE_COUNTS['rocket'] = (BASE_COUNTS['rocket'] || 0) + 1;
const FOIL_LOT_C = { 'w-bp01-051':1, 'w-bp01-077sr':1, 'w-bp01-074osr':1, 'w-bp01-029sr':1, 'w-bp01-095osr':1, 'w-bp01-075osr':1, 'w-bp01-095sp':1, 'w-bp01-015sp':1, 'w-bp01-003sr':1 };
Object.keys(FOIL_LOT_C).forEach(s => { EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + FOIL_LOT_C[s]; });
const FOIL_LOT_B = { 'w-bp01-039sr':1, 'w-bp01-088sr':2, 'w-bp01-076':1, 'w-bp01-074osr':1, 'w-bp01-093sr':1, 'w-bp01-031sr':1, 'w-bp01-079sr':1 };
Object.keys(FOIL_LOT_B).forEach(s => { EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + FOIL_LOT_B[s]; });
BASE_COUNTS['pengullet-r'] = (BASE_COUNTS['pengullet-r'] || 0) + 1;
const TD01_RED_LOT = { 'w-td01-001':1, 'w-td01-002':2, 'w-td01-003':2, 'w-td01-004':2, 'w-td01-005':2, 'w-td01-006':2, 'w-td01-007':1, 'w-td01-008':1, 'w-td01-009':2, 'w-td01-010':2, 'w-td01-011':1 };
Object.keys(TD01_RED_LOT).forEach(s => { EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + TD01_RED_LOT[s]; });
['w-td01-011tsr','w-td01-008','w-td01-007','w-td01-005'].forEach(s => { EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + 1; });
const TD01_BLUE_LOT = { 'w-td01-013':3, 'flyer':2, 'w-td01-015':2, 'w-td01-016':2, 'elph-aqua':2, 'w-td01-017tsr':1, 'w-td01-018':1, 'w-td01-018tsr':1, 'w-td01-019':2, 'w-td01-020':2, 'w-td01-021':2, 'w-td01-022':2, 'w-td01-001':1 };
Object.keys(TD01_BLUE_LOT).forEach(s => { EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + TD01_BLUE_LOT[s]; });
BASE_COUNTS['bench'] = (BASE_COUNTS['bench'] || 0) + 1;
BASE_COUNTS['daedream-first'] = (BASE_COUNTS['daedream-first'] || 0) + 1;
EXTRA_COUNTS['w-td01-003'] = (EXTRA_COUNTS['w-td01-003'] || 0) - 2;
BASE_COUNTS['jorm-osr'] = (BASE_COUNTS['jorm-osr'] || 0) - 1;
BASE_COUNTS['relaxaurus'] = (BASE_COUNTS['relaxaurus'] || 0) + 1;
BASE_COUNTS['jorm-r'] = (BASE_COUNTS['jorm-r'] || 0) + 1;
EXTRA_COUNTS['w-bp01-030sr'] = (EXTRA_COUNTS['w-bp01-030sr'] || 0) - 1;
EXTRA_COUNTS['w-bp01-030'] = (EXTRA_COUNTS['w-bp01-030'] || 0) + 1;
EXTRA_COUNTS['w-bp01-029sr'] = (EXTRA_COUNTS['w-bp01-029sr'] || 0) - 2;
EXTRA_COUNTS['w-bp01-029'] = (EXTRA_COUNTS['w-bp01-029'] || 0) + 2;
// แก้เรทติ้ง: Suzaku Aqua / Mammorest ที่ลงไว้เป็น TSR จริง ๆ เป็น TD ธรรมดา
EXTRA_COUNTS['w-td01-017tsr'] = (EXTRA_COUNTS['w-td01-017tsr'] || 0) - 1;
EXTRA_COUNTS['w-td01-017'] = (EXTRA_COUNTS['w-td01-017'] || 0) + 1;
EXTRA_COUNTS['w-td01-018tsr'] = (EXTRA_COUNTS['w-td01-018tsr'] || 0) - 1;
EXTRA_COUNTS['w-td01-018'] = (EXTRA_COUNTS['w-td01-018'] || 0) + 1;
const FOIL_LOT_F = { 'w-td02-023tsr':1, 'w-td02-003tsr':1, 'w-bp01-093sr':1, 'w-bp01-001osr':1 };
Object.keys(FOIL_LOT_F).forEach(s => { EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + FOIL_LOT_F[s]; });
BASE_COUNTS['pengullet-r'] = (BASE_COUNTS['pengullet-r'] || 0) + 1;
const FOIL_LOT_G = { 'w-bp01-030':1, 'w-bp01-029sr':1, 'w-bp01-076':1, 'w-bp01-005':1, 'w-bp01-023':1, 'w-bp01-019':1, 'w-bp01-015':1 };
Object.keys(FOIL_LOT_G).forEach(s => { EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + FOIL_LOT_G[s]; });
['rocket','jorm-r','pyrin','shadowbeak','katress'].forEach(s => { BASE_COUNTS[s] = (BASE_COUNTS[s] || 0) + 1; });
const FOIL_LOT_H = { 'w-bp01-055sr':1, 'w-bp01-049':1, 'w-bp01-052':1, 'w-bp01-053':1, 'w-bp01-063':1 };
Object.keys(FOIL_LOT_H).forEach(s => { EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + FOIL_LOT_H[s]; });
BASE_COUNTS['relaxaurus'] = (BASE_COUNTS['relaxaurus'] || 0) + 1;
BASE_COUNTS['jorm-osr'] = (BASE_COUNTS['jorm-osr'] || 0) + 1;
const SOUL_LOT = { 'w-soul-01':1, 'w-soul-02':1, 'w-soul-03':1 };
EXTRA_COUNTS['w-bp01-001osr'] = (EXTRA_COUNTS['w-bp01-001osr'] || 0) + 1;
Object.keys(LOT_0922).forEach(s => { if (s.indexOf('w-') === 0) EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + LOT_0922[s]; else BASE_COUNTS[s] = (BASE_COUNTS[s] || 0) + LOT_0922[s]; });
Object.keys(FIX_0922).forEach(s => { if (s.indexOf('w-') === 0) EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + FIX_0922[s]; else BASE_COUNTS[s] = (BASE_COUNTS[s] || 0) + FIX_0922[s]; });
Object.keys(FIX_0922B).forEach(s => { if (s.indexOf('w-') === 0) EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + FIX_0922B[s]; else BASE_COUNTS[s] = (BASE_COUNTS[s] || 0) + FIX_0922B[s]; });
Object.keys(FIX_0922C).forEach(s => { if (s.indexOf('w-') === 0) EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + FIX_0922C[s]; else BASE_COUNTS[s] = (BASE_COUNTS[s] || 0) + FIX_0922C[s]; });
Object.keys(SOUL_LOT).forEach(s => { EXTRA_COUNTS[s] = (EXTRA_COUNTS[s] || 0) + SOUL_LOT[s]; });
Object.keys(EXTRA_COUNTS).forEach(s => { BASE_COUNTS[s] = (BASE_COUNTS[s] || 0) + EXTRA_COUNTS[s]; });

// ลำดับความหายาก — เรียงทุกหน้าด้วย rarity ก่อน แล้วค่อย cost (ตำแหน่งการ์ดหายากจะไม่ขยับเวลาได้การ์ดใหม่)
// นิยามความหายาก (จากการ์ดจริง)
//   SSP = Super Super Parallel — อาร์ตใหม่ ฟอยล์เต็มใบ ระดับสูงสุด
//   SP  = Super Parallel — อาร์ตไม่เหมือนใบปกติ (อาร์ตใหม่)
//   OSR = Official Shop Rare — อาร์ตเดิมแบบปกติ แต่เป็นฟอยล์ และรูปเต็มใบ
//   SR / TSR / PR = ฟอยล์ตามอาร์ตปกติ (กรอบเดิม)
const RAR_RANK = ['SP','OSR','SR','TSR','PR','RR','R','U','C','SOUL'];
const RAR_ALIAS = { TD:'C', TDR:'C' }; // TD ถือเป็นระดับเดียวกับ C
const rarRank = card => { let r = String(card.rar || '').toUpperCase(); r = RAR_ALIAS[r] || r; const i = RAR_RANK.indexOf(r); return i < 0 ? RAR_RANK.length : i; };

const TAB_OF = card => {
  const d = card.dir || '';
  const parts = d.split('/');
  if (parts[0] === 'Soul') return 'SOUL';
  // ทุกประเภท (Pal / Event / Gear / Structure) รวมในแท็บของสีตัวเอง
  const color = parts[1] || (card.tone === 'gray' ? 'Colorless' : (card.tone || ''));
  const c = card.code || '';
  return (/^(E?BP03|TD03|TD04)/i.test(c) ? 'BP03-' : /^(BP02|SS01|EPR-02[1-9])/i.test(c) ? 'BP02-' : '') + String(color).toUpperCase();
};


// Main deck — Purple/Blue (Play Hub list · 2026-10-06) — 50 ใบ + Soul 10
// เก็บเป็น slug เพราะ BY_SLUG ยังไม่ถูกสร้าง ณ จุดนี้ · แปลงเป็น [card,n] หลัง indexCards()
const DECK_SLUGS = [
  ['lyleen', 2],
  ['w-bp01-074osr', 2],
  ['w-bp01-049-osr', 1],
  ['w-bp01-049', 1],
  ['pyrin', 2],
  ['blazehowl', 4],
  ['maraith', 2],
  ['w-bp01-051', 2],
  ['w-ss01-005', 2],
  ['menasting', 2],
  ['w-td02-004', 4],
  ['w-ss01-003osr', 1],
  ['w-ss01-003', 1],
  ['leezpunk', 4],
  ['w-bp01-052', 4],
  ['strike', 2],
  ['w-bp01-070osr', 1],
  ['w-bp01-070', 1],
  ['w-bp01-095osr', 3],
  ['zoe-rr', 1],
  ['w-bp01-071', 2],
  ['bench', 4],
  ['w-bp01-092', 2],
];
const DECK = [];

// Deck order follows the type tabs: Pal Blue → Purple → Red → Green → Colorless → Event → Gear → Structure
// Physical binder layout — one row of 12 slugs per page (4×3, left→right, top→bottom)
const ALBUM_PAGES = [
  ["w-soul-12", "w-soul-12", "w-soul-12", "w-soul-12", "w-soul-12", "w-soul-12", "w-soul-12", "w-soul-12", "w-soul-12", "w-soul-12", "w-soul-02", "w-soul-02"],
  ["w-soul-01", "w-soul-01", "w-soul-03", "w-soul-03", null, null, null, null, null, null, null, null],
  ["chillet-rr", "chillet-rr", "chillet-rr", "chillet-rr", "relaxaurus", "relaxaurus", "relaxaurus", "relaxaurus", "jorm-osr", "jorm-osr", "jorm-r", "jorm-r"],
  ["pengullet-sr", "pengullet-r", "pengullet-r", "pengullet-r", "w-bp01-029sr", "w-bp01-029sr", "w-bp01-029", "w-bp01-029", "w-bp01-030", "w-bp01-030", "w-bp01-030", "w-bp01-030"],
  ["w-bp01-031sr", "w-bp01-032-pr", "w-bp01-032-pr", "w-bp01-038-pr", "w-bp01-038-pr", "w-bp01-038-pr", "w-bp01-039", "w-bp01-039", "w-bp01-039", "w-bp01-039", "w-bp01-039", "w-bp01-044sr"],
  ["rocket", "rocket", "rocket", "rocket", "rocket", "rocket", "w-bp01-046", "w-bp01-046", "w-bp01-046", "w-bp01-046", null, null],
  ["w-bp01-073", "w-bp01-073", "w-bp01-073", "w-bp01-073", "w-bp01-074osr", "w-bp01-074osr", "w-bp01-074osr", "shadowbeak", "shadowbeak", "shadowbeak", "shadowbeak", "katress"],
  [null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null],
  ["katress", "katress", "katress", "katress", "w-bp01-076", "w-bp01-076", "w-bp01-076", "w-bp01-076", "w-bp01-076", "pyrin", "pyrin", "pyrin"],
  ["pyrin", "lyleen", "lyleen", "lyleen", "lyleen", "lyleen", "w-bp01-079sr", "w-bp01-081sr", "w-bp01-088sr", "w-bp01-088", "w-bp01-088", "w-bp01-088"],
  ["w-bp01-088", "w-bp01-093", "w-bp01-093", "w-bp01-093", "w-bp01-093", "w-bp01-095osr", "w-bp01-095osr", "w-bp01-095osr", "w-bp01-095osr", "w-epr-009", "w-epr-011", null],
  ["w-bp01-001osr", "w-bp01-001", "w-bp01-001", "w-bp01-001", "w-bp01-002", "w-bp01-002", "w-bp01-002", "w-bp01-002", "w-bp01-002", "w-bp01-003sr", "w-bp01-003", "w-bp01-003"],
  ["w-bp01-003", "w-bp01-003", "w-bp01-003", "w-bp01-004sr", "w-bp01-004", "w-bp01-004", "w-bp01-004", "w-bp01-004", "w-bp01-004", "w-bp01-004", "w-bp01-005", "w-bp01-005"],
  ["w-bp01-005", "w-bp01-005", "w-bp01-012-pr", "w-bp01-012-pr", "w-bp01-015", "w-bp01-015", "w-bp01-015", "w-bp01-015", "w-bp01-015", "w-bp01-015", "w-bp01-019sr", "w-bp01-019"],
  ["w-bp01-019", "w-bp01-019", "w-bp01-020", "w-bp01-020", "w-bp01-020", "w-bp01-020", "w-bp01-020", "w-bp01-023", "w-bp01-023", "w-bp01-023", "w-bp01-023", "w-epr-003"],
  ["w-epr-012", "w-td01-007tsr", "w-bp01-002", "w-bp01-002", "w-bp01-003", null, null, null, null, null, null, null],
  ["w-bp01-049-osr", "w-bp01-049-osr", "w-bp01-049", "w-bp01-049", "w-bp01-050osr", "w-bp01-050osr", "w-bp01-050", "w-bp01-050", "w-bp01-051", "w-bp01-051", "w-bp01-051", "w-bp01-051"],
  ["w-bp01-051", "w-bp01-052", "w-bp01-052", "w-bp01-052", "w-bp01-052", "w-bp01-053", "w-bp01-053", "w-bp01-053", "w-bp01-053", "w-bp01-054", "w-bp01-054", "w-bp01-054"],
  ["w-bp01-054", "w-bp01-054", "w-bp01-055sr", "w-bp01-056sr", "w-bp01-063", "w-bp01-063", "w-bp01-063", "w-bp01-063", "w-bp01-064", "w-bp01-064", "w-bp01-064", "w-bp01-064"],
  ["w-bp01-064", "w-bp01-070sp", "w-bp01-070osr", "w-bp01-070", "w-bp01-070", "w-bp01-070", "w-epr-006", "w-epr-006", "w-epr-006", "w-epr-007", "w-epr-015", "w-td02-003tsr"],
  ["w-td02-007tsr", null, null, null, null, null, null, null, null, null, null, null],
  ["w-epr-019", "w-epr-020", "w-epr-020", "w-epr-020", "w-td02-023tsr", "w-etd01-024", null, null, null, null, null, null],
  ["w-ss01-002osr", "w-ss01-002osr", "w-ss01-002osr", "w-bp02-025", "w-bp02-026", "w-bp02-028", "w-bp02-028", "w-bp02-039", "w-bp02-043sr", "w-bp02-046", "w-bp02-047", "w-bp02-047"],
  ["w-epr-024", "w-epr-024", "w-epr-024", null, null, null, null, null, null, null, null, null],
  ["w-ss01-003osr", "w-bp02-073", "w-bp02-074", "w-bp02-075sr", "w-bp02-075", "w-bp02-075", "w-bp02-078", "w-bp02-078", "w-bp02-087", "w-bp02-087", "w-epr-028", null],
  ["w-ss01-001osr", "w-ss01-001osr", "w-bp02-002", "w-bp02-004sr", "w-bp02-004", "w-bp02-004", "w-bp02-006", "w-bp02-006", null, null, null, null],
  ["w-bp02-049", "w-bp02-052", "w-bp02-052", "w-bp02-053", "w-bp02-053", "w-bp02-056sr", "w-bp02-068", "w-bp02-068", "w-bp02-071osr", "w-bp02-071", "w-bp02-071", "w-bp02-071"],
  ["w-bp02-071", "w-bp02-071", "w-bp02-071", "w-bp02-071", "w-bp02-071", "w-bp02-071", "w-bp02-071", "w-bp02-071", "w-bp02-071", "w-bp02-051", null, null],
  ["w-ss01-004osr", "w-ss01-005osr", "w-ss01-005osr", "w-ss01-005osr", "w-bp02-097osr", "w-bp02-097", "w-bp02-097", "w-bp02-097", "w-bp02-097", "w-bp02-097", "w-bp02-097", "w-bp02-097"],
  ["w-bp02-097", "w-bp02-100sr", "w-bp02-100sr", null, null, null, null, null, null, null, null, null],
];
const ALBUM3_PAGES = []; // ALBUM 1 v2 ถูกรวมเป็น ALBUM แล้ว (21 พ.ย. 2026)
// ALBUM 2 — สมุดฟอยล์ BP02 (หน้าแรก SSP/SP แล้วเรียงสี → เลขการ์ด) · แก้/ย้ายช่องได้เหมือน ALBUM · sync กับ collection.json (album2)
const ALBUM2_PAGES = [
  ["w-bp02-001ssp","w-bp02-026sp","w-bp02-027sp","w-bp02-075sp","w-bp02-022sp","w-bp02-050sp","w-bp02-050sp","w-bp02-071sp",null,null,null,null],
  ["w-bp02-025osr","w-bp02-025osr","w-bp02-025osr","w-bp02-025","w-bp02-025","w-bp02-025","w-bp02-025","w-bp02-025","w-bp02-025","w-bp02-025","w-bp02-025","w-bp02-025"],
  ["w-bp02-025","w-bp02-025","w-bp02-026osr","w-bp02-026","w-bp02-026","w-bp02-026","w-bp02-026","w-bp02-026","w-bp02-026","w-bp02-026","w-bp02-026","w-bp02-026"],
  ["w-bp02-026","w-bp02-026","w-bp02-026","w-bp02-026","w-bp02-027osr","w-bp02-027osr","w-bp02-027","w-bp02-027","w-bp02-027","w-bp02-027","w-bp02-027","w-bp02-027"],
  ["w-bp02-027","w-bp02-027","w-bp02-027","w-bp02-027","w-bp02-027","w-bp02-027","w-bp02-028sr","w-bp02-028","w-bp02-028","w-bp02-028","w-bp02-028","w-bp02-028"],
  ["w-bp02-028","w-bp02-028","w-bp02-028","w-bp02-028","w-bp02-028","w-bp02-028","w-bp02-028","w-bp02-028","w-bp02-028","w-bp02-033sr","w-bp02-034sr","w-bp02-034sr"],
  ["w-bp02-039sr","w-bp02-039sr","w-bp02-039","w-bp02-039","w-bp02-039","w-bp02-039","w-bp02-039","w-bp02-039","w-bp02-039","w-bp02-039","w-bp02-039","w-bp02-039"],
  ["w-bp02-039","w-bp02-039","w-bp02-039","w-bp02-043sr","w-bp02-043","w-bp02-043","w-bp02-043","w-bp02-043","w-bp02-043","w-bp02-043","w-bp02-043","w-bp02-043"],
  ["w-bp02-043","w-bp02-043","w-bp02-043","w-bp02-043","w-bp02-046osr","w-bp02-046","w-bp02-046","w-bp02-046","w-bp02-046","w-bp02-046","w-bp02-047sr","w-bp02-047"],
  ["w-bp02-047","w-bp02-047","w-bp02-047","w-bp02-047","w-bp02-047","w-bp02-047","w-bp02-047","w-bp02-047","w-bp02-047","w-bp02-047","w-bp02-047","w-bp02-047"],
  ["w-bp02-047","w-bp02-073osr","w-bp02-073osr","w-bp02-073","w-bp02-073","w-bp02-073","w-bp02-073","w-bp02-073","w-bp02-073","w-bp02-073","w-bp02-074osr","w-bp02-074osr"],
  ["w-bp02-074osr","w-bp02-074","w-bp02-074","w-bp02-074","w-bp02-074","w-bp02-074","w-bp02-074","w-bp02-074","w-bp02-074","w-bp02-074","w-bp02-074","w-bp02-074"],
  ["w-bp02-075sr","w-bp02-075sr","w-bp02-075","w-bp02-075","w-bp02-075","w-bp02-075","w-bp02-075","w-bp02-075","w-bp02-075","w-bp02-075","w-bp02-075","w-bp02-075"],
  ["w-bp02-075","w-bp02-075","w-bp02-075","w-bp02-076sr","w-bp02-076sr","w-bp02-076sr","w-bp02-076","w-bp02-076","w-bp02-076","w-bp02-076","w-bp02-076","w-bp02-076"],
  ["w-bp02-076","w-bp02-076","w-bp02-076","w-bp02-076","w-bp02-076","w-bp02-076","w-bp02-076","w-bp02-077sr","w-bp02-077sr","w-bp02-077","w-bp02-077","w-bp02-077"],
  ["w-bp02-077","w-bp02-077","w-bp02-077","w-bp02-077","w-bp02-077","w-bp02-077","w-bp02-077","w-bp02-077","w-bp02-078sr","w-bp02-078sr","w-bp02-078","w-bp02-078"],
  ["w-bp02-078","w-bp02-078","w-bp02-078","w-bp02-078","w-bp02-078","w-bp02-078","w-bp02-078","w-bp02-078","w-bp02-078","w-bp02-078","w-bp02-078","w-bp02-078"],
  ["w-bp02-079sr","w-bp02-082sr","w-bp02-082sr","w-bp02-083sr","w-bp02-083sr","w-bp02-087sr","w-bp02-087sr","w-bp02-087sr","w-bp02-087","w-bp02-087","w-bp02-087","w-bp02-087"],
  ["w-bp02-087","w-bp02-087","w-bp02-087","w-bp02-087","w-bp02-087","w-bp02-087","w-bp02-087","w-bp02-087","w-bp02-087","w-bp02-087","w-bp02-094osr","w-bp02-094osr"],
  ["w-bp02-094","w-bp02-094","w-bp02-094","w-bp02-094","w-bp02-094","w-bp02-094","w-bp02-094","w-bp02-094","w-bp02-095sr","w-bp02-095sr","w-bp02-095","w-bp02-095"],
  ["w-bp02-095","w-bp02-095","w-bp02-095","w-bp02-095","w-bp02-095","w-bp02-095","w-bp02-095","w-bp02-095","w-bp02-095","w-bp02-095","w-bp02-001osr","w-bp02-001osr"],
  ["w-bp02-001osr","w-bp02-001","w-bp02-001","w-bp02-001","w-bp02-001","w-bp02-002osr","w-bp02-002","w-bp02-002","w-bp02-002","w-bp02-003osr","w-bp02-003osr","w-bp02-003"],
  ["w-bp02-003","w-bp02-003","w-bp02-003","w-bp02-003","w-bp02-003","w-bp02-003","w-bp02-004sr","w-bp02-004sr","w-bp02-004sr","w-bp02-004","w-bp02-004","w-bp02-004"],
  ["w-bp02-004","w-bp02-004","w-bp02-004","w-bp02-004","w-bp02-004","w-bp02-004","w-bp02-004","w-bp02-004","w-bp02-004","w-bp02-004","w-bp02-004","w-bp02-005sr"],
  ["w-bp02-005","w-bp02-005","w-bp02-005","w-bp02-005","w-bp02-005","w-bp02-005","w-bp02-005","w-bp02-005","w-bp02-005","w-bp02-005","w-bp02-005","w-bp02-005"],
  ["w-bp02-005","w-bp02-005","w-bp02-006sr","w-bp02-006","w-bp02-006","w-bp02-006","w-bp02-006","w-bp02-006","w-bp02-006","w-bp02-006","w-bp02-006","w-bp02-006"],
  ["w-bp02-006","w-bp02-006","w-bp02-006","w-bp02-006","w-bp02-006","w-bp02-007sr","w-bp02-007sr","w-bp02-008sr","w-bp02-008sr","w-bp02-008sr","w-bp02-018sr","w-bp02-018sr"],
  ["w-bp02-018sr","w-bp02-018","w-bp02-018","w-bp02-018","w-bp02-018","w-bp02-018","w-bp02-018","w-bp02-018","w-bp02-018","w-bp02-018","w-bp02-018","w-bp02-018"],
  ["w-bp02-018","w-bp02-018","w-bp02-018","w-bp02-022osr","w-bp02-022osr","w-bp02-022","w-bp02-022","w-bp02-022","w-bp02-022","w-bp02-022","w-bp02-022","w-bp02-022"],
  ["w-bp02-022","w-bp02-022","w-bp02-022","w-bp02-022","w-bp02-022","w-bp02-023sr","w-bp02-023sr","w-bp02-023","w-bp02-023","w-bp02-023","w-bp02-023","w-bp02-023"],
  ["w-bp02-023","w-bp02-023","w-bp02-023","w-bp02-023","w-bp02-023","w-bp02-023","w-bp02-023","w-bp02-049osr","w-bp02-049","w-bp02-049","w-bp02-049","w-bp02-049"],
  ["w-bp02-049","w-bp02-049","w-bp02-049","w-bp02-050osr","w-bp02-050","w-bp02-050","w-bp02-050","w-bp02-050","w-bp02-050","w-bp02-050","w-bp02-050","w-bp02-050"],
  ["w-bp02-051osr","w-bp02-051osr","w-bp02-051","w-bp02-051","w-bp02-051","w-bp02-051","w-bp02-051","w-bp02-051","w-bp02-051","w-bp02-051","w-bp02-051","w-bp02-051"],
  ["w-bp02-051","w-bp02-051","w-bp02-052sr","w-bp02-052sr","w-bp02-052","w-bp02-052","w-bp02-052","w-bp02-052","w-bp02-052","w-bp02-052","w-bp02-052","w-bp02-052"],
  ["w-bp02-052","w-bp02-052","w-bp02-052","w-bp02-052","w-bp02-052","w-bp02-053sr","w-bp02-053","w-bp02-053","w-bp02-053","w-bp02-053","w-bp02-053","w-bp02-053"],
  ["w-bp02-053","w-bp02-053","w-bp02-053","w-bp02-053","w-bp02-053","w-bp02-053","w-bp02-053","w-bp02-053","w-bp02-054sr","w-bp02-054sr","w-bp02-054sr","w-bp02-054"],
  ["w-bp02-054","w-bp02-054","w-bp02-054","w-bp02-054","w-bp02-054","w-bp02-054","w-bp02-054","w-bp02-054","w-bp02-054","w-bp02-054","w-bp02-054","w-bp02-055sr"],
  ["w-bp02-055sr","w-bp02-055sr","w-bp02-063sr","w-bp02-063","w-bp02-063","w-bp02-063","w-bp02-063","w-bp02-063","w-bp02-063","w-bp02-063","w-bp02-063","w-bp02-063"],
  ["w-bp02-063","w-bp02-063","w-bp02-063","w-bp02-063","w-bp02-068sr","w-bp02-068","w-bp02-068","w-bp02-068","w-bp02-068","w-bp02-068","w-bp02-068","w-bp02-068"],
  ["w-bp02-068","w-bp02-068","w-bp02-068","w-bp02-068","w-bp02-068","w-bp02-068","w-bp02-068",null,null,null,null,null]
];

