// ============================================================
// SE HM Progression — Assignment Definitions
// ============================================================

const ASSIGNMENTS = new Map([
  // General Slayers
  [ASSIGNMENT_ID.SE_SLAYER_LEFT, {
    id: ASSIGNMENT_ID.SE_SLAYER_LEFT,
    name: "Left Slayer",
    role_ids: [MAIN_ROLE_ID.H1],
    fights: [FIGHT_ID.YASEYLA, FIGHT_ID.TWELVANE, FIGHT_ID.ANSUUL],
    instructions: "Provide Major Slayer for the left group stack."
  }],
  [ASSIGNMENT_ID.SE_SLAYER_RIGHT, {
    id: ASSIGNMENT_ID.SE_SLAYER_RIGHT,
    name: "Right Slayer",
    role_ids: [MAIN_ROLE_ID.H2],
    fights: [FIGHT_ID.YASEYLA, FIGHT_ID.TWELVANE, FIGHT_ID.ANSUUL],
    instructions: "Provide Major Slayer for the right group stack."
  }],

  // Yaseyla (Boss 1)
  [ASSIGNMENT_ID.SE_YASEYLA_MT, {
    id: ASSIGNMENT_ID.SE_YASEYLA_MT,
    name: "Yaseyla Tank",
    role_ids: [MAIN_ROLE_ID.MT],
    fights: [FIGHT_ID.YASEYLA],
    instructions: "Main boss tank. Coordinate swaps on Vanton's Clarity to clear stacks."
  }],
  [ASSIGNMENT_ID.SE_YASEYLA_OT, {
    id: ASSIGNMENT_ID.SE_YASEYLA_OT,
    name: "Add Tank",
    role_ids: [MAIN_ROLE_ID.OT],
    fights: [FIGHT_ID.YASEYLA],
    instructions: "Handle Wamasu adds and swap with MT during Clarity phases."
  }],

  // Twelvane / Chimera (Boss 2)
  [ASSIGNMENT_ID.SE_TWELVANE_MT, {
    id: ASSIGNMENT_ID.SE_TWELVANE_MT,
    name: "Twelvane Tank",
    role_ids: [MAIN_ROLE_ID.MT],
    fights: [FIGHT_ID.TWELVANE],
    instructions: "Holds Twelvane and Chimera."
  }],
  [ASSIGNMENT_ID.SE_TWELVANE_OT, {
    id: ASSIGNMENT_ID.SE_TWELVANE_OT,
    name: "Animal Kite",
    role_ids: [MAIN_ROLE_ID.OT],
    fights: [FIGHT_ID.TWELVANE],
    instructions: "Kite expanding circles and manage animal manifestations away from the group."
  }],
  [ASSIGNMENT_ID.SE_TWELVANE_HEALER_TAUNT, {
    id: ASSIGNMENT_ID.SE_TWELVANE_HEALER_TAUNT,
    name: "Chimera Healer Taunt",
    role_ids: [MAIN_ROLE_ID.H1],
    fights: [FIGHT_ID.TWELVANE],
    instructions: "Taunt Chimera to attract chain lightning."
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
  }]

  // Ansuul (Final Boss)
  [ASSIGNMENT_ID.SE_ANSUUL_MT, {
    id: ASSIGNMENT_ID.SE_ANSUUL_MT,
    name: "Ansuul Main Tank",
    role_ids: [MAIN_ROLE_ID.MT],
    fights: [FIGHT_ID.ANSUUL],
    instructions: "Primary tank for Ansuul. Position boss for cleave and manage split phases."
  }],
  [ASSIGNMENT_ID.SE_ANSUUL_PORTAL_TANK, {
    id: ASSIGNMENT_ID.SE_ANSUUL_PORTAL_TANK,
    name: "Nightmare Tank",
    role_ids: [MAIN_ROLE_ID.OT],
    fights: [FIGHT_ID.ANSUUL],
    instructions: "Tank portal mage and heal/shield group in lightning portal."
  }],
  [ASSIGNMENT_ID.SE_ANSUUL_PORTAL_TEAM, {
    id: ASSIGNMENT_ID.SE_ANSUUL_PORTAL_TEAM,
    name: "Portal Group",
    role_ids: [MAIN_ROLE_ID.DPS5, MAIN_ROLE_ID.DPS6, MAIN_ROLE_ID.DPS7],
    fights: [FIGHT_ID.ANSUUL],
    instructions: "Do Ansuul portal. Bring Echoing Vigour"
  }],
  [ASSIGNMENT_ID.SE_ANSUUL_MANIC_TAUNT, {
    id: ASSIGNMENT_ID.SE_ANSUUL_MANIC_TAUNT,
    name: "Manic Phobia Taunt",
    role_ids: [MAIN_ROLE_ID.DPS8],
    fights: [FIGHT_ID.ANSUUL],
    instructions: "Taunt the Manic manifestation (Phobia) to ensure it does not wipe the group stack."
  }]
]);
