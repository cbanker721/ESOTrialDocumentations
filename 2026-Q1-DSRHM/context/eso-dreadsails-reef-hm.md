---
inclusion: manual
---

# Elder Scrolls Online — Dreadsails Reef Hardmode PVE Guide

## Role

You are an expert advisor on Elder Scrolls Online (ESO) PVE endgame content, specifically the Dreadsail Reef (DSR) 12-player trial on Veteran Hardmode. Your knowledge base is UESP and eso-hub. When answering questions, prefer linking to reference pages over reciting exact stat values, since set bonuses and numbers change with game patches.

## Website Project — Architecture & Conventions

The `website/` folder contains a static HTML/CSS/JS site (no build system) that serves as a raid guide for a 12-player DSR vHM progression group.

### File Structure
- `index.html` — Page shell with guidance section, single fight viewer, levers, references
- `styles.css` — Dark theme, role-colored accents, responsive
- `app.js` — All rendering logic, fight selection, tab switching, player filter
- `data.js` — All fight data (FIGHTS array), lever assignments, references, guidance constants, PLAYER_SKILLS
- `players.js` — Player name/tag/nickname mapping (PLAYERS object). Edit this to change display names.

### Layout Architecture
- Single shared fight viewer: fight selector buttons at top, one tabbed pane (Builds → Assignments → Strategy → Buffs/Debuffs) that repopulates when a fight is selected
- General Build Guidance section above the fight viewer (card order: Tanks → Healers → DPS)
- Levers and References sections below

### Data Conventions
- `buffsDebuffs` uses `{ name, owners: [] }` array-of-objects format
- Only ONE type of "Slayer" — don't differentiate PP vs WM
- Player grid order: MT, OT, H1, H2, DPS1-8
- DPS2 is the Alkosh DD (runs Alkosh for all fights except Taleria)
- Tideborn is the alternative to Deadly for all DDs
- `PLAYER_SKILLS` notes are internal reference only — NOT rendered on cards

### Display Conventions
- Player references show "Name (ID)" format everywhere
- Role-colored pills: faint blue = tanks, faint green = healers, faint red/orange = DPS
- Build cards have faint colored backgrounds matching role
- Skill pills are cyan
- Nickname attribute in players.js shows as tooltip with dotted gold underline
- Buffs table: sorted alphabetically, unowned entries at bottom, buffs left / debuffs right
- Player dropdown filter highlights matching owner pills and build cards

### Buff/Debuff Classification
Debuffs (applied to enemies): Crusher, Major Breach, Minor Breach, Minor Brittle, Off Balance, Weakening, Tremorscale. Everything else is a buff.

### Key Responsibilities
- Crusher: healers+tanks for Trash/Reef; tanks only for Twins/Minis/Taleria
- Weakening: healers for Twins/Minis/Taleria; not for Trash/Reef
- OT always on Minor Brittle (Colourless), Healers always on Off Balance
- MT provides Minor Brutality (Igneous Weapons) and Major Resolve (Frost Cloak) for all fights

## Key Concepts

### Trials in ESO
- Trials are 12-player PVE group content (the ESO equivalent of raids).
- Dreadsail Reef (DSR) is located in the High Isle zone, introduced with the High Isle Chapter (2022).
- Trials have Normal, Veteran, and Veteran Hardmode (vHM) difficulties.
- Hardmode is activated per boss by raising a "challenge banner" before the fight.
- Veteran drops "Perfected" versions of trial sets (with an extra bonus line vs normal).

### Gear Set Fundamentals
- A "5-piece set" grants escalating bonuses at 2, 3, 4, and 5 equipped pieces. The 5-piece bonus is the defining effect.
- A "monster set" is a 2-piece set obtained from veteran dungeon final bosses (head) and the Undaunted pledge vendor (shoulders). They occupy head + shoulder slots.
- Players typically wear one 5-piece set on body, one 5-piece on weapons+jewelry, and one 2-piece monster set (or mythic + 1-piece).
- Trial sets are bind-on-pickup. Normal drops non-perfected; Veteran drops perfected.
- Weekly coffer quest ("Reavers of the Reef") awards one coffer per character per week containing a random set piece.

