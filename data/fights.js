const FIGHT_ID = Object.freeze({
  TRASH: 'trash',
  TWINS: 'twins',
  SAILRIPPER: 'sailripper',
  BOWBREAKER: 'bowbreaker',
  MINIS: 'sailripper-bowbreaker',
  REEF: 'reef',
  TALERIA: 'taleria',
});

const ASSIGNMENT_ID = Object.freeze({
  TWINS_TELEPORT_DOME_HOLDER: 'twins-teleport-dome-holder',
  TWINS_TELEPORT_DOME_BASH: 'twins-teleport-dome-bash',
  TWINS_TELEPORT_TOP_LEFT: 'twins-teleport-top-left',
  TWINS_TELEPORT_TOP_RIGHT: 'twins-teleport-top-right',
  TWINS_TELEPORT_BOTTOM_LEFT: 'twins-teleport-bottom-left',
  TWINS_TELEPORT_BOTTOM_RIGHT: 'twins-teleport-bottom-right',
  TWINS_TELEPORT_INTERRUPTER: 'twins-teleport-interrupter',
  TWINS_EXECUTE_LEFT_DOME_HOLDER: "twins-execute-left-dome-holder",
  TWINS_EXECUTE_SMALL_DOME_HOLDER: "twins-execute-small-dome-holder",
  TWINS_WEAPON_SLAYER: 'twins-weapon-slayer',
  TWINS_LARGE_SIDE: 'twins-large-side',
  TWINS_SMALL_SIDE: 'twins-small-side',
  TWINS_MT_TANK: 'twins-mt-tank',
  TWINS_OT_TANK: 'twins-ot-tank',
  TWINS_MT_HEALER: 'twins-mt-healer',
  TWINS_OT_HEALER: 'twins-ot-healer',
  REEF_MT_TANK: 'reef-mt-tank',
  REEF_OT_TANK: 'reef-ot-tank',
  REEF_MT_HEALER: 'reef-mt-healer',
  REEF_OT_HEALER: 'reef-ot-healer',
  REEF_GROUP_1: 'reef-group-1',
  REEF_GROUP_2: 'reef-group-2',
  REEF_BACKUP: 'reef-backup',
  REEF_FIRST_CROSSBONES: 'reef-first-crossbones',
  TALERIA_MT_TANK: 'taleria-mt-tank',
  TALERIA_OT_TANK: 'taleria-ot-tank',
  TALERIA_MT_HEALER: 'taleria-mt-healer',
  TALERIA_OT_HEALER: 'taleria-ot-healer',
  TALERIA_BRIDGE_DPS: 'taleria-bridge-dps',
  TALERIA_BRIDGE_BACKUP: 'taleria-bridge-backup',
  TALERIA_SIRENS: 'taleria-sirens',
  LEFT_SLAYER_GROUP: 'left-slayer-group',
  RIGHT_SLAYER_GROUP: 'right-slayer-group',
  LEFT_SLAYER_PROVIDER: 'left-slayer-provider',
  RIGHT_SLAYER_PROVIDER: 'right-slayer-provider',
  FRONT_SLAYER_GROUP: 'front-slayer-group',
  BACK_SLAYER_GROUP: 'back-slayer-group',
  FRONT_SLAYER_PROVIDER: 'front-slayer-provider',
  BACK_SLAYER_PROVIDER: 'back-slayer-provider',
  NON_LEVER_TANK: 'non-lever-tank',
  NON_LEVER_DPS: 'non-lever-dps',
  NON_LEVER_HEALER: 'non-lever-healer',
  LEVER_HEALER: 'lever-healer',
  LEVER_TANK: 'lever-tank',
  LEVER_DPS: 'lever-dps',
  LEVERS: 'levers',
});

