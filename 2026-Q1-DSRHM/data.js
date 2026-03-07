// ============================================================
// DSR HM Progression — Structured Data
// ============================================================

// Notable skills/modifiers per role (shown on build cards)
const PLAYER_SKILLS = {
  [MAIN_ROLE_ID.MT]:  [
    { skill: "Crusher", note: "Enchants" },
    { skill: "Frost Cloak", note: "Major Resolve" }
  ],
  [MAIN_ROLE_ID.OT]:  [
    { skill: "Crusher", note: "Enchants" },
    { skill: "Colourless", note: "Minor Brittle" },
    { skill: "Igneous Weapons", note: "Minor Brutality, Major Sorcery/Brutality" },
  ],
  [MAIN_ROLE_ID.H1]:  [
    { skill: "Altar", note: "Undaunted" },
    { skill: "Off Balance", note: "Lightning Staff" },
    { skill: "From the Brink", note: "CP" },
  ],
  [MAIN_ROLE_ID.H2]:  [
    { skill: "Radiant Aura", note: "" },
    { skill: "Warding Burst", note: "Minor Expedition" },
    { skill: "Off Balance", note: "Lightning Staff" },
    { skill: "Enlivening", note: "CP" },
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
  subclass: "Herald/Ardent/X. Bridge DDs go Storm Calling. Non-Portal DDs go Assassination or Spear. Other Portal DDs go either Storm or Assassination. See <a href=\"https://hyperioxes.com/eso/dps/beam-builds\" target=\"_blank\">Hyperioxes</a> for more U48 beam subclass builds.",
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