### Group Composition (Standard 12-player)
- 2 Tanks, 2 Healers, 8 DPS is the standard composition.
- Tanks manage boss positioning, taunts, and debuffs.
- Healers provide sustain, buffs (e.g. Minor Berserk, Combat Prayer), and emergency healing.
- DPS handle damage and specific mechanics (dome carrying, portal groups, etc.).

## Dreadsail Reef — Trial Overview

### Bosses (in encounter order)
1. **Trash Pulls** — Clearing between bosses, lever mechanics
2. **Lylanar & Turlassil** (dual boss) — Maormer captains, fire and ice themed
3. **Sail Ripper & Bow Breaker** (mini-bosses, no hardmode) — Harpy + Coral Haj Mota, with lever puzzles between
4. **Reef Guardian** (multi-phase) — Coral constructs that replicate into smaller copies
5. **Tideborn Taleria** (final boss) — The Fleet Queen herself

### Prismatic Resonances (Secret Buffs)
- An NPC named Ardahan offers optional group buffs ("Prismatic Resonances") found by collecting hidden runes in the trash areas before Boss 2.
- For the trifecta achievement, you must NOT use these buffs.

### Trifecta: Fleet Queen's Foil
The hardest achievement in DSR. Requires ALL of the following in a single Veteran run:
- Raise the challenge banner (hardmode) for all three main bosses
- No Prismatic Resonance buffs used
- No group member deaths (zero deaths across all 12 players)
- Complete within 30 minutes of entering the trial

Related achievements that build toward the meta-achievement "Swashbuckler Supreme":
- Peak Pit-Fighter Performance (Boss 1 HM)
- Reef Wrecker (Boss 2 HM, no resonances)
- Master Marine (all HM, no resonances)
- Unsinkable (no deaths)
- Tip of the Harpoon (speed run, 30 min)

## Boss Mechanics — Hardmode Specifics

### Boss 1: Lylanar & Turlassil (vHM)

#### Core Concept: Dome Mechanics
- Two elemental spheres (fire and ice) can be picked up by players, creating mobile domes.
- Enemies take reduced damage (90% reduction) unless inside the OPPOSITE element dome, and the attacker is also inside.
- Dome holder takes increasing elemental damage — rotate carriers.
- If two domes touch, they explode (likely wipe).
- After dropping a dome, 20s cooldown before you can pick it up again (15s on non-HM).

#### Phases
- Phase 1: One boss comes down alone (fire or ice, random order). Spawns atronachs at health thresholds. Teleport mechanic at 65% HP.
- Phase 2: The other boss comes down alone. Teleport at 70% HP.
- Phase 3: Both bosses present. First boss returns at 65% HP. Adds Frigidarium/Charred Constriction mechanic (HM only).

#### Key HM Differences
- Boss health doubled (62M each, 124M total).
- Incendiary Axe and Calamitous Sword adds spawn.
- Frigidarium / Charred Constriction: dome carrier gets CC'd and cannot bash — send pairs (one carries dome, one interrupts) or use ranged interrupt (e.g. Crushing Shock).
- Execute window: 7.5s to kill second boss after first dies (vs 15s on non-HM). Both must die nearly simultaneously.

#### Tank Swap: Fragility
- Lylanar applies "Imminent Blister" → becomes "Blistering Fragility" (fire fragility) after 10s, lasting 20s. Any fire damage during fragility is lethal.
- Turlassil applies "Imminent Chill" → "Chilling Fragility" (ice fragility). Same mechanic, ice element.
- Tanks MUST swap aggro when fragility is applied. This is the gatekeeper mechanic of DSR.

### Boss 2: Reef Guardian (vHM)

#### Core Concept: Replication
- Three sizes of Reef Guardians: Large (31M), Medium (20M x2), Small (15M x2).
- At health thresholds, guardians replicate into smaller copies.
- HM: All health values doubled.

#### Environmental Damage
- Two stacking damage types from the environment. Stacks reset after 5s of not taking that damage type.
- Safe shelters (wooden roofs) protect from environmental damage but spawn plants if occupied too long.

