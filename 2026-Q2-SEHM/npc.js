// ============================================================
// SE HM Progression — NPC Definitions
// ============================================================

const NPC_ID = Object.freeze({
  SE_TRASH_DISRUPTOR: 'npc-se-trash-disruptor-1a2b',
  SE_TRASH_VOIDMASTER: 'npc-se-trash-voidmaster-3c4d',
  SE_TRASH_SUMMONER: 'npc-se-trash-summoner-5e6f',
  SE_TRASH_BUTCHER: 'npc-se-trash-butcher-7a8b',
  SE_TRASH_ENFORCER: 'npc-se-trash-enforcer-9c0d',
  YASEYLA_BOSS: 'npc-yaseyla-boss-1e2f',
  YASEYLA_HORROR: 'npc-yaseyla-horror-3a4b',
  TWELVANE_BOSS: 'npc-twelvane-boss-5c6d',
  TWELVANE_CHIMERA: 'npc-twelvane-chimera-7e8f',
  ANSUUL_BOSS: 'npc-ansuul-boss-9a0b',
});

const NPC_DEFINITIONS = new Map([
  [NPC_ID.SE_TRASH_DISRUPTOR, { name: "Disruptor", icon: "⚡", color: "#ff6347" }],
  [NPC_ID.SE_TRASH_VOIDMASTER, { name: "Voidmaster", icon: "🌀", color: "#9370db" }],
  [NPC_ID.SE_TRASH_SUMMONER, { name: "Summoner", icon: "🧙", color: "#da70d6" }],
  [NPC_ID.SE_TRASH_BUTCHER, { name: "Butcher", icon: "🪓", color: "#dc143c" }],
  [NPC_ID.SE_TRASH_ENFORCER, { name: "Enforcer", icon: "🛡️", color: "#4682b4" }],
  [NPC_ID.YASEYLA_BOSS, { name: "Yaseyla", icon: "👁️", color: "#ff4500" }],
  [NPC_ID.YASEYLA_HORROR, { name: "Horror", icon: "👻", color: "#8b0000" }],
  [NPC_ID.TWELVANE_BOSS, { name: "Twelvane", icon: "🔮", color: "#7b68ee" }],
  [NPC_ID.TWELVANE_CHIMERA, { name: "Chimera", icon: "🐉", color: "#b8860b" }],
  [NPC_ID.ANSUUL_BOSS, { name: "Ansuul", icon: "🧠", color: "#bc8cff" }],
]);
