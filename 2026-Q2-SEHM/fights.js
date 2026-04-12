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
      [MAIN_ROLE_ID.DPS1]: { sets: ["Velothi", "Ansuul/Sul-Xan/Kazpian", "Deadly/Tideborn/Nerien'eth"], ult: "Languid (Front), Destro (Back)", misc: ["Banner"], notes: "" },
      [MAIN_ROLE_ID.DPS2]: { sets: ["Velothi", "Ansuul/Sul-Xan/Kazpian", "Deadly/Tideborn/Nerien'eth"], ult: "Languid (Front), Destro (Back)", notes: "" },
      [MAIN_ROLE_ID.DPS3]: { sets: ["Velothi", "Ansuul/Sul-Xan/Kazpian", "Deadly/Tideborn/Nerien'eth"], ult: "Languid (Front), Destro (Back)", notes: "" },
      [MAIN_ROLE_ID.DPS4]: { sets: ["Velothi", "Ansuul/Sul-Xan/Kazpian", "Deadly/Tideborn/Nerien'eth"], ult: "Languid (Front), Destro (Back)", notes: "" },
      [MAIN_ROLE_ID.DPS5]: { sets: ["Velothi", "Ansuul/Sul-Xan/Kazpian", "Deadly/Tideborn/Nerien'eth"], ult: "Languid (Front), Destro (Back)", misc: ["Banner"], notes: "" },
      [MAIN_ROLE_ID.DPS6]: { sets: ["Velothi", "Ansuul/Sul-Xan/Kazpian", "Deadly/Tideborn/Nerien'eth"], ult: "Languid (Front), Destro (Back)", notes: "" },
      [MAIN_ROLE_ID.DPS7]: { sets: ["Velothi", "Ansuul/Sul-Xan/Kazpian", "Deadly/Tideborn/Nerien'eth"], ult: "Languid (Front), Destro (Back)", notes: "Shattering Knife (Multi-Target/OB)" },
      [MAIN_ROLE_ID.DPS8]: { sets: ["Velothi", "Ansuul/Sul-Xan/Kazpian", "Deadly/Tideborn"], ult: "Languid (Front), Destro (Back)", notes: "" },
      [MAIN_ROLE_ID.H1]:   { sets: ["SPC", "PA", "PoE", "Oze"], ult: "None", misc: ["Crusher"], notes: "" },
      [MAIN_ROLE_ID.H2]:   { sets: ["RO", "JO", "AD"], ult: "None", misc: ["Crusher"], notes: "" },
      [MAIN_ROLE_ID.MT]:   { sets: ["LE", "Xoryn", "Flex"], ult: "Atro", notes: "" },
      [MAIN_ROLE_ID.OT]:   { sets: ["PW", "Crimson", "Flex"], ult: "Horn", notes: "Leads add-pulls because of Crimson" }
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
      summary: "",
      details: [],
      phases: [
        // TODO: Fill in phase-by-phase strategy
      ]
    },
    builds: {
      [MAIN_ROLE_ID.DPS1]: { sets: ["Velothi", "Null", "Deadly/Tideborn/Nerien'eth"], ult: "Languid or Standard", misc: ["Banner"], notes: "" },
      [MAIN_ROLE_ID.DPS2]: { sets: ["Velothi", "Alkosh", "Deadly/Tideborn/Nerien'eth"], ult: "Languid or Standard", notes: "" },
      [MAIN_ROLE_ID.DPS3]: { sets: ["Velothi", "Null", "Deadly/Tideborn/Nerien'eth"], ult: "Languid or Standard", notes: "" },
      [MAIN_ROLE_ID.DPS4]: { sets: ["Velothi", "Null", "Deadly/Tideborn/Nerien'eth"], ult: "Languid or Standard", notes: "" },
      [MAIN_ROLE_ID.DPS5]: { sets: ["Velothi", "Null", "Deadly/Tideborn/Nerien'eth"], ult: "Languid or Standard", misc: ["Banner"], notes: "" },
      [MAIN_ROLE_ID.DPS6]: { sets: ["Velothi", "Null", "Deadly/Tideborn/Nerien'eth"], ult: "Languid or Standard", notes: "" },
      [MAIN_ROLE_ID.DPS7]: { sets: ["Velothi", "Null", "Deadly/Tideborn/Nerien'eth"], ult: "Languid or Standard", notes: "" },
      [MAIN_ROLE_ID.DPS8]: { sets: ["Velothi", "Null", "Z'en"], ult: "Colo", notes: "" },
      [MAIN_ROLE_ID.H1]:   { sets: ["SPC", "PP", "PoE", "Sym"], ult: "Glyph", misc: ["Weakning", "Altar"], notes: "" },
      [MAIN_ROLE_ID.H2]:   { sets: ["MA", "PA", "PoE", "Oze"], ult: "Barrier", misc: ["Weakening"], notes: "" },
      [MAIN_ROLE_ID.MT]:   { sets: ["LE", "Xoryn", "Naz"], ult: "Atro", notes: "Yas tank" },
      [MAIN_ROLE_ID.OT]:   { sets: ["PW", "WM", "Baron"], ult: "Horn", notes: "Wamasu tank" }
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
      summary: "",
      details: [],
      phases: [
        // TODO: Fill in phase-by-phase strategy
      ]
    },
    builds: {
      [MAIN_ROLE_ID.DPS1]: { sets: ["Velothi", "Null", "Deadly/Tideborn/Nerien'eth"], ult: "Languid or Standard", misc: ["Banner", "Echoing Vigour"], notes: "" },
      [MAIN_ROLE_ID.DPS2]: { sets: ["Velothi", "Alkosh", "Deadly/Tideborn/Nerien'eth"], ult: "Languid or Standard", misc: ["Echoing Vigour"] },
      [MAIN_ROLE_ID.DPS3]: { sets: ["Velothi", "Null", "Deadly/Tideborn/Nerien'eth"], ult: "Languid or Standard", misc: ["Echoing Vigour"] },
      [MAIN_ROLE_ID.DPS4]: { sets: ["Velothi", "Null", "Deadly/Tideborn/Nerien'eth"], ult: "Languid or Standard", misc: ["Echoing Vigour"] },
      [MAIN_ROLE_ID.DPS5]: { sets: ["Velothi", "Null", "Deadly/Tideborn/Nerien'eth"], ult: "Languid or Standard", misc: ["Banner", "Echoing Vigour"], notes: "" },
      [MAIN_ROLE_ID.DPS6]: { sets: ["Velothi", "Null", "Deadly/Tideborn/Nerien'eth"], ult: "Languid or Standard", misc: ["Echoing Vigour"] },
      [MAIN_ROLE_ID.DPS7]: { sets: ["Velothi", "Null", "Deadly/Tideborn/Nerien'eth"], ult: "Languid or Standard", misc: ["Echoing Vigour"] },
      [MAIN_ROLE_ID.DPS8]: { sets: ["Velothi", "Null", "Z'en"], ult: "Colo", notes: "", misc: ["Echoing Vigour"] },
      [MAIN_ROLE_ID.H1]:   { sets: ["SPC", "PP", "PoE", "Sym"], ult: "Glyph", misc: ["Weakning", "Altar"], notes: "" },
      [MAIN_ROLE_ID.H2]:   { sets: ["MA", "PA", "PoE", "Oze"], ult: "Standard of Might", misc: ["Weakening"], notes: "" },
      [MAIN_ROLE_ID.MT]:   { sets: ["LE", "Xoryn", "Naz"], ult: "Atro", notes: "Tank boss" },
      [MAIN_ROLE_ID.OT]:   { sets: ["PW", "WM", "Baron"], ult: "Horn", notes: "Kites circles, takes animals" },
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
      [MAIN_ROLE_ID.DPS1]: { sets: ["Velothi", "Ansuul/Kazpian", "Deadly/Tideborn/Nerien'eth"], ult: "Languid or Standard", misc: ["Banner"], notes: "" },
      [MAIN_ROLE_ID.DPS2]: { sets: ["Velothi", "Alkosh", "Deadly/Tideborn/Nerien'eth"], ult: "Languid or Standard", notes: "" },
      [MAIN_ROLE_ID.DPS3]: { sets: ["Velothi", "Ansuul/Kazpian", "Deadly/Tideborn/Nerien'eth"], ult: "Languid or Standard", notes: "" },
      [MAIN_ROLE_ID.DPS4]: { sets: ["Velothi", "Ansuul/Kazpian", "Deadly/Tideborn/Nerien'eth"], ult: "Languid or Standard", notes: "" },
      [MAIN_ROLE_ID.DPS5]: { sets: ["Velothi", "Ansuul/Kazpian", "Deadly/Tideborn/Nerien'eth"], ult: "Languid or Standard", misc: ["Banner"], notes: "" },
      [MAIN_ROLE_ID.DPS6]: { sets: ["Velothi", "Ansuul/Kazpian", "Deadly/Tideborn/Nerien'eth"], ult: "Languid or Standard", notes: "" },
      [MAIN_ROLE_ID.DPS7]: { sets: ["Velothi", "Ansuul/Kazpian", "Deadly/Tideborn/Nerien'eth"], ult: "Languid or Standard", notes: "" },
      [MAIN_ROLE_ID.DPS8]: { sets: ["EC", "Z'en", "Sym"], ult: "Colo", misc: ["Altar"], notes: "Third healer, interrupt" },
      [MAIN_ROLE_ID.H1]:   { sets: ["SPC", "PP", "PoE", "Blind"], ult: "Glyph", misc: ["Weakning"], notes: "" },
      [MAIN_ROLE_ID.H2]:   { sets: ["MA", "PA", "PoE", "Oze"], ult: "Standard of Might", misc: ["Weakening"], notes: "" },
      [MAIN_ROLE_ID.MT]:   { sets: ["LE", "Xoryn", "Naz"], ult: "Atro", notes: "" },
      [MAIN_ROLE_ID.OT]:   { sets: ["PW", "WM", "Baron"], ult: "Horn", notes: "Interrupt" },
    },
    buffsDebuffs: [],
    assignments: []
  }]
]);
