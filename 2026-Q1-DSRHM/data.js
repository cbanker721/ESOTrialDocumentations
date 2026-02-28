// ============================================================
// DSR HM Progression — Structured Data
// ============================================================

const PLAYER_ID = Object.freeze({
  MT: 'MT',
  OT: 'OT',
  H1: 'H1',
  H2: 'H2',
  DPS1: 'DPS1',
  DPS2: 'DPS2',
  DPS3: 'DPS3',
  DPS4: 'DPS4',
  DPS5: 'DPS5',
  DPS6: 'DPS6',
  DPS7: 'DPS7',
  DPS8: 'DPS8',
});

// Notable skills/modifiers per role (shown on build cards)
const PLAYER_SKILLS = {
  [PLAYER_ID.MT]:  [
    { skill: "Crusher", note: "Enchants" },
    { skill: "Frost Cloak", note: "Major Resolve" }
  ],
  [PLAYER_ID.OT]:  [
    { skill: "Crusher", note: "Enchants" },
    { skill: "Colourless", note: "Minor Brittle" },
    { skill: "Igneous Weapons", note: "Minor Brutality, Major Sorcery/Brutality" },
  ],
  [PLAYER_ID.H1]:  [
    { skill: "Altar", note: "Undaunted" },
    { skill: "Off Balance", note: "Lightning Staff" },
    { skill: "From the Brink", note: "CP" },
  ],
  [PLAYER_ID.H2]:  [
    { skill: "Radiant Aura", note: "" },
    { skill: "Warding Burst", note: "Minor Expedition" },
    { skill: "Off Balance", note: "Lightning Staff" },
    { skill: "Enlivening", note: "CP" },
  ]
};

const FIGHTS = [
  {
    id: "trash",
    name: "Trash Pulls",
    shortName: "Trash",
    icon: "⚔️",
    strategy: {
      summary: "Clear trash packs between bosses efficiently. Supports never ult on trash. DDs can ult until the last or second-to-last pull — use judgement since Standards are expensive.",
      details: [
        "Coordinate pulls between MT and OT.",
        "Supports never ult on trash.",
        "DDs can ult until last or 2nd-last pull (Standards are expensive).",
        "Lever pullers swap sets via Wizard's Wardrobe hotkey before being pulled in.",
      ]
    },
    builds: {
      "DPS1": { sets: ["Velothi", "Ansuul/Sul-Xan/Kazpian", "Deadly/Tideborn/Nerien'eth"], ult: "Languid (Front), Destro (Back)", notes: "Be mindful about ulting before the last boss." },
      "DPS2": { sets: ["Velothi", "Alkosh", "Deadly/Tideborn/Nerien'eth"], ult: "Languid (Front), Destro (Back)", notes: "Be mindful about ulting before the last boss." },
      "DPS3": { sets: ["Velothi", "Ansuul/Sul-Xan/Kazpian", "Deadly/Tideborn/Nerien'eth"], ult: "Languid (Front), Destro (Back)", notes: "Be mindful about ulting before the last boss." },
      "DPS4": { sets: ["Velothi", "Ansuul/Sul-Xan/Kazpian", "Deadly/Tideborn/Nerien'eth"], ult: "Languid (Front), Destro (Back)", notes: "Be mindful about ulting before the last boss." },
      "DPS5": { sets: ["Velothi", "Ansuul/Sul-Xan/Kazpian", "Deadly/Tideborn/Nerien'eth"], ult: "Languid (Front), Destro (Back)", notes: "Be mindful about ulting before the last boss." },
      "DPS6": { sets: ["Velothi", "Ansuul/Sul-Xan/Kazpian", "Deadly/Tideborn/Nerien'eth"], ult: "Languid (Front), Destro (Back)", notes: "Be mindful about ulting before the last boss." },
      "DPS7": { sets: ["Velothi", "Ansuul/Sul-Xan/Kazpian", "Deadly/Tideborn/Nerien'eth"], ult: "Languid (Front), Destro (Back)", misc: ["Streak"], notes: "Be mindful about ulting before the last boss." },
      "DPS8": { sets: ["Velothi", "Ansuul/Sul-Xan/Kazpian", "Deadly/Tideborn"], ult: "Languid (Front), Destro (Back)", misc: ["Shattering Knife"], notes: "Be mindful about ulting before the last boss." },
      "H1":   { sets: ["MA", "PP", "PoE"], ult: "None", misc: ["Crusher"], notes: "Hotkey manual gear swaps." },
      "H2":   { sets: ["SPC", "PA", "PoE", "Oze"], ult: "None", misc: ["Crusher"], notes: "Hotkey manual gear swaps." },
      "MT":   { sets: ["LE", "Xoryn", "Flex"], ult: "Atro", notes: "Coordinate pulls with OT. Hotkey manual gear swaps." },
      "OT":   { sets: ["PW", "Crimson", "Baron"], ult: "Horn", notes: "" }
    },
    buffsDebuffs: [
      { name: "Crimson Oath", owners: ["OT"] },
      { name: "Crusher", owners: ["H1", "H2", "MT", "OT"] },
      { name: "LE", owners: ["MT"] },
      { name: "Major Breach", owners: ["MT", "OT"] },
      { name: "Major Resolve", owners: ["MT"] },
      { name: "Minor Breach", owners: ["OT"] },
      { name: "Minor Brittle", owners: ["OT"] },
      { name: "Minor Brutality", owners: ["OT"] },
      { name: "Minor Vulnerability", owners: ["OT"] },
      { name: "Off Balance", owners: ["H1", "H2", "DPS8"] },
      { name: "PA", owners: ["H2"] },
      { name: "PW", owners: ["OT"] },
      { name: "Slayer", owners: ["H1"] },
      { name: "SPC", owners: ["H2"] },
      { name: "Xoryn", owners: ["MT"] }
    ],
    assignments: {}
  },
  {
    id: "twins",
    name: "Lylanar & Turlassil (Twins)",
    shortName: "Twins",
    icon: "🔥❄️",
    strategy: {
      summary: "Dual-boss fight with fire/ice dome mechanics. Bosses come down one at a time, then both together for execute. Both must die within 7.5s of each other on HM.",
      details: [
        "Everyone hold ult until Slayer callout.",
        "All ranged DDs beam weapons as soon as they spawn.",
        "Dome holder moves dome out of boss at 80%, returns for (1) boss channel or (2) 2nd same-colour atro.",
        "When boss starts teleport phase, all DDs tab-target boss and note where their orb spawns.",
        "Slayer at 2nd atro. Ult order: All DDs → H1 Naz → H2 PP. Tanks ult at discretion.",
        "OT starts with boss, MT takes later. OT stacks wrong-colour atros out of group (~1-2 o'clock outside dome).",
        "MT coordinates boss swaps. Stacks same-colour atros on boss, keeps them centered during teleport."
      ],
      phases: [
        {
          name: "Teleport Phase",
          details: [
            "DDs go to assigned domes. If freed up, drop DoTs in middle.",
            "Last DD holds dome. If leftover right-colour atros, MT takes them there; DD holds dome until atros die.",
            "Dome holder waits for old dome to drop. MT helps interrupt with Crushing Shock.",
            "Tip: Look at the orb beside you and take the dome of opposite colour."
          ]
        },
        {
          name: "Execute Phase 1 (Before Swap at 15%)",
          details: [
            "Large side: OT, H1, all DDs except DPS8.",
            "Small side: MT, H2, DPS8.",
            "Large side starts with a Slayer. Ult order: All DDs → H1 Naz extend → Tanks ult whenever. DDs ult on CD after.",
            "H1 stays out of dome for jump rescue.",
            "DPS6 and DPS7 swap domes on jump/brands. DPS6 grabs first.",
            "Small side: DPS8 kills weapons after a mech finishes and calls out.",
            "H2 holds dome initially. If someone else has dome and PP is off CD, go to large side to pop PP.",
            "Tanks stack puddles along sides in L-shape pattern. Don't run into DDs doing brands during boss swap."
          ]
        },
        {
          name: "Side Swap (Large boss at 15%)",
          details: [
            "Called when large-side boss is at 15% and no active mech is happening.",
            "All DDs and healers swap sides. Dome holders stay until someone takes dome off them. Tanks always stay.",
            "Both healers drop HoTs in their old dome before leaving."
          ]
        },
        {
          name: "Execute Phase 2 & Final",
          details: [
            "Everyone just burn. Can largely ignore weapons.",
            "Final execute: large-side boss is dead. DDs check if they have dome — drop it. Once clear, run to finish other boss.",
            "Both bosses must die within 7.5s of each other (HM)."
          ]
        }
      ],
      reminders: [
        "Block weapon waves before execute if you are not tank.",
        "Roll-dodge weapon waves at execute (especially same-colour wave) or if you are tank.",
        "Dome holders during execute: move vertically (entrance↔exit). Only move horizontally if boss channels at middle outside dome — be very careful.",
        "Remember you have dome and watch where the boss you cover is standing."
      ]
    },
    builds: {
      "DPS1": { sets: ["Null", "Deadly/Tideborn", "Velothi"], ult: "Languid or Standard", notes: "Banner DD. Take Exit Left Dome during teleport." },
      "DPS2": { sets: ["Alkosh", "Deadly/Tideborn", "Velothi"], ult: "Colo", notes: "Alkosh DD. Take Exit Right Dome. Call out Colos to notify Naz." },
      "DPS3": { sets: ["Null", "Deadly/Tideborn", "Velothi"], ult: "Languid or Standard", notes: "Take Entrance Right Dome during teleport." },
      "DPS4": { sets: ["Null", "Deadly/Tideborn", "Velothi"], ult: "Languid or Standard", notes: "War Machine Left Slayer. Take Entrance Left Dome." },
      "DPS5": { sets: ["Null", "Deadly/Tideborn", "Velothi"], ult: "Languid or Standard", notes: "Banner DD. Bash Exit Left Dome. Backup dome grab." },
      "DPS6": { sets: ["Null", "Deadly/Tideborn", "Velothi"], ult: "Languid or Standard", notes: "Bash Exit Right Dome. Backup dome grab. Tab-target boss pre-teleport." },
      "DPS7": { sets: ["Null", "Deadly/Tideborn", "Velothi"], ult: "Languid or Standard", notes: "Bash Entrance Right Dome. Backup dome grab." },
      "DPS8": { sets: ["Null", "Deadly/Tideborn", "Velothi"], ult: "Languid or Standard", notes: "Take dome when boss comes down. Move dome out at 80%, back in at channel or 2nd right-colour atro. Bash Entrance Left Dome." },
      "H1":   { sets: ["SPC", "MA", "PoE", "Naz"], ult: "Horn", misc: ["Weakening"], notes: "Big group. Stay outside dome, grab on jump. Heal OT. Naz extend Colo, PP." },
      "H2":   { sets: ["Xoryn", "PP", "PoE"], ult: "Barrier", misc: ["Weakening"], notes: "Small group. Heal MT. PP on CD." },
      "MT":   { sets: ["LE", "PA", "Baron"], ult: "Atro / Barrier as needed", notes: "No guard this fight — be tanky. Both tanks run PA. Coordinate boss swaps. Frost Cloak at weapon spawn, teleport, tank swaps, brands/jumps." },
      "OT":   { sets: ["PW", "PA", "Baron"], ult: "Horn / Magma Shell as needed", notes: "No guard — be tanky. Both tanks run PA. Take wrong-colour atros slightly out of dome. Magma Shell for execute abuse." }
    },
    buffsDebuffs: [
      { name: "Alkosh", owners: ["DPS2"] },
      { name: "Barrier", owners: ["H2"] },
      { name: "Crusher", owners: ["MT", "OT"] },
      { name: "Horn", owners: ["H1", "OT"] },
      { name: "LE", owners: ["MT"] },
      { name: "Major Breach", owners: ["MT", "OT"] },
      { name: "Major Resolve", owners: ["MT"] },
      { name: "Minor Breach", owners: ["MT", "OT"] },
      { name: "Minor Brittle", owners: ["OT"] },
      { name: "Minor Brutality", owners: ["OT"] },
      { name: "Minor Vulnerability", owners: ["OT"] },
      { name: "Major Vulnerability", owners: ["DPS2"] },
      { name: "Naz", owners: ["H1"] },
      { name: "Off Balance", owners: ["H1", "H2"] },
      { name: "PA", owners: ["MT", "OT"] },
      { name: "PP", owners: ["H2"] },
      { name: "PW", owners: ["OT"] },
      { name: "Slayer", owners: ["DPS4"] },
      { name: "SPC", owners: ["H1"] },
      { name: "Weakening", owners: ["H1", "H2"] },
      { name: "Xoryn", owners: ["H2"] }
    ],
    assignments: {
      domes: {
        start: "DPS8",
        teleport: ["DPS1 (Exit L)", "DPS2 (Exit R)", "DPS3 (Entrance R)", "DPS4 (Entrance L)"],
        bashBackup: ["DPS5 (Exit L)", "DPS6 (Exit R)", "DPS7 (Entrance R)", "DPS8 (Entrance L)"],
        executeLarge: ["DPS6", "DPS7"],
        executeSmall: ["H2 (first)", "DPS8"]
      },
      sides: {
        bigSide: ["OT", "All DDs + H1"],
        smallSide: ["MT", "H2", "DPS8 (after swap)"]
      },
      healerFocus: { "H1": "OT", "H2": "MT" },
      slayer: { left: "DPS4", right: "H1" },
      weaponSlayers: ["DPS8"]
    }
  },
  {
    id: "sailripper-bowbreaker",
    name: "Sail Ripper & Bow Breaker + Trash Pulls",
    shortName: "Minis",
    icon: "🐦🐢",
    strategy: {
      summary: "Two mini-bosses with no hardmode. Sail Ripper has lethal harpy heavy attacks. Bow Breaker is a Coral Haj Mota with frontal cleave. Don't ult on Bow Breaker — save for Reef Guardians.",
      details: [
        "For trash pulls before Sail Ripper/Bow Breaker, H1 and OT are officially solo-heal and solo-tank as H2 and MT are away at levers",
        "People not responsible for levers wait at exit as soon as trash is dead.",
        "Lever pullers run to levers or wait for trash (at discretion). For last lever set before boss, hotkey gear swap via Wizard's Wardrobe.",
        "Don't ult on Bow Breaker — save for Reef Guardians immediately after.",
        "OT takes boss and first adds since other tank may be late from levers.",
        "MT takes small adds and stacks on boss once pulled into group.",
      ]
    },
    builds: {
      "DPS1": { sets: ["Null", "Deadly/Tideborn", "Velothi"], ult: "Standard", notes: "Banner DD." },
      "DPS2": { sets: ["Alkosh", "Deadly/Tideborn", "Velothi"], ult: "Colo", notes: "Alkosh DD." },
      "DPS3": { sets: ["Null", "Deadly/Tideborn", "Velothi"], ult: "Standard", notes: "Lever duty (2 levers)." },
      "DPS4": { sets: ["Null", "Deadly/Tideborn", "Velothi"], ult: "Standard", notes: "" },
      "DPS5": { sets: ["Null", "Deadly/Tideborn", "Velothi"], ult: "Standard", notes: "Banner DD." },
      "DPS6": { sets: ["Null", "Deadly/Tideborn", "Velothi"], ult: "Standard", notes: "" },
      "DPS7": { sets: ["Null", "Deadly/Tideborn", "Velothi"], ult: "Standard", notes: "Lever duty. Hotkey gear swaps." },
      "DPS8": { sets: ["Null", "Deadly/Tideborn", "Velothi"], ult: "Standard", notes: "" },
      "H1":   { sets: ["MA", "PP", "Naz"], ult: "Horn", misc: ["Weakening"], notes: "Naz extend." },
      "H2":   { sets: ["SPC", "PA", "PoE", "Oze"], ult: "Barrier", misc: ["Weakening"], notes: "Lever duty. Hotkey gear swaps." },
      "MT":   { sets: ["LE", "Xoryn", "Baron"], ult: "Atro only", notes: "Lever duty. Race Against Time as needed. Take small adds, stack on boss." },
      "OT":   { sets: ["PW", "Crimson", "Encratis"], ult: "Horn", notes: "Boss tank for both Sail Ripper and Bow Breaker. Solo-tank initially since MT may be late from levers. Take boss and first adds." }
    },
    buffsDebuffs: [
      { name: "Alkosh", owners: ["DPS2"] },
      { name: "Crimson Oath", owners: ["OT"] },
      { name: "Crusher", owners: ["MT", "OT"] },
      { name: "Encratis", owners: ["OT"] },
      { name: "Horn", owners: ["H1", "OT"] },
      { name: "LE", owners: ["MT"] },
      { name: "Major Breach", owners: ["MT", "OT"] },
      { name: "Major Resolve", owners: ["MT"] },
      { name: "Minor Breach", owners: ["OT"] },
      { name: "Minor Brittle", owners: ["OT"] },
      { name: "Minor Brutality", owners: ["OT"] },
      { name: "Minor Vulnerability", owners: ["OT"] },
      { name: "Major Vulnerability", owners: ["DPS2"] },
      { name: "Naz", owners: ["H1"] },
      { name: "Off Balance", owners: ["H1", "H2"] },
      { name: "PA", owners: ["H2"] },
      { name: "PP", owners: ["H1"] },
      { name: "PW", owners: ["OT"] },
      { name: "Slayer", owners: ["H1"] },
      { name: "SPC", owners: ["H2"] },
      { name: "Weakening", owners: ["H1", "H2"] },
      { name: "Xoryn", owners: ["MT"] }
    ],
    assignments: {
      levers: "See Lever Assignments section"
    }
  },
  {
    id: "reef",
    name: "Reef Guardian",
    shortName: "Reef",
    icon: "🪸",
    strategy: {
      summary: "Multi-phase fight with coral constructs that replicate into smaller copies. Large splits at 99% and 80%, Medium splits at 80%. Reef Hearts must be destroyed in portals or the guardian enrages and wipes the group.",
      details: [
        "Before fight: All DDs except Reef Group 1 and DPS8 go downstairs to Chalice.",
        "Reef Guardians never lose taunt — they always follow the last person who taunted them.",
        "Both Mediums + Small #1 should be out by end of Chalice. Small #2 spawns near Crossbones→Skull transition.",
        "Every time a reef clears, a bear, a cat, and a mage spawns. MT should grab all of them. If he struggles, H2 can take mage for Chalice, Crossbones, and Skull."
      ],
      phases: [
        {
          name: "Chalice (Start)",
          details: [
            "Everyone hold ult.",
            "MT taunts Large Guardian. OT taunts Medium #1 when Large splits at 99%. OT ults whenever.",
            "Downstairs DDs kill heart at Chalice and come up.",
            "Upstairs DDs burn Medium #1 and any Smalls that spawn.",
            "MT takes bear, mage, and cats when Chalice clears. The large guardian will not need re-taunt",
            "Slayer ult: DDs + MT → H1 Naz → H2 PP."
          ]
        },
        {
          name: "Crossbones",
          details: [
            "MT takes Large Guardian (no re-taunt needed) and puts it on left side of the reef.",
            "OT stacks all Small and Medium on right side.",
            "Upstairs DDs parse Large Guardian on left side ONLY. Right side does NOT get burned to avoid pushing reef spawns. No ults.",
            "When Crossbones heart is at 40%: Reef Group 1 informs group. OT takes Large Guardian into right stack. Upstairs DDs lay DoTs on right side.",
            "When Crossbones heart clears: DPS8 comes up. MT takes mage, bear, and cat. Reef Group 1 proceeds to Skull.",
            "Ult dump when mage is into group: DDs and MT ult → H1 Naz → H2 PP."
          ]
        },
        {
          name: "General Pattern (After Crossbones)",
          details: [
            "Upstairs DD stays at a reef until its mage spawns and is killed (removes need for OOT), then goes clockwise to next reef.",
            "OT stacks reef guardians on right side of a reef. Ults whenever.",
            "MT watches for adds whenever a reef clears. Grab bears, mage, and cats immediately. Rubberbands mage into group.",
            "H1 focuses group and MT. H2 pocket heals OT.",
            "Slayer and PP called by MT and H2. Timing: when enemies are stacked, not while running.",
            "Criteria to move to next reef: (1) 2 active channels in reefs after current one, OR (2) mage of current reef is dead. OT and RL decide.",
            "The idea: Each Reef Group does 2 hearts in sequence instead of 1."
          ]
        },
        {
          name: "Backward Reefs",
          details: [
            "If a boss goes counter-clockwise to channel (e.g. Crossbones→Crown), it's a 'backwards' reef.",
            "Reef backup DDs go down immediately to kill the heart.",
            "MT must watch for mage and animals spawned far away after a backwards reef clears."
          ]
        }
      ]
    },
    builds: {
      "DPS1": { sets: ["Kazpian/Whorl/Ansuul", "Tideborn"], misc: ["Major Breach"], ult: "Standard", notes: "Reef Group 1. Bring Major Breach. Start upstairs." },
      "DPS2": { sets: ["Alkosh", "Deadly/Tideborn/Nerien'eth"], ult: "Colo", notes: "Alkosh DD. Start at Chalice. Permanent upstairs after." },
      "DPS3": { sets: ["Kazpian/Whorl/Ansuul", "Deadly/Tideborn/Nerien'eth"], ult: "Standard", notes: "Reef backup (first). Start at Chalice." },
      "DPS4": { sets: ["Kazpian/Whorl/Ansuul", "Tideborn"], ult: "Standard", notes: "Reef Group 1. Start upstairs." },
      "DPS5": { sets: ["Kazpian/Whorl/Ansuul", "Deadly/Tideborn/Nerien'eth"], ult: "Standard", notes: "Reef backup (second). Start at Chalice." },
      "DPS6": { sets: ["Kazpian/Whorl/Ansuul", "Tideborn"], misc: ["Major Breach", "Hurricane"], ult: "Standard", notes: "Reef Group 2. Bring Major Breach. Start at Chalice." },
      "DPS7": { sets: ["Kazpian/Whorl/Ansuul", "Tideborn"], misc: ["Hurricane"], ult: "Standard", notes: "Reef Group 2. Start at Chalice." },
      "DPS8": { sets: ["Kazpian/Whorl/Ansuul", "Deadly/Tideborn/Nerien'eth"], ult: "Standard", notes: "Start upstairs. Do first Crossbones. Can slot self-heal for portal." },
      "H1":   { sets: ["SPC", "PA", "PoE", "Naz"], ult: "Horn", misc: ["Crusher"], notes: "Heal group and MT. Naz extend Colo." },
      "H2":   { sets: ["MA", "PP", "PoE"], ult: "Barrier", misc: ["Crusher"], notes: "Heal OT. PP + Slayer. Time PP after OT ult. Major + Minor Expedition on move. Rubberband mage into group if MT requests." },
      "MT":   { sets: ["LE", "WM", "Baron"], ult: "Atro only", notes: "Watch for bears/cats on every portal clear. Taunt Large Guardian. Rubberband mages into group. Frost Cloak at reef clears and acid reflux. Left Slayer with 3s countdown." },
      "OT":   { sets: ["PW", "Flex", "Baron/Encratis/Selfish"], ult: "Selfish ults", misc: ["Ele Sus"], notes: "Dictates group stack position. Stack on right side of reef. Race Against Time. Don't overstay — avoid backwards mediums/smalls." }
    },
    buffsDebuffs: [
      { name: "Alkosh", owners: ["DPS2"] },
      { name: "Barrier", owners: ["H2"] },
      { name: "Crusher", owners: ["H1", "H2", "MT", "OT"] },
      { name: "Expedition (Major + Minor)", owners: ["H2"] },
      { name: "Horn", owners: ["H1"] },
      { name: "LE", owners: ["MT"] },
      { name: "Major Breach", owners: ["MT", "OT"] },
      { name: "Major Breach (portals)", owners: ["DPS1", "DPS6"] },
      { name: "Major Resolve", owners: ["MT"] },
      { name: "Minor Breach", owners: ["MT", "OT"] },
      { name: "Minor Brittle", owners: ["OT"] },
      { name: "Minor Brutality", owners: ["OT"] },
      { name: "Minor Vulnerability", owners: ["OT"] },
      { name: "Major Vulnerability", owners: ["DPS2"] },
      { name: "Naz", owners: ["H1"] },
      { name: "Off Balance", owners: ["H1", "H2"] },
      { name: "PA", owners: ["H1"] },
      { name: "PP", owners: ["H2"] },
      { name: "PW", owners: ["OT"] },
      { name: "Slayer", owners: ["MT", "H2"] },
      { name: "SPC", owners: ["H1"] }
    ],
    assignments: {
      reefGroups: {
        group1: { players: ["DPS1 (Major Breach)", "DPS4"], reefs: ["2,3 (Crossbones/Skull)", "6,7 (Crown/Chalice)*", "10,11 (Anchor/Wheel)"] },
        group2: { players: ["DPS6 (Major Breach)", "DPS7"], reefs: ["4,5 (Anchor/Wheel)", "8,9 (Crossbones/Skull)", "12,13 (Crown/Chalice)"] },
        chaliceOnly: "DPS8",
        backupFirst: "DPS3",
        backupSecond: "DPS5"
      },
      healerFocus: { "H1": "MT + group", "H2": "OT" },
      slayer: { left: "MT", right: "H2" },
      note: "* Fight should end by the time Group 1 reaches Crown/Chalice."
    }
  },
  {
    id: "taleria",
    name: "Tideborn Taleria (Fleet Queen)",
    shortName: "Taleria",
    icon: "🌊",
    strategy: {
      summary: "Final boss. Heavy movement fight with Winter Storm walls, Rapid Deluge water-dip mechanic, Sea Behemoths, Sirens, and bridge portals with coloured dome debuffs. Group can skip last bridge with enough DPS.",
      details: [
        "Drop DoTs on Taleria as she spawns.",
        "Ult dump: DDs → OT (front) and H2 (back) proc Slayer + PP.",
        "H1 waits for Naz extend at Maelstrom when first Barrier runs out."
      ],
      phases: [
        {
          name: "While Not in Winter Storm",
          details: [
            "OT kites slam slightly out of stack — everyone get out of slam.",
            "Waves: If certain OT's wave is not on you, keep parsing. Otherwise, roll dodge.",
            "Maelstrom: Keep parsing until addon tells you to roll-dodge, then always roll-dodge.",
            "Matrons: If in range, DoT or beam matrons. Don't chase far ones."
          ]
        },
        {
          name: "Winter Storm",
          details: [
            "Group leads MT before Maelstrom (so MT doesn't move during Maelstrom). MT leads after Maelstrom (to get space).",
            "If Winter Storm spawns at MT's side, MT and group roll through each other so group leads.",
            "Maelstrom usually happens once at 4-5 clock units from origin. Stack tight. Ult-dump sequence usually happens at this Maelstrom.",
            "While running: Stay well ahead while parsing Taleria. H2 provides Major and Minor Expedition.",
            "Matrons: OT Ele Sus, DDs put DoTs and beam backwards from Taleria to kill."
          ]
        },
        {
          name: "First Bridge Spawns",
          details: [
            "Watch Maelstrom timer. If within 10 seconds: stay for Maelstrom first.",
            "Bridge DDs go to their bridge (roll dodge through MT if needed to avoid cleave).",
            "Group moves to dome next to bridge (coloured icon on map).",
            "Unless dome is very close, MT always leads group to dome destination to ensure everyone goes same direction and MT gets heals.",
            "Everyone but MT hold ults."
          ]
        },
        {
          name: "Green Dome (Resource Drain)",
          details: [
            "Drains resources and ult. Drop any ult ASAP.",
            "Watch resources (especially stamina). HA/potion/siphoning attacks for stam for RD/break free.",
            "Healers can forget PoE uptimes to play safe.",
            "Risk: Healers running out of mag and people dying to Siren lures."
          ]
        },
        {
          name: "Purple Dome (Heal Debuff)",
          details: [
            "Heal debuff active. Healers and MT be extra careful with health.",
            "Maelstrom + purple mage can be deadly. Healers may alternate Barriers on Maelstrom.",
            "Don't be near the purple mage."
          ]
        },
        {
          name: "Yellow Dome (Speed Debuff)",
          details: [
            "Speed debuff applied. If Deluge happens, go to edge a few seconds early."
          ]
        },
        {
          name: "Bridge Clears",
          details: [
            "OT gets mage and stacks on Taleria.",
            "After mage dies, group gets out of dome to clear debuff.",
            "If second bridge already spawned, use movement heuristic (Maelstrom timer, destination).",
            "If not yet spawned, MT moves over a bit to let group exit dome."
          ]
        },
        {
          name: "Execute (Skip Last Bridge)",
          details: [
            "Group should always skip last bridge unless doing Full Tour Achievement.",
            "Skipped bridges apply their debuff until Taleria dies — be mindful.",
            "Skipping 2 bridges (unlikely): Requires ~1.06M group DPS (avg 132.5K per DD). Group holds ult, stops FOO/DoTs at 41%, stops damage at 38%.",
            "OT takes mage out of group until group burns Taleria.",
            "Burn when: Bridge clears AND either Winter Storm or Maelstrom happens.",
            "Trick: Wait for Winter Storm before pushing Bridge 1 to extend time before next Winter Storm."
          ]
        }
      ]
    },
    builds: {
      "DPS1": { sets: ["Null", "Deadly/Tideborn/Nerien'eth", "Velothi"], ult: "Standard", notes: "Stay with group. DoT and cleave sirens." },
      "DPS2": { sets: ["Null", "Deadly/Tideborn/Nerien'eth", "Velothi"], ult: "Colo", notes: "No Alkosh on Taleria — use parse trial set. Keep Colo. Stay with group." },
      "DPS3": { sets: ["Null", "Deadly/Tideborn/Nerien'eth", "Velothi"], ult: "Standard", notes: "Bridge backup #1. Slot self-heal/shield for bridge. Bring extra pen." },
      "DPS4": { sets: ["Null", "Deadly/Tideborn/Nerien'eth", "Velothi"], ult: "Standard", notes: "Stay with group. DoT and cleave sirens." },
      "DPS5": { sets: ["Null", "Deadly/Tideborn/Nerien'eth", "Velothi"], ult: "Standard", notes: "Banner DD. 2nd bridge backup." },
      "DPS6": { sets: ["Null", "Tideborn", "Velothi"], ult: "Standard", misc: ["Major Breach", "Hurricane"], notes: "Bridge DD. Slot self-heal and/or shield. Bring extra pen." },
      "DPS7": { sets: ["Null", "Tideborn", "Velothi"], ult: "Standard", misc: ["Hurricane"], notes: "Bridge DD. Slot self-heal and/or shield. Bring extra pen." },
      "DPS8": { sets: ["Null", "Deadly/Tideborn/Nerien'eth", "Velothi"], ult: "Standard", notes: "Bridge backup. DoT and cleave sirens." },
      "H1":   { sets: ["SPC", "PA", "PoE", "Naz"], ult: "Barrier", misc: ["Weakening"], notes: "Seeds on MT. Naz extend Colo. Barrier without waiting for Colo if group in danger." },
      "H2":   { sets: ["MA", "PP", "PoE"], ult: "Barrier", misc: ["Weakening"], notes: "PP + Back Slayer. Focus healing OT (especially with Behemoth). Occasional HoT/synergy to MT. Major + Minor Expedition on move." },
      "MT":   { sets: ["LE", "Xoryn/EC", "Trem"], ult: "Selfish", notes: "Taunt Taleria, focus surviving. Be selfish. Go into group for Maelstrom as needed. Keep ~1.5 clock units from group. Frost Cloak at Maelstrom and end of bridge when mage spawns." },
      "OT":   { sets: ["PW", "WM", "Baron"], ult: "Horn", misc: ["Ele Sus"], notes: "Behemoth is #1 priority — perma-block while alive. Stack mage close to Taleria. Ele Sus and taunt in-range matrons. Break free from Siren lure before Behemoth kills you. Proc Slayer (front) and ultigen. Stagger only if no mages/behemoths." }
    },
    buffsDebuffs: [
      { name: "Barrier", owners: ["H1", "H2"] },
      { name: "Crusher", owners: ["MT", "OT"] },
      { name: "Expedition (Major + Minor)", owners: ["H2"] },
      { name: "Horn", owners: ["OT"] },
      { name: "LE", owners: ["MT"] },
      { name: "Major Breach", owners: ["MT", "OT"] },
      { name: "Major Resolve", owners: ["MT"] },
      { name: "Minor Breach", owners: ["MT", "OT"] },
      { name: "Major Vulnerability", owners: ["DPS2"] },
      { name: "Minor Vulnerability", owners: ["OT"] },
      { name: "Minor Brittle", owners: ["OT"] },
      { name: "Minor Brutality", owners: ["OT"] },
      { name: "Naz", owners: ["H1"] },
      { name: "Off Balance", owners: ["H1", "H2"] },
      { name: "PA", owners: ["H1"] },
      { name: "PP", owners: ["H2"] },
      { name: "PW", owners: ["OT"] },
      { name: "Slayer", owners: ["OT", "H2"] },
      { name: "SPC", owners: ["H1"] },
      { name: "Tremorscale", owners: ["MT"] },
      { name: "Weakening", owners: ["H1", "H2"] },
      { name: "Xoryn", owners: ["MT"] }
    ],
    assignments: {
      bridge: { primary: ["DPS6", "DPS7"], backup1: "DPS3", backup2: "DPS5" },
      healerFocus: { "H1": "MT (Budding Seeds)", "H2": "Group and OT" },
      slayer: { front: "OT", back: "H2" }
    }
  }
];

// Lever assignments
const LEVERS = {
  lightning: [
    { name: "Lightning 1", positions: [
      { pos: "Left", player: "DPS7" },
      { pos: "Middle", player: "H2" },
      { pos: "Right (Far)", player: "MT" }
    ]},
    { name: "Lightning 2", positions: [
      { pos: "Bridge 1", player: "MT" },
      { pos: "Bridge 2", player: "DPS7" },
      { pos: "Exit", player: "H2" }
    ]},
    { name: "Lightning 3", positions: [
      { pos: "Parkour", player: "DPS7" },
      { pos: "Exit", player: "H2" },
      { pos: "Left", player: "MT" }
    ]}
  ],
  poison: [
    { name: "Poison 1", positions: [
      { pos: "Exit Left", player: "MT" },
      { pos: "Exit Right", player: "H2" },
      { pos: "Upstairs", player: "DPS7" }
    ]},
    { name: "Poison 2", positions: [
      { pos: "Middle", player: "MT" },
      { pos: "Entrance", player: "DPS7" },
      { pos: "Exit", player: "H2" }
    ]},
    { name: "Poison 3", positions: [
      { pos: "Left", player: "MT" },
      { pos: "Right of Entrance (Go immediately and wait)", player: "DPS7" },
      { pos: "Near", player: "H2" }
    ]}
  ]
};

// Reference links
const REFERENCES = {
  mechanics: {
    twins: "https://eso-hub.com/en/guides/Dreadsail-Reef-Guide/boss-1-lylanar-and-turlassil",
    reef: "https://eso-hub.com/en/guides/Dreadsail-Reef-Guide/boss-2-reef-guardian",
    taleria: "https://eso-hub.com/en/guides/Dreadsail-Reef-Guide/boss-3-tideborn-taleria"
  },
  videos: {
    twinsTank: "https://www.youtube.com/watch?v=_ddTILnrdsA",
    reefMT: "https://www.youtube.com/watch?v=p-YbtJA8adI",
    taleriaOT: "https://www.youtube.com/watch?v=bgCIFR6nZlE",
    scrappyClear: "https://youtu.be/s1ZKiFv2nAI?si=-Y27YcdUnjZ9D4d0&t=503",
    cleanerClear: "https://youtu.be/abAHDRMez-M?si=QHejHmbJ4Sul9gP2",
    trifectaClear: "https://www.youtube.com/watch?v=gU51IBg2kac&t=7336s"
  },
  penCrit: {
    trash: "https://cbanker721.github.io/ESOCalculator/?modifiers=eyJJTkZVU0VEX0NSVVNIRVIiOmZhbHNlLCJNT0RJRklFUl9SVU5JQ19TVU5ERVIiOmZhbHNlLCJNT0RJRklFUl9DUllTVEFMX1dFQVBPTiI6ZmFsc2UsIlNFVF9DUklNU09OX09BVEgiOmZhbHNlLCJTRVRfVFJFTU9SU0NBTEUiOmZhbHNlLCJTS0lMTF9DT05DRU5UUkFUSU9OIjowLCJTRVRfU1BSSUdHQU4iOmZhbHNlLCJTRVRfU0hBVFRFUkVEX0ZBVEUiOmZhbHNlLCJTRVRfUEVSU09OQUxfUEVOX1NFVCI6MCwiU0tJTExfSEVBVllfV0VBUE9OU19NQUNFIjpmYWxzZSwiTU9ESUZJRVJfTUFKT1JfRk9SQ0UiOmZhbHNlLCJNT0RJRklFUl9NQUpPUl9CUklUVExFIjpmYWxzZSwiTU9ESUZJRVJfTUlOT1JfQlJJVFRMRSI6ZmFsc2UsIlNFVF9FTEVNRU5UQUxfQ0FUQUxZU1QiOmZhbHNlLCJTRVRfU1VMX1hBTiI6ZmFsc2UsIlNFVF9NT1JBU19TQ1JJQkVfVEhFU0lTIjpmYWxzZSwiQ1BfQkFDS1NUQUJCRVIiOmZhbHNlLCJTS0lMTF9IRUFWWV9XRUFQT05TX0FYRSI6ZmFsc2V9",
    twins: "https://cbanker721.github.io/ESOCalculator/?modifiers=eyJNT0RJRklFUl9SVU5JQ19TVU5ERVIiOmZhbHNlLCJNT0RJRklFUl9DUllTVEFMX1dFQVBPTiI6ZmFsc2UsIlNFVF9DUklNU09OX09BVEgiOmZhbHNlLCJTRVRfVFJFTU9SU0NBTEUiOmZhbHNlLCJTS0lMTF9DT05DRU5UUkFUSU9OIjowLCJTRVRfU1BSSUdHQU4iOmZhbHNlLCJTRVRfU0hBVFRFUkVEX0ZBVEUiOmZhbHNlLCJTRVRfUEVSU09OQUxfUEVOX1NFVCI6MCwiU0tJTExfSEVBVllfV0VBUE9OU19NQUNFIjpmYWxzZSwiTU9ESUZJRVJfTUFKT1JfRk9SQ0UiOmZhbHNlLCJNT0RJRklFUl9NQUpPUl9CUklUVExFIjpmYWxzZSwiU0VUX0VMRU1FTlRBTF9DQVRBTFlTVCI6ZmFsc2UsIlNFVF9TVUxfWEFOIjpmYWxzZSwiU0VUX01PUkFTX1NDUklCRV9USEVTSVMiOmZhbHNlLCJDUF9CQUNLU1RBQkJFUiI6ZmFsc2UsIlNLSUxMX0hFQVZZX1dFQVBPTlNfQVhFIjpmYWxzZX0%3D",
    reef: "https://cbanker721.github.io/ESOCalculator/?modifiers=eyJJTkZVU0VEX0NSVVNIRVIiOmZhbHNlLCJNT0RJRklFUl9SVU5JQ19TVU5ERVIiOmZhbHNlLCJNT0RJRklFUl9DUllTVEFMX1dFQVBPTiI6ZmFsc2UsIlNFVF9DUklNU09OX09BVEgiOmZhbHNlLCJTRVRfVFJFTU9SU0NBTEUiOmZhbHNlLCJTS0lMTF9DT05DRU5UUkFUSU9OIjowLCJTRVRfU1BSSUdHQU4iOmZhbHNlLCJTRVRfU0hBVFRFUkVEX0ZBVEUiOmZhbHNlLCJTRVRfUEVSU09OQUxfUEVOX1NFVCI6MCwiU0tJTExfSEVBVllfV0VBUE9OU19NQUNFIjpmYWxzZSwiTU9ESUZJRVJfTUFKT1JfRk9SQ0UiOmZhbHNlLCJNT0RJRklFUl9NQUpPUl9CUklUVExFIjpmYWxzZSwiU0VUX0VMRU1FTlRBTF9DQVRBTFlTVCI6ZmFsc2UsIlNFVF9TVUxfWEFOIjpmYWxzZSwiU0VUX01PUkFTX1NDUklCRV9USEVTSVMiOmZhbHNlLCJDUF9CQUNLU1RBQkJFUiI6ZmFsc2UsIlNLSUxMX0hFQVZZX1dFQVBPTlNfQVhFIjpmYWxzZX0%3D",
    taleria: "https://cbanker721.github.io/ESOCalculator/?modifiers=eyJNT0RJRklFUl9SVU5JQ19TVU5ERVIiOmZhbHNlLCJNT0RJRklFUl9DUllTVEFMX1dFQVBPTiI6ZmFsc2UsIlNFVF9BTEtPU0giOmZhbHNlLCJTRVRfQ1JJTVNPTl9PQVRIIjpmYWxzZSwiU0VUX1RSRU1PUlNDQUxFIjp0cnVlLCJTS0lMTF9DT05DRU5UUkFUSU9OIjowLCJTRVRfU1BSSUdHQU4iOmZhbHNlLCJTRVRfU0hBVFRFUkVEX0ZBVEUiOmZhbHNlLCJTRVRfUEVSU09OQUxfUEVOX1NFVCI6MCwiU0tJTExfSEVBVllfV0VBUE9OU19NQUNFIjpmYWxzZSwiTU9ESUZJRVJfTUFKT1JfRk9SQ0UiOmZhbHNlLCJNT0RJRklFUl9NQUpPUl9CUklUVExFIjpmYWxzZSwiU0VUX0VMRU1FTlRBTF9DQVRBTFlTVCI6ZmFsc2UsIlNFVF9TVUxfWEFOIjpmYWxzZSwiU0VUX01PUkFTX1NDUklCRV9USEVTSVMiOmZhbHNlLCJDUF9CQUNLU1RBQkJFUiI6ZmFsc2UsIlNLSUxMX0hFQVZZX1dFQVBPTlNfQVhFIjpmYWxzZX0%3D"
  },
  builds: {
    hyperBeam: "https://hyperioxes.com/eso/dps/beam-builds"
  }
};

// General DPS build guidance
const DPS_GUIDANCE = {
  subclass: "Herald/Ardent/X. Bridge DDs go Storm Calling. Non-Portal DDs go Assassination or Spear. Other Portal DDs go either Storm or Assassination. See <a href=\"https://hyperioxes.com/eso/dps/beam-builds\" target=\"_blank\">Hyperioxes's guide</a> for more U48 beam subclass builds.",
  bannerDDs: "Shocking/Cavalier/Courage banner.",
  beamDDs: "The beam morph to use is Pragmatic Fatecarver.",
  alkoshDPS: "Colo-only for ult. Gravelord for 3rd subclass. Alkosh for all fights except Taleria (use parse trial set + Colo)."
};

const HEALER_GUIDANCE = {
  H1: { subclass: "GB/(RL or Curative)/Flex", groupSkill: "Altar" },
  H2: { subclass: "Shadow/(RL)/Flex", groupSkills: "Refreshing Path, Radiant Aura, Warding Burst (Minor Expedition). Provide Minor and Major Expedition on all fights. Barriers only." }
};

const TANK_GUIDANCE = {
  MT: { subclass: "Winter/Daedric/X", buff: "Frost Cloak (Major Resolve)" },
  OT: { subclass: "Earthen Heart/SoA/X", buff: "Colourless (Minor Brittle), Elemental Susceptibility, Igneous Weapons (Minor Brutality, Major Sorcery/Brutality)" }
};