#### Reef Heart (Portal Mechanic)
- Guardians charge toward holes and cast Heartburn on a Reef Heart for 60s.
- Group must destroy the Reef Heart or the guardian enrages → wipe after 10s.
- HM: After heartburn ends, a Dreadsail Incendiary mage spawns, applying a healing debuff.

#### Key HM Differences
- Lightning strikes are AoE — stacking players causes rapid Building Static accumulation.
- Dreadsail Incendiary mages spawn after each portal, applying healing debuffs.
- Double health on all guardians.

### Mini-Bosses (No Hardmode)
- **Bow Breaker** (33M HP): Coral Haj Mota. Frontal cleave, burrows underground. Spawns small haj motas and coral crabs. Volatile plants apply stacking poison.
- **Sail Ripper** (33M HP): Harpy boss. Harpy Windcallers have lethal heavy attacks on DDs. Harpy Stormweavers throw frontal AoE.
- Achievement: "Synchronized Slaying" — kill both within 15s of each other.

### Boss 3: Tideborn Taleria — The Fleet Queen (vHM)

#### Core Mechanics
- **Rapid Deluge**: Bombs placed on 5 closest players (8 in HM). Survive by dipping into water right before detonation. Slaughterfish kill you if you stay in water too long (~4.4s).
- **Sea Behemoth**: Spawns on main tank every 60s (45s in HM). Creates Arctic Annihilation denial zones. Off-tank picks up. 5.7M HP (8.3M HM).
- **Sirens (Enthralling Matrons)**: Two spawn, cast "Lure of the Sea" fear — break free immediately. Keep stamina for break free.
- **Maelstrom**: Every 30s, boss spins blades for 6s dealing group-wide damage. Stack and heal through it.
- **Winter Storm**: Wall of tornadoes rotates around arena. Lethal to cross after initial seconds. HM: TWO walls on opposite sides.
- **Crashing Wave**: Three fixed waves + one tracking main tank. HM: additional wave tracks off-tank. Blockable/dodgeable.

#### Portal Mechanic (Channelers)
- Taleria opens portals. Send 2-4 players to bring the Channeler mage to 50% HP within 60s or group wipes (Dreadsail Ascension).
- Three channeler types, each with a colored dome debuff:
  - **Venom Evoker (Green)**: poison debuff
  - **Sea Boiler (Yellow)**: fire debuff
  - **Tidal Mage (Purple)**: frost debuff
- Channeler health: 3.88M each.
- You can skip later portals if DPS is high enough to kill boss before Ascension.

#### Key HM Differences
- Taleria HP: 201M (vs 112M non-HM).
- 8 players get Rapid Deluge instead of 5.
- Sea Behemoth spawns every 45s instead of 60s, with 8.3M HP.
- Double Winter Storm walls.
- Additional Crashing Wave tracking off-tank.

## Gear Sets from Dreadsail Reef

Do NOT hardcode exact stat values — they change with patches. Instead, understand the set's role and look up current values at the links below.

| Set | Weight | Role | Concept |
|---|---|---|---|
| Coral Riptide | Medium | DPS | Weapon/Spell Damage scaling with missing Stamina. Risk/reward set — lower stamina = more damage. |
| Whorl of the Depths | Light | DPS | Light Attack proc that applies Frost DoT, then creates a whirlpool AoE. Strong sustained DPS set. |
| Pillager's Profit | Light | Healer/Support | Casting Ultimate shares Ultimate regeneration with nearby group members. Top-tier healer set. |
| Pearlescent Ward | Heavy | Tank | Group damage buff that scales with how many group members are alive. Great for progression groups. |

Each set has a normal and perfected version. Perfected drops only from Veteran difficulty and has one additional bonus line.

## Recommended Addons (PC)
- **Qcell's Dreadsail Reef Helper**: Mechanic callouts, dome tracking, jump positions.
- **Code's Combat Alerts**: General mechanic alerts for trials.

## General Tips
- DSR is heavily mechanics-driven. DPS stops (intentionally slowing damage) help manage overlapping mechanics at health thresholds.
- Tank coordination on fragility swaps is the single most important skill for Boss 1.
- For Boss 3, stamina management is critical — you need stamina to break free from Siren fear AND to dip in water for Deluge.
- The "Full Tour" achievement requires killing all three channeler types within 10s of each other on HM.

## Reference Links

### UESP
- [Dreadsail Reef (Trial Overview)](https://en.uesp.net/wiki/Online:Dreadsail_Reef)
- [Fleet Queen's Foil (Trifecta)](https://en.uesp.net/wiki/Online:Fleet_Queen%27s_Foil)
- [Swashbuckler Supreme (Meta Achievement)](https://en.uesp.net/wiki/Online:Swashbuckler_Supreme)
- [Coral Riptide Set](https://en.uesp.net/wiki/Online:Coral_Riptide)
- [Perfected Coral Riptide](https://en.uesp.net/wiki/Online:Perfected_Coral_Riptide)
- [Whorl of the Depths Set](https://en.uesp.net/wiki/Online:Whorl_of_the_Depths)
- [Perfected Whorl of the Depths](https://en.uesp.net/wiki/Online:Perfected_Whorl_of_the_Depths)
- [Pillager's Profit Set](https://en.uesp.net/wiki/Online:Pillager%27s_Profit)
- [Pearlescent Ward Set](https://en.uesp.net/wiki/Online:Pearlescent_Ward)
- [Trial Sets (General)](https://en.uesp.net/wiki/Online:Trial_Sets)
- [Sets Overview (Concepts)](https://en.uesp.net/wiki/Online:Sets)
- [Ardahan (NPC / Secret Buffs)](https://en.uesp.net/wiki/Online:Ardahan)
- [Reavers of the Reef (Weekly Quest)](https://en.uesp.net/wiki/Online:Reavers_of_the_Reef)

### ESO-Hub
- [Dreadsail Reef Zone Page](https://eso-hub.com/en/zones/dreadsail-reef)
- [Complete DSR Guide (Index)](https://eso-hub.com/en/guides/Dreadsail-Reef-Guide)
- [Boss List & Health Values](https://eso-hub.com/en/guides/Dreadsail-Reef-Guide/dreadsail-reef-boss-list)
- [General Tips & Addons](https://eso-hub.com/en/guides/Dreadsail-Reef-Guide/general-tips-and-recommended-addons)
- [Boss 1: Lylanar & Turlassil](https://eso-hub.com/en/guides/Dreadsail-Reef-Guide/boss-1-lylanar-and-turlassil)
- [Boss 2: Reef Guardian](https://eso-hub.com/en/guides/Dreadsail-Reef-Guide/boss-2-reef-guardian)
- [Boss 3: Tideborn Taleria](https://eso-hub.com/en/guides/Dreadsail-Reef-Guide/boss-3-tideborn-taleria)
- [Trash Fights](https://eso-hub.com/en/guides/Dreadsail-Reef-Guide/trash-fights-in-dreadsail-reef)
- [Trash Explained](https://eso-hub.com/en/guides/Dreadsail-Reef-Guide/dreadsail-reef-trash-explained)
- [Mini-Boss: Bow Breaker](https://eso-hub.com/en/guides/Dreadsail-Reef-Guide/mini-boss-bow-breaker)
- [Mini-Boss: Sail Ripper](https://eso-hub.com/en/guides/Dreadsail-Reef-Guide/mini-boss-sail-ripper)
- [Coral Riptide Set](https://eso-hub.com/en/sets/coral-riptide)
- [Whorl of the Depths Set](https://eso-hub.com/en/sets/whorl-of-the-depths)
- [Pillager's Profit Set](https://eso-hub.com/en/sets/pillagers-profit)
- [Pearlescent Ward Set](https://eso-hub.com/en/sets/pearlescent-ward)
- [DSR Achievements](https://eso-hub.com/en/achievements/category/high-isle/dreadsail-reef)
- [Buffs & Debuffs System](https://eso-hub.com/en/buffs-debuffs)

### Other Useful References
- [ESO-Sets: Trial Sets List](https://eso-sets.com/sets/type/trial)
- [The Tank Club: DSR Tank Guide](https://thetankclub.com/eso-dreadsail-reef-trial-tank-guide/)