const ASSIGNMENTS = new Map([
  [ASSIGNMENT_ID.TWINS_TELEPORT_DOME_HOLDER, {
    id: ASSIGNMENT_ID.TWINS_TELEPORT_DOME_HOLDER,
    name: "Teleport Dome Carriers",
    role_ids: [MAIN_ROLE_ID.DPS1, MAIN_ROLE_ID.DPS2, MAIN_ROLE_ID.DPS3, MAIN_ROLE_ID.DPS4],
    fights: [FIGHT_ID.TWINS],
    description: "Carries dome during teleport.",
    instructions: "Go to assigned dome. If freed up, drop DoTs in middle. Last DD holds dome until atros die. Wait for old dome to drop before picking up."
  }],
  [ASSIGNMENT_ID.TWINS_TELEPORT_DOME_BASH, {
    id: ASSIGNMENT_ID.TWINS_TELEPORT_DOME_BASH,
    name: "Teleport Dome Bashers",
    role_ids: [MAIN_ROLE_ID.DPS5, MAIN_ROLE_ID.DPS6, MAIN_ROLE_ID.DPS7, MAIN_ROLE_ID.DPS8],
    fights: [FIGHT_ID.TWINS],
    description: "Bashes dome during teleport.",
    instructions: "Bash the dome to prevent cast. Prepare to grab dome if the primary carrier is dead."
  }],
  [ASSIGNMENT_ID.TWINS_TELEPORT_TOP_LEFT, {
    id: ASSIGNMENT_ID.TWINS_TELEPORT_TOP_LEFT,
    name: "Teleport Top Left (Exit)",
    role_ids: [MAIN_ROLE_ID.DPS1],
    fights: [FIGHT_ID.TWINS],
    description: "Exit Left dome.",
    instructions: "Look at the orb beside you and take the dome of opposite colour."
  }],
  [ASSIGNMENT_ID.TWINS_TELEPORT_TOP_RIGHT, {
    id: ASSIGNMENT_ID.TWINS_TELEPORT_TOP_RIGHT,
    name: "Teleport Top Right (Exit)",
    role_ids: [MAIN_ROLE_ID.DPS2],
    fights: [FIGHT_ID.TWINS],
    description: "Exit Right dome.",
    instructions: "Look at the orb beside you and take the dome of opposite colour."
  }],
  [ASSIGNMENT_ID.TWINS_TELEPORT_BOTTOM_LEFT, {
    id: ASSIGNMENT_ID.TWINS_TELEPORT_BOTTOM_LEFT,
    name: "Teleport Bottom Left (Entrance)",
    role_ids: [MAIN_ROLE_ID.DPS4],
    fights: [FIGHT_ID.TWINS],
    description: "Entrance Left dome.",
    instructions: "Look at the orb beside you and take the dome of opposite colour."
  }],
  [ASSIGNMENT_ID.TWINS_TELEPORT_BOTTOM_RIGHT, {
    id: ASSIGNMENT_ID.TWINS_TELEPORT_BOTTOM_RIGHT,
    name: "Teleport Bottom Right (Entrance)",
    role_ids: [MAIN_ROLE_ID.DPS3],
    fights: [FIGHT_ID.TWINS],
    description: "Entrance Right dome.",
    instructions: "Look at the orb beside you and take the dome of opposite colour."
  }],
  [ASSIGNMENT_ID.TWINS_TELEPORT_INTERRUPTER, {
    id: ASSIGNMENT_ID.TWINS_TELEPORT_INTERRUPTER,
    name: "Teleport Interrupter",
    role_ids: [MAIN_ROLE_ID.MT],
    fights: [FIGHT_ID.TWINS],
    description: "Interrupts boss.",
    instructions: "Use Crushing Shock to help interrupt the boss during teleport phase."
  }],
  [ASSIGNMENT_ID.TWINS_EXECUTE_LEFT_DOME_HOLDER, {
    id: ASSIGNMENT_ID.TWINS_EXECUTE_LEFT_DOME_HOLDER,
    name: "Execute Left Dome",
    role_ids: [MAIN_ROLE_ID.DPS6, MAIN_ROLE_ID.DPS7],
    fights: [FIGHT_ID.TWINS],
    description: "Swaps dome (Large).",
    instructions: "Swap domes on jump/brands. DPS6 grabs first. Move vertically (entrance<->exit)."
  }],
  [ASSIGNMENT_ID.TWINS_EXECUTE_SMALL_DOME_HOLDER, {
    id: ASSIGNMENT_ID.TWINS_EXECUTE_SMALL_DOME_HOLDER,
    name: "Execute Small Dome",
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
    instructions: "Beam weapons as soon as they spawn."
  }],
  [ASSIGNMENT_ID.TWINS_LARGE_SIDE, {
    id: ASSIGNMENT_ID.TWINS_LARGE_SIDE,
    name: "Large Side Group",
    role_ids: [MAIN_ROLE_ID.OT, MAIN_ROLE_ID.H1, MAIN_ROLE_ID.DPS1, MAIN_ROLE_ID.DPS2, MAIN_ROLE_ID.DPS3, MAIN_ROLE_ID.DPS4, MAIN_ROLE_ID.DPS5, MAIN_ROLE_ID.DPS6, MAIN_ROLE_ID.DPS7],
    fights: [FIGHT_ID.TWINS],
    description: "Large Side.",
    instructions: "Stack puddles along sides in L-shape pattern. Avoid running into DDs doing brands."
  }],
  [ASSIGNMENT_ID.TWINS_SMALL_SIDE, {
    id: ASSIGNMENT_ID.TWINS_SMALL_SIDE,
    name: "Small Side Group",
    role_ids: [MAIN_ROLE_ID.MT, MAIN_ROLE_ID.H2, MAIN_ROLE_ID.DPS8],
    fights: [FIGHT_ID.TWINS],
    description: "Small Side.",
    instructions: "DPS8 kills weapons after a mech finishes and calls out."
  }],
  [ASSIGNMENT_ID.TWINS_MT_TANK, {
    id: ASSIGNMENT_ID.TWINS_MT_TANK,
    name: "MT Tank",
    role_ids: [MAIN_ROLE_ID.MT],
    fights: [FIGHT_ID.TWINS],
    description: "Main Tank.",
    instructions: "Coordinate boss swaps. Stack same-colour atros on boss. Keep them centered during teleport."
  }],
  [ASSIGNMENT_ID.TWINS_OT_TANK, {
    id: ASSIGNMENT_ID.TWINS_OT_TANK,
    name: "OT Tank",
    role_ids: [MAIN_ROLE_ID.OT],
    fights: [FIGHT_ID.TWINS],
    description: "Off Tank.",
    instructions: "Stack wrong-colour atros out of group (~1-2 o'clock outside dome). Use Magma Shell for execute abuse."
  }],
  [ASSIGNMENT_ID.TWINS_MT_HEALER, {
    id: ASSIGNMENT_ID.TWINS_MT_HEALER,
    name: "MT Healer",
    role_ids: [MAIN_ROLE_ID.H1],
    fights: [FIGHT_ID.TWINS],
    description: "Heals MT.",
    instructions: "Stay out of dome for jump rescue. Heal OT."
  }],
  [ASSIGNMENT_ID.TWINS_OT_HEALER, {
    id: ASSIGNMENT_ID.TWINS_OT_HEALER,
    name: "OT Healer",
    role_ids: [MAIN_ROLE_ID.H2],
    fights: [FIGHT_ID.TWINS],
    description: "Heals OT.",
    instructions: "Heal MT. PP on CD."
  }],
  [ASSIGNMENT_ID.LEFT_SLAYER_PROVIDER, {
    id: ASSIGNMENT_ID.LEFT_SLAYER_PROVIDER,
    name: "Left Slayer",
    role_ids: [MAIN_ROLE_ID.DPS4, MAIN_ROLE_ID.MT],
    fights: [FIGHT_ID.TWINS, FIGHT_ID.REEF],
    description: "Left Slayer.",
    instructions: "Provide Slayer at 2nd atro (Twins) or on cooldown/callout (Reef)."
  }],
  [ASSIGNMENT_ID.RIGHT_SLAYER_PROVIDER, {
    id: ASSIGNMENT_ID.RIGHT_SLAYER_PROVIDER,
    name: "Right Slayer",
    role_ids: [MAIN_ROLE_ID.H1, MAIN_ROLE_ID.H2],
    fights: [FIGHT_ID.TWINS, FIGHT_ID.REEF],
    description: "Right Slayer.",
    instructions: "Provide Slayer at 2nd atro (Twins) or on cooldown/callout (Reef)."
  }],
  [ASSIGNMENT_ID.LEFT_SLAYER_GROUP, {
    id: ASSIGNMENT_ID.LEFT_SLAYER_GROUP,
    name: "Left Slayer Group",
    role_ids: [MAIN_ROLE_ID.DPS4, MAIN_ROLE_ID.MT],
    fights: [FIGHT_ID.TWINS, FIGHT_ID.REEF],
    description: "Left Slayer group.",
    instructions: "Coordinate Slayer drops on the left side."
  }],
  [ASSIGNMENT_ID.RIGHT_SLAYER_GROUP, {
    id: ASSIGNMENT_ID.RIGHT_SLAYER_GROUP,
    name: "Right Slayer Group",
    role_ids: [MAIN_ROLE_ID.H1, MAIN_ROLE_ID.H2],
    fights: [FIGHT_ID.TWINS, FIGHT_ID.REEF],
    description: "Right Slayer group.",
    instructions: "Coordinate Slayer drops on the right side."
  }],
  [ASSIGNMENT_ID.LEVERS, {
    id: ASSIGNMENT_ID.LEVERS,
    name: "Levers",
    role_ids: [MAIN_ROLE_ID.MT, MAIN_ROLE_ID.H2, MAIN_ROLE_ID.DPS3, MAIN_ROLE_ID.DPS7],
    fights: [FIGHT_ID.MINIS],
    description: "Pull levers.",
    instructions: "Pull levers according to the specific assignment (Lightning/Poison side). Swap sets via Wizard's Wardrobe if needed."
  }],
  [ASSIGNMENT_ID.LEVER_TANK, {
    id: ASSIGNMENT_ID.LEVER_TANK,
    name: "Lever Tank",
    role_ids: [MAIN_ROLE_ID.MT],
    fights: [FIGHT_ID.MINIS],
    description: "Lever Tank.",
    instructions: "Handle lever mechanics. Race Against Time as needed."
  }],
  [ASSIGNMENT_ID.LEVER_HEALER, {
    id: ASSIGNMENT_ID.LEVER_HEALER,
    name: "Lever Healer",
    role_ids: [MAIN_ROLE_ID.H2],
    fights: [FIGHT_ID.MINIS],
    description: "Lever Healer.",
    instructions: "Handle lever mechanics. Hotkey gear swaps."
  }],
  [ASSIGNMENT_ID.LEVER_DPS, {
    id: ASSIGNMENT_ID.LEVER_DPS,
    name: "Lever DPS",
    role_ids: [MAIN_ROLE_ID.DPS7],
    fights: [FIGHT_ID.MINIS],
    description: "Lever DPS.",
    instructions: "Handle lever mechanics. Hotkey gear swaps."
  }],
  [ASSIGNMENT_ID.NON_LEVER_TANK, {
    id: ASSIGNMENT_ID.NON_LEVER_TANK,
    name: "Non-Lever Tank",
    role_ids: [MAIN_ROLE_ID.OT],
    fights: [FIGHT_ID.MINIS],
    description: "Group Tank.",
    instructions: "Solo-tank boss and first adds initially."
  }],
  [ASSIGNMENT_ID.NON_LEVER_HEALER, {
    id: ASSIGNMENT_ID.NON_LEVER_HEALER,
    name: "Non-Lever Healer",
    role_ids: [MAIN_ROLE_ID.H1],
    fights: [FIGHT_ID.MINIS],
    description: "Group Healer.",
    instructions: "Solo-heal group initially."
  }],
  [ASSIGNMENT_ID.NON_LEVER_DPS, {
    id: ASSIGNMENT_ID.NON_LEVER_DPS,
    name: "Non-Lever DPS",
    role_ids: [MAIN_ROLE_ID.DPS1, MAIN_ROLE_ID.DPS2, MAIN_ROLE_ID.DPS4, MAIN_ROLE_ID.DPS5, MAIN_ROLE_ID.DPS6, MAIN_ROLE_ID.DPS8],
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
    instructions: "Reefs: 2,3 (Crossbones/Skull) -> 6,7 (Crown/Chalice) -> 10,11 (Anchor/Wheel)."
  }],
  [ASSIGNMENT_ID.REEF_GROUP_2, {
    id: ASSIGNMENT_ID.REEF_GROUP_2,
    name: "Reef Group 2",
    role_ids: [MAIN_ROLE_ID.DPS6, MAIN_ROLE_ID.DPS7],
    fights: [FIGHT_ID.REEF],
    description: "Portal Group 2.",
    instructions: "Reefs: 4,5 (Anchor/Wheel) -> 8,9 (Crossbones/Skull) -> 12,13 (Crown/Chalice)."
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
    role_ids: [MAIN_ROLE_ID.DPS8],
    fights: [FIGHT_ID.REEF],
    description: "First Crossbones.",
    instructions: "Help clear first Crossbones to speed up mage spawn."
  }],
  [ASSIGNMENT_ID.REEF_MT_TANK, {
    id: ASSIGNMENT_ID.REEF_MT_TANK,
    name: "MT Tank",
    role_ids: [MAIN_ROLE_ID.MT],
    fights: [FIGHT_ID.REEF],
    description: "Main Tank.",
    instructions: "Taunt Large Guardian. Rubberband mages into group. Watch for bears/cats."
  }],
  [ASSIGNMENT_ID.REEF_OT_TANK, {
    id: ASSIGNMENT_ID.REEF_OT_TANK,
    name: "OT Tank",
    role_ids: [MAIN_ROLE_ID.OT],
    fights: [FIGHT_ID.REEF],
    description: "Off Tank.",
    instructions: "Stack reef guardians on right side of reef. Dictate group stack position."
  }],
  [ASSIGNMENT_ID.REEF_MT_HEALER, {
    id: ASSIGNMENT_ID.REEF_MT_HEALER,
    name: "MT Healer",
    role_ids: [MAIN_ROLE_ID.H1],
    fights: [FIGHT_ID.REEF],
    description: "Heals MT.",
    instructions: "Focus group and MT."
  }],
  [ASSIGNMENT_ID.REEF_OT_HEALER, {
    id: ASSIGNMENT_ID.REEF_OT_HEALER,
    name: "OT Healer",
    role_ids: [MAIN_ROLE_ID.H2],
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
    instructions: "Behemoth is #1 priority. Stack mage close to Taleria. Ele Sus matrons."
  }],
  [ASSIGNMENT_ID.TALERIA_BRIDGE_DPS, {
    id: ASSIGNMENT_ID.TALERIA_BRIDGE_DPS,
    name: "Bridge DPS",
    role_ids: [MAIN_ROLE_ID.DPS6, MAIN_ROLE_ID.DPS7],
    fights: [FIGHT_ID.TALERIA],
    description: "Bridge DPS.",
    instructions: "Go to bridge. Roll dodge through MT if needed. Slot self-heal/shield."
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
  [ASSIGNMENT_ID.FRONT_SLAYER_PROVIDER, {
    id: ASSIGNMENT_ID.FRONT_SLAYER_PROVIDER,
    name: "Front Slayer",
    role_ids: [MAIN_ROLE_ID.OT],
    fights: [FIGHT_ID.TALERIA],
    description: "Front Slayer.",
    instructions: "Proc Slayer (front)."
  }],
  [ASSIGNMENT_ID.BACK_SLAYER_PROVIDER, {
    id: ASSIGNMENT_ID.BACK_SLAYER_PROVIDER,
    name: "Back Slayer",
    role_ids: [MAIN_ROLE_ID.H2],
    fights: [FIGHT_ID.TALERIA],
    description: "Back Slayer.",
    instructions: "Proc Slayer (back)."
  }],
  [ASSIGNMENT_ID.FRONT_SLAYER_GROUP, {
    id: ASSIGNMENT_ID.FRONT_SLAYER_GROUP,
    name: "Front Slayer Group",
    role_ids: [MAIN_ROLE_ID.OT],
    fights: [FIGHT_ID.TALERIA],
    description: "Front Slayer group.",
    instructions: "Coordinate front Slayer."
  }],
  [ASSIGNMENT_ID.BACK_SLAYER_GROUP, {
    id: ASSIGNMENT_ID.BACK_SLAYER_GROUP,
    name: "Back Slayer Group",
    role_ids: [MAIN_ROLE_ID.H2],
    fights: [FIGHT_ID.TALERIA],
    description: "Back Slayer group.",
    instructions: "Coordinate back Slayer."
  }],
  [ASSIGNMENT_ID.TALERIA_SIRENS, {
    id: ASSIGNMENT_ID.TALERIA_SIRENS,
    name: "Siren Control",
    role_ids: [MAIN_ROLE_ID.DPS1, MAIN_ROLE_ID.DPS2, MAIN_ROLE_ID.DPS3, MAIN_ROLE_ID.DPS4, MAIN_ROLE_ID.DPS5, MAIN_ROLE_ID.DPS6, MAIN_ROLE_ID.DPS7, MAIN_ROLE_ID.DPS8],
    fights: [FIGHT_ID.TALERIA],
    description: "Siren Control",
    instructions: "DoT and cleave Sirens. Break free immediately if lured."
  }]
]);