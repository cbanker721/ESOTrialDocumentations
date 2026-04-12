// ============================================================
// SE HM Progression — Fight Definitions
// ============================================================

const FIGHT_ID = Object.freeze({
  TRASH: 'se-trash',
  YASEYLA: 'yaseyla',
  TWELVANE: 'twelvane',
  ANSUUL: 'ansuul',
});

const FIGHTS = new Map([
  [FIGHT_ID.TRASH, {
    id: FIGHT_ID.TRASH,
    name: "Trash Pulls",
    shortName: "Trash",
    icon: "⚔️",
    strategy: {
      summary: "Clear trash packs between bosses. Includes Disruptors, Voidmasters, Summoners, Butchers, and Enforcers.",
      details: []
    },
    builds: {
      // TODO: Fill in per-player builds
    },
    buffsDebuffs: [
      // TODO: Fill in buff/debuff assignments
    ],
    assignments: []
  }],
  [FIGHT_ID.YASEYLA, {
    id: FIGHT_ID.YASEYLA,
    name: "Exarchanic Yaseyla",
    shortName: "Yaseyla",
    icon: "👁️",
    strategy: {
      summary: "Boss 1. Horror adds must be killed using Vanton's Clarity. HM increases Horror spawn difficulty and boss damage.",
      details: [],
      phases: [
        // TODO: Fill in phase-by-phase strategy
      ]
    },
    builds: {
      // TODO: Fill in per-player builds
    },
    buffsDebuffs: [],
    assignments: []
  }],
  [FIGHT_ID.TWELVANE, {
    id: FIGHT_ID.TWELVANE,
    name: "Archwizard Twelvane",
    shortName: "Twelvane",
    icon: "🔮",
    strategy: {
      summary: "Boss 2. Crystal control sequences and Chimera add. HM adds more complex crystal patterns and tighter DPS checks.",
      details: [],
      phases: [
        // TODO: Fill in phase-by-phase strategy
      ]
    },
    builds: {
      // TODO: Fill in per-player builds
    },
    buffsDebuffs: [],
    assignments: []
  }],
  [FIGHT_ID.ANSUUL, {
    id: FIGHT_ID.ANSUUL,
    name: "Ansuul the Tormentor",
    shortName: "Ansuul",
    icon: "🧠",
    strategy: {
      summary: "Final boss. Torment portals, maze mechanic, multi-phase fight. HM tightens timers and adds mechanics to Torment phases.",
      details: [],
      phases: [
        // TODO: Fill in phase-by-phase strategy
      ]
    },
    builds: {
      // TODO: Fill in per-player builds
    },
    buffsDebuffs: [],
    assignments: []
  }]
]);
