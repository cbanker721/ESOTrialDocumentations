// ============================================================
// SE HM Progression — Assignment Definitions
// ============================================================

const ASSIGNMENTS = new Map([
  // General Slayers
  [ASSIGNMENT_ID.SE_SLAYER_LEFT, {
    id: ASSIGNMENT_ID.SE_SLAYER_LEFT,
    name: "Left Slayer",
    role_ids: [MAIN_ROLE_ID.H2, MAIN_ROLE_ID.MT, MAIN_ROLE_ID.DPS1, MAIN_ROLE_ID.DPS2, MAIN_ROLE_ID.DPS3, MAIN_ROLE_ID.DPS4],
    fights: [FIGHT_ID.YASEYLA, FIGHT_ID.TWELVANE, FIGHT_ID.ANSUUL],
  }],
  [ASSIGNMENT_ID.SE_SLAYER_RIGHT, {
    id: ASSIGNMENT_ID.SE_SLAYER_RIGHT,
    name: "Right Slayer",
    role_ids: [MAIN_ROLE_ID.H2, MAIN_ROLE_ID.OT, MAIN_ROLE_ID.DPS5, MAIN_ROLE_ID.DPS6, MAIN_ROLE_ID.DPS7, MAIN_ROLE_ID.DPS8],
    fights: [FIGHT_ID.YASEYLA, FIGHT_ID.TWELVANE, FIGHT_ID.ANSUUL],
  }],
  [ASSIGNMENT_ID.SE_SLAYERS, {
    id: ASSIGNMENT_ID.SE_SLAYERS,
    name: "Slayer Stacks",
    assignment_ids: [ASSIGNMENT_ID.SE_SLAYER_LEFT, ASSIGNMENT_ID.SE_SLAYER_RIGHT]
  }],

  // Trash
  [ASSIGNMENT_ID.SE_TRASH_TANKS, {
    id: ASSIGNMENT_ID.SE_TRASH_TANKS,
    name: "Tanks",
    assignment_ids: [ASSIGNMENT_ID.SE_TRASH_MT, ASSIGNMENT_ID.SE_TRASH_OT]
  }],

  // Yaseyla (Boss 1)
  [ASSIGNMENT_ID.SE_YASEYLA_MT, {
    id: ASSIGNMENT_ID.SE_YASEYLA_MT,
    name: "Main Tank",
    role_ids: [MAIN_ROLE_ID.MT],
    fights: [FIGHT_ID.YASEYLA],
    instructions: "Main boss tank."
  }],
  [ASSIGNMENT_ID.SE_YASEYLA_OT, {
    id: ASSIGNMENT_ID.SE_YASEYLA_OT,
    name: "Wamasu Tank",
    role_ids: [MAIN_ROLE_ID.OT],
    fights: [FIGHT_ID.YASEYLA],
    instructions: "Handle Wamasu's, chain archers, and interrupt heavies."
  }],
  [ASSIGNMENT_ID.SE_YASEYLA_TANKS, {
    id: ASSIGNMENT_ID.SE_YASEYLA_TANKS,
    name: "Tanks",
    assignment_ids: [ASSIGNMENT_ID.SE_YASEYLA_MT, ASSIGNMENT_ID.SE_YASEYLA_OT]
  }],
  [ASSIGNMENT_ID.SE_YASEYLA_PORTALS, {
    id: ASSIGNMENT_ID.SE_YASEYLA_PORTALS,
    name: "Portals",
    assignment_ids: [ASSIGNMENT_ID.SE_YASEYLA_PORTAL_TEAM_1, ASSIGNMENT_ID.SE_YASEYLA_PORTAL_TEAM_2]
  }],
  [ASSIGNMENT_ID.SE_YASEYLA_PORTAL_TEAM_1, {
    id: ASSIGNMENT_ID.SE_YASEYLA_PORTAL_TEAM_1,
    name: "Portal Team 1",
    role_ids: [MAIN_ROLE_ID.DPS1, MAIN_ROLE_ID.DPS2, MAIN_ROLE_ID.DPS3, MAIN_ROLE_ID.DPS4],
    fights: [FIGHT_ID.YASEYLA],
    instructions: "Do first portal"
  }],
  [ASSIGNMENT_ID.SE_YASEYLA_PORTAL_TEAM_2, {
    id: ASSIGNMENT_ID.SE_YASEYLA_PORTAL_TEAM_2,
    name: "Portal Team 2",
    role_ids: [MAIN_ROLE_ID.DPS5, MAIN_ROLE_ID.DPS6, MAIN_ROLE_ID.DPS7, MAIN_ROLE_ID.DPS8],
    fights: [FIGHT_ID.YASEYLA],
    instructions: "Do second portal"
  }],


  // Twelvane / Chimera (Boss 2)
  [ASSIGNMENT_ID.SE_TWELVANE_MT, {
    id: ASSIGNMENT_ID.SE_TWELVANE_MT,
    name: "Main Tank",
    role_ids: [MAIN_ROLE_ID.MT],
    fights: [FIGHT_ID.TWELVANE],
    instructions: "Holds Twelvane and Chimera. During Chimera, healer will taunt Chimera on every 2nd chain lightning. Re-taunt as soon as chain lightning starts to cast."
  }],
  [ASSIGNMENT_ID.SE_TWELVANE_OT, {
    id: ASSIGNMENT_ID.SE_TWELVANE_OT,
    name: "Off Tank",
    role_ids: [MAIN_ROLE_ID.OT],
    fights: [FIGHT_ID.TWELVANE],
    instructions: "Kite lightning circles and manage animal manifestations away from the group."
  }],
  [ASSIGNMENT_ID.SE_TWELVANE_TANKS, {
    id: ASSIGNMENT_ID.SE_TWELVANE_TANKS,
    name: "Tanks",
    assignment_ids: [ASSIGNMENT_ID.SE_TWELVANE_MT, ASSIGNMENT_ID.SE_TWELVANE_OT]
  }],
  [ASSIGNMENT_ID.SE_TWELVANE_HEALER_TAUNT, {
    id: ASSIGNMENT_ID.SE_TWELVANE_HEALER_TAUNT,
    name: "Chimera Healer Taunt",
    role_ids: [MAIN_ROLE_ID.H1],
    fights: [FIGHT_ID.TWELVANE],
    instructions: "Taunt Chimera on every 2nd chain lightning."
  }],
  [ASSIGNMENT_ID.SE_TWELVANE_WAMASU_PORTAL, {
    id: ASSIGNMENT_ID.SE_TWELVANE_WAMASU_PORTAL,
    name: "Wamasu Portal",
    role_ids: [MAIN_ROLE_ID.MT, MAIN_ROLE_ID.DPS1, MAIN_ROLE_ID.DPS2, MAIN_ROLE_ID.DPS3],
    fights: [FIGHT_ID.TWELVANE],
    instructions: "Wamasu Portal."
  }],
  [ASSIGNMENT_ID.SE_TWELVANE_GRYPHON_PORTAL, {
    id: ASSIGNMENT_ID.SE_TWELVANE_GRYPHON_PORTAL,
    name: "Gryphon Portal",
    role_ids: [MAIN_ROLE_ID.H1, MAIN_ROLE_ID.DPS4, MAIN_ROLE_ID.DPS5, MAIN_ROLE_ID.DPS6],
    fights: [FIGHT_ID.TWELVANE],
    instructions: "Gryphon Portal. Solve last."
  }],
  [ASSIGNMENT_ID.SE_TWELVANE_LION_PORTAL, {
    id: ASSIGNMENT_ID.SE_TWELVANE_LION_PORTAL,
    name: "Lion Portal",
    role_ids: [MAIN_ROLE_ID.OT, MAIN_ROLE_ID.H2, MAIN_ROLE_ID.DPS7, MAIN_ROLE_ID.DPS8],
    fights: [FIGHT_ID.TWELVANE],
    instructions: "Lion Portal."
  }],
  [ASSIGNMENT_ID.SE_TWELVANE_PORTALS,{
    id: ASSIGNMENT_ID.SE_TWELVANE_PORTALS,
    name: "Portals",
    assignment_ids: [ASSIGNMENT_ID.SE_TWELVANE_WAMASU_PORTAL, ASSIGNMENT_ID.SE_TWELVANE_GRYPHON_PORTAL, ASSIGNMENT_ID.SE_TWELVANE_LION_PORTAL],
  }],

  // Ansuul (Final Boss)
  [ASSIGNMENT_ID.SE_ANSUUL_MT, {
    id: ASSIGNMENT_ID.SE_ANSUUL_MT,
    name: "Main Tank",
    role_ids: [MAIN_ROLE_ID.MT],
    fights: [FIGHT_ID.ANSUUL],
    instructions: "Primary tank for Ansuul. Position boss for cleave and manage split phases."
  }],
  [ASSIGNMENT_ID.SE_ANSUUL_PORTAL_TANK, {
    id: ASSIGNMENT_ID.SE_ANSUUL_PORTAL_TANK,
    name: "Portal Tank",
    role_ids: [MAIN_ROLE_ID.OT],
    fights: [FIGHT_ID.ANSUUL],
    instructions: "Tank portal mage and heal/shield group in lightning portal."
  }],
  [ASSIGNMENT_ID.SE_ANSUUL_PORTAL_TEAM, {
    id: ASSIGNMENT_ID.SE_ANSUUL_PORTAL_TEAM,
    name: "Portal Group",
    role_ids: [MAIN_ROLE_ID.DPS4, MAIN_ROLE_ID.DPS6, MAIN_ROLE_ID.DPS7],
    fights: [FIGHT_ID.ANSUUL],
    instructions: "Do Ansuul portal. Bring Echoing Vigour"
  }],
  [ASSIGNMENT_ID.SE_ANSUUL_TANKS, {
    id: ASSIGNMENT_ID.SE_ANSUUL_TANKS,
    name: "Tanks",
    assignment_ids: [ASSIGNMENT_ID.SE_ANSUUL_MT, ASSIGNMENT_ID.SE_ANSUUL_PORTAL_TANK]
  }],
  [ASSIGNMENT_ID.SE_ANSUUL_MANIC_TAUNT, {
    id: ASSIGNMENT_ID.SE_ANSUUL_MANIC_TAUNT,
    name: "Manic Phobia Taunt",
    role_ids: [MAIN_ROLE_ID.DPS8],
    fights: [FIGHT_ID.ANSUUL],
    instructions: "Taunt the Manic manifestation (Phobia) to ensure it does not wipe the group stack."
  }],
  [ASSIGNMENT_ID.SE_ANSUUL_ATRONACH_HUNTERS, {
    id: ASSIGNMENT_ID.SE_ANSUUL_ATRONACH_HUNTERS,
    name: "Atronach Hunters",
    role_ids: [MAIN_ROLE_ID.DPS6, MAIN_ROLE_ID.DPS7],
    fights: [FIGHT_ID.ANSUUL],
    instructions: "Prioritize killing flame atronachs and imps during execute"
  }],
  [ASSIGNMENT_ID.SE_ANSUUL_INTERRUPTORS, {
    id: ASSIGNMENT_ID.SE_ANSUUL_INTERRUPTORS,
    name: "Interruptors",
    role_ids: [MAIN_ROLE_ID.OT, MAIN_ROLE_ID.DPS8],
    fights: [FIGHT_ID.ANSUUL],
    instructions: "Interrupt flame atronachs"
  }],
  [ASSIGNMENT_ID.SE_ANSUUL_EXECUTE_ROLES, {
    id: ASSIGNMENT_ID.SE_ANSUUL_EXECUTE_ROLES,
    name: "Execute",
    assignment_ids: [ASSIGNMENT_ID.SE_ANSUUL_ATRONACH_HUNTERS, ASSIGNMENT_ID.SE_ANSUUL_INTERRUPTORS]
  }],
]);
