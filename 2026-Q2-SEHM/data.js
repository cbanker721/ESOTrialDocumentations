// ============================================================
// SE HM Progression — Structured Data
// ============================================================

// Notable skills/modifiers per role (shown on build cards)
// TODO: Fill in once builds are finalized
const PLAYER_SKILLS = {
  [MAIN_ROLE_ID.MT]:  [
    { skill: "Crusher", note: "Enchants" },
    { skill: "Frost Cloak", note: "Major Resolve" }
  ],
  [MAIN_ROLE_ID.OT]:  [
    { skill: "Crusher", note: "Enchants" },
    { skill: "Colourless", note: "Minor Brittle" },
  ],
  [MAIN_ROLE_ID.H1]:  [
    { skill: "Off Balance", note: "Lightning Staff" },
    { skill: "From the Brink", note: "CP" },
  ],
  [MAIN_ROLE_ID.H2]:  [
    { skill: "Off Balance", note: "Lightning Staff" },
    { skill: "Enlivening", note: "CP" },
  ],
  [MAIN_ROLE_ID.DPS3]:  [
    { skill: "Earthenheart", note: "Minor Brutality" },
  ],
};



// Reference links
const REFERENCES = {
  mechanics: {
  },
  videos: {
    // TODO: Add video guide links
  },
  penCrit: {
    // TODO: Add pen/crit calculator links per fight
  },
  builds: {
    // TODO: Add build reference links
  }
};

// General DPS build guidance
// TODO: Update for SE meta
const DPS_GUIDANCE = {
  subclass: "HoT and two of AF, EH, Ass, Storm",
  bannerDDs: "Shocking/Cavalier/Courage banner.",
  beamDDs: "The beam morph to use is Pragmatic Fatecarver.",
  coloDDs: "HoT/Grave/AF"
};

const HEALER_GUIDANCE = {
  H1: { subclass: "GB/Curative/X" },
  H2: { subclass: "RL/Ardent/X", groupSkills: "Radiant, Firekeeper, Enlivening" }
};

const TANK_GUIDANCE = {
  MT: { subclass: "Winter/Daedric/X", buff: "Frost Cloak (Major Resolve)" },
  OT: { subclass: "Draconic/SoA/X", buff: "Colourless (Minor Brittle), Elemental Susceptibility, Protect the Brood" }
};
