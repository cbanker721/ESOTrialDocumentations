const ASSIGNMENTS = new Map([
  [ASSIGNMENT_ID.TWINS_TELEPORT, {
    id: ASSIGNMENT_ID.TWINS_TELEPORT,
    name: "Teleport Phase",
    role_ids: [],
    assignment_ids: [
      ASSIGNMENT_ID.TWINS_TELEPORT_TOP_LEFT,
      ASSIGNMENT_ID.TWINS_TELEPORT_TOP_RIGHT,
      ASSIGNMENT_ID.TWINS_TELEPORT_BOTTOM_LEFT,
      ASSIGNMENT_ID.TWINS_TELEPORT_BOTTOM_RIGHT,
      ASSIGNMENT_ID.TWINS_TELEPORT_INTERRUPTER
    ],
    fights: [FIGHT_ID.TWINS],
    description: "Assignments for the teleport phase in the Twins fight.",
    instructions: `All ${ASSIGNMENT_ID.DPS} tab-target the ${NPC_ID.TWINS_BOSS} before teleport to see where their orb spawns. Go to your assigned dome position. Tip: Look at the orb beside you and take the dome of the opposite color.`
  }],
  [ASSIGNMENT_ID.TWINS_TELEPORT_TOP_LEFT, {
    id: ASSIGNMENT_ID.TWINS_TELEPORT_TOP_LEFT,
    name: "Top Left (Exit) Dome",
    role_ids: [],
    assignment_ids: [ASSIGNMENT_ID.TWINS_TELEPORT_TOP_LEFT_DOME_HOLDER, ASSIGNMENT_ID.TWINS_TELEPORT_TOP_LEFT_DOME_BASHER],
    fights: [FIGHT_ID.TWINS],
    description: "Handles the Top Left (Exit) dome during teleport.",
    instructions: ""
  }],
  [ASSIGNMENT_ID.TWINS_TELEPORT_TOP_LEFT_DOME_HOLDER, {
    id: ASSIGNMENT_ID.TWINS_TELEPORT_TOP_LEFT_DOME_HOLDER,
    name: "Dome Holder",
    role_ids: [MAIN_ROLE_ID.DPS1],
    fights: [FIGHT_ID.TWINS],
    description: "Carries the Top Left (Exit) dome.",
    instructions: "Take the dome. If freed up, drop DoTs in middle. Wait for old dome to drop before picking up."
  }],
  [ASSIGNMENT_ID.TWINS_TELEPORT_TOP_LEFT_DOME_BASHER, {
    id: ASSIGNMENT_ID.TWINS_TELEPORT_TOP_LEFT_DOME_BASHER,
    name: "Dome Basher",
    role_ids: [MAIN_ROLE_ID.DPS5],
    fights: [FIGHT_ID.TWINS],
    description: "Bashes the Top Left (Exit) dome.",
    instructions: "Bash the dome to prevent cast. Prepare to grab dome as backup."
  }],
  [ASSIGNMENT_ID.TWINS_TELEPORT_TOP_RIGHT, {
    id: ASSIGNMENT_ID.TWINS_TELEPORT_TOP_RIGHT,
    name: "Top Right (Exit) Dome",
    role_ids: [],
    assignment_ids: [ASSIGNMENT_ID.TWINS_TELEPORT_TOP_RIGHT_DOME_HOLDER, ASSIGNMENT_ID.TWINS_TELEPORT_TOP_RIGHT_DOME_BASHER],
    fights: [FIGHT_ID.TWINS],
    description: "Handles the Top Right (Exit) dome during teleport.",
    instructions: ""
  }],
  [ASSIGNMENT_ID.TWINS_TELEPORT_TOP_RIGHT_DOME_HOLDER, {
    id: ASSIGNMENT_ID.TWINS_TELEPORT_TOP_RIGHT_DOME_HOLDER,
    name: "Dome Holder",
    role_ids: [MAIN_ROLE_ID.DPS2],
    fights: [FIGHT_ID.TWINS],
    description: "Carries the Top Right (Exit) dome.",
    instructions: "Take the dome. If freed up, drop DoTs in middle. Wait for old dome to drop before picking up."
  }],
  [ASSIGNMENT_ID.TWINS_TELEPORT_TOP_RIGHT_DOME_BASHER, {
    id: ASSIGNMENT_ID.TWINS_TELEPORT_TOP_RIGHT_DOME_BASHER,
    name: "Dome Basher",
    role_ids: [MAIN_ROLE_ID.DPS6],
    fights: [FIGHT_ID.TWINS],
    description: "Bashes the Top Right (Exit) dome.",
    instructions: "Bash the dome to prevent cast. Prepare to grab dome as backup."
  }],
  [ASSIGNMENT_ID.TWINS_TELEPORT_BOTTOM_LEFT, {
    id: ASSIGNMENT_ID.TWINS_TELEPORT_BOTTOM_LEFT,
    name: "Bottom Left (Entrance) Dome",
    role_ids: [],
    assignment_ids: [ASSIGNMENT_ID.TWINS_TELEPORT_BOTTOM_LEFT_DOME_HOLDER, ASSIGNMENT_ID.TWINS_TELEPORT_BOTTOM_LEFT_DOME_BASHER],
    fights: [FIGHT_ID.TWINS],
    description: "Handles the Bottom Left (Entrance) dome during teleport.",
    instructions: ""
  }],
  [ASSIGNMENT_ID.TWINS_TELEPORT_BOTTOM_LEFT_DOME_HOLDER, {
    id: ASSIGNMENT_ID.TWINS_TELEPORT_BOTTOM_LEFT_DOME_HOLDER,
    name: "Dome Holder",
    role_ids: [MAIN_ROLE_ID.DPS4],
    fights: [FIGHT_ID.TWINS],
    description: "Carries the Bottom Left (Entrance) dome.",
    instructions: "Take the dome. If freed up, drop DoTs in middle. Wait for old dome to drop before picking up."
  }],
  [ASSIGNMENT_ID.TWINS_TELEPORT_BOTTOM_LEFT_DOME_BASHER, {
    id: ASSIGNMENT_ID.TWINS_TELEPORT_BOTTOM_LEFT_DOME_BASHER,
    name: "Dome Basher",
    role_ids: [MAIN_ROLE_ID.DPS8],
    fights: [FIGHT_ID.TWINS],
    description: "Bashes the Bottom Left (Entrance) dome.",
    instructions: "Bash the dome to prevent cast. Prepare to grab dome as backup."
  }],
  [ASSIGNMENT_ID.TWINS_TELEPORT_BOTTOM_RIGHT, {
    id: ASSIGNMENT_ID.TWINS_TELEPORT_BOTTOM_RIGHT,
    name: "Bottom Right (Entrance) Dome",
    role_ids: [],
    assignment_ids: [ASSIGNMENT_ID.TWINS_TELEPORT_BOTTOM_RIGHT_DOME_HOLDER, ASSIGNMENT_ID.TWINS_TELEPORT_BOTTOM_RIGHT_DOME_BASHER],
    fights: [FIGHT_ID.TWINS],
    description: "Handles the Bottom Right (Entrance) dome during teleport.",
    instructions: ""
  }],
  [ASSIGNMENT_ID.TWINS_TELEPORT_BOTTOM_RIGHT_DOME_HOLDER, {
    id: ASSIGNMENT_ID.TWINS_TELEPORT_BOTTOM_RIGHT_DOME_HOLDER,
    name: "Dome Holder",
    role_ids: [MAIN_ROLE_ID.DPS3],
    fights: [FIGHT_ID.TWINS],
    description: "Carries the Bottom Right (Entrance) dome.",
    instructions: "Take the dome. If freed up, drop DoTs in middle. Wait for old dome to drop before picking up."
  }],
  [ASSIGNMENT_ID.TWINS_TELEPORT_BOTTOM_RIGHT_DOME_BASHER, {
    id: ASSIGNMENT_ID.TWINS_TELEPORT_BOTTOM_RIGHT_DOME_BASHER,
    name: "Dome Basher",
    role_ids: [MAIN_ROLE_ID.DPS7],
    fights: [FIGHT_ID.TWINS],
    description: "Bashes the Bottom Right (Entrance) dome.",
    instructions: "Bash the dome to prevent cast. Prepare to grab dome as backup."
  }],
  [ASSIGNMENT_ID.TWINS_TELEPORT_INTERRUPTER, {
    id: ASSIGNMENT_ID.TWINS_TELEPORT_INTERRUPTER,
    name: "Teleport Interrupter",
    role_ids: [MAIN_ROLE_ID.MT],
    fights: [FIGHT_ID.TWINS],
    description: "Interrupts boss.",
    instructions: `Use Crushing Shock to help interrupt the ${NPC_ID.TWINS_BOSS} during teleport phase.`
  }],
  [ASSIGNMENT_ID.TWINS_GENERAL_ROLES, {
    id: ASSIGNMENT_ID.TWINS_GENERAL_ROLES,
    name: "General Roles",
    role_ids: [],
    assignment_ids: [
      ASSIGNMENT_ID.TWINS_DPS_GENERAL,
      ASSIGNMENT_ID.TWINS_HEALER_GENERAL,
      ASSIGNMENT_ID.TWINS_TANK_GENERAL
    ],
    fights: [FIGHT_ID.TWINS],
    description: "General role assignments for Twins."
  }],
  [ASSIGNMENT_ID.TWINS_DPS_GENERAL, {
    id: ASSIGNMENT_ID.TWINS_DPS_GENERAL,
    name: "DPS",
    role_ids: [MAIN_ROLE_ID.DPS1, MAIN_ROLE_ID.DPS2, MAIN_ROLE_ID.DPS3, MAIN_ROLE_ID.DPS4, MAIN_ROLE_ID.DPS5, MAIN_ROLE_ID.DPS6, MAIN_ROLE_ID.DPS7, MAIN_ROLE_ID.DPS8],
    fights: [FIGHT_ID.TWINS],
    description: "General DPS responsibilities for Twins.",
    instructions: `Before execute, hold ult until both same colour ${NPC_ID.TWINS_DOGS} are stacked on ${NPC_ID.TWINS_BOSS}. During execute, mechs always take precedence over damage.`
  }],
  [ASSIGNMENT_ID.TWINS_HEALER_GENERAL, {
    id: ASSIGNMENT_ID.TWINS_HEALER_GENERAL,
    name: "Healers",
    role_ids: [],
    assignment_ids: [ASSIGNMENT_ID.TWINS_MT_HEALER, ASSIGNMENT_ID.TWINS_OT_HEALER],
    fights: [FIGHT_ID.TWINS],
    description: "",
    instructions: ""
  }],
  [ASSIGNMENT_ID.TWINS_TANK_GENERAL, {
    id: ASSIGNMENT_ID.TWINS_TANK_GENERAL,
    name: "Tanks",
    role_ids: [],
    assignment_ids: [ASSIGNMENT_ID.TWINS_MT_TANK, ASSIGNMENT_ID.TWINS_OT_TANK],
    fights: [FIGHT_ID.TWINS],
    description: "",
    instructions: ""
  }],
  [ASSIGNMENT_ID.REEF_GENERAL_ROLES, {
    id: ASSIGNMENT_ID.REEF_GENERAL_ROLES,
    name: "General Roles",
    role_ids: [],
    assignment_ids: [
      ASSIGNMENT_ID.REEF_DPS_GENERAL,
      ASSIGNMENT_ID.REEF_HEALER_GENERAL,
      ASSIGNMENT_ID.REEF_TANK_GENERAL
    ],
    fights: [FIGHT_ID.REEF],
    description: "General role assignments for Reef Guardian."
  }],
  [ASSIGNMENT_ID.REEF_DPS_GENERAL, {
    id: ASSIGNMENT_ID.REEF_DPS_GENERAL,
    name: "DPS",
    role_ids: [MAIN_ROLE_ID.DPS1, MAIN_ROLE_ID.DPS2, MAIN_ROLE_ID.DPS3, MAIN_ROLE_ID.DPS4, MAIN_ROLE_ID.DPS5, MAIN_ROLE_ID.DPS6, MAIN_ROLE_ID.DPS7, MAIN_ROLE_ID.DPS8],
    fights: [FIGHT_ID.REEF],
    description: "General DPS responsibilities for Reef Guardian.",
    instructions: `Soft stack at lightning and do not overlap with people when in lightning. Roll-dodge/walk out of poison AoE. At ${LOCATION_ID.REEF_CHALICE}, burn both ${NPC_ID.REEF_GUARDIAN_LARGE} and ${NPC_ID.REEF_GUARDIAN_MEDIUM_1}. At ${LOCATION_ID.REEF_CROSSBONES}, burn ${NPC_ID.REEF_GUARDIAN_LARGE} on left side and leave right side alone until it walks over. Ever after, burn every enemy.`
  }],
  [ASSIGNMENT_ID.REEF_HEALER_GENERAL, {
    id: ASSIGNMENT_ID.REEF_HEALER_GENERAL,
    name: "Healers",
    role_ids: [],
    assignment_ids: [ASSIGNMENT_ID.REEF_MT_HEALER, ASSIGNMENT_ID.REEF_OT_HEALER],
    fights: [FIGHT_ID.REEF],
    description: "",
    instructions: ""
  }],
  [ASSIGNMENT_ID.REEF_TANK_GENERAL, {
    id: ASSIGNMENT_ID.REEF_TANK_GENERAL,
    name: "Tanks",
    role_ids: [],
    assignment_ids: [ASSIGNMENT_ID.REEF_MT_TANK, ASSIGNMENT_ID.REEF_OT_TANK],
    fights: [FIGHT_ID.REEF],
    description: "",
    instructions: ""
  }],
  [ASSIGNMENT_ID.TALERIA_GENERAL_ROLES, {
    id: ASSIGNMENT_ID.TALERIA_GENERAL_ROLES,
    name: "General Roles",
    role_ids: [],
    assignment_ids: [
      ASSIGNMENT_ID.TALERIA_DPS_GENERAL,
      ASSIGNMENT_ID.TALERIA_HEALER_GENERAL,
      ASSIGNMENT_ID.TALERIA_TANK_GENERAL
    ],
    fights: [FIGHT_ID.TALERIA],
    description: "General role assignments for Taleria."
  }],
  [ASSIGNMENT_ID.TALERIA_DPS_GENERAL, {
    id: ASSIGNMENT_ID.TALERIA_DPS_GENERAL,
    name: "DPS",
    role_ids: [MAIN_ROLE_ID.DPS1, MAIN_ROLE_ID.DPS2, MAIN_ROLE_ID.DPS3, MAIN_ROLE_ID.DPS4, MAIN_ROLE_ID.DPS5, MAIN_ROLE_ID.DPS6, MAIN_ROLE_ID.DPS7, MAIN_ROLE_ID.DPS8],
    fights: [FIGHT_ID.TALERIA],
    description: "General DPS responsibilities for Taleria, including Siren control.",
    instructions: `Roll-dodge every wave unless OT says he's taking it out. Run to do deluge early. DoT and cleave ${NPC_ID.TALERIA_SIRENS} as they show up, and break free immediately if lured.`
  }],
  [ASSIGNMENT_ID.TALERIA_HEALER_GENERAL, {
    id: ASSIGNMENT_ID.TALERIA_HEALER_GENERAL,
    name: "Healers",
    role_ids: [],
    assignment_ids: [ASSIGNMENT_ID.TALERIA_MT_HEALER, ASSIGNMENT_ID.TALERIA_OT_HEALER],
    fights: [FIGHT_ID.TALERIA],
    description: "",
    instructions: ""
  }],
  [ASSIGNMENT_ID.TALERIA_TANK_GENERAL, {
    id: ASSIGNMENT_ID.TALERIA_TANK_GENERAL,
    name: "Tanks",
    role_ids: [],
    assignment_ids: [ASSIGNMENT_ID.TALERIA_MT_TANK, ASSIGNMENT_ID.TALERIA_OT_TANK],
    fights: [FIGHT_ID.TALERIA],
    description: "",
    instructions: ""
  }],
  [ASSIGNMENT_ID.TWINS_EXECUTE, {
    id: ASSIGNMENT_ID.TWINS_EXECUTE,
    name: "Execute Phase",
    role_ids: [],
    assignment_ids: [
      ASSIGNMENT_ID.TWINS_WEAPON_SLAYER,
      ASSIGNMENT_ID.TWINS_LARGE_SIDE,
      ASSIGNMENT_ID.TWINS_SMALL_SIDE
    ],
    fights: [FIGHT_ID.TWINS],
    description: "Assignments for the execute phase."
  }],
  [ASSIGNMENT_ID.TWINS_EXECUTE_LARGE_DOME_HOLDER, {
    id: ASSIGNMENT_ID.TWINS_EXECUTE_LARGE_DOME_HOLDER,
    name: "Execute Large Dome Swapper",
    role_ids: [MAIN_ROLE_ID.DPS6, MAIN_ROLE_ID.DPS7],
    fights: [FIGHT_ID.TWINS],
    description: "Swaps dome (Large).",
    instructions: "Swap domes on jump/brands. DPS6 grabs first. Move vertically (entrance<->exit)."
  }],
  [ASSIGNMENT_ID.TWINS_LARGE_DOME_RESCUE, {
    id: ASSIGNMENT_ID.TWINS_LARGE_DOME_RESCUE,
    name: "Dome Rescue",
    role_ids: [MAIN_ROLE_ID.H1],
    fights: [FIGHT_ID.TWINS],
    description: "Rescue dome if needed.",
    instructions: "Stand outside of dome to grab opposite dome during jumps if needed."
  }],
  [ASSIGNMENT_ID.TWINS_EXECUTE_SMALL_DOME_HOLDER, {
    id: ASSIGNMENT_ID.TWINS_EXECUTE_SMALL_DOME_HOLDER,
    name: "Execute Small Dome Swapper",
    role_ids: [MAIN_ROLE_ID.H2, MAIN_ROLE_ID.DPS8],
    fights: [FIGHT_ID.TWINS],
    description: "Holds dome (Small).",
    instructions: "H2 holds dome initially. If someone else has dome and PP is off CD, go to large side to pop PP."
  }],
  [ASSIGNMENT_ID.TWINS_WEAPON_SLAYER, {
    id: ASSIGNMENT_ID.TWINS_WEAPON_SLAYER,
    name: "Weapon Slayers",
    role_ids: [MAIN_ROLE_ID.DPS8],
    fights: [FIGHT_ID.TWINS],
    description: "Kills weapons.",
    instructions: `Beam ${NPC_ID.TWINS_WEAPONS} as soon as they spawn.`
  }],
  [ASSIGNMENT_ID.TWINS_LARGE_SIDE, {
    id: ASSIGNMENT_ID.TWINS_LARGE_SIDE,
    name: "Large Side Group",
    role_ids: [MAIN_ROLE_ID.H1, MAIN_ROLE_ID.DPS1, MAIN_ROLE_ID.DPS2, MAIN_ROLE_ID.DPS3, MAIN_ROLE_ID.DPS4, MAIN_ROLE_ID.DPS5, MAIN_ROLE_ID.DPS6, MAIN_ROLE_ID.DPS7],
    assignment_ids: [ASSIGNMENT_ID.TWINS_EXECUTE_LARGE_DOME_HOLDER, ASSIGNMENT_ID.TWINS_LARGE_DOME_RESCUE],
    fights: [FIGHT_ID.TWINS],
    description: "Large Side.",
    instructions: "Stack puddles along sides in L-shape pattern. Avoid running into DDs doing brands."
  }],
  [ASSIGNMENT_ID.TWINS_SMALL_SIDE, {
    id: ASSIGNMENT_ID.TWINS_SMALL_SIDE,
    name: "Small Side Group",
    role_ids: [MAIN_ROLE_ID.H2, MAIN_ROLE_ID.DPS8],
    assignment_ids: [ASSIGNMENT_ID.TWINS_EXECUTE_SMALL_DOME_HOLDER],
    fights: [FIGHT_ID.TWINS],
    description: "Small Side.",
    instructions: `${MAIN_ROLE_ID.DPS8} kills ${NPC_ID.TWINS_WEAPONS} after a mech finishes and calls out.`
  }],
  [ASSIGNMENT_ID.TWINS_MT_TANK, {
    id: ASSIGNMENT_ID.TWINS_MT_TANK,
    name: "MT Tank",
    role_ids: [MAIN_ROLE_ID.MT],
    fights: [FIGHT_ID.TWINS],
    description: "Main Tank.",
    instructions: `Coordinate boss swaps. Stack same-colour ${NPC_ID.TWINS_DOGS} on ${NPC_ID.TWINS_BOSS}. Keep them centered during teleport.`
  }],
  [ASSIGNMENT_ID.TWINS_OT_TANK, {
    id: ASSIGNMENT_ID.TWINS_OT_TANK,
    name: "OT Tank",
    role_ids: [MAIN_ROLE_ID.OT],
    fights: [FIGHT_ID.TWINS],
    description: "Off Tank.",
    instructions: `Stack wrong-colour ${NPC_ID.TWINS_DOGS} out of group (~1-2 o'clock outside dome). Use Magma Shell for execute abuse.`
  }],
  [ASSIGNMENT_ID.TWINS_MT_HEALER, {
    id: ASSIGNMENT_ID.TWINS_MT_HEALER,
    name: "MT Healer",
    role_ids: [MAIN_ROLE_ID.H2],
    fights: [FIGHT_ID.TWINS],
    description: "Heals MT.",
    instructions: "Heal MT. PP on CD."
  }],
  [ASSIGNMENT_ID.TWINS_OT_HEALER, {
    id: ASSIGNMENT_ID.TWINS_OT_HEALER,
    name: "OT Healer",
    role_ids: [MAIN_ROLE_ID.H1],
    fights: [FIGHT_ID.TWINS],
    description: "Heals OT.",
    instructions: "Stay out of dome for jump rescue. Heal OT."
  }],
  [ASSIGNMENT_ID.TWINS_LEFT_SLAYER_GROUP, {
    id: ASSIGNMENT_ID.TWINS_LEFT_SLAYER_GROUP,
    name: "Left Slayer Group",
    role_ids: [MAIN_ROLE_ID.DPS5, MAIN_ROLE_ID.DPS6, MAIN_ROLE_ID.DPS7, MAIN_ROLE_ID.DPS8, MAIN_ROLE_ID.H1, MAIN_ROLE_ID.MT],
    fights: [FIGHT_ID.TWINS],
    description: "Left Slayer group.",
    instructions: "Coordinate Slayer drops on the left side."
  }],
  [ASSIGNMENT_ID.TWINS_RIGHT_SLAYER_GROUP, {
    id: ASSIGNMENT_ID.TWINS_RIGHT_SLAYER_GROUP,
    name: "Right Slayer Group",
    role_ids: [MAIN_ROLE_ID.DPS1, MAIN_ROLE_ID.DPS2, MAIN_ROLE_ID.DPS3, MAIN_ROLE_ID.DPS4, MAIN_ROLE_ID.H2, MAIN_ROLE_ID.OT],
    fights: [FIGHT_ID.TWINS],
    description: "Right Slayer group.",
    instructions: "Coordinate Slayer drops on the right side."
  }],
  [ASSIGNMENT_ID.TWINS_SLAYERS, {
    id: ASSIGNMENT_ID.TWINS_SLAYERS,
    name: "Slayer Stack",
    assignment_ids: [ASSIGNMENT_ID.TWINS_LEFT_SLAYER_GROUP, ASSIGNMENT_ID.TWINS_RIGHT_SLAYER_GROUP, ASSIGNMENT_ID.TWINS_LEFT_SLAYER_PROVIDER, ASSIGNMENT_ID.TWINS_RIGHT_SLAYER_PROVIDER],
    fights: [FIGHT_ID.TWINS],
    description: "Slayer assignments for Twins.",
  }],
  [ASSIGNMENT_ID.TWINS_LEFT_SLAYER_PROVIDER, {
    id: ASSIGNMENT_ID.TWINS_LEFT_SLAYER_PROVIDER,
    name: "Left Slayer Provider",
    role_ids: [MAIN_ROLE_ID.H1],
    fights: [FIGHT_ID.TWINS],
    description: "Provides Left Slayer.",
    instructions: "Provide Major Slayer for the left group."
  }],
  [ASSIGNMENT_ID.TWINS_RIGHT_SLAYER_PROVIDER, {
    id: ASSIGNMENT_ID.TWINS_RIGHT_SLAYER_PROVIDER,
    name: "Right Slayer Provider",
    role_ids: [MAIN_ROLE_ID.DPS4],
    fights: [FIGHT_ID.TWINS],
    description: "Provides Right Slayer.",
    instructions: "Provide Major Slayer for the right group."
  }],
  [ASSIGNMENT_ID.REEF_LEFT_SLAYER_GROUP, {
    id: ASSIGNMENT_ID.REEF_LEFT_SLAYER_GROUP,
    name: "Left Slayer Group",
    role_ids: [MAIN_ROLE_ID.DPS5, MAIN_ROLE_ID.DPS6, MAIN_ROLE_ID.DPS7, MAIN_ROLE_ID.DPS8, MAIN_ROLE_ID.H1, MAIN_ROLE_ID.MT],
    fights: [FIGHT_ID.REEF],
    description: "Left Slayer group.",
    instructions: "Coordinate Slayer drops on the left side."
  }],
  [ASSIGNMENT_ID.REEF_RIGHT_SLAYER_GROUP, {
    id: ASSIGNMENT_ID.REEF_RIGHT_SLAYER_GROUP,
    name: "Right Slayer Group",
    role_ids: [MAIN_ROLE_ID.DPS1, MAIN_ROLE_ID.DPS2, MAIN_ROLE_ID.DPS3, MAIN_ROLE_ID.DPS4, MAIN_ROLE_ID.H2, MAIN_ROLE_ID.OT],
    fights: [FIGHT_ID.REEF],
    description: "Right Slayer group.",
    instructions: "Coordinate Slayer drops on the right side."
  }],
  [ASSIGNMENT_ID.REEF_GUARDIAN_SLAYERS, {
    id: ASSIGNMENT_ID.REEF_GUARDIAN_SLAYERS,
    name: "Slayer Stack",
    role_ids: [],
    assignment_ids: [ASSIGNMENT_ID.REEF_LEFT_SLAYER_GROUP, ASSIGNMENT_ID.REEF_RIGHT_SLAYER_GROUP, ASSIGNMENT_ID.REEF_LEFT_SLAYER_PROVIDER, ASSIGNMENT_ID.REEF_RIGHT_SLAYER_PROVIDER],
    fights: [FIGHT_ID.REEF],
    description: "Slayer assignments for Reef Guardian.",
    instructions: "MT provides Left Slayer, H2 provides Right Slayer."
  }],
  [ASSIGNMENT_ID.REEF_LEFT_SLAYER_PROVIDER, {
    id: ASSIGNMENT_ID.REEF_LEFT_SLAYER_PROVIDER,
    name: "Left Slayer Provider",
    role_ids: [MAIN_ROLE_ID.MT],
    fights: [FIGHT_ID.REEF],
    description: "Provides Left Slayer.",
    instructions: "Provide Major Slayer for the left group."
  }],
  [ASSIGNMENT_ID.REEF_RIGHT_SLAYER_PROVIDER, {
    id: ASSIGNMENT_ID.REEF_RIGHT_SLAYER_PROVIDER,
    name: "Right Slayer Provider",
    role_ids: [MAIN_ROLE_ID.H2],
    fights: [FIGHT_ID.REEF],
    description: "Provides Right Slayer.",
    instructions: "Provide Major Slayer for the right group."
  }],
  [ASSIGNMENT_ID.MINIS_GENERAL_ROLES, {
    id: ASSIGNMENT_ID.MINIS_GENERAL_ROLES, 
    name: "General Roles",
    role_ids: [],
    assignment_ids: [
      ASSIGNMENT_ID.NON_LEVER_TANK,
      ASSIGNMENT_ID.NON_LEVER_DPS,
      ASSIGNMENT_ID.NON_LEVER_HEALER
    ],
    fights: [FIGHT_ID.MINIS],
    description: "General role assignments for Sail Ripper & Bow Breaker and trash.",
    instructions: "No ults on trash or Bow Breaker. Everyone ult on Sail Ripper."
  }],    
  [ASSIGNMENT_ID.LEVERS, {
    id: ASSIGNMENT_ID.LEVERS,
    name: "Lever People",
    role_ids: [MAIN_ROLE_ID.MT, MAIN_ROLE_ID.H2, MAIN_ROLE_ID.DPS7],
    assignment_ids: [
      ASSIGNMENT_ID.LEVERS_LIGHTNING,
      ASSIGNMENT_ID.LEVERS_POISON
    ],
    fights: [FIGHT_ID.MINIS],
    description: "Overall lever assignments.",
    instructions: `Group of players responsible for pulling levers during trash pulls before ${NPC_ID.SAIL_RIPPER} & ${NPC_ID.BOW_BREAKER}. See maps below.`,
    render_option: RENDER_OPTION.RENDER_ROLE
  }],
  [ASSIGNMENT_ID.LEVER_MIDDLE, {
    id: ASSIGNMENT_ID.LEVER_MIDDLE,
    name: "Lever (Middle)",
    role_ids: [MAIN_ROLE_ID.MT],
    fights: [FIGHT_ID.MINIS],
    description: "Middle Lever.",
    instructions: `Pulls ${LOCATION_ID.TRASH_LEVER} that's not the cloest or furthest. Race Against Time as needed.`
  }],
  [ASSIGNMENT_ID.LEVER_CLOSE, {
    id: ASSIGNMENT_ID.LEVER_CLOSE,
    name: "Lever (Close)",
    role_ids: [MAIN_ROLE_ID.H2],
    fights: [FIGHT_ID.MINIS],
    description: "Close Lever.",
    instructions: `Pulls ${LOCATION_ID.TRASH_LEVER} closest to exit. Hotkey gear swaps.`
  }],
  [ASSIGNMENT_ID.LEVER_FAR, {
    id: ASSIGNMENT_ID.LEVER_FAR,
    name: "Lever (Far)",
    role_ids: [MAIN_ROLE_ID.DPS7],
    fights: [FIGHT_ID.MINIS],
    description: "Far Lever.",
    instructions: `Pulls ${LOCATION_ID.TRASH_LEVER} furthest from exit. Does the countdown for ${LOCATION_ID.TRASH_LEVER}s. Use Streak for parkour. Hotkey gear swaps.`
  }],
  [ASSIGNMENT_ID.LEVERS_LIGHTNING, {
    id: ASSIGNMENT_ID.LEVERS_LIGHTNING,
    name: "Lightning Side Levers",
    role_ids: [],
    assignment_ids: [ASSIGNMENT_ID.LEVERS_LIGHTNING_1, ASSIGNMENT_ID.LEVERS_LIGHTNING_2, ASSIGNMENT_ID.LEVERS_LIGHTNING_3],
    fights: [FIGHT_ID.MINIS],
    description: "Lightning side lever sets.",
    instructions: "" // Will be rendered specially with image
  }],
  [ASSIGNMENT_ID.LEVERS_POISON, {
    id: ASSIGNMENT_ID.LEVERS_POISON,
    name: "Poison Side Levers",
    role_ids: [],
    assignment_ids: [ASSIGNMENT_ID.LEVERS_POISON_1, ASSIGNMENT_ID.LEVERS_POISON_2, ASSIGNMENT_ID.LEVERS_POISON_3],
    fights: [FIGHT_ID.MINIS],
    description: "Poison side lever sets.",
    instructions: "" // Will be rendered specially with image
  }],
  // We will store the specific position data in a custom 'positions' property for the renderer to use
  [ASSIGNMENT_ID.LEVERS_LIGHTNING_1, {
    id: ASSIGNMENT_ID.LEVERS_LIGHTNING_1,
    name: "Lightning 1",
    role_ids: [],
    instructions: "Left: DPS7 | Right (Far): MT | Exit: H2",
    custom_positions: [
      { pos: "Left", player: MAIN_ROLE_ID.DPS7 },
      { pos: "Right (Far)", player: MAIN_ROLE_ID.MT },
      { pos: "Exit", player: MAIN_ROLE_ID.H2 }
    ]
  }],
  [ASSIGNMENT_ID.LEVERS_LIGHTNING_2, {
    id: ASSIGNMENT_ID.LEVERS_LIGHTNING_2,
    name: "Lightning 2",
    role_ids: [],
    instructions: "Bridge 1: MT | Bridge 2: DPS7 | Exit: H2",
    custom_positions: [
      { pos: "Bridge 1", player: MAIN_ROLE_ID.MT },
      { pos: "Bridge 2", player: MAIN_ROLE_ID.DPS7 },
      { pos: "Exit", player: MAIN_ROLE_ID.H2 }
    ]
  }],
  [ASSIGNMENT_ID.LEVERS_LIGHTNING_3, {
    id: ASSIGNMENT_ID.LEVERS_LIGHTNING_3,
    name: "Lightning 3",
    role_ids: [],
    instructions: "Parkour: DPS7 | Exit: H2 | Left: MT",
    custom_positions: [
      { pos: "Parkour", player: MAIN_ROLE_ID.DPS7 },
      { pos: "Exit", player: MAIN_ROLE_ID.H2 },
      { pos: "Left", player: MAIN_ROLE_ID.MT }
    ]
  }],
  [ASSIGNMENT_ID.LEVERS_POISON_1, {
    id: ASSIGNMENT_ID.LEVERS_POISON_1,
    name: "Poison 1",
    role_ids: [],
    instructions: "Exit Left: MT | Exit Right: H2 | Upstairs: DPS7",
    custom_positions: [
      { pos: "Exit Left", player: MAIN_ROLE_ID.MT },
      { pos: "Exit Right", player: MAIN_ROLE_ID.H2 },
      { pos: "Upstairs", player: MAIN_ROLE_ID.DPS7 }
    ]
  }],
  [ASSIGNMENT_ID.LEVERS_POISON_2, {
    id: ASSIGNMENT_ID.LEVERS_POISON_2,
    name: "Poison 2",
    role_ids: [],
    instructions: "Middle: MT | Entrance: DPS7 | Exit: H2",
    custom_positions: [
      { pos: "Middle", player: MAIN_ROLE_ID.MT },
      { pos: "Entrance", player: MAIN_ROLE_ID.DPS7 },
      { pos: "Exit", player: MAIN_ROLE_ID.H2 }
    ]
  }],
  [ASSIGNMENT_ID.LEVERS_POISON_3, {
    id: ASSIGNMENT_ID.LEVERS_POISON_3,
    name: "Poison 3",
    role_ids: [],
    instructions: "Left: MT | Right (Entrance): DPS7 | Near: H2",
    custom_positions: [
      { pos: "Left", player: MAIN_ROLE_ID.MT },
      { pos: "Right (Entrance)", player: MAIN_ROLE_ID.DPS7 },
      { pos: "Near", player: MAIN_ROLE_ID.H2 }
    ]
  }],
  [ASSIGNMENT_ID.NON_LEVER_TANK, {
    id: ASSIGNMENT_ID.NON_LEVER_TANK,
    name: "Non-Lever Tank",
    role_ids: [MAIN_ROLE_ID.OT],
    fights: [FIGHT_ID.MINIS],
    description: "Group Tank.",
    instructions: "Solo-tanks boss and trash."
  }],
  [ASSIGNMENT_ID.NON_LEVER_HEALER, {
    id: ASSIGNMENT_ID.NON_LEVER_HEALER,
    name: "Non-Lever Healer",
    role_ids: [MAIN_ROLE_ID.H1],
    fights: [FIGHT_ID.MINIS],
    description: "Group Healer.",
    instructions: "Solo-heal."
  }],
  [ASSIGNMENT_ID.NON_LEVER_DPS, {
    id: ASSIGNMENT_ID.NON_LEVER_DPS,
    name: "Non-Lever DPS",
    role_ids: [MAIN_ROLE_ID.DPS1, MAIN_ROLE_ID.DPS2, MAIN_ROLE_ID.DPS3, MAIN_ROLE_ID.DPS4, MAIN_ROLE_ID.DPS5, MAIN_ROLE_ID.DPS6, MAIN_ROLE_ID.DPS8],
    fights: [FIGHT_ID.MINIS],
    description: "Group DPS.",
    instructions: "Wait at exit until trash is dead."
  }],
  [ASSIGNMENT_ID.REEF_GROUP_1, {
    id: ASSIGNMENT_ID.REEF_GROUP_1,
    name: "Reef Group 1",
    role_ids: [MAIN_ROLE_ID.DPS1, MAIN_ROLE_ID.DPS4],
    fights: [FIGHT_ID.REEF],
    description: "Portal Group 1.",
    instructions: `Reefs: 2,3 (${LOCATION_ID.REEF_CROSSBONES}/${LOCATION_ID.REEF_SKULL}) -> 6,7 (${LOCATION_ID.REEF_CROWN}/${LOCATION_ID.REEF_CHALICE}) -> 10,11 (${LOCATION_ID.REEF_ANCHOR}/${LOCATION_ID.REEF_WHEEL}).`
  }],
  [ASSIGNMENT_ID.REEF_GROUP_2, {
    id: ASSIGNMENT_ID.REEF_GROUP_2,
    name: "Reef Group 2",
    role_ids: [MAIN_ROLE_ID.DPS6, MAIN_ROLE_ID.DPS7],
    fights: [FIGHT_ID.REEF],
    description: "Portal Group 2.",
    instructions: `Reefs: 4,5 (${LOCATION_ID.REEF_ANCHOR}/${LOCATION_ID.REEF_WHEEL}) -> 8,9 (${LOCATION_ID.REEF_CROSSBONES}/${LOCATION_ID.REEF_SKULL}) -> 12,13 (${LOCATION_ID.REEF_CROWN}/${LOCATION_ID.REEF_CHALICE}).`
  }],
  [ASSIGNMENT_ID.REEF_BACKUP, {
    id: ASSIGNMENT_ID.REEF_BACKUP,
    name: "Reef Backup",
    role_ids: [MAIN_ROLE_ID.DPS3, MAIN_ROLE_ID.DPS5],
    fights: [FIGHT_ID.REEF],
    description: "Portal Backup.",
    instructions: "Go down immediately if a boss goes counter-clockwise (backwards reef)."
  }],
  [ASSIGNMENT_ID.REEF_FIRST_CROSSBONES, {
    id: ASSIGNMENT_ID.REEF_FIRST_CROSSBONES,
    name: "First Crossbones",
    role_ids: [MAIN_ROLE_ID.DPS5],
    fights: [FIGHT_ID.REEF],
    description: "First Crossbones.",
    instructions: `Help clear first ${LOCATION_ID.REEF_CROSSBONES} to speed up mage spawn.`
  }],
  [ASSIGNMENT_ID.REEF_GROUPS, {
    id: ASSIGNMENT_ID.REEF_GROUPS,
    name: "Reef Groups",
    role_ids: [],
    assignment_ids: [
      ASSIGNMENT_ID.REEF_GROUP_1,
      ASSIGNMENT_ID.REEF_FIRST_CROSSBONES,
      ASSIGNMENT_ID.REEF_GROUP_2,
      ASSIGNMENT_ID.REEF_BACKUP
    ],
  }],
  [ASSIGNMENT_ID.REEF_MT_TANK, {
    id: ASSIGNMENT_ID.REEF_MT_TANK,
    name: "MT Tank",
    role_ids: [MAIN_ROLE_ID.OT],
    fights: [FIGHT_ID.REEF],
    description: "Main Tank.",
    instructions: `Taunt ${NPC_ID.REEF_GUARDIAN_LARGE}. Rubberband ${NPC_ID.REEF_GUARDIAN_MAGE} into group. Watch for ${NPC_ID.REEF_GUARDIAN_BEAR}/${NPC_ID.REEF_GUARDIAN_CAT}.`
  }],
  [ASSIGNMENT_ID.REEF_OT_TANK, {
    id: ASSIGNMENT_ID.REEF_OT_TANK,
    name: "OT Tank",
    role_ids: [MAIN_ROLE_ID.MT],
    fights: [FIGHT_ID.REEF],
    description: "Off Tank.",
    instructions: `Stack ${NPC_ID.REEF_GUARDIANS} on right side of reef. Dictate group stack position.`
  }],
  [ASSIGNMENT_ID.REEF_MT_HEALER, {
    id: ASSIGNMENT_ID.REEF_MT_HEALER,
    name: "MT Healer",
    role_ids: [MAIN_ROLE_ID.H2],
    fights: [FIGHT_ID.REEF],
    description: "Heals MT.",
    instructions: "Focus group and MT."
  }],
  [ASSIGNMENT_ID.REEF_OT_HEALER, {
    id: ASSIGNMENT_ID.REEF_OT_HEALER,
    name: "OT Healer",
    role_ids: [MAIN_ROLE_ID.H1],
    fights: [FIGHT_ID.REEF],
    description: "Heals OT.",
    instructions: "Pocket heal OT. PP + Slayer."
  }],
  [ASSIGNMENT_ID.TALERIA_MT_TANK, {
    id: ASSIGNMENT_ID.TALERIA_MT_TANK,
    name: "MT Tank",
    role_ids: [MAIN_ROLE_ID.MT],
    fights: [FIGHT_ID.TALERIA],
    description: "Main Tank.",
    instructions: "Frost cloak jail. Lead group during Winter Storm. Keep ~1.5 clock units from group."
  }],
  [ASSIGNMENT_ID.TALERIA_OT_TANK, {
    id: ASSIGNMENT_ID.TALERIA_OT_TANK,
    name: "OT Tank",
    role_ids: [MAIN_ROLE_ID.OT],
    fights: [FIGHT_ID.TALERIA],
    description: "Off Tank.",
    instructions: `${NPC_ID.TALERIA_BEHEMOTH} is #1 priority. Stack ${NPC_ID.TALERIA_MAGE} close to ${NPC_ID.TALERIA_BOSS}. Ele Sus ${NPC_ID.TALERIA_SIRENS}.`
  }],
  [ASSIGNMENT_ID.TALERIA_BRIDGE_DPS, {
    id: ASSIGNMENT_ID.TALERIA_BRIDGE_DPS,
    name: "Bridge DPS",
    role_ids: [MAIN_ROLE_ID.DPS6, MAIN_ROLE_ID.DPS7],
    fights: [FIGHT_ID.TALERIA],
    description: "Bridge DPS.",
    instructions: `Go to ${LOCATION_ID.TALERIA_BRIDGE}. Roll dodge through MT if needed. Slot self-heal/shield.`
  }],
  [ASSIGNMENT_ID.TALERIA_BRIDGE_BACKUP, {
    id: ASSIGNMENT_ID.TALERIA_BRIDGE_BACKUP,
    name: "Bridge Backup",
    role_ids: [MAIN_ROLE_ID.DPS3, MAIN_ROLE_ID.DPS5, MAIN_ROLE_ID.DPS8],
    fights: [FIGHT_ID.TALERIA],
    description: "Bridge Backup.",
    instructions: "Fill in if primary bridge DPS is down."
  }],
  [ASSIGNMENT_ID.TALERIA_MT_HEALER, {
    id: ASSIGNMENT_ID.TALERIA_MT_HEALER,
    name: "MT Healer",
    role_ids: [MAIN_ROLE_ID.H1],
    fights: [FIGHT_ID.TALERIA],
    description: "Heals MT.",
    instructions: "Seeds on MT. Naz extend Colo."
  }],
  [ASSIGNMENT_ID.TALERIA_OT_HEALER, {
    id: ASSIGNMENT_ID.TALERIA_OT_HEALER,
    name: "OT Healer",
    role_ids: [MAIN_ROLE_ID.H2],
    fights: [FIGHT_ID.TALERIA],
    description: "Heals OT.",
    instructions: "Focus healing OT (especially with Behemoth). Provide Major + Minor Expedition."
  }],
  [ASSIGNMENT_ID.TALERIA_BRIDGE, {
    id: ASSIGNMENT_ID.TALERIA_BRIDGE,
    name: "Bridge Group",
    role_ids: [],
    assignment_ids: [ASSIGNMENT_ID.TALERIA_BRIDGE_DPS, ASSIGNMENT_ID.TALERIA_BRIDGE_BACKUP],
    fights: [FIGHT_ID.TALERIA],
    description: "Assignments for handling the bridge mechanic.",
    instructions: "Coordinate bridge crossings and backups."
  }],
  [ASSIGNMENT_ID.TALERIA_FRONT_SLAYER_GROUP, {
    id: ASSIGNMENT_ID.TALERIA_FRONT_SLAYER_GROUP,
    name: "Front Slayer Group",
    role_ids: [MAIN_ROLE_ID.DPS5, MAIN_ROLE_ID.DPS6, MAIN_ROLE_ID.DPS7, MAIN_ROLE_ID.DPS8, MAIN_ROLE_ID.H1, MAIN_ROLE_ID.OT],
    fights: [FIGHT_ID.TALERIA],
    description: "Front Slayer group.",
    instructions: "Group of players receiving front slayer buff, provided by H2."
  }],
  [ASSIGNMENT_ID.TALERIA_BACK_SLAYER_GROUP, {
    id: ASSIGNMENT_ID.TALERIA_BACK_SLAYER_GROUP,
    name: "Back Slayer Group",
    role_ids: [MAIN_ROLE_ID.DPS1, MAIN_ROLE_ID.DPS2, MAIN_ROLE_ID.DPS3, MAIN_ROLE_ID.DPS4, MAIN_ROLE_ID.H2, MAIN_ROLE_ID.MT],
    fights: [FIGHT_ID.TALERIA],
    description: "Back Slayer group.",
    instructions: "Group of players receiving back slayer buff, provided by OT."
  }],
  [ASSIGNMENT_ID.TALERIA_SLAYERS, {
    id: ASSIGNMENT_ID.TALERIA_SLAYERS,
    name: "Slayer Stack",
    role_ids: [],
    assignment_ids: [ASSIGNMENT_ID.TALERIA_FRONT_SLAYER_GROUP, ASSIGNMENT_ID.TALERIA_BACK_SLAYER_GROUP, ASSIGNMENT_ID.TALERIA_FRONT_SLAYER_PROVIDER, ASSIGNMENT_ID.TALERIA_BACK_SLAYER_PROVIDER],
    fights: [FIGHT_ID.TALERIA],
    description: "Slayer assignments for Taleria.",
    instructions: "OT provides front slayer, H2 provides back slayer."
  }],
  [ASSIGNMENT_ID.TALERIA_FRONT_SLAYER_PROVIDER, {
    id: ASSIGNMENT_ID.TALERIA_FRONT_SLAYER_PROVIDER,
    name: "Front Slayer Provider",
    role_ids: [MAIN_ROLE_ID.OT],
    fights: [FIGHT_ID.TALERIA],
    description: "Provides Front Slayer.",
    instructions: "Provide Major Slayer for the front group."
  }],
  [ASSIGNMENT_ID.TALERIA_BACK_SLAYER_PROVIDER, {
    id: ASSIGNMENT_ID.TALERIA_BACK_SLAYER_PROVIDER,
    name: "Back Slayer Provider",
    role_ids: [MAIN_ROLE_ID.H2],
    fights: [FIGHT_ID.TALERIA],
    description: "Provides Back Slayer.",
    instructions: "Provide Major Slayer for the back group."
  }],
  [ASSIGNMENT_ID.TWINS_CENTER_DOME_HOLDER, {
    id: ASSIGNMENT_ID.TWINS_CENTER_DOME_HOLDER,
    name: "Center Dome Holder",
    role_ids: [MAIN_ROLE_ID.DPS8],
    fights: [FIGHT_ID.TWINS],
    description: "Holds the center dome.",
    instructions: `Move the center dome out of the ${NPC_ID.TWINS_BOSS} at 80% health and then move back in for interrupt or when both same colour ${NPC_ID.TWINS_DOGS} are stacked on ${NPC_ID.TWINS_BOSS}.`
  }],
  [ASSIGNMENT_ID.TANKS, {
    id: ASSIGNMENT_ID.TANKS,
    name: "Tanks",
    color: '#90caf9',
    render_option: RENDER_OPTION.RENDER_ASSIGNMENT
  }],
  [ASSIGNMENT_ID.HEALERS, {
    id: ASSIGNMENT_ID.HEALERS,
    name: "Healers",
    color: '#a5d6a7',
    render_option: RENDER_OPTION.RENDER_ASSIGNMENT
  }],
  [ASSIGNMENT_ID.DPS, {
    id: ASSIGNMENT_ID.DPS,
    name: "DDs",
    color: '#ffeb3b',
    render_option: RENDER_OPTION.RENDER_ASSIGNMENT
  }],
  [ASSIGNMENT_ID.TWINS_EXECUTE_DOME_HOLDERS, {
    id: ASSIGNMENT_ID.TWINS_EXECUTE_DOME_HOLDERS,
    assignment_ids: [ASSIGNMENT_ID.TWINS_EXECUTE_LARGE_DOME_HOLDER, ASSIGNMENT_ID.TWINS_EXECUTE_SMALL_DOME_HOLDER],
    name: "Dome Holders",
    color: '#e83bff'
  }],
]);