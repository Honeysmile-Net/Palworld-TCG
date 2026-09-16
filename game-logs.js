// Playtest / match logs. Stored here so the binder file stays light.
// Each entry: { id, title, date, deck, vs, note, raw }
// Entries with `mod` load their raw text lazily from logs/<file>.js on first open.
export const GAME_LOGS = [
  {
    id: 'pg-sep14-1358', title: 'p1 vs Purple/Green deck (Sep 9) — เล่นฝั่ง p2', date: '2026-09-14',
    deck: 'Purple/Green (Sep 9)', vs: 'p2 (Pengullet/Digtoise Gear · Rocket Launcher, Headband, Feed Box)', result: 'ชนะ (ลดไลฟ์คู่แข่งเหลือ 0 · T14)',
    note: 'rules 66 / abilities 15 · เกมยาว 14 เทิร์น — Pengullet ระเบิดล้างบอร์ด 4 รอบ แต่ไลฟ์เราขึ้น 10→13 จาก Petallia + interrupt 7 ครั้ง (Dinossom ×4, Pyrin ×3) · คู่แข่ง mill จนเหลือ 1 ใบ · ปิดด้วย Lily\'s เคลียร์ Rocket Launcher แล้ว Shadowbeak 3 · ยังไม่เก็บข้อความเต็ม'
  },
  {
    id: 'L-sep14-1326', title: 'Purple/Green deck (Sep 9) vs p2 — เล่นฝั่ง p2', date: '2026-09-14',
    deck: 'Purple/Green (Sep 9)', vs: 'p2 (Electric/Fire Gear)', result: 'แพ้ (T9 · Jormuntide Ignis 4+4)',
    note: 'บอร์ดถูกล้าง T4 แล้วใช้ Zoe\'s เชือดตัวเดียวที่มีทุกเทิร์น (Leezpunk→Petallia→Dinossom) บอร์ดว่างตลอด · โดน 4 ดาเมจ 2 รอบจบ · ยังไม่เก็บข้อความเต็ม'
  },
  {
    id: 'L-sep13-1222', title: 'Purple/Green deck (Sep 9) vs p2 — เล่นฝั่ง p2', date: '2026-09-13',
    deck: 'Purple/Green (Sep 9)', vs: 'p2 (Blue/Purple · Maraith)', result: 'แพ้ / ยอมแพ้ (T6)',
    note: 'Mulligan แล้วยังมีแต่ 6–8 cost · T2 ไม่มีอะไรลง · Maraith −200 + Strike + Zoe\'s เก็บทุกตัวที่ลง · ยังไม่เก็บข้อความเต็ม'
  },
  {
    id: 'L-sep13-1203', title: 'Purple/Green deck (Sep 9) vs p2 — เล่นฝั่ง p2', date: '2026-09-13',
    deck: 'Purple/Green (Sep 9)', vs: 'p2 (Green mirror · Viewing Cage)', result: 'ยอมแพ้ (T6 · 11 vs 9)',
    note: 'Viewing Cage เนรเทศ Petallia/Leezpunk ทุกเทิร์น บอร์ดว่างซ้ำ · ไลฟ์ยังนำอยู่ตอนยอม · ยังไม่เก็บข้อความเต็ม'
  },
  {
    id: 'L-sep13-1156', title: 'p1 vs Purple/Green deck (Sep 9)', date: '2026-09-13',
    deck: 'Purple/Green (Sep 9)', vs: 'p2 (Blue · Pengullet explode)', result: 'ยอมแพ้ (T8 · 9 vs 8)',
    note: 'Pengullet Yearning ระเบิดล้าง Tombat/Pyrin/Petallia T6 · MMW ถูกตีทุกเทิร์น · ยังไม่เก็บข้อความเต็ม'
  },
  {
    id: 'L-sep13-0659', title: 'Purple/Green deck (Sep 9) vs p2 — เล่นฝั่ง p2', date: '2026-09-13',
    deck: 'Purple/Green (Sep 9)', vs: 'p2 (Purple/Green mirror)', result: 'แพ้ (T5 · 0 ไลฟ์)',
    note: 'เปิด MMW ×2 T2–T3 ไม่มี Pal · คู่แข่ง Lyleen+Tombat T3 ตบ 5 · ไลฟ์ 9→4→2→0 · ยังไม่เก็บข้อความเต็ม'
  },
  {
    id: 'L-sep13-0637', title: 'p1 vs Purple/Green deck (Sep 9)', date: '2026-09-13',
    deck: 'Purple/Green (Sep 9)', vs: 'p2 (Blue/Ground · Digtoise)', result: 'ยอมแพ้ (T5 · 7 vs 6)',
    note: 'เกมยังสูสี · Digtoise Keen Needleback 800 เก็บ Tombat · ยังไม่เก็บข้อความเต็ม'
  },
  {
    id: 'L-sep13-0623', title: 'Purple/Green deck (Sep 9) vs p2 — เล่นฝั่ง p2', date: '2026-09-13',
    deck: 'Purple/Green (Sep 9)', vs: 'p2 (Blue Gear ×5)', result: 'ยอมแพ้ (T12 · 12 vs 4)',
    note: 'Handgun×2/Rifle/Rocket Launcher/Furnace เผาทุกตัวที่ลง · Pengullet ระเบิดล้างบอร์ด 3 รอบ · ไลฟ์นำ 12–4 แต่ตีไม่เข้า (interrupt ทุกเทิร์น) · ยังไม่เก็บข้อความเต็ม'
  },
  {
    id: 'L-sep13-0618', title: 'Purple/Green deck (Sep 9) vs p2 — เล่นฝั่ง p2', date: '2026-09-13',
    deck: 'Purple/Green (Sep 9)', vs: 'p2 (Blue/Fire · Relaxaurus)', result: 'แพ้ (T5 · 0 ไลฟ์)',
    note: 'Leezpunk โดน Rifle 1500 ทันที · ลง Shadowbeak 8 soul เหลือ 1 → Blazehowl ในมือจ่าย interrupt ไม่ได้ · Axel\'s Strategy เก็บ Shadowbeak · ยังไม่เก็บข้อความเต็ม'
  },
  {
    id: 'L-sep13-0614', title: 'p1 vs Purple/Green deck (Sep 9)', date: '2026-09-13',
    deck: 'Purple/Green (Sep 9)', vs: 'p2 (Electric/Blue swarm)', result: 'แพ้ (T4 · 0 ไลฟ์)',
    note: 'มือ Strike×2+Shadowbeak+Lily\'s ไม่มีตัวกัน · Leezpunk ตบ Fuack ตาย · T3 ลง MMW แทน Pal · โดน 4 ตัวรุม 7 ดาเมจ T4',
    mod: './logs/l-2026-09-13-0614.js'
  },
  {
    id: 'L-sep13-0612', title: 'Purple/Green deck (Sep 9) vs p2 — เล่นฝั่ง p2', date: '2026-09-13',
    deck: 'Purple/Green (Sep 9)', vs: 'p2 (Blue/Dragon · Chillet ×3)', result: 'ยอมแพ้ (T4 · 8 vs 8)',
    note: 'Zoe\'s เชือด Rushoar ฆ่า Chillet แล้วโดนลง Chillet อีก 2 · ยอมตอนเสมอ',
    mod: './logs/l-2026-09-13-0612.js'
  },
  {
    id: 'L-sep13-0549', title: 'Purple/Green deck (Sep 9) vs p2 — เล่นฝั่ง p2', date: '2026-09-13',
    deck: 'Purple/Green (Sep 9)', vs: 'p2 (Fire/Blue Gear · Azurobe)', result: 'แพ้ (T7 · 0 ไลฟ์)',
    note: 'Lyleen ×2 ค้างมือตั้งแต่ T1 · Azurobe 1200 เก็บ Tombat/Lyleen · Zoe\'s เชือดตัวเดียวทิ้งบอร์ดว่างซ้ำ · 10→6→2→0 · ยังไม่เก็บข้อความเต็ม'
  },
  {
    id: 'L-sep12-1447', title: 'Purple/Green deck (Sep 9) vs p2 — เล่นฝั่ง p2', date: '2026-09-12',
    deck: 'Purple/Green (Sep 9)', vs: 'p2 (Fire Gear · Suzaku/Jormuntide Ignis)', result: 'ยอมแพ้ (T10 · 12 vs 9)',
    note: 'ทุกตัวที่ลงถูกเผาในเทิร์นเดียว (MMG 500×2, Rifle 1500, Suzaku 900) · ไลฟ์นำแต่ทำอะไรไม่ได้ · ยังไม่เก็บข้อความเต็ม'
  },
  {
    id: 'L-sep12-1359', title: 'Purple/Green deck (Sep 9) vs p2 — เล่นฝั่ง p2', date: '2026-09-12',
    deck: 'Purple/Green (Sep 9)', vs: 'p2 (Fire/Purple · Stone Pit)', result: 'แพ้ (T8 · 0 ไลฟ์)',
    note: 'T2 ไม่มีอะไรลง · Stone Pit ล้าง Lyleen+Rushoar T4 · Zoe\'s เชือด Tombat ตัวเดียว · Suzaku 3 + Lyleen Noct 3 ปิด · ยังไม่เก็บข้อความเต็ม'
  },
  {
    id: 'L-sep11-1736', title: 'Purple/Green deck (Sep 9) vs p2 — เล่นฝั่ง p2', date: '2026-09-11',
    deck: 'Purple/Green (Sep 9)', vs: 'p2 (Electric/Blue swarm · Fuack ×2)', result: 'แพ้ (T4 · 0 ไลฟ์)',
    note: 'Mulligan · T2 ไม่ลงอะไร · T3 ลง MMW แทน Pal · โดนรุม 1+2+1+1 ทุกเทิร์น 10→0 ใน 4 เทิร์น',
    mod: './logs/l-2026-09-11-1736.js'
  },
  {
    id: 'L-sep11-1713', title: 'p1 vs Purple/Green deck (Sep 9)', date: '2026-09-11',
    deck: 'Purple/Green (Sep 9)', vs: 'p2 (Blue · Chillet ×2/Jormuntide)', result: 'ยอมแพ้ (T4 · 10 vs 10)',
    note: 'MMW T3 → Pyrin T4 ถูก Rested · คู่แข่งลง 3 ตัว T4 · ยอมตอนเสมอ',
    mod: './logs/l-2026-09-11-1713.js'
  },
  {
    id: 'L-sep11-1536', title: 'Blue/Purple deck (Sep 11) vs p2 — เล่นฝั่ง p2', date: '2026-09-11',
    deck: 'Blue/Purple (Sep 11) — เด็คทดลอง', vs: 'p2 (Blue · Elphidran Aqua ×3)', result: 'แพ้ (T9 · 0 ไลฟ์)',
    note: 'เด็ค Pengullet ทดลอง · Victor\'s Strategy ตี Lyleen Noct กลับมือ 2 รอบ · Elphidran Aqua 3 ตัวตบ 2 ทุกเทิร์น · ยังไม่เก็บข้อความเต็ม'
  },
  {
    id: 'pg-sep14-vs-p2',
    title: 'Purple/Green deck (Sep 9) vs p2',
    date: '2026-09-14',
    deck: 'Purple/Green (Sep 9)',
    vs: 'p2',
    result: 'ชนะ (ลดไลฟ์คู่แข่งเหลือ 0 · T10)',
    note: 'rules 66 / abilities 15 · จบเทิร์น 10 — ตบท้ายด้วย Strike from the Darkness + Shadowbeak/Lyleen/Blazehowl รวม 8 หน้า',
    raw: `# Purple/Green deck (Sep 9) vs p2
# 2026-09-14T11:42:47.337779+00:00 — p1
# rules 66 / abilities 15

[T1 main] games.log.shuffled
[T1 main] Your board: empty · Opponent's board: empty
[T1 main] You — Life 10, Deck 45, Hand 5, Souls 1/1 · Opponent — Life 10, Deck 45, Hand 5, Souls 2/2
[T1 main] Hand: Medieval Medicine Workbench, Rushoar – Reckless Destruction, Rushoar – Reckless Destruction, Tombat – Out of Nowhere!?, Tombat – Out of Nowhere!? · Souls 1/1
[T2 stand] games.log.turnStandPhase
[T2 draw] games.log.drawPhase
[T2 draw] games.log.drewForTurn
[T2 soul] games.log.placedSouls
[T2 main] games.log.mainPhase
[T2 main] You — Life 10, Deck 44, Hand 6, Souls 3/3 · Opponent — Life 10, Deck 45, Hand 5, Souls 2/2
[T2 main] Hand: Dinossom – Radiant Fragrance, Medieval Medicine Workbench, Rushoar – Reckless Destruction, Rushoar – Reckless Destruction, Tombat – Out of Nowhere!?, Tombat – Out of Nowhere!? · Souls 3/3
[T2 main] Deployed Rushoar – Reckless Destruction to slot 1 for 2 Souls.
[T2 main] You — Life 10, Deck 44, Hand 5, Souls 1/3 · Opponent — Life 10, Deck 45, Hand 5, Souls 2/2
[T2 main] Rushoar – Reckless Destruction attacked them for 1. Damage Check: 1 card milled, no Lucky. They 10 to 9 life.
[T2 main] To opponent's graveyard: Cryolinx – Arctic Ordeal
[T2 end] games.log.endPhaseCleared
[T2 end] Your board: Rushoar – Reckless Destruction (rested) · Opponent's board: empty
[T2 end] You — Life 10, Deck 44, Hand 5, Souls 1/3 · Opponent — Life 9, Deck 43, Hand 6, Souls 4/4
[T2 end] Hand: Dinossom – Radiant Fragrance, Medieval Medicine Workbench, Rushoar – Reckless Destruction, Tombat – Out of Nowhere!?, Tombat – Out of Nowhere!? · Souls 1/3
[T2 waiting] Opponent deployed Pengullet – Frequent Flyer.
[T2 waiting] Opponent's Pengullet – Frequent Flyer attacks your Rushoar – Reckless Destruction.
[T2 waiting] You — Life 10, Deck 44, Hand 5, Souls 1/3 · Opponent — Life 9, Deck 43, Hand 5, Souls 1/4
[T2 waiting] Pengullet – Frequent Flyer (500) attacked Rushoar – Reckless Destruction (200).
[T2 waiting] Rushoar – Reckless Destruction destroyed, 500 damage vs 200 Power.
[T2 waiting] To your graveyard: Rushoar – Reckless Destruction
[T3 stand] games.log.turnStandPhase
[T3 draw] games.log.drawPhase
[T3 draw] games.log.drewForTurn
[T3 soul] games.log.placedSouls
[T3 main] games.log.mainPhase
[T3 main] Your board: empty · Opponent's board: Pengullet – Frequent Flyer (rested)
[T3 main] You — Life 10, Deck 43, Hand 6, Souls 5/5 · Opponent — Life 9, Deck 43, Hand 5, Souls 1/4
[T3 main] Hand: Dinossom – Radiant Fragrance, Lyleen – Blessing of the Goddess, Medieval Medicine Workbench, Rushoar – Reckless Destruction, Tombat – Out of Nowhere!?, Tombat – Out of Nowhere!? · Souls 5/5
[T3 main] Deployed Medieval Medicine Workbench to slot 1 for 4 Souls.
[T3 end] games.log.endPhaseCleared
[T3 end] Your board: Medieval Medicine Workbench (standing) · Opponent's board: Pengullet – Frequent Flyer (standing)
[T3 end] You — Life 10, Deck 43, Hand 5, Souls 1/5 · Opponent — Life 9, Deck 42, Hand 6, Souls 6/6
[T3 end] Hand: Dinossom – Radiant Fragrance, Lyleen – Blessing of the Goddess, Rushoar – Reckless Destruction, Tombat – Out of Nowhere!?, Tombat – Out of Nowhere!? · Souls 1/5
[T3 waiting] Opponent deployed Elphidran Aqua – Gentle Ripples.
[T3 waiting] Opponent's Elphidran Aqua – Gentle Ripples attacks you for 2.
[T3 waiting] You — Life 10, Deck 43, Hand 5, Souls 1/5 · Opponent — Life 9, Deck 41, Hand 6, Souls 0/6
[T3 waiting] Elphidran Aqua – Gentle Ripples hit you for 2. Damage Check: 2 cards milled, no Lucky. You 10 to 8 life.
[T3 waiting] To your graveyard: Leezpunk – Treasure Bandit, Blazehowl Noct – Darkflame Defender
[T3 waiting] Opponent's Pengullet – Frequent Flyer attacks you for 1.
[T3 waiting] You — Life 8, Deck 41, Hand 5, Souls 1/5 · Opponent — Life 9, Deck 41, Hand 6, Souls 0/6
[T3 waiting] Pengullet – Frequent Flyer hit you for 1. Damage Check: 1 card milled, no Lucky. You 8 to 7 life.
[T3 waiting] To your graveyard: Rushoar – Reckless Destruction
[T4 stand] games.log.turnStandPhase
[T4 draw] games.log.drawPhase
[T4 draw] games.log.drewForTurn
[T4 soul] games.log.placedSouls
[T4 main] games.log.mainPhase
[T4 main] Your board: Medieval Medicine Workbench (standing) · Opponent's board: Pengullet – Frequent Flyer (rested), Elphidran Aqua – Gentle Ripples (rested)
[T4 main] You — Life 7, Deck 39, Hand 6, Souls 7/7 · Opponent — Life 9, Deck 41, Hand 6, Souls 0/6
[T4 main] Hand: Dinossom – Radiant Fragrance, Lyleen – Blessing of the Goddess, Petallia – Sweet Blessings, Rushoar – Reckless Destruction, Tombat – Out of Nowhere!?, Tombat – Out of Nowhere!? · Souls 7/7
[T4 main] Deployed Lyleen – Blessing of the Goddess to slot 2 for 7 Souls.
[T4 main] Got 3 Ingredient.
[T4 main] Spent 3 Ingredient (0 left).
[T4 main] Looked at top 5: deployed Blazehowl Noct – Darkflame Defender.
[T4 main] You — Life 7, Deck 38, Hand 5, Souls 0/7 · Opponent — Life 9, Deck 41, Hand 6, Souls 0/6
[T4 main] Blazehowl Noct – Darkflame Defender's attack was interrupted.
[T4 main] To opponent's graveyard: Blazehowl Noct – Darkflame Defender, Pengullet – Frequent Flyer
[T4 main] You — Life 7, Deck 38, Hand 5, Souls 0/7 · Opponent — Life 9, Deck 41, Hand 4, Souls 0/6
[T4 main] Lyleen – Blessing of the Goddess (900) attacked Pengullet – Frequent Flyer (500).
[T4 main] Pengullet – Frequent Flyer destroyed, 900 damage vs 500 Power.
[T4 main] To opponent's graveyard: Pengullet – Frequent Flyer
[T4 end] games.log.endPhaseCleared
[T4 end] Your board: Medieval Medicine Workbench (standing), Lyleen – Blessing of the Goddess (rested), Blazehowl Noct – Darkflame Defender (rested) · Opponent's board: Elphidran Aqua – Gentle Ripples (standing)
[T4 end] You — Life 7, Deck 38, Hand 5, Souls 0/7 · Opponent — Life 9, Deck 40, Hand 5, Souls 8/8
[T4 end] Hand: Dinossom – Radiant Fragrance, Petallia – Sweet Blessings, Rushoar – Reckless Destruction, Tombat – Out of Nowhere!?, Tombat – Out of Nowhere!? · Souls 0/7
[T4 waiting] Opponent deployed Relaxaurus – Hungry Gunner.
[T4 waiting] Blazehowl Noct – Darkflame Defender was Rested.
[T4 waiting] Blazehowl Noct – Darkflame Defender won't stand while the source stays in play.
[T4 waiting] Opponent's Relaxaurus – Hungry Gunner attacks your Lyleen – Blessing of the Goddess.
[T4 waiting] You — Life 7, Deck 38, Hand 5, Souls 0/7 · Opponent — Life 9, Deck 40, Hand 4, Souls 1/8
[T4 waiting] You interrupted with Dinossom – Radiant Fragrance, discarded Petallia – Sweet Blessings. The attack was nullified.
[T4 waiting] To your graveyard: Dinossom – Radiant Fragrance, Petallia – Sweet Blessings
[T5 stand] games.log.turnStandPhase
[T5 draw] games.log.drawPhase
[T5 draw] games.log.drewForTurn
[T5 soul] games.log.placedSouls
[T5 main] games.log.mainPhase
[T5 main] Your board: Medieval Medicine Workbench (standing), Lyleen – Blessing of the Goddess (standing), Blazehowl Noct – Darkflame Defender (rested) · Opponent's board: Relaxaurus – Hungry Gunner (rested), Elphidran Aqua – Gentle Ripples (standing)
[T5 main] You — Life 7, Deck 37, Hand 4, Souls 9/9 · Opponent — Life 9, Deck 40, Hand 4, Souls 1/8
[T5 main] Hand: Rushoar – Reckless Destruction, Rushoar – Reckless Destruction, Tombat – Out of Nowhere!?, Tombat – Out of Nowhere!? · Souls 9/9
[T5 main] Deployed Tombat – Out of Nowhere!? to slot 4 for 5 Souls.
[T5 main] Looked at top 3: took Blazehowl Noct – Darkflame Defender to hand. Graveyard: Petallia – Sweet Blessings, Tombat – Out of Nowhere!?.
[T5 main] To your graveyard: Petallia – Sweet Blessings, Tombat – Out of Nowhere!?
[T5 main] Hand: Blazehowl Noct – Darkflame Defender, Rushoar – Reckless Destruction, Rushoar – Reckless Destruction, Tombat – Out of Nowhere!? · Souls 4/9
[T5 main] Rested 3 Souls to pay a cost (1 standing).
[T5 main] Assigned Tombat – Out of Nowhere!?.
[T5 main] Deployed Tombat – Out of Nowhere!? from the graveyard (rested).
[T5 main] Looked at top 3: took Shadowbeak – Seed of Despair to hand. Graveyard: Pyrin Noct – Steed of Azure Flames, Zoe's Strategy.
[T5 main] To your graveyard: Pyrin Noct – Steed of Azure Flames, Zoe's Strategy
[T5 main] Hand: Blazehowl Noct – Darkflame Defender, Rushoar – Reckless Destruction, Rushoar – Reckless Destruction, Shadowbeak – Seed of Despair, Tombat – Out of Nowhere!? · Souls 1/9
[T5 main] You — Life 7, Deck 31, Hand 5, Souls 1/9 · Opponent — Life 9, Deck 40, Hand 4, Souls 1/8
[T5 waiting] They blocked with Elphidran Aqua – Gentle Ripples.
[T5 main] Lyleen – Blessing of the Goddess (900) attacked Elphidran Aqua – Gentle Ripples (900).
[T5 main] Elphidran Aqua – Gentle Ripples destroyed, 900 damage vs 900 Power.
[T5 main] Lyleen – Blessing of the Goddess destroyed, 900 damage vs 900 Power.
[T5 main] To your graveyard: Lyleen – Blessing of the Goddess · To opponent's graveyard: Elphidran Aqua – Gentle Ripples
[T5 end] games.log.endPhaseCleared
[T5 end] Your board: Medieval Medicine Workbench (standing), Blazehowl Noct – Darkflame Defender (rested), Tombat – Out of Nowhere!? (rested), Tombat – Out of Nowhere!? (rested) · Opponent's board: Relaxaurus – Hungry Gunner (standing)
[T5 end] You — Life 7, Deck 31, Hand 5, Souls 1/9 · Opponent — Life 9, Deck 39, Hand 5, Souls 10/10
[T5 waiting] Opponent deployed Astegon – Aegis Wyvern of Death.
[T5 waiting] Tombat – Out of Nowhere!? gets power -1000 until end of turn.
[T5 waiting] Opponent's Astegon – Aegis Wyvern of Death attacks you for 3.
[T5 waiting] You — Life 7, Deck 31, Hand 5, Souls 1/9 · Opponent — Life 9, Deck 39, Hand 4, Souls 2/10
[T5 waiting] To your graveyard: Tombat – Out of Nowhere!?
[T5 waiting] Astegon – Aegis Wyvern of Death attacked you for 3; your Damage Check revealed a Lucky Pal, cancelled, no damage. (2 cards milled)
[T5 waiting] To your graveyard: Zoe's Strategy, Shadowbeak – Seed of Despair
[T6 stand] games.log.turnStandPhase
[T6 draw] games.log.drawPhase
[T6 draw] games.log.drewForTurn
[T6 soul] games.log.placedSouls
[T6 main] games.log.mainPhase
[T6 main] Your board: Medieval Medicine Workbench (standing), Blazehowl Noct – Darkflame Defender (rested), Tombat – Out of Nowhere!? (standing) · Opponent's board: Relaxaurus – Hungry Gunner (standing), Astegon – Aegis Wyvern of Death (rested)
[T6 main] You — Life 7, Deck 28, Hand 6, Souls 10/10 · Opponent — Life 9, Deck 39, Hand 4, Souls 2/10
[T6 main] Hand: Blazehowl Noct – Darkflame Defender, Leezpunk – Treasure Bandit, Rushoar – Reckless Destruction, Rushoar – Reckless Destruction, Shadowbeak – Seed of Despair, Tombat – Out of Nowhere!? · Souls 10/10
[T6 main] Rested 3 Souls to pay a cost (7 standing).
[T6 main] Assigned Tombat – Out of Nowhere!?.
[T6 main] Deployed Petallia – Sweet Blessings from the graveyard (rested).
[T6 main] Petallia – Sweet Blessings: gained 1 life (8).
[T6 main] Stood 2 Souls.
[T6 main] Deployed Shadowbeak – Seed of Despair to slot 4 for 8 Souls.
[T6 main] You — Life 8, Deck 28, Hand 5, Souls 1/10 · Opponent — Life 9, Deck 39, Hand 4, Souls 2/10
[T6 main] Shadowbeak – Seed of Despair attacked them for 3. Damage Check: 3 cards milled, no Lucky. They 9 to 6 life.
[T6 main] To opponent's graveyard: Aurora Guide, Pengullet – Yearning for the Sky, Cryolinx – Arctic Ordeal
[T6 end] games.log.endPhaseCleared
[T6 waiting] Shadowbeak: butchered your Petallia – Sweet Blessings.
[T6 waiting] To your graveyard: Petallia – Sweet Blessings
[T6 waiting] Shadowbeak: butchered your Tombat – Out of Nowhere!?.
[T6 waiting] To your graveyard: Tombat – Out of Nowhere!?
[T6 waiting] To opponent's graveyard: Astegon – Aegis Wyvern of Death
[T6 waiting] Your board: Medieval Medicine Workbench (standing), Blazehowl Noct – Darkflame Defender (rested), Shadowbeak – Seed of Despair (rested) · Opponent's board: empty
[T6 waiting] You — Life 8, Deck 28, Hand 5, Souls 1/10 · Opponent — Life 6, Deck 35, Hand 5, Souls 10/10
[T6 waiting] To opponent's graveyard: Relaxaurus – Hungry Gunner
[T6 waiting] Hand: Blazehowl Noct – Darkflame Defender, Leezpunk – Treasure Bandit, Rushoar – Reckless Destruction, Rushoar – Reckless Destruction, Tombat – Out of Nowhere!? · Souls 1/10
[T6 waiting] Opponent played Strike from the Darkness.
[T6 waiting] To opponent's graveyard: Strike from the Darkness
[T6 waiting] Shadowbeak – Seed of Despair was destroyed.
[T6 waiting] To your graveyard: Shadowbeak – Seed of Despair
[T6 waiting] Opponent deployed Chillet – Dragon Whisperer.
[T6 waiting] Opponent revealed Reindrix – Icy Gaze and added it to their hand.
[T6 waiting] Opponent's Chillet – Dragon Whisperer attacks you for 2.
[T6 waiting] You — Life 8, Deck 28, Hand 5, Souls 1/10 · Opponent — Life 6, Deck 34, Hand 4, Souls 1/10
[T6 waiting] Chillet – Dragon Whisperer hit you for 2. Damage Check: 2 cards milled, no Lucky. You 8 to 6 life.
[T6 waiting] To your graveyard: Strike from the Darkness, Pyrin Noct – Steed of Azure Flames
[T7 stand] games.log.turnStandPhase
[T7 draw] games.log.drawPhase
[T7 draw] games.log.drewForTurn
[T7 soul] games.log.placedSouls
[T7 main] games.log.mainPhase
[T7 main] Your board: Medieval Medicine Workbench (standing), Blazehowl Noct – Darkflame Defender (standing) · Opponent's board: Chillet – Dragon Whisperer (rested)
[T7 main] You — Life 6, Deck 25, Hand 6, Souls 10/10 · Opponent — Life 6, Deck 34, Hand 4, Souls 1/10
[T7 main] Hand: Blazehowl Noct – Darkflame Defender, Dinossom – Radiant Fragrance, Leezpunk – Treasure Bandit, Rushoar – Reckless Destruction, Rushoar – Reckless Destruction, Tombat – Out of Nowhere!? · Souls 10/10
[T7 main] Rested 3 Souls to pay a cost (7 standing).
[T7 main] Assigned Blazehowl Noct – Darkflame Defender.
[T7 main] Deployed Shadowbeak – Seed of Despair from the graveyard (rested).
[T7 main] Deployed Leezpunk – Treasure Bandit to slot 4 for 3 Souls.
[T7 main] You — Life 6, Deck 25, Hand 5, Souls 4/10 · Opponent — Life 6, Deck 34, Hand 4, Souls 1/10
[T7 main] Leezpunk – Treasure Bandit attacked them for 1. Damage Check: 1 card milled, no Lucky. They 6 to 5 life.
[T7 main] To opponent's graveyard: Cryolinx – Arctic Ordeal
[T7 main] games.log.soulDraw
[T7 main] Hand: Blazehowl Noct – Darkflame Defender, Dinossom – Radiant Fragrance, Rushoar – Reckless Destruction, Rushoar – Reckless Destruction, Tombat – Out of Nowhere!?, Zoe's Strategy · Souls 1/10
[T7 end] games.log.endPhaseCleared
[T7 waiting] Opponent must discard 1.
[T7 waiting] Opponent must discard 1.
[T7 waiting] Shadowbeak: butchered your Leezpunk – Treasure Bandit.
[T7 waiting] To your graveyard: Leezpunk – Treasure Bandit
[T7 waiting] Opponent discarded Single-Shot Sphere Launcher.
[T7 waiting] To opponent's graveyard: Single-Shot Sphere Launcher
[T7 waiting] Opponent discarded Reindrix – Icy Gaze.
[T7 waiting] To opponent's graveyard: Reindrix – Icy Gaze
[T7 waiting] Your board: Medieval Medicine Workbench (standing), Shadowbeak – Seed of Despair (rested), Blazehowl Noct – Darkflame Defender (rested) · Opponent's board: empty
[T7 waiting] You — Life 6, Deck 24, Hand 6, Souls 1/10 · Opponent — Life 5, Deck 32, Hand 3, Souls 10/10
[T7 waiting] To opponent's graveyard: Chillet – Dragon Whisperer
[T7 waiting] Opponent deployed Astegon – Aegis Wyvern of Death.
[T7 waiting] Shadowbeak – Seed of Despair gets power -1000 until end of turn.
[T7 waiting] Opponent's Astegon – Aegis Wyvern of Death attacks your Blazehowl Noct – Darkflame Defender.
[T7 waiting] You — Life 6, Deck 24, Hand 6, Souls 1/10 · Opponent — Life 5, Deck 32, Hand 2, Souls 2/10
[T7 waiting] To your graveyard: Shadowbeak – Seed of Despair
[T7 waiting] You interrupted with Dinossom – Radiant Fragrance, paid 1 Soul. The attack was nullified.
[T7 waiting] To your graveyard: Dinossom – Radiant Fragrance
[T8 stand] games.log.turnStandPhase
[T8 draw] games.log.drawPhase
[T8 draw] games.log.drewForTurn
[T8 soul] games.log.placedSouls
[T8 main] games.log.mainPhase
[T8 main] Your board: Medieval Medicine Workbench (standing), Blazehowl Noct – Darkflame Defender (standing) · Opponent's board: Astegon – Aegis Wyvern of Death (rested)
[T8 main] You — Life 6, Deck 23, Hand 6, Souls 10/10 · Opponent — Life 5, Deck 32, Hand 2, Souls 2/10
[T8 main] Hand: Blazehowl Noct – Darkflame Defender, Lyleen – Blessing of the Goddess, Rushoar – Reckless Destruction, Rushoar – Reckless Destruction, Tombat – Out of Nowhere!?, Zoe's Strategy · Souls 10/10
[T8 main] Rested 3 Souls to pay a cost (7 standing).
[T8 main] Assigned Blazehowl Noct – Darkflame Defender.
[T8 main] Deployed Shadowbeak – Seed of Despair from the graveyard (rested).
[T8 main] Deployed Lyleen – Blessing of the Goddess to slot 4 for 7 Souls.
[T8 main] Got 3 Ingredient.
[T8 main] Got 3 Ingredient.
[T8 main] Spent 3 Ingredient (3 left).
[T8 main] Looked at top 5: deployed Menasting – Darkness-Dwelling Scorpion.
[T8 main] You — Life 6, Deck 22, Hand 5, Souls 0/10 · Opponent — Life 5, Deck 32, Hand 2, Souls 2/10
[T8 main] Lyleen – Blessing of the Goddess's attack was interrupted.
[T8 main] To opponent's graveyard: Reindrix – Icy Gaze
[T8 main] You — Life 6, Deck 22, Hand 5, Souls 0/10 · Opponent — Life 5, Deck 32, Hand 1, Souls 1/10
[T8 main] Menasting – Darkness-Dwelling Scorpion attacked them for 2; their Damage Check revealed a Lucky Pal, cancelled, no damage. (2 cards milled)
[T8 main] To opponent's graveyard: Zoe's Strategy, Chillet – Dragon Whisperer
[T8 end] games.log.endPhaseCleared
[T8 waiting] Shadowbeak: butchered your Menasting – Darkness-Dwelling Scorpion.
[T8 waiting] To your graveyard: Menasting – Darkness-Dwelling Scorpion
[T8 waiting] To opponent's graveyard: Astegon – Aegis Wyvern of Death
[T8 waiting] Returned Blazehowl Noct – Darkflame Defender from graveyard to hand.
[T8 waiting] Hand: Blazehowl Noct – Darkflame Defender, Blazehowl Noct – Darkflame Defender, Rushoar – Reckless Destruction, Rushoar – Reckless Destruction, Tombat – Out of Nowhere!?, Zoe's Strategy · Souls 0/10
[T8 waiting] Returned Dinossom – Radiant Fragrance from graveyard to hand.
[T8 waiting] Your board: Medieval Medicine Workbench (standing), Shadowbeak – Seed of Despair (rested), Blazehowl Noct – Darkflame Defender (rested), Lyleen – Blessing of the Goddess (rested) · Opponent's board: empty
[T8 waiting] You — Life 6, Deck 22, Hand 7, Souls 0/10 · Opponent — Life 5, Deck 29, Hand 2, Souls 10/10
[T8 waiting] Hand: Blazehowl Noct – Darkflame Defender, Blazehowl Noct – Darkflame Defender, Dinossom – Radiant Fragrance, Rushoar – Reckless Destruction, Rushoar – Reckless Destruction, Tombat – Out of Nowhere!?, Zoe's Strategy · Souls 0/10
[T8 waiting] games.log.oppSoulDraw
[T8 waiting] Opponent deployed Chillet – Dragon Whisperer.
[T8 waiting] Opponent revealed Cryolinx – Arctic Ordeal and added it to their hand.
[T8 waiting] Opponent's Chillet – Dragon Whisperer attacks you for 2.
[T8 waiting] You — Life 6, Deck 22, Hand 7, Souls 0/10 · Opponent — Life 5, Deck 27, Hand 3, Souls 2/10
[T8 waiting] You interrupted with Dinossom – Radiant Fragrance, discarded Rushoar – Reckless Destruction. The attack was nullified.
[T8 waiting] To your graveyard: Dinossom – Radiant Fragrance, Rushoar – Reckless Destruction
[T9 stand] games.log.turnStandPhase
[T9 draw] games.log.drawPhase
[T9 draw] games.log.drewForTurn
[T9 soul] games.log.placedSouls
[T9 main] games.log.mainPhase
[T9 main] Your board: Medieval Medicine Workbench (standing), Shadowbeak – Seed of Despair (standing), Blazehowl Noct – Darkflame Defender (standing), Lyleen – Blessing of the Goddess (standing) · Opponent's board: Chillet – Dragon Whisperer (rested)
[T9 main] You — Life 6, Deck 21, Hand 6, Souls 10/10 · Opponent — Life 5, Deck 27, Hand 3, Souls 2/10
[T9 main] Hand: Blazehowl Noct – Darkflame Defender, Blazehowl Noct – Darkflame Defender, Rushoar – Reckless Destruction, Strike from the Darkness, Tombat – Out of Nowhere!?, Zoe's Strategy · Souls 10/10
[T9 main] Rested 3 Souls to pay a cost (7 standing).
[T9 main] Assigned Blazehowl Noct – Darkflame Defender.
[T9 main] Deployed Leezpunk – Treasure Bandit from the graveyard (rested).
[T9 main] Played Zoe's Strategy for 3 Souls.
[T9 main] To your graveyard: Zoe's Strategy
[T9 main] Returned Pyrin Noct – Steed of Azure Flames from graveyard to hand.
[T9 main] Opponent must discard 1.
[T9 main] Hand: Blazehowl Noct – Darkflame Defender, Blazehowl Noct – Darkflame Defender, Pyrin Noct – Steed of Azure Flames, Rushoar – Reckless Destruction, Strike from the Darkness, Tombat – Out of Nowhere!? · Souls 4/10
[T9 main] Opponent discarded Grappling Gun.
[T9 main] To opponent's graveyard: Grappling Gun
[T9 main] games.log.soulDraw
[T9 main] Hand: Blazehowl Noct – Darkflame Defender, Blazehowl Noct – Darkflame Defender, Menasting – Darkness-Dwelling Scorpion, Pyrin Noct – Steed of Azure Flames, Rushoar – Reckless Destruction, Strike from the Darkness, Tombat – Out of Nowhere!? · Souls 1/10
[T9 main] You — Life 6, Deck 20, Hand 7, Souls 1/10 · Opponent — Life 5, Deck 27, Hand 2, Souls 2/10
[T9 main] Shadowbeak – Seed of Despair's attack was interrupted.
[T9 main] To opponent's graveyard: Reindrix – Icy Gaze
[T9 main] You — Life 6, Deck 20, Hand 7, Souls 1/10 · Opponent — Life 5, Deck 27, Hand 1, Souls 1/10
[T9 main] Lyleen – Blessing of the Goddess's attack was interrupted.
[T9 main] To opponent's graveyard: Cryolinx – Arctic Ordeal
[T9 main] Spent 3 Ingredient (0 left).
[T9 main] Looked at top 5: deployed Leezpunk – Treasure Bandit.
[T9 end] games.log.endPhaseCleared
[T9 end] Your board: Medieval Medicine Workbench (standing), Shadowbeak – Seed of Despair (rested), Blazehowl Noct – Darkflame Defender (rested), Lyleen – Blessing of the Goddess (rested), Leezpunk – Treasure Bandit (rested), Leezpunk – Treasure Bandit (standing) · Opponent's board: Chillet – Dragon Whisperer (standing)
[T9 end] You — Life 6, Deck 19, Hand 7, Souls 1/10 · Opponent — Life 5, Deck 26, Hand 1, Souls 10/10
[T9 waiting] games.log.oppSoulDraw
[T9 waiting] Opponent deployed Elphidran – Gentle Radiance.
[T9 waiting] Opponent revealed Elphidran Aqua – Gentle Ripples (Dragon).
[T9 waiting] Opponent's Elphidran – Gentle Radiance attacks your Lyleen – Blessing of the Goddess.
[T9 waiting] You — Life 6, Deck 19, Hand 7, Souls 1/10 · Opponent — Life 5, Deck 25, Hand 1, Souls 3/10
[T9 waiting] You blocked with Leezpunk – Treasure Bandit.
[T9 waiting] Opponent discarded 1: Elphidran Aqua – Gentle Ripples.
[T9 waiting] Opponent discards 0.
[T9 waiting] Elphidran – Gentle Radiance (600+500 = 1100) attacked Leezpunk – Treasure Bandit (200).
[T9 waiting] Leezpunk – Treasure Bandit destroyed, 1100 damage vs 200 Power.
[T9 waiting] To your graveyard: Leezpunk – Treasure Bandit · To opponent's graveyard: Elphidran Aqua – Gentle Ripples
[T10 stand] games.log.turnStandPhase
[T10 draw] games.log.drawPhase
[T10 draw] games.log.drewForTurn
[T10 soul] games.log.placedSouls
[T10 main] games.log.mainPhase
[T10 main] Your board: Medieval Medicine Workbench (standing), Shadowbeak – Seed of Despair (standing), Blazehowl Noct – Darkflame Defender (standing), Lyleen – Blessing of the Goddess (standing), Leezpunk – Treasure Bandit (standing) · Opponent's board: Chillet – Dragon Whisperer (standing), Elphidran – Gentle Radiance (rested)
[T10 main] You — Life 6, Deck 18, Hand 8, Souls 10/10 · Opponent — Life 5, Deck 25, Hand 0, Souls 3/10
[T10 main] Hand: Blazehowl Noct – Darkflame Defender, Blazehowl Noct – Darkflame Defender, Lyleen – Blessing of the Goddess, Menasting – Darkness-Dwelling Scorpion, Pyrin Noct – Steed of Azure Flames, Rushoar – Reckless Destruction, Strike from the Darkness, Tombat – Out of Nowhere!? · Souls 10/10
[T10 main] Played Strike from the Darkness for 4 Souls.
[T10 main] To your graveyard: Strike from the Darkness
[T10 main] To opponent's graveyard: Chillet – Dragon Whisperer
[T10 main] You — Life 6, Deck 18, Hand 7, Souls 6/10 · Opponent — Life 5, Deck 25, Hand 0, Souls 3/10
[T10 main] Shadowbeak – Seed of Despair attacked them for 3; their Damage Check revealed a Lucky Pal, cancelled, no damage. (1 card milled)
[T10 main] To opponent's graveyard: Jormuntide – Surging Sea Serpent
[T10 main] You — Life 6, Deck 18, Hand 7, Souls 6/10 · Opponent — Life 5, Deck 24, Hand 0, Souls 3/10
[T10 main] Lyleen – Blessing of the Goddess attacked them for 3. Damage Check: 3 cards milled, no Lucky. They 5 to 2 life.
[T10 main] To opponent's graveyard: Aurora Guide, Relaxaurus – Hungry Gunner, Reindrix – Icy Gaze
[T10 main] You — Life 6, Deck 18, Hand 7, Souls 6/10 · Opponent — Life 2, Deck 21, Hand 0, Souls 3/10
[T10 main] Blazehowl Noct – Darkflame Defender attacked them for 2. Damage Check: 2 cards milled, no Lucky. They 2 to 0 life.
[T10 main] To opponent's graveyard: Pengullet Rocket Launcher, Blazehowl Noct – Darkflame Defender`
  },
  {
    id: 'pg-sep09-vs-p2',
    title: 'Purple/Green deck (Sep 9) vs p2',
    date: '2026-09-13',
    deck: 'Purple/Green (Sep 9)',
    vs: 'p2',
    result: 'ชนะ (คู่แข่งยอมแพ้)',
    note: 'rules 66 / abilities 15 · บันทึกถึงเทิร์น 9 — ฝ่ายตรงข้ามยอมแพ้ · ผล: ชนะ ✓',
    raw: `# Purple/Green deck (Sep 9) vs p2
# 2026-09-13T12:11:36.392856+00:00 — p1
# rules 66 / abilities 15

[T1 main] games.log.shuffled
[T1 main] Your board: empty · Opponent's board: empty
[T1 main] You — Life 10, Deck 45, Hand 5, Souls 1/1 · Opponent — Life 10, Deck 45, Hand 5, Souls 2/2
[T1 main] Hand: Leezpunk – Treasure Bandit, Menasting – Darkness-Dwelling Scorpion, Rushoar – Reckless Destruction, Tombat – Out of Nowhere!?, Tombat – Out of Nowhere!? · Souls 1/1
[T1 waiting] Opponent deployed Cattiva – My First Pal.
[T1 waiting] Opponent's Cattiva – My First Pal attacks you for 1.
[T1 waiting] You — Life 10, Deck 45, Hand 5, Souls 1/1 · Opponent — Life 10, Deck 45, Hand 4, Souls 0/2
[T1 waiting] Cattiva – My First Pal hit you for 1. Damage Check: 1 card milled, no Lucky. You 10 to 9 life.
[T1 waiting] To your graveyard: Dinossom – Radiant Fragrance
[T2 stand] games.log.turnStandPhase
[T2 draw] games.log.drawPhase
[T2 draw] games.log.drewForTurn
[T2 soul] games.log.placedSouls
[T2 main] games.log.mainPhase
[T2 main] Your board: empty · Opponent's board: Cattiva – My First Pal (rested)
[T2 main] You — Life 9, Deck 43, Hand 6, Souls 3/3 · Opponent — Life 10, Deck 45, Hand 4, Souls 0/2
[T2 main] Hand: Leezpunk – Treasure Bandit, Medieval Medicine Workbench, Menasting – Darkness-Dwelling Scorpion, Rushoar – Reckless Destruction, Tombat – Out of Nowhere!?, Tombat – Out of Nowhere!? · Souls 3/3
[T2 main] Deployed Leezpunk – Treasure Bandit to slot 1 for 3 Souls.
[T2 main] You — Life 9, Deck 43, Hand 5, Souls 0/3 · Opponent — Life 10, Deck 45, Hand 4, Souls 0/2
[T2 main] Leezpunk – Treasure Bandit attacked them for 1. Damage Check: 1 card milled, no Lucky. They 10 to 9 life.
[T2 main] To opponent's graveyard: Blazehowl Noct – Darkflame Defender
[T2 end] games.log.endPhaseCleared
[T2 end] Your board: Leezpunk – Treasure Bandit (rested) · Opponent's board: Cattiva – My First Pal (standing)
[T2 end] You — Life 9, Deck 43, Hand 5, Souls 0/3 · Opponent — Life 9, Deck 43, Hand 5, Souls 4/4
[T2 end] Hand: Medieval Medicine Workbench, Menasting – Darkness-Dwelling Scorpion, Rushoar – Reckless Destruction, Tombat – Out of Nowhere!?, Tombat – Out of Nowhere!? · Souls 0/3
[T2 waiting] Opponent's Cattiva – My First Pal attacks you for 1.
[T2 waiting] Cattiva – My First Pal hit you for 1. Damage Check: 1 card milled, no Lucky. You 9 to 8 life.
[T2 waiting] To your graveyard: Leezpunk – Treasure Bandit
[T2 waiting] Opponent deployed Leezpunk – Treasure Bandit.
[T2 waiting] Opponent's Leezpunk – Treasure Bandit attacks you for 1.
[T2 waiting] You — Life 8, Deck 42, Hand 5, Souls 0/3 · Opponent — Life 9, Deck 43, Hand 4, Souls 1/4
[T2 waiting] Leezpunk – Treasure Bandit hit you for 1. Damage Check: 1 card milled, no Lucky. You 8 to 7 life.
[T2 waiting] To your graveyard: Petallia – Sweet Blessings
[T3 stand] games.log.turnStandPhase
[T3 draw] games.log.drawPhase
[T3 draw] games.log.drewForTurn
[T3 soul] games.log.placedSouls
[T3 main] games.log.mainPhase
[T3 main] Your board: Leezpunk – Treasure Bandit (standing) · Opponent's board: Cattiva – My First Pal (rested), Leezpunk – Treasure Bandit (rested)
[T3 main] You — Life 7, Deck 40, Hand 6, Souls 5/5 · Opponent — Life 9, Deck 43, Hand 4, Souls 1/4
[T3 main] Hand: Dinossom – Radiant Fragrance, Medieval Medicine Workbench, Menasting – Darkness-Dwelling Scorpion, Rushoar – Reckless Destruction, Tombat – Out of Nowhere!?, Tombat – Out of Nowhere!? · Souls 5/5
[T3 main] Deployed Medieval Medicine Workbench to slot 2 for 4 Souls.
[T3 main] You — Life 7, Deck 40, Hand 5, Souls 1/5 · Opponent — Life 9, Deck 43, Hand 4, Souls 1/4
[T3 main] Opponent must discard 1.
[T3 main] Leezpunk – Treasure Bandit (200) attacked Leezpunk – Treasure Bandit (200).
[T3 main] Leezpunk – Treasure Bandit destroyed, 200 damage vs 200 Power.
[T3 main] Leezpunk – Treasure Bandit destroyed, 200 damage vs 200 Power.
[T3 main] To your graveyard: Leezpunk – Treasure Bandit · To opponent's graveyard: Leezpunk – Treasure Bandit
[T3 main] Discarded Tombat – Out of Nowhere!?.
[T3 main] To your graveyard: Tombat – Out of Nowhere!?
[T3 main] Opponent discarded Blazehowl Noct – Darkflame Defender.
[T3 main] To opponent's graveyard: Blazehowl Noct – Darkflame Defender
[T3 end] games.log.endPhaseCleared
[T3 end] Your board: Medieval Medicine Workbench (standing) · Opponent's board: Cattiva – My First Pal (standing)
[T3 end] You — Life 7, Deck 40, Hand 4, Souls 1/5 · Opponent — Life 9, Deck 42, Hand 4, Souls 6/6
[T3 end] Hand: Dinossom – Radiant Fragrance, Menasting – Darkness-Dwelling Scorpion, Rushoar – Reckless Destruction, Tombat – Out of Nowhere!? · Souls 1/5
[T3 waiting] Opponent's Cattiva – My First Pal attacks you for 1.
[T3 waiting] Cattiva – My First Pal attacked you for 1; your Damage Check revealed a Lucky Pal, cancelled, no damage. (1 card milled)
[T3 waiting] To your graveyard: Shadowbeak – Seed of Despair
[T3 waiting] games.log.oppSoulDraw
[T3 waiting] Opponent deployed Lamball – My First Pal.
[T3 waiting] Opponent's Lamball – My First Pal attacks you for 1.
[T3 waiting] You — Life 7, Deck 39, Hand 4, Souls 1/5 · Opponent — Life 9, Deck 41, Hand 4, Souls 1/6
[T3 waiting] Lamball – My First Pal hit you for 1. Damage Check: 1 card milled, no Lucky. You 7 to 6 life.
[T3 waiting] To your graveyard: Petallia – Sweet Blessings
[T4 stand] games.log.turnStandPhase
[T4 draw] games.log.drawPhase
[T4 draw] games.log.drewForTurn
[T4 soul] games.log.placedSouls
[T4 main] games.log.mainPhase
[T4 main] Your board: Medieval Medicine Workbench (standing) · Opponent's board: Cattiva – My First Pal (rested), Lamball – My First Pal (rested)
[T4 main] You — Life 6, Deck 37, Hand 5, Souls 7/7 · Opponent — Life 9, Deck 41, Hand 4, Souls 1/6
[T4 main] Hand: Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Menasting – Darkness-Dwelling Scorpion, Rushoar – Reckless Destruction, Tombat – Out of Nowhere!? · Souls 7/7
[T4 main] Deployed Menasting – Darkness-Dwelling Scorpion to slot 1 for 5 Souls.
[T4 main] You — Life 6, Deck 37, Hand 4, Souls 2/7 · Opponent — Life 9, Deck 41, Hand 4, Souls 1/6
[T4 main] Menasting – Darkness-Dwelling Scorpion's attack was interrupted.
[T4 main] To opponent's graveyard: Blazehowl Noct – Darkflame Defender
[T4 main] Deployed Rushoar – Reckless Destruction to slot 3 for 2 Souls.
[T4 main] You — Life 6, Deck 37, Hand 3, Souls 0/7 · Opponent — Life 9, Deck 41, Hand 3, Souls 0/6
[T4 main] Rushoar – Reckless Destruction (200) attacked Lamball – My First Pal (200).
[T4 main] Lamball – My First Pal destroyed, 200 damage vs 200 Power.
[T4 main] Rushoar – Reckless Destruction destroyed, 200 damage vs 200 Power.
[T4 main] To your graveyard: Rushoar – Reckless Destruction · To opponent's graveyard: Lamball – My First Pal
[T4 end] games.log.endPhaseCleared
[T4 end] Your board: Menasting – Darkness-Dwelling Scorpion (rested), Medieval Medicine Workbench (standing) · Opponent's board: Cattiva – My First Pal (standing)
[T4 end] You — Life 6, Deck 37, Hand 3, Souls 0/7 · Opponent — Life 9, Deck 40, Hand 4, Souls 8/8
[T4 end] Hand: Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Tombat – Out of Nowhere!? · Souls 0/7
[T4 waiting] Opponent's Cattiva – My First Pal attacks you for 1.
[T4 waiting] Cattiva – My First Pal attacked you for 1; your Damage Check revealed a Lucky Pal, cancelled, no damage. (1 card milled)
[T4 waiting] To your graveyard: Lyleen – Blessing of the Goddess
[T4 waiting] Opponent deployed Shadowbeak – Seed of Despair.
[T4 waiting] Opponent's Shadowbeak – Seed of Despair attacks your Medieval Medicine Workbench.
[T4 waiting] You — Life 6, Deck 36, Hand 3, Souls 0/7 · Opponent — Life 9, Deck 40, Hand 3, Souls 0/8
[T4 waiting] You interrupted with Dinossom – Radiant Fragrance, discarded Dinossom – Radiant Fragrance. The attack was nullified.
[T4 waiting] To your graveyard: Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance
[T4 waiting] Your opponent's Shadowbeak – Seed of Despair butchered one of their Pals, put 1 of your Pals into the graveyard.
[T4 waiting] To opponent's graveyard: Cattiva – My First Pal
[T4 waiting] Opponent's Shadowbeak: your Menasting – Darkness-Dwelling Scorpion was put into the graveyard.
[T4 waiting] To your graveyard: Menasting – Darkness-Dwelling Scorpion
[T4 waiting] Returned Petallia – Sweet Blessings from graveyard to hand.
[T5 stand] games.log.turnStandPhase
[T5 draw] games.log.drawPhase
[T5 draw] games.log.drewForTurn
[T5 soul] games.log.placedSouls
[T5 main] games.log.mainPhase
[T5 main] Your board: Medieval Medicine Workbench (standing) · Opponent's board: Shadowbeak – Seed of Despair (rested)
[T5 main] You — Life 6, Deck 35, Hand 3, Souls 9/9 · Opponent — Life 9, Deck 40, Hand 3, Souls 0/8
[T5 main] Hand: Medieval Medicine Workbench, Petallia – Sweet Blessings, Tombat – Out of Nowhere!? · Souls 9/9
[T5 main] Deployed Petallia – Sweet Blessings to slot 1 for 6 Souls.
[T5 main] Petallia – Sweet Blessings: gained 1 life (7).
[T5 main] Stood 2 Souls.
[T5 main] Rested 3 Souls to pay a cost (2 standing).
[T5 main] Assigned Petallia – Sweet Blessings.
[T5 main] Deployed Shadowbeak – Seed of Despair from the graveyard (rested).
[T5 end] games.log.endPhaseCleared
[T5 waiting] Shadowbeak: butchered your Petallia – Sweet Blessings.
[T5 waiting] To your graveyard: Petallia – Sweet Blessings
[T5 waiting] Your board: Medieval Medicine Workbench (standing), Shadowbeak – Seed of Despair (rested) · Opponent's board: empty
[T5 waiting] You — Life 7, Deck 35, Hand 2, Souls 2/9 · Opponent — Life 9, Deck 39, Hand 4, Souls 10/10
[T5 waiting] To opponent's graveyard: Shadowbeak – Seed of Despair
[T5 waiting] Hand: Medieval Medicine Workbench, Tombat – Out of Nowhere!? · Souls 2/9
[T5 waiting] Opponent deployed Menasting – Darkness-Dwelling Scorpion.
[T5 waiting] Opponent's Menasting – Darkness-Dwelling Scorpion attacks your Shadowbeak – Seed of Despair.
[T5 waiting] You — Life 7, Deck 35, Hand 2, Souls 2/9 · Opponent — Life 9, Deck 39, Hand 3, Souls 5/10
[T5 waiting] Menasting – Darkness-Dwelling Scorpion (700) attacked Shadowbeak – Seed of Despair (1300).
[T5 waiting] Shadowbeak – Seed of Despair was dragged down by Menasting – Darkness-Dwelling Scorpion's Retaliate.
[T5 waiting] Shadowbeak – Seed of Despair destroyed, 700 damage vs 1300 Power.
[T5 waiting] Menasting – Darkness-Dwelling Scorpion destroyed, 1300 damage vs 700 Power.
[T5 waiting] To your graveyard: Shadowbeak – Seed of Despair · To opponent's graveyard: Menasting – Darkness-Dwelling Scorpion
[T5 waiting] Opponent returned Leezpunk – Treasure Bandit from their graveyard to hand.
[T5 waiting] Opponent deployed Leezpunk – Treasure Bandit.
[T5 waiting] Opponent's Leezpunk – Treasure Bandit attacks you for 1.
[T5 waiting] You — Life 7, Deck 35, Hand 2, Souls 2/9 · Opponent — Life 9, Deck 39, Hand 3, Souls 2/10
[T5 waiting] Leezpunk – Treasure Bandit hit you for 1. Damage Check: 1 card milled, no Lucky. You 7 to 6 life.
[T5 waiting] To your graveyard: Medieval Medicine Workbench
[T6 stand] games.log.turnStandPhase
[T6 draw] games.log.drawPhase
[T6 draw] games.log.drewForTurn
[T6 soul] games.log.placedSouls
[T6 main] games.log.mainPhase
[T6 main] Your board: Medieval Medicine Workbench (standing) · Opponent's board: Leezpunk – Treasure Bandit (rested)
[T6 main] You — Life 6, Deck 33, Hand 3, Souls 10/10 · Opponent — Life 9, Deck 39, Hand 3, Souls 2/10
[T6 main] Hand: Dinossom – Radiant Fragrance, Medieval Medicine Workbench, Tombat – Out of Nowhere!? · Souls 10/10
[T6 main] Deployed Tombat – Out of Nowhere!? to slot 1 for 5 Souls.
[T6 main] Looked at top 3: took Menasting – Darkness-Dwelling Scorpion to hand. Graveyard: Lyleen Noct – Providence of the Goddess, Leezpunk – Treasure Bandit.
[T6 main] To your graveyard: Lyleen Noct – Providence of the Goddess, Leezpunk – Treasure Bandit
[T6 main] Hand: Dinossom – Radiant Fragrance, Medieval Medicine Workbench, Menasting – Darkness-Dwelling Scorpion · Souls 5/10
[T6 main] Rested 3 Souls to pay a cost (2 standing).
[T6 main] Assigned Tombat – Out of Nowhere!?.
[T6 main] Deployed Lyleen – Blessing of the Goddess from the graveyard (rested).
[T6 main] Got 3 Ingredient.
[T6 main] Spent 3 Ingredient (0 left).
[T6 main] took nothing
[T6 end] games.log.endPhaseCleared
[T6 end] Your board: Tombat – Out of Nowhere!? (rested), Medieval Medicine Workbench (standing), Lyleen – Blessing of the Goddess (rested) · Opponent's board: Leezpunk – Treasure Bandit (standing)
[T6 end] You — Life 6, Deck 30, Hand 3, Souls 2/10 · Opponent — Life 9, Deck 38, Hand 4, Souls 10/10
[T6 end] Hand: Dinossom – Radiant Fragrance, Medieval Medicine Workbench, Menasting – Darkness-Dwelling Scorpion · Souls 2/10
[T6 waiting] Opponent deployed Pump-Action Shotgun.
[T6 waiting] To your graveyard: Tombat – Out of Nowhere!?, Lyleen – Blessing of the Goddess
[T6 waiting] Opponent deployed Stone Pit.
[T6 waiting] Opponent activated Stone Pit.
[T7 stand] games.log.turnStandPhase
[T7 draw] games.log.drawPhase
[T7 draw] games.log.drewForTurn
[T7 soul] games.log.placedSouls
[T7 main] games.log.mainPhase
[T7 main] Your board: Medieval Medicine Workbench (standing) · Opponent's board: Leezpunk – Treasure Bandit (rested), Pump-Action Shotgun (standing), Stone Pit (standing)
[T7 main] You — Life 6, Deck 29, Hand 4, Souls 10/10 · Opponent — Life 9, Deck 37, Hand 3, Souls 2/10
[T7 main] Hand: Dinossom – Radiant Fragrance, Medieval Medicine Workbench, Menasting – Darkness-Dwelling Scorpion, Strike from the Darkness · Souls 10/10
[T7 main] Deployed Menasting – Darkness-Dwelling Scorpion to slot 1 for 5 Souls.
[T7 main] Rested 3 Souls to pay a cost (2 standing).
[T7 main] Assigned Menasting – Darkness-Dwelling Scorpion.
[T7 main] Deployed Lyleen – Blessing of the Goddess from the graveyard (rested).
[T7 main] Got 3 Ingredient.
[T7 main] Spent 3 Ingredient (0 left).
[T7 main] Looked at top 5: deployed Tombat – Out of Nowhere!?.
[T7 main] Looked at top 3: took Lyleen Noct – Providence of the Goddess to hand. Graveyard: Zoe's Strategy, Zoe's Strategy.
[T7 main] To your graveyard: Zoe's Strategy, Zoe's Strategy
[T7 main] Hand: Dinossom – Radiant Fragrance, Lyleen Noct – Providence of the Goddess, Medieval Medicine Workbench, Strike from the Darkness · Souls 2/10
[T7 main] You — Life 6, Deck 25, Hand 4, Souls 2/10 · Opponent — Life 9, Deck 37, Hand 3, Souls 2/10
[T7 main] Tombat – Out of Nowhere!?'s attack was interrupted.
[T7 main] To opponent's graveyard: Blazehowl Noct – Darkflame Defender
[T7 end] games.log.endPhaseCleared
[T7 end] Your board: Menasting – Darkness-Dwelling Scorpion (rested), Medieval Medicine Workbench (standing), Lyleen – Blessing of the Goddess (rested), Tombat – Out of Nowhere!? (rested) · Opponent's board: Leezpunk – Treasure Bandit (standing), Pump-Action Shotgun (standing), Stone Pit (standing)
[T7 end] You — Life 6, Deck 25, Hand 4, Souls 2/10 · Opponent — Life 9, Deck 36, Hand 3, Souls 10/10
[T7 waiting] Opponent activated Stone Pit.
[T7 waiting] Opponent deployed Menasting – Darkness-Dwelling Scorpion.
[T7 waiting] Opponent activated Pump-Action Shotgun.
[T7 waiting] Opponent's Menasting – Darkness-Dwelling Scorpion gets power +200 until end of turn.
[T7 waiting] Opponent's Menasting – Darkness-Dwelling Scorpion attacks your Tombat – Out of Nowhere!?.
[T7 waiting] You — Life 6, Deck 25, Hand 4, Souls 2/10 · Opponent — Life 9, Deck 35, Hand 3, Souls 5/10
[T7 waiting] Menasting – Darkness-Dwelling Scorpion (700+200 = 900) attacked Tombat – Out of Nowhere!? (600).
[T7 waiting] Tombat – Out of Nowhere!? destroyed, 900 damage vs 600 Power.
[T7 waiting] To your graveyard: Tombat – Out of Nowhere!?
[T7 waiting] Opponent played Black Marketeer.
[T7 waiting] To opponent's graveyard: Black Marketeer
[T7 waiting] Opponent returned Shadowbeak – Seed of Despair from their graveyard to hand.
[T7 waiting] Opponent returned Menasting – Darkness-Dwelling Scorpion from their graveyard to hand.
[T8 stand] games.log.turnStandPhase
[T8 draw] games.log.drawPhase
[T8 draw] games.log.drewForTurn
[T8 soul] games.log.placedSouls
[T8 main] games.log.mainPhase
[T8 main] Your board: Menasting – Darkness-Dwelling Scorpion (standing), Medieval Medicine Workbench (standing), Lyleen – Blessing of the Goddess (standing) · Opponent's board: Leezpunk – Treasure Bandit (rested), Pump-Action Shotgun (rested), Stone Pit (standing), Menasting – Darkness-Dwelling Scorpion (rested)
[T8 main] You — Life 6, Deck 24, Hand 5, Souls 10/10 · Opponent — Life 9, Deck 35, Hand 4, Souls 0/10
[T8 main] Hand: Dinossom – Radiant Fragrance, Lyleen Noct – Providence of the Goddess, Medieval Medicine Workbench, Pyrin Noct – Steed of Azure Flames, Strike from the Darkness · Souls 10/10
[T8 main] Deployed Medieval Medicine Workbench to slot 4 for 4 Souls.
[T8 main] Rested 3 Souls to pay a cost (3 standing).
[T8 main] Assigned Lyleen – Blessing of the Goddess.
[T8 main] Deployed Shadowbeak – Seed of Despair from the graveyard (rested).
[T8 main] Rested 3 Souls to pay a cost (0 standing).
[T8 main] Assigned Menasting – Darkness-Dwelling Scorpion.
[T8 main] Deployed Leezpunk – Treasure Bandit from the graveyard (rested).
[T8 end] games.log.endPhaseCleared
[T8 waiting] Opponent must discard 1.
[T8 waiting] Opponent must discard 1.
[T8 waiting] Shadowbeak: butchered your Leezpunk – Treasure Bandit.
[T8 waiting] To your graveyard: Leezpunk – Treasure Bandit
[T8 waiting] Shadowbeak: butchered your Menasting – Darkness-Dwelling Scorpion.
[T8 waiting] To your graveyard: Menasting – Darkness-Dwelling Scorpion
[T8 waiting] Opponent discarded Cattiva – My First Pal.
[T8 waiting] To opponent's graveyard: Cattiva – My First Pal
[T8 waiting] Opponent discarded Lamball – My First Pal.
[T8 waiting] To opponent's graveyard: Lamball – My First Pal
[T8 waiting] To opponent's graveyard: Menasting – Darkness-Dwelling Scorpion
[T8 waiting] To opponent's graveyard: Leezpunk – Treasure Bandit
[T8 waiting] Discarded Lyleen Noct – Providence of the Goddess.
[T8 waiting] To your graveyard: Lyleen Noct – Providence of the Goddess
[T8 waiting] Opponent returned Leezpunk – Treasure Bandit from their graveyard to hand.
[T8 waiting] Returned Dinossom – Radiant Fragrance from graveyard to hand.
[T8 waiting] Hand: Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Pyrin Noct – Steed of Azure Flames, Strike from the Darkness · Souls 0/10
[T8 waiting] Returned Dinossom – Radiant Fragrance from graveyard to hand.
[T8 waiting] Your board: Medieval Medicine Workbench (standing), Lyleen – Blessing of the Goddess (rested), Medieval Medicine Workbench (standing), Shadowbeak – Seed of Despair (rested) · Opponent's board: Pump-Action Shotgun (standing), Stone Pit (standing)
[T8 waiting] You — Life 6, Deck 24, Hand 5, Souls 0/10 · Opponent — Life 9, Deck 34, Hand 4, Souls 10/10
[T8 waiting] Hand: Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Pyrin Noct – Steed of Azure Flames, Strike from the Darkness · Souls 0/10
[T8 waiting] Opponent deployed Shadowbeak – Seed of Despair.
[T8 waiting] Opponent's Shadowbeak – Seed of Despair attacks your Lyleen – Blessing of the Goddess.
[T8 waiting] You — Life 6, Deck 24, Hand 5, Souls 0/10 · Opponent — Life 9, Deck 34, Hand 3, Souls 2/10
[T8 waiting] You interrupted with Dinossom – Radiant Fragrance, discarded Strike from the Darkness. The attack was nullified.
[T8 waiting] To your graveyard: Dinossom – Radiant Fragrance, Strike from the Darkness
[T8 waiting] Opponent deployed Lamball – My First Pal.
[T8 waiting] Your opponent's Shadowbeak – Seed of Despair butchered one of their Pals, put 1 of your Pals into the graveyard.
[T8 waiting] To opponent's graveyard: Lamball – My First Pal
[T8 waiting] Your opponent's Shadowbeak – Seed of Despair butchered one of their Pals, put 1 of your Pals into the graveyard.
[T8 waiting] To opponent's graveyard: Shadowbeak – Seed of Despair
[T8 waiting] Opponent's Shadowbeak: your Lyleen – Blessing of the Goddess was put into the graveyard.
[T8 waiting] To your graveyard: Lyleen – Blessing of the Goddess
[T8 waiting] Opponent's Shadowbeak: your Shadowbeak – Seed of Despair was put into the graveyard.
[T9 stand] games.log.turnStandPhase
[T9 draw] games.log.drawPhase
[T9 draw] games.log.drewForTurn
[T9 soul] games.log.placedSouls
[T9 main] games.log.mainPhase
[T9 main] Your board: Medieval Medicine Workbench (standing), Medieval Medicine Workbench (standing) · Opponent's board: Pump-Action Shotgun (standing), Stone Pit (standing)
[T9 main] You — Life 6, Deck 23, Hand 4, Souls 10/10 · Opponent — Life 9, Deck 34, Hand 2, Souls 0/10
[T9 main] To your graveyard: Shadowbeak – Seed of Despair
[T9 main] Hand: Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Pyrin Noct – Steed of Azure Flames, Pyrin Noct – Steed of Azure Flames · Souls 10/10
[T9 main] Deployed Pyrin Noct – Steed of Azure Flames to slot 1 for 7 Souls.
[T9 main] Rested 3 Souls to pay a cost (0 standing).
[T9 main] Assigned Pyrin Noct – Steed of Azure Flames.
[T9 main] Deployed Lyleen – Blessing of the Goddess from the graveyard (rested).
[T9 main] Got 3 Ingredient.
[T9 main] Spent 3 Ingredient (0 left).
[T9 main] Looked at top 5: deployed Leezpunk – Treasure Bandit.
[T9 main] You — Life 6, Deck 22, Hand 3, Souls 0/10 · Opponent — Life 9, Deck 34, Hand 2, Souls 0/10
[T9 main] Leezpunk – Treasure Bandit attacked them for 1. Damage Check: 1 card milled, no Lucky. They 9 to 8 life.
[T9 main] To opponent's graveyard: Leezpunk – Treasure Bandit
[T9 end] games.log.endPhaseCleared
[T9 end] Your board: Pyrin Noct – Steed of Azure Flames (rested), Medieval Medicine Workbench (standing), Lyleen – Blessing of the Goddess (rested), Medieval Medicine Workbench (standing), Leezpunk – Treasure Bandit (rested) · Opponent's board: Pump-Action Shotgun (standing), Stone Pit (standing)
[T9 end] You — Life 6, Deck 22, Hand 3, Souls 0/10 · Opponent — Life 8, Deck 32, Hand 3, Souls 10/10
[T9 end] Hand: Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Pyrin Noct – Steed of Azure Flames · Souls 0/10
[T9 waiting] Opponent deployed Leezpunk – Treasure Bandit.
[T9 waiting] Opponent activated Stone Pit.
[T9 waiting] Opponent deployed Menasting – Darkness-Dwelling Scorpion.
[T9 waiting] Opponent activated Pump-Action Shotgun.
[T9 waiting] Opponent's Menasting – Darkness-Dwelling Scorpion gets power +200 until end of turn.
[T9 waiting] Opponent's Menasting – Darkness-Dwelling Scorpion attacks your Leezpunk – Treasure Bandit.
[T9 waiting] You — Life 6, Deck 22, Hand 3, Souls 0/10 · Opponent — Life 8, Deck 31, Hand 2, Souls 2/10
[T9 waiting] You interrupted with Dinossom – Radiant Fragrance, discarded Pyrin Noct – Steed of Azure Flames. The attack was nullified.
[T9 waiting] To your graveyard: Dinossom – Radiant Fragrance, Pyrin Noct – Steed of Azure Flames
[T9 waiting] Opponent deployed Stone Pit.`
  },
  {
    id: 'p2-sep13-vs-p1',
    title: 'p1 vs Purple/Green deck (Sep 9) — เล่นฝั่ง p2',
    date: '2026-09-13',
    deck: 'Purple/Green (Sep 9)',
    vs: 'p1 (Foxparks/Fire)',
    result: 'ชนะ (ลดไลฟ์คู่แข่งเหลือ 0 · T11)',
    note: 'rules 66 / abilities 15 · เกมยาว 11 เทิร์น — Dinossom/Blazehowl กันแทบทุกการโจมตี, ปิดด้วย Lyleen 3 หน้า',
    raw: `# p1 vs Purple/Green deck (Sep 9)
# 2026-09-13T05:57:14.293154+00:00 — p2
# rules 66 / abilities 15

[T1 main] games.log.shuffled
[T1 main] Your board: empty · Opponent's board: empty
[T1 main] You — Life 10, Deck 45, Hand 5, Souls 1/1 · Opponent — Life 10, Deck 45, Hand 5, Souls 2/2
[T1 main] Hand: Dinossom – Radiant Fragrance, Lyleen Noct – Providence of the Goddess, Menasting – Darkness-Dwelling Scorpion, Strike from the Darkness, Zoe's Strategy · Souls 1/1
[T1 waiting] Opponent deployed Foxparks – Light of Courage.
[T1 waiting] Opponent's Foxparks – Light of Courage attacks you for 1.
[T1 waiting] You — Life 10, Deck 45, Hand 5, Souls 1/1 · Opponent — Life 10, Deck 45, Hand 4, Souls 0/2
[T1 waiting] Foxparks – Light of Courage hit you for 1. Damage Check: 1 card milled, no Lucky. You 10 to 9 life.
[T1 waiting] To your graveyard: Dinossom – Radiant Fragrance
[T2 stand] games.log.turnStandPhase
[T2 draw] games.log.drawPhase
[T2 draw] games.log.drewForTurn
[T2 soul] games.log.placedSouls
[T2 main] games.log.mainPhase
[T2 main] Your board: empty · Opponent's board: Foxparks – Light of Courage (rested)
[T2 main] You — Life 9, Deck 43, Hand 6, Souls 3/3 · Opponent — Life 10, Deck 45, Hand 4, Souls 0/2
[T2 main] Hand: Dinossom – Radiant Fragrance, Lily's Strategy, Lyleen Noct – Providence of the Goddess, Menasting – Darkness-Dwelling Scorpion, Strike from the Darkness, Zoe's Strategy · Souls 3/3
[T2 main] games.log.soulDraw
[T2 main] Hand: Dinossom – Radiant Fragrance, Lily's Strategy, Lyleen Noct – Providence of the Goddess, Medieval Medicine Workbench, Menasting – Darkness-Dwelling Scorpion, Strike from the Darkness, Zoe's Strategy · Souls 0/3
[T2 end] games.log.endPhaseCleared
[T2 end] Your board: empty · Opponent's board: Foxparks – Light of Courage (standing)
[T2 end] You — Life 9, Deck 42, Hand 7, Souls 0/3 · Opponent — Life 10, Deck 44, Hand 5, Souls 4/4
[T2 waiting] Opponent deployed Foxparks' Harness.
[T2 waiting] Opponent activated Foxparks' Harness.
[T2 waiting] Opponent's Foxparks – Light of Courage attacks you for 1.
[T2 waiting] You — Life 9, Deck 42, Hand 7, Souls 0/3 · Opponent — Life 10, Deck 44, Hand 4, Souls 1/4
[T2 waiting] Foxparks – Light of Courage hit you for 1. Damage Check: 1 card milled, no Lucky. You 9 to 8 life.
[T2 waiting] To your graveyard: Medieval Medicine Workbench
[T3 stand] games.log.turnStandPhase
[T3 draw] games.log.drawPhase
[T3 draw] games.log.drewForTurn
[T3 soul] games.log.placedSouls
[T3 main] games.log.mainPhase
[T3 main] Your board: empty · Opponent's board: Foxparks – Light of Courage (rested), Foxparks' Harness (rested)
[T3 main] You — Life 8, Deck 40, Hand 8, Souls 5/5 · Opponent — Life 10, Deck 44, Hand 4, Souls 1/4
[T3 main] Hand: Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Lily's Strategy, Lyleen Noct – Providence of the Goddess, Medieval Medicine Workbench, Menasting – Darkness-Dwelling Scorpion, Strike from the Darkness, Zoe's Strategy · Souls 5/5
[T3 main] Deployed Menasting – Darkness-Dwelling Scorpion to slot 1 for 5 Souls.
[T3 main] You — Life 8, Deck 40, Hand 7, Souls 0/5 · Opponent — Life 10, Deck 44, Hand 4, Souls 1/4
[T3 main] Menasting – Darkness-Dwelling Scorpion's attack was interrupted.
[T3 main] To opponent's graveyard: Foxparks – A Toasty Hug
[T3 end] games.log.endPhaseCleared
[T3 end] Your board: Menasting – Darkness-Dwelling Scorpion (rested) · Opponent's board: Foxparks – Light of Courage (standing), Foxparks' Harness (standing)
[T3 end] You — Life 8, Deck 40, Hand 7, Souls 0/5 · Opponent — Life 10, Deck 43, Hand 4, Souls 6/6
[T3 end] Hand: Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Lily's Strategy, Lyleen Noct – Providence of the Goddess, Medieval Medicine Workbench, Strike from the Darkness, Zoe's Strategy · Souls 0/5
[T3 waiting] Opponent deployed Pengullet – Yearning for the Sky.
[T3 waiting] Opponent activated Foxparks' Harness.
[T3 waiting] Menasting – Darkness-Dwelling Scorpion took 700 damage and was destroyed.
[T3 waiting] Opponent's Foxparks – Light of Courage attacks you for 1.
[T3 waiting] You — Life 8, Deck 40, Hand 7, Souls 0/5 · Opponent — Life 10, Deck 43, Hand 3, Souls 2/6
[T3 waiting] To your graveyard: Menasting – Darkness-Dwelling Scorpion
[T3 waiting] Returned Dinossom – Radiant Fragrance from graveyard to hand.
[T3 waiting] Hand: Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Lily's Strategy, Lyleen Noct – Providence of the Goddess, Medieval Medicine Workbench, Strike from the Darkness, Zoe's Strategy · Souls 0/5
[T3 waiting] Foxparks – Light of Courage hit you for 1. Damage Check: 1 card milled, no Lucky. You 8 to 7 life.
[T3 waiting] To your graveyard: Blazehowl Noct – Darkflame Defender
[T3 waiting] Opponent's Pengullet – Yearning for the Sky attacks you for 2.
[T3 waiting] You — Life 7, Deck 39, Hand 8, Souls 0/5 · Opponent — Life 10, Deck 43, Hand 3, Souls 2/6
[T3 waiting] Pengullet – Yearning for the Sky attacked you for 2; your Damage Check revealed a Lucky Pal, cancelled, no damage. (1 card milled)
[T3 waiting] To your graveyard: Lyleen – Blessing of the Goddess
[T4 stand] games.log.turnStandPhase
[T4 draw] games.log.drawPhase
[T4 draw] games.log.drewForTurn
[T4 soul] games.log.placedSouls
[T4 main] games.log.mainPhase
[T4 main] Your board: empty · Opponent's board: Foxparks – Light of Courage (rested), Foxparks' Harness (rested), Pengullet – Yearning for the Sky (rested)
[T4 main] You — Life 7, Deck 37, Hand 9, Souls 7/7 · Opponent — Life 10, Deck 43, Hand 3, Souls 2/6
[T4 main] Hand: Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Lily's Strategy, Lyleen Noct – Providence of the Goddess, Medieval Medicine Workbench, Strike from the Darkness, Tombat – Out of Nowhere!?, Zoe's Strategy · Souls 7/7
[T4 main] Deployed Tombat – Out of Nowhere!? to slot 1 for 5 Souls.
[T4 main] Looked at top 3: took Leezpunk – Treasure Bandit to hand. Graveyard: Medieval Medicine Workbench, Pyrin Noct – Steed of Azure Flames.
[T4 main] To your graveyard: Medieval Medicine Workbench, Pyrin Noct – Steed of Azure Flames
[T4 main] Hand: Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Leezpunk – Treasure Bandit, Lily's Strategy, Lyleen Noct – Providence of the Goddess, Medieval Medicine Workbench, Strike from the Darkness, Zoe's Strategy · Souls 2/7
[T4 main] You — Life 7, Deck 34, Hand 9, Souls 2/7 · Opponent — Life 10, Deck 43, Hand 3, Souls 2/6
[T4 main] Tombat – Out of Nowhere!? (600) attacked Foxparks – Light of Courage (200).
[T4 main] Foxparks – Light of Courage destroyed, 600 damage vs 200 Power.
[T4 main] To opponent's graveyard: Foxparks – Light of Courage
[T4 end] games.log.endPhaseCleared
[T4 end] Your board: Tombat – Out of Nowhere!? (rested) · Opponent's board: Foxparks' Harness (standing), Pengullet – Yearning for the Sky (standing)
[T4 end] You — Life 7, Deck 34, Hand 9, Souls 2/7 · Opponent — Life 10, Deck 42, Hand 4, Souls 8/8
[T4 waiting] Opponent deployed Reptyro – Ore Gorger.
[T4 waiting] Opponent activated Reptyro – Ore Gorger.
[T4 waiting] Opponent revealed Pump-Action Shotgun and deployed it.
[T4 waiting] Opponent looked at 5 cards and deployed Pump-Action Shotgun.
[T4 waiting] To your graveyard: Tombat – Out of Nowhere!?
[T4 waiting] Opponent's Reptyro – Ore Gorger attacks you for 3.
[T4 waiting] You — Life 7, Deck 34, Hand 9, Souls 2/7 · Opponent — Life 10, Deck 41, Hand 3, Souls 0/8
[T4 waiting] You interrupted with Dinossom – Radiant Fragrance, paid 1 Soul. The attack was nullified.
[T4 waiting] To your graveyard: Dinossom – Radiant Fragrance
[T4 waiting] Opponent's Pengullet – Yearning for the Sky attacks you for 2.
[T4 waiting] You — Life 7, Deck 34, Hand 8, Souls 1/7 · Opponent — Life 10, Deck 41, Hand 3, Souls 0/8
[T4 waiting] Pengullet – Yearning for the Sky attacked you for 2; your Damage Check revealed a Lucky Pal, cancelled, no damage. (1 card milled)
[T4 waiting] To your graveyard: Shadowbeak – Seed of Despair
[T5 stand] games.log.turnStandPhase
[T5 draw] games.log.drawPhase
[T5 draw] games.log.drewForTurn
[T5 soul] games.log.placedSouls
[T5 main] games.log.mainPhase
[T5 main] Your board: empty · Opponent's board: Reptyro – Ore Gorger (rested), Foxparks' Harness (standing), Pengullet – Yearning for the Sky (rested), Pump-Action Shotgun (standing)
[T5 main] You — Life 7, Deck 32, Hand 9, Souls 9/9 · Opponent — Life 10, Deck 41, Hand 3, Souls 0/8
[T5 main] Hand: Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Leezpunk – Treasure Bandit, Lily's Strategy, Lyleen Noct – Providence of the Goddess, Medieval Medicine Workbench, Strike from the Darkness, Zoe's Strategy, Zoe's Strategy · Souls 9/9
[T5 main] Deployed Leezpunk – Treasure Bandit to slot 1 for 3 Souls.
[T5 main] You — Life 7, Deck 32, Hand 8, Souls 6/9 · Opponent — Life 10, Deck 41, Hand 3, Souls 0/8
[T5 main] Leezpunk – Treasure Bandit attacked them for 1. Damage Check: 1 card milled, no Lucky. They 10 to 9 life.
[T5 main] To opponent's graveyard: Elphidran Aqua – Gentle Ripples
[T5 main] Played Zoe's Strategy for 3 Souls.
[T5 main] To your graveyard: Zoe's Strategy
[T5 main] Opponent must discard 1.
[T5 main] Butchered Leezpunk – Treasure Bandit.
[T5 main] To your graveyard: Leezpunk – Treasure Bandit
[T5 main] Opponent discarded Pump-Action Shotgun.
[T5 main] To opponent's graveyard: Pump-Action Shotgun
[T5 main] To opponent's graveyard: Reptyro – Ore Gorger
[T5 main] Played Zoe's Strategy for 3 Souls.
[T5 main] To your graveyard: Zoe's Strategy
[T5 main] Returned Lyleen – Blessing of the Goddess from graveyard to hand.
[T5 main] Opponent must discard 1.
[T5 main] Hand: Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Lily's Strategy, Lyleen – Blessing of the Goddess, Lyleen Noct – Providence of the Goddess, Medieval Medicine Workbench, Strike from the Darkness · Souls 0/9
[T5 main] Opponent discarded Jormuntide Ignis – Savage Lava Dragon.
[T5 main] To opponent's graveyard: Jormuntide Ignis – Savage Lava Dragon
[T5 end] games.log.endPhaseCleared
[T5 end] Your board: empty · Opponent's board: Foxparks' Harness (standing), Pengullet – Yearning for the Sky (standing), Pump-Action Shotgun (standing)
[T5 end] You — Life 7, Deck 32, Hand 7, Souls 0/9 · Opponent — Life 9, Deck 39, Hand 2, Souls 10/10
[T5 waiting] Opponent deployed Foxparks – A Toasty Hug.
[T5 waiting] games.log.oppSoulDraw
[T5 waiting] Opponent deployed Foxparks' Harness.
[T5 waiting] Opponent's Foxparks – A Toasty Hug attacks you for 2.
[T5 waiting] You — Life 7, Deck 32, Hand 7, Souls 0/9 · Opponent — Life 9, Deck 38, Hand 1, Souls 0/10
[T5 waiting] Foxparks – A Toasty Hug hit you for 2. Damage Check: 2 cards milled, no Lucky. You 7 to 5 life.
[T5 waiting] To your graveyard: Lyleen Noct – Providence of the Goddess, Petallia – Sweet Blessings
[T5 waiting] Opponent's Pengullet – Yearning for the Sky attacks you for 2.
[T5 waiting] You — Life 5, Deck 30, Hand 7, Souls 0/9 · Opponent — Life 9, Deck 38, Hand 1, Souls 0/10
[T5 waiting] Pengullet – Yearning for the Sky attacked you for 2; your Damage Check revealed a Lucky Pal, cancelled, no damage. (2 cards milled)
[T5 waiting] To your graveyard: Dinossom – Radiant Fragrance, Menasting – Darkness-Dwelling Scorpion
[T6 stand] games.log.turnStandPhase
[T6 draw] games.log.drawPhase
[T6 draw] games.log.drewForTurn
[T6 soul] games.log.placedSouls
[T6 main] games.log.mainPhase
[T6 main] Your board: empty · Opponent's board: Foxparks – A Toasty Hug (rested), Foxparks' Harness (standing), Pengullet – Yearning for the Sky (rested), Pump-Action Shotgun (standing), Foxparks' Harness (standing)
[T6 main] You — Life 5, Deck 27, Hand 8, Souls 10/10 · Opponent — Life 9, Deck 38, Hand 1, Souls 0/10
[T6 main] Hand: Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Lily's Strategy, Lyleen – Blessing of the Goddess, Lyleen Noct – Providence of the Goddess, Medieval Medicine Workbench, Rushoar – Reckless Destruction, Strike from the Darkness · Souls 10/10
[T6 main] Deployed Lyleen – Blessing of the Goddess to slot 1 for 7 Souls.
[T6 main] Got 3 Ingredient.
[T6 main] Spent 3 Ingredient (0 left).
[T6 main] Looked at top 5: deployed Petallia – Sweet Blessings.
[T6 main] Petallia – Sweet Blessings: gained 1 life (6).
[T6 main] Stood 2 Souls.
[T6 main] You — Life 6, Deck 26, Hand 7, Souls 5/10 · Opponent — Life 9, Deck 38, Hand 1, Souls 0/10
[T6 main] Petallia – Sweet Blessings (700) attacked Foxparks – A Toasty Hug (400).
[T6 main] Foxparks – A Toasty Hug destroyed, 700 damage vs 400 Power.
[T6 main] To opponent's graveyard: Foxparks – A Toasty Hug
[T6 main] Lyleen – Blessing of the Goddess (900) attacked Pengullet – Yearning for the Sky (600).
[T6 main] Pengullet – Yearning for the Sky destroyed, 900 damage vs 600 Power.
[T6 main] To opponent's graveyard: Pengullet – Yearning for the Sky
[T6 main] Deployed Medieval Medicine Workbench to slot 3 for 4 Souls.
[T6 end] games.log.endPhaseCleared
[T6 end] Your board: Lyleen – Blessing of the Goddess (rested), Petallia – Sweet Blessings (rested), Medieval Medicine Workbench (standing) · Opponent's board: Foxparks' Harness (standing), Pump-Action Shotgun (standing), Foxparks' Harness (standing)
[T6 end] You — Life 6, Deck 26, Hand 6, Souls 1/10 · Opponent — Life 9, Deck 36, Hand 3, Souls 10/10
[T6 end] Hand: Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Lily's Strategy, Lyleen Noct – Providence of the Goddess, Rushoar – Reckless Destruction, Strike from the Darkness · Souls 1/10
[T6 waiting] Opponent deployed Relaxaurus – Hungry Gunner.
[T6 waiting] Petallia – Sweet Blessings was Rested.
[T6 waiting] Petallia – Sweet Blessings won't stand while the source stays in play.
[T6 waiting] games.log.oppSoulDraw
[T6 waiting] Opponent activated Foxparks' Harness.
[T6 waiting] Opponent activated Pump-Action Shotgun.
[T6 waiting] Opponent's Relaxaurus – Hungry Gunner gets power +200 until end of turn.
[T6 waiting] Opponent's Relaxaurus – Hungry Gunner attacks your Lyleen – Blessing of the Goddess.
[T6 waiting] You — Life 6, Deck 26, Hand 6, Souls 1/10 · Opponent — Life 9, Deck 35, Hand 3, Souls 0/10
[T6 waiting] You interrupted with Dinossom – Radiant Fragrance, paid 1 Soul. The attack was nullified.
[T6 waiting] To your graveyard: Dinossom – Radiant Fragrance
[T7 stand] games.log.turnStandPhase
[T7 draw] games.log.drawPhase
[T7 draw] games.log.drewForTurn
[T7 soul] games.log.placedSouls
[T7 main] games.log.mainPhase
[T7 main] Your board: Lyleen – Blessing of the Goddess (standing), Petallia – Sweet Blessings (rested), Medieval Medicine Workbench (standing) · Opponent's board: Relaxaurus – Hungry Gunner (rested), Foxparks' Harness (standing), Pump-Action Shotgun (rested), Foxparks' Harness (rested)
[T7 main] You — Life 6, Deck 25, Hand 6, Souls 10/10 · Opponent — Life 9, Deck 35, Hand 3, Souls 0/10
[T7 main] Hand: Blazehowl Noct – Darkflame Defender, Dinossom – Radiant Fragrance, Lily's Strategy, Lyleen Noct – Providence of the Goddess, Rushoar – Reckless Destruction, Strike from the Darkness · Souls 10/10
[T7 main] Rested 3 Souls to pay a cost (7 standing).
[T7 main] Assigned Lyleen – Blessing of the Goddess.
[T7 main] Deployed Shadowbeak – Seed of Despair from the graveyard (rested).
[T7 main] games.log.soulDraw
[T7 main] Hand: Blazehowl Noct – Darkflame Defender, Blazehowl Noct – Darkflame Defender, Dinossom – Radiant Fragrance, Lily's Strategy, Lyleen Noct – Providence of the Goddess, Rushoar – Reckless Destruction, Strike from the Darkness · Souls 4/10
[T7 main] Deployed Rushoar – Reckless Destruction to slot 5 for 2 Souls.
[T7 main] You — Life 6, Deck 24, Hand 6, Souls 2/10 · Opponent — Life 9, Deck 35, Hand 3, Souls 0/10
[T7 main] Rushoar – Reckless Destruction attacked them for 1. Damage Check: 1 card milled, no Lucky. They 9 to 8 life.
[T7 main] To opponent's graveyard: Primitive Furnace
[T7 end] games.log.endPhaseCleared
[T7 waiting] Shadowbeak: butchered your Rushoar – Reckless Destruction.
[T7 waiting] To your graveyard: Rushoar – Reckless Destruction
[T7 waiting] Your board: Lyleen – Blessing of the Goddess (rested), Petallia – Sweet Blessings (rested), Medieval Medicine Workbench (standing), Shadowbeak – Seed of Despair (rested) · Opponent's board: Foxparks' Harness (standing), Pump-Action Shotgun (standing), Foxparks' Harness (standing)
[T7 waiting] You — Life 6, Deck 24, Hand 6, Souls 2/10 · Opponent — Life 8, Deck 33, Hand 4, Souls 10/10
[T7 waiting] To opponent's graveyard: Relaxaurus – Hungry Gunner
[T7 waiting] Hand: Blazehowl Noct – Darkflame Defender, Blazehowl Noct – Darkflame Defender, Dinossom – Radiant Fragrance, Lily's Strategy, Lyleen Noct – Providence of the Goddess, Strike from the Darkness · Souls 2/10
[T7 waiting] games.log.oppSoulDraw
[T7 waiting] Opponent deployed Flambelle – Scorching Tears.
[T7 waiting] Opponent deployed Foxparks' Harness.
[T8 stand] games.log.turnStandPhase
[T8 draw] games.log.drawPhase
[T8 draw] games.log.drewForTurn
[T8 soul] games.log.placedSouls
[T8 main] games.log.mainPhase
[T8 main] Your board: Lyleen – Blessing of the Goddess (standing), Petallia – Sweet Blessings (standing), Medieval Medicine Workbench (standing), Shadowbeak – Seed of Despair (standing) · Opponent's board: Flambelle – Scorching Tears (standing), Foxparks' Harness (standing), Foxparks' Harness (standing), Pump-Action Shotgun (standing), Foxparks' Harness (standing)
[T8 main] You — Life 6, Deck 23, Hand 7, Souls 10/10 · Opponent — Life 8, Deck 32, Hand 3, Souls 1/10
[T8 main] Hand: Blazehowl Noct – Darkflame Defender, Blazehowl Noct – Darkflame Defender, Dinossom – Radiant Fragrance, Leezpunk – Treasure Bandit, Lily's Strategy, Lyleen Noct – Providence of the Goddess, Strike from the Darkness · Souls 10/10
[T8 main] Deployed Leezpunk – Treasure Bandit to slot 5 for 3 Souls.
[T8 main] Rested 3 Souls to pay a cost (4 standing).
[T8 main] Assigned Leezpunk – Treasure Bandit.
[T8 main] Deployed Menasting – Darkness-Dwelling Scorpion from the graveyard (rested).
[T8 main] games.log.soulDraw
[T8 main] Hand: Blazehowl Noct – Darkflame Defender, Blazehowl Noct – Darkflame Defender, Dinossom – Radiant Fragrance, Lily's Strategy, Lyleen – Blessing of the Goddess, Lyleen Noct – Providence of the Goddess, Strike from the Darkness · Souls 1/10
[T8 main] You — Life 6, Deck 22, Hand 7, Souls 1/10 · Opponent — Life 8, Deck 32, Hand 3, Souls 1/10
[T8 main] Shadowbeak – Seed of Despair's attack was interrupted.
[T8 main] To opponent's graveyard: Reindrix – Icy Gaze
[T8 main] You — Life 6, Deck 22, Hand 7, Souls 1/10 · Opponent — Life 8, Deck 32, Hand 2, Souls 0/10
[T8 waiting] They blocked with Flambelle – Scorching Tears.
[T8 main] Petallia – Sweet Blessings (700) attacked Flambelle – Scorching Tears (400).
[T8 main] Flambelle – Scorching Tears destroyed, 700 damage vs 400 Power.
[T8 main] To opponent's graveyard: Flambelle – Scorching Tears
[T8 main] Lyleen – Blessing of the Goddess attacked them for 3; their Damage Check revealed a Lucky Pal, cancelled, no damage. (2 cards milled)
[T8 main] To opponent's graveyard: Pengullet – Yearning for the Sky, Jormuntide Ignis – Savage Lava Dragon
[T8 end] games.log.endPhaseCleared
[T8 waiting] Shadowbeak: butchered your Menasting – Darkness-Dwelling Scorpion.
[T8 waiting] To your graveyard: Menasting – Darkness-Dwelling Scorpion
[T8 waiting] Opponent must discard 1.
[T8 waiting] Opponent must discard 1.
[T8 waiting] Shadowbeak: butchered your Leezpunk – Treasure Bandit.
[T8 waiting] To your graveyard: Leezpunk – Treasure Bandit
[T8 waiting] Opponent discarded Reindrix – Icy Gaze.
[T8 waiting] To opponent's graveyard: Reindrix – Icy Gaze
[T8 waiting] Opponent discarded Cryolinx – Arctic Ordeal.
[T8 waiting] To opponent's graveyard: Cryolinx – Arctic Ordeal
[T8 waiting] Returned Dinossom – Radiant Fragrance from graveyard to hand.
[T8 waiting] Hand: Blazehowl Noct – Darkflame Defender, Blazehowl Noct – Darkflame Defender, Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Lily's Strategy, Lyleen – Blessing of the Goddess, Lyleen Noct – Providence of the Goddess, Strike from the Darkness · Souls 1/10
[T8 waiting] Returned Leezpunk – Treasure Bandit from graveyard to hand.
[T8 waiting] Your board: Lyleen – Blessing of the Goddess (rested), Petallia – Sweet Blessings (rested), Medieval Medicine Workbench (standing), Shadowbeak – Seed of Despair (rested) · Opponent's board: Foxparks' Harness (standing), Foxparks' Harness (standing), Pump-Action Shotgun (standing), Foxparks' Harness (standing)
[T8 waiting] You — Life 6, Deck 22, Hand 9, Souls 1/10 · Opponent — Life 8, Deck 29, Hand 1, Souls 10/10
[T8 waiting] Hand: Blazehowl Noct – Darkflame Defender, Blazehowl Noct – Darkflame Defender, Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Leezpunk – Treasure Bandit, Lily's Strategy, Lyleen – Blessing of the Goddess, Lyleen Noct – Providence of the Goddess, Strike from the Darkness · Souls 1/10
[T8 waiting] games.log.oppSoulDraw
[T8 waiting] Opponent deployed Reindrix – Icy Gaze.
[T8 waiting] Opponent activated Foxparks' Harness.
[T8 waiting] Opponent activated Foxparks' Harness.
[T8 waiting] Opponent activated Pump-Action Shotgun.
[T8 waiting] Opponent's Reindrix – Icy Gaze gets power +200 until end of turn.
[T8 waiting] Opponent activated Foxparks' Harness.
[T8 waiting] Opponent's Reindrix – Icy Gaze attacks your Shadowbeak – Seed of Despair.
[T8 waiting] You — Life 6, Deck 22, Hand 9, Souls 1/10 · Opponent — Life 8, Deck 28, Hand 1, Souls 2/10
[T8 waiting] You interrupted with Dinossom – Radiant Fragrance, paid 1 Soul. The attack was nullified.
[T8 waiting] To your graveyard: Dinossom – Radiant Fragrance
[T9 stand] games.log.turnStandPhase
[T9 draw] games.log.drawPhase
[T9 draw] games.log.drewForTurn
[T9 soul] games.log.placedSouls
[T9 main] games.log.mainPhase
[T9 main] Your board: Lyleen – Blessing of the Goddess (standing), Petallia – Sweet Blessings (standing), Medieval Medicine Workbench (standing), Shadowbeak – Seed of Despair (standing) · Opponent's board: Reindrix – Icy Gaze (rested), Foxparks' Harness (rested), Foxparks' Harness (rested), Pump-Action Shotgun (rested), Foxparks' Harness (rested)
[T9 main] You — Life 6, Deck 21, Hand 9, Souls 10/10 · Opponent — Life 8, Deck 28, Hand 1, Souls 2/10
[T9 main] Hand: Blazehowl Noct – Darkflame Defender, Blazehowl Noct – Darkflame Defender, Dinossom – Radiant Fragrance, Leezpunk – Treasure Bandit, Lily's Strategy, Lyleen – Blessing of the Goddess, Lyleen Noct – Providence of the Goddess, Medieval Medicine Workbench, Strike from the Darkness · Souls 10/10
[T9 main] Deployed Leezpunk – Treasure Bandit to slot 5 for 3 Souls.
[T9 main] Rested 3 Souls to pay a cost (4 standing).
[T9 main] Assigned Leezpunk – Treasure Bandit.
[T9 main] Deployed Menasting – Darkness-Dwelling Scorpion from the graveyard (rested).
[T9 main] You — Life 6, Deck 21, Hand 8, Souls 4/10 · Opponent — Life 8, Deck 28, Hand 1, Souls 2/10
[T9 main] Shadowbeak – Seed of Despair attacked them for 3; their Damage Check revealed a Lucky Pal, cancelled, no damage. (2 cards milled)
[T9 main] To opponent's graveyard: Foxparks – Light of Courage, Jormuntide Ignis – Savage Lava Dragon
[T9 main] You — Life 6, Deck 21, Hand 8, Souls 4/10 · Opponent — Life 8, Deck 26, Hand 1, Souls 2/10
[T9 main] Lyleen – Blessing of the Goddess attacked them for 3; their Damage Check revealed a Lucky Pal, cancelled, no damage. (2 cards milled)
[T9 main] To opponent's graveyard: Foxparks – Light of Courage, Chillet – Dragon Whisperer
[T9 main] You — Life 6, Deck 21, Hand 8, Souls 4/10 · Opponent — Life 8, Deck 24, Hand 1, Souls 2/10
[T9 main] Petallia – Sweet Blessings attacked them for 2. Damage Check: 2 cards milled, no Lucky. They 8 to 6 life.
[T9 main] To opponent's graveyard: Cryolinx – Arctic Ordeal, Elphidran Aqua – Gentle Ripples
[T9 end] games.log.endPhaseCleared
[T9 waiting] Shadowbeak: butchered your Menasting – Darkness-Dwelling Scorpion.
[T9 waiting] To your graveyard: Menasting – Darkness-Dwelling Scorpion
[T9 waiting] Opponent discarded 1: Pengullet Rocket Launcher.
[T9 waiting] Opponent discards 0.
[T9 waiting] Shadowbeak: butchered your Leezpunk – Treasure Bandit.
[T9 waiting] To your graveyard: Leezpunk – Treasure Bandit · To opponent's graveyard: Pengullet Rocket Launcher
[T9 waiting] To opponent's graveyard: Reindrix – Icy Gaze
[T9 waiting] Returned Dinossom – Radiant Fragrance from graveyard to hand.
[T9 waiting] Hand: Blazehowl Noct – Darkflame Defender, Blazehowl Noct – Darkflame Defender, Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Lily's Strategy, Lyleen – Blessing of the Goddess, Lyleen Noct – Providence of the Goddess, Medieval Medicine Workbench, Strike from the Darkness · Souls 4/10
[T9 waiting] Returned Dinossom – Radiant Fragrance from graveyard to hand.
[T9 waiting] Your board: Lyleen – Blessing of the Goddess (rested), Petallia – Sweet Blessings (rested), Medieval Medicine Workbench (standing), Shadowbeak – Seed of Despair (rested) · Opponent's board: Foxparks' Harness (standing), Foxparks' Harness (standing), Pump-Action Shotgun (standing), Foxparks' Harness (standing)
[T9 waiting] You — Life 6, Deck 21, Hand 10, Souls 4/10 · Opponent — Life 6, Deck 21, Hand 1, Souls 10/10
[T9 waiting] Hand: Blazehowl Noct – Darkflame Defender, Blazehowl Noct – Darkflame Defender, Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Lily's Strategy, Lyleen – Blessing of the Goddess, Lyleen Noct – Providence of the Goddess, Medieval Medicine Workbench, Strike from the Darkness · Souls 4/10
[T9 waiting] Opponent played Pal Sphere.
[T9 waiting] To opponent's graveyard: Pal Sphere
[T9 waiting] Opponent deployed Chillet – Dragon Whisperer.
[T9 waiting] Opponent deployed Jormuntide Ignis – Savage Lava Dragon.
[T9 waiting] Opponent activated Foxparks' Harness.
[T9 waiting] Opponent activated Foxparks' Harness.
[T9 waiting] Opponent activated Pump-Action Shotgun.
[T9 waiting] Opponent's Chillet – Dragon Whisperer gets power +200 until end of turn.
[T9 waiting] Opponent activated Foxparks' Harness.
[T9 waiting] Opponent's Chillet – Dragon Whisperer attacks your Shadowbeak – Seed of Despair.
[T9 waiting] You — Life 6, Deck 21, Hand 10, Souls 4/10 · Opponent — Life 6, Deck 17, Hand 2, Souls 1/10
[T9 waiting] You interrupted with Blazehowl Noct – Darkflame Defender, paid 1 Soul. The attack was nullified.
[T9 waiting] To your graveyard: Blazehowl Noct – Darkflame Defender
[T9 waiting] Opponent's Jormuntide Ignis – Savage Lava Dragon attacks your Shadowbeak – Seed of Despair.
[T9 waiting] You — Life 6, Deck 21, Hand 9, Souls 3/10 · Opponent — Life 6, Deck 17, Hand 2, Souls 1/10
[T9 waiting] You interrupted with Blazehowl Noct – Darkflame Defender, paid 1 Soul. The attack was nullified.
[T10 stand] games.log.turnStandPhase
[T10 draw] games.log.drawPhase
[T10 draw] games.log.drewForTurn
[T10 soul] games.log.placedSouls
[T10 main] games.log.mainPhase
[T10 main] Your board: Lyleen – Blessing of the Goddess (standing), Petallia – Sweet Blessings (standing), Medieval Medicine Workbench (standing), Shadowbeak – Seed of Despair (standing) · Opponent's board: Chillet – Dragon Whisperer (rested), Foxparks' Harness (rested), Foxparks' Harness (rested), Pump-Action Shotgun (rested), Foxparks' Harness (rested), Jormuntide Ignis – Savage Lava Dragon (rested)
[T10 main] You — Life 6, Deck 20, Hand 9, Souls 10/10 · Opponent — Life 6, Deck 17, Hand 2, Souls 1/10
[T10 main] Hand: Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Lily's Strategy, Lyleen – Blessing of the Goddess, Lyleen Noct – Providence of the Goddess, Medieval Medicine Workbench, Strike from the Darkness, Zoe's Strategy · Souls 10/10
[T10 main] Played Zoe's Strategy for 3 Souls.
[T10 main] To your graveyard: Zoe's Strategy
[T10 main] Returned Leezpunk – Treasure Bandit from graveyard to hand.
[T10 main] Opponent must discard 1.
[T10 main] Hand: Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Leezpunk – Treasure Bandit, Lily's Strategy, Lyleen – Blessing of the Goddess, Lyleen Noct – Providence of the Goddess, Medieval Medicine Workbench, Strike from the Darkness · Souls 7/10
[T10 main] Opponent discarded Foxparks' Harness.
[T10 main] To opponent's graveyard: Foxparks' Harness
[T10 main] Deployed Leezpunk – Treasure Bandit to slot 5 for 3 Souls.
[T10 main] Rested 3 Souls to pay a cost (1 standing).
[T10 main] Assigned Leezpunk – Treasure Bandit.
[T10 main] Deployed Menasting – Darkness-Dwelling Scorpion from the graveyard (rested).
[T10 main] You — Life 6, Deck 20, Hand 8, Souls 1/10 · Opponent — Life 6, Deck 17, Hand 1, Souls 1/10
[T10 main] Shadowbeak – Seed of Despair attacked them for 3. Damage Check: 3 cards milled, no Lucky. They 6 to 3 life.
[T10 main] To opponent's graveyard: Primitive Furnace, Primitive Furnace, Pengullet Rocket Launcher
[T10 main] You — Life 6, Deck 20, Hand 8, Souls 1/10 · Opponent — Life 3, Deck 14, Hand 1, Souls 1/10
[T10 main] Lyleen – Blessing of the Goddess attacked them for 3; their Damage Check revealed a Lucky Pal, cancelled, no damage. (1 card milled)
[T10 main] To opponent's graveyard: Chillet – Dragon Whisperer
[T10 main] You — Life 6, Deck 20, Hand 8, Souls 1/10 · Opponent — Life 3, Deck 13, Hand 1, Souls 1/10
[T10 main] Petallia – Sweet Blessings attacked them for 2. Damage Check: 2 cards milled, no Lucky. They 3 to 1 life.
[T10 main] To opponent's graveyard: Pengullet – Yearning for the Sky, Elphidran Aqua – Gentle Ripples
[T10 end] games.log.endPhaseCleared
[T10 waiting] Shadowbeak: butchered your Menasting – Darkness-Dwelling Scorpion.
[T10 waiting] To your graveyard: Menasting – Darkness-Dwelling Scorpion
[T10 waiting] Opponent discarded 1: Reptyro – Ore Gorger.
[T10 waiting] Opponent discards 0.
[T10 waiting] Shadowbeak: butchered your Leezpunk – Treasure Bandit.
[T10 waiting] To your graveyard: Leezpunk – Treasure Bandit · To opponent's graveyard: Reptyro – Ore Gorger
[T10 waiting] To opponent's graveyard: Chillet – Dragon Whisperer
[T10 waiting] To opponent's graveyard: Jormuntide Ignis – Savage Lava Dragon
[T10 waiting] Returned Dinossom – Radiant Fragrance from graveyard to hand.
[T10 waiting] Hand: Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Lily's Strategy, Lyleen – Blessing of the Goddess, Lyleen Noct – Providence of the Goddess, Medieval Medicine Workbench, Strike from the Darkness · Souls 1/10
[T10 waiting] Returned Blazehowl Noct – Darkflame Defender from graveyard to hand.
[T10 waiting] Your board: Lyleen – Blessing of the Goddess (rested), Petallia – Sweet Blessings (rested), Medieval Medicine Workbench (standing), Shadowbeak – Seed of Despair (rested) · Opponent's board: Foxparks' Harness (standing), Foxparks' Harness (standing), Pump-Action Shotgun (standing), Foxparks' Harness (standing)
[T10 waiting] You — Life 6, Deck 20, Hand 10, Souls 1/10 · Opponent — Life 1, Deck 10, Hand 1, Souls 10/10
[T10 waiting] Hand: Blazehowl Noct – Darkflame Defender, Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Lily's Strategy, Lyleen – Blessing of the Goddess, Lyleen Noct – Providence of the Goddess, Medieval Medicine Workbench, Strike from the Darkness · Souls 1/10
[T10 waiting] Opponent deployed Foxparks – A Toasty Hug.
[T10 waiting] Opponent activated Foxparks' Harness.
[T10 waiting] Opponent activated Foxparks' Harness.
[T10 waiting] Opponent activated Foxparks' Harness.
[T10 waiting] Opponent activated Pump-Action Shotgun.
[T10 waiting] Opponent's Foxparks – A Toasty Hug gets power +200 until end of turn.
[T10 waiting] Shadowbeak – Seed of Despair took 700 damage.
[T10 waiting] Shadowbeak – Seed of Despair took 700 damage and was destroyed.
[T10 waiting] To your graveyard: Shadowbeak – Seed of Despair
[T10 waiting] Petallia – Sweet Blessings took 700 damage and was destroyed.
[T10 waiting] Opponent's Foxparks – A Toasty Hug attacks your Lyleen – Blessing of the Goddess.
[T10 waiting] You — Life 6, Deck 20, Hand 10, Souls 1/10 · Opponent — Life 1, Deck 10, Hand 0, Souls 6/10
[T10 waiting] To your graveyard: Petallia – Sweet Blessings
[T10 waiting] You interrupted with Blazehowl Noct – Darkflame Defender, paid 1 Soul. The attack was nullified.
[T10 waiting] To your graveyard: Blazehowl Noct – Darkflame Defender
[T10 waiting] games.log.oppSoulDraw
[T11 stand] games.log.turnStandPhase
[T11 draw] games.log.drawPhase
[T11 draw] games.log.drewForTurn
[T11 soul] games.log.placedSouls
[T11 main] games.log.mainPhase
[T11 main] Your board: Lyleen – Blessing of the Goddess (standing), Medieval Medicine Workbench (standing) · Opponent's board: Foxparks – A Toasty Hug (rested), Foxparks' Harness (rested), Foxparks' Harness (rested), Pump-Action Shotgun (rested), Foxparks' Harness (rested)
[T11 main] You — Life 6, Deck 19, Hand 10, Souls 10/10 · Opponent — Life 1, Deck 9, Hand 1, Souls 3/10
[T11 main] Hand: Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Dinossom – Radiant Fragrance, Lily's Strategy, Lyleen – Blessing of the Goddess, Lyleen Noct – Providence of the Goddess, Medieval Medicine Workbench, Petallia – Sweet Blessings, Strike from the Darkness · Souls 10/10
[T11 main] Rested 3 Souls to pay a cost (7 standing).
[T11 main] Assigned Lyleen – Blessing of the Goddess.
[T11 main] Deployed Shadowbeak – Seed of Despair from the graveyard (rested).
[T11 main] Deployed Lyleen – Blessing of the Goddess to slot 4 for 7 Souls.
[T11 main] Got 3 Ingredient.
[T11 main] Got 3 Ingredient.
[T11 main] Spent 3 Ingredient (3 left).
[T11 main] Looked at top 5: deployed Blazehowl Noct – Darkflame Defender.
[T11 main] You — Life 6, Deck 18, Hand 9, Souls 0/10 · Opponent — Life 1, Deck 9, Hand 1, Souls 3/10
[T11 main] Blazehowl Noct – Darkflame Defender attacked them for 2; their Damage Check revealed a Lucky Pal, cancelled, no damage. (1 card milled)
[T11 main] To opponent's graveyard: Chillet – Dragon Whisperer
[T11 main] You — Life 6, Deck 18, Hand 9, Souls 0/10 · Opponent — Life 1, Deck 8, Hand 1, Souls 3/10
[T11 main] Lyleen – Blessing of the Goddess attacked them for 3. Damage Check: 3 cards milled, no Lucky. They 1 to 0 life.
[T11 main] To opponent's graveyard: Foxparks – A Toasty Hug, Mounted Machine Gun, Pengullet – Yearning for the Sky`
  },
  {
    id: 'p2-sep13-0532', title: 'p1 vs Purple/Green deck (Sep 9) — เล่นฝั่ง p2', date: '2026-09-13',
    deck: 'Purple/Green (Sep 9)', vs: 'p1 (Fire/Dragon)', result: 'ชนะ (ลดไลฟ์คู่แข่งเหลือ 0 · T8)',
    note: 'rules 66 / abilities 15 · Lily\'s Strategy +1000 เคลียร์ Jormuntide Ignis แล้วปิดด้วย Shadowbeak',
    mod: './logs/g-2026-09-13-0532.js'
  },
  {
    id: 'p2-sep12-1511', title: 'p1 vs Purple/Green deck (Sep 9) — เล่นฝั่ง p2', date: '2026-09-12',
    deck: 'Purple/Green (Sep 9)', vs: 'p1', result: 'ชนะ',
    note: 'rules 65 / abilities 14 · log บันทึกถึงเทิร์น 9',
    mod: './logs/g-2026-09-12-1511.js'
  },
  {
    id: 'p2-sep12-1458', title: 'p1 vs Purple/Green deck (Sep 9) — เล่นฝั่ง p2', date: '2026-09-12',
    deck: 'Purple/Green (Sep 9)', vs: 'p1 (Fire/Gear)', result: 'ชนะ',
    note: 'rules 65 / abilities 14 · log บันทึกถึงเทิร์น 9',
    mod: './logs/g-2026-09-12-1458.js'
  },
  {
    id: 'p1-sep12-1406', title: 'Purple/Green deck (Sep 9) vs p2', date: '2026-09-12',
    deck: 'Purple/Green (Sep 9)', vs: 'p2 (Wumpo/Blue)', result: 'ชนะ',
    note: 'rules 65 / abilities 14 · log บันทึกถึงเทิร์น 6',
    mod: './logs/g-2026-09-12-1406.js'
  },
  {
    id: 'p1-sep11-1749', title: 'Purple/Green deck (Sep 9) vs p2', date: '2026-09-11',
    deck: 'Purple/Green (Sep 9)', vs: 'p2', result: 'ชนะ',
    note: 'rules 65 / abilities 14 · เกมยาว — log บันทึกถึงเทิร์น 14',
    mod: './logs/g-2026-09-11-1749.js'
  },
  {
    id: 'p2-sep11-1739', title: 'p1 vs Purple/Green deck (Sep 9) — เล่นฝั่ง p2', date: '2026-09-11',
    deck: 'Purple/Green (Sep 9)', vs: 'p1 (Fire/Gear)', result: 'ชนะ (ลดไลฟ์คู่แข่งเหลือ 0 · T13)',
    note: 'rules 65 / abilities 14 · ปิดเกมด้วย Lyleen 3 หน้า',
    mod: './logs/g-2026-09-11-1739.js'
  },
  {
    id: 'p1-sep11-1726', title: 'Purple/Green deck (Sep 9) vs p2', date: '2026-09-11',
    deck: 'Purple/Green (Sep 9)', vs: 'p2 (Blue/Dragon)', result: 'ชนะ',
    note: 'rules 65 / abilities 14 · log บันทึกถึงเทิร์น 9',
    mod: './logs/g-2026-09-11-1726.js'
  },
  {
    id: 'p2-sep11-1717', title: 'p1 vs Purple/Green deck (Sep 9) — เล่นฝั่ง p2', date: '2026-09-11',
    deck: 'Purple/Green (Sep 9)', vs: 'p1 (Fire)', result: 'ชนะ (ลดไลฟ์คู่แข่งเหลือ 0 · T7)',
    note: 'rules 65 / abilities 14 · Petallia กดต่อเนื่องปิดเกมไว',
    mod: './logs/g-2026-09-11-1717.js'
  },
  {
    id: 'p1-sep11-1656', title: 'Purple/Green deck (Sep 9) vs p2', date: '2026-09-11',
    deck: 'Purple/Green (Sep 9)', vs: 'p2 (Electric)', result: 'ชนะ (ลดไลฟ์คู่แข่งเหลือ 0 · T8)',
    note: 'rules 65 / abilities 14 · Petallia คู่ + Tombat กดทีละใบจนหมดไลฟ์',
    mod: './logs/g-2026-09-11-1656.js'
  },
  {
    id: 'p1-sep11-1646', title: 'Purple/Green deck (Sep 9) vs p2', date: '2026-09-11',
    deck: 'Purple/Green (Sep 9)', vs: 'p2 (Pengullet)', result: 'ชนะ',
    note: 'rules 65 / abilities 14 · log บันทึกถึงเทิร์น 10',
    mod: './logs/g-2026-09-11-1646.js'
  }
];
