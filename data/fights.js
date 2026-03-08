const FIGHT_ID = Object.freeze({
  TRASH: 'trash',
  TWINS: 'twins',
  SAILRIPPER: 'sailripper',
  BOWBREAKER: 'bowbreaker',
  MINIS: 'sailripper-bowbreaker',
  REEF: 'reef',
  TALERIA: 'taleria',
});

const FIGHTS = new Map([
  [FIGHT_ID.TRASH, {
    id: FIGHT_ID.TRASH,
    name: "Trash Pulls",
    shortName: "Trash",
    icon: "⚔️",
    strategy: {
      summary: "Clear trash packs between bosses efficiently. Supports never ult on trash. DDs can ult until the last or second-to-last pull — use judgement since Standards are expensive.",
      details: [
        `${MAIN_ROLE_ID.MT} leads coordination of trash pulls with ${MAIN_ROLE_ID.OT}.`,
        `${ASSIGNMENT_ID.TANK} and ${ASSIGNMENT_ID.HEALERS} never ult on trash, except ${ASSIGNMENT_ID.TALERIA_MT_TANK} will barrier on last trash pull before Taleria.`,
        `${ASSIGNMENT_ID.DPS}s can ult until last or 2nd-last pull (Note: Standards are expensive).`,
      ]
    },
    builds: {
      [MAIN_ROLE_ID.DPS1]: { sets: ["Velothi", "Ansuul/Sul-Xan/Kazpian", "Deadly/Tideborn/Nerien'eth"], ult: "Languid (Front), Destro (Back)", misc: ["Banner"], notes: "Be mindful about ulting before the last boss." },
      [MAIN_ROLE_ID.DPS2]: { sets: ["Velothi", "Alkosh", "Deadly/Tideborn/Nerien'eth"], ult: "Languid (Front), Destro (Back)", notes: "Be mindful about ulting before the last boss." },
      [MAIN_ROLE_ID.DPS3]: { sets: ["Velothi", "Ansuul/Sul-Xan/Kazpian", "Deadly/Tideborn/Nerien'eth"], ult: "Languid (Front), Destro (Back)", notes: "Be mindful about ulting before the last boss." },
      [MAIN_ROLE_ID.DPS4]: { sets: ["Velothi", "Ansuul/Sul-Xan/Kazpian", "Deadly/Tideborn/Nerien'eth"], ult: "Languid (Front), Destro (Back)", notes: "Be mindful about ulting before the last boss." },
      [MAIN_ROLE_ID.DPS5]: { sets: ["Velothi", "Ansuul/Sul-Xan/Kazpian", "Deadly/Tideborn/Nerien'eth"], ult: "Languid (Front), Destro (Back)", misc: ["Banner"], notes: "Be mindful about ulting before the last boss." },
      [MAIN_ROLE_ID.DPS6]: { sets: ["Velothi", "Ansuul/Sul-Xan/Kazpian", "Deadly/Tideborn/Nerien'eth"], ult: "Languid (Front), Destro (Back)", notes: "Be mindful about ulting before the last boss." },
      [MAIN_ROLE_ID.DPS7]: { sets: ["Velothi", "Ansuul/Sul-Xan/Kazpian", "Deadly/Tideborn/Nerien'eth"], ult: "Languid (Front), Destro (Back)", misc: ["Streak"], notes: "Be mindful about ulting before the last boss." },
      [MAIN_ROLE_ID.DPS8]: { sets: ["Velothi", "Ansuul/Sul-Xan/Kazpian", "Deadly/Tideborn"], ult: "Languid (Front), Destro (Back)", misc: ["Shattering Knife"], notes: "Be mindful about ulting before the last boss." },
      [MAIN_ROLE_ID.H1]:   { sets: ["MA", "PP", "PoE"], ult: "None", misc: ["Crusher"], notes: "Hotkey manual gear swaps." },
      [MAIN_ROLE_ID.H2]:   { sets: ["SPC", "PA", "PoE", "Oze"], ult: "None", misc: ["Crusher"], notes: "Hotkey manual gear swaps." },
      [MAIN_ROLE_ID.MT]:   { sets: ["LE", "Xoryn", "Flex"], ult: "Atro", notes: "Coordinate pulls with OT. Hotkey manual gear swaps." },
      [MAIN_ROLE_ID.OT]:   { sets: ["PW", "Crimson", "Baron"], ult: "Horn", notes: "" }
    },
    buffsDebuffs: [
      { name: "Crimson Oath", owners: [MAIN_ROLE_ID.OT] },
      { name: "Crusher", owners: [MAIN_ROLE_ID.H1, MAIN_ROLE_ID.H2, MAIN_ROLE_ID.MT, MAIN_ROLE_ID.OT] },
      { name: "LE", owners: [MAIN_ROLE_ID.MT] },
      { name: "Major Breach", owners: [MAIN_ROLE_ID.MT, MAIN_ROLE_ID.OT] },
      { name: "Major Resolve", owners: [MAIN_ROLE_ID.MT] },
      { name: "Minor Breach", owners: [MAIN_ROLE_ID.OT] },
      { name: "Minor Brittle", owners: [MAIN_ROLE_ID.OT] },
      { name: "Minor Brutality", owners: [MAIN_ROLE_ID.OT] },
      { name: "Minor Vulnerability", owners: [MAIN_ROLE_ID.OT] },
      { name: "Off Balance", owners: [MAIN_ROLE_ID.H1, MAIN_ROLE_ID.H2, MAIN_ROLE_ID.DPS8] },
      { name: "PA", owners: [MAIN_ROLE_ID.H2] },
      { name: "PW", owners: [MAIN_ROLE_ID.OT] },
      { name: "Slayer", owners: [MAIN_ROLE_ID.H1] },
      { name: "SPC", owners: [MAIN_ROLE_ID.H2] },
      { name: "Xoryn", owners: [MAIN_ROLE_ID.MT] }
    ],
    assignments: []
  }],
  [FIGHT_ID.TWINS, {
    id: FIGHT_ID.TWINS,
    name: "Lylanar & Turlassil (Twins)",
    shortName: "Twins",
    icon: "🔥❄️",
    strategy: {
      phases: [
        {
          name: "Dogs",
          details: [
            `${MAIN_ROLE_ID.MT} Grabs dome. Not ults here. Also a natural ulti-pull is we need ult`,
          ]
        },
        {
          name: "Boss at Center",
          details: [
            `${MAIN_ROLE_ID.OT} starts with ${NPC_ID.TWINS_BOSS}, ${MAIN_ROLE_ID.MT} takes later. ${MAIN_ROLE_ID.OT} stacks wrong-colour ${NPC_ID.TWINS_DOGS} out of group (~1-2 o'clock outside dome).`,
            "Everyone hold ult until Slayer callout.",
            `${ASSIGNMENT_ID.DPS} beam ${NPC_ID.TWINS_WEAPONS} as soon as they spawn.`,
            `${ASSIGNMENT_ID.TWINS_CENTER_DOME_HOLDER} moves dome out of ${NPC_ID.TWINS_BOSS} at 80%, returns for (1) boss channel or (2) 2nd same-colour ${NPC_ID.TWINS_DOGS}.`,
            `When ${NPC_ID.TWINS_DOGS} are stacked, do slayer stacks and drop ult. Ult order: All ${ASSIGNMENT_ID.DPS} → ${MAIN_ROLE_ID.H1} Naz → ${ASSIGNMENT_ID.H2} PP. ${ASSIGNMENT_ID.TANKS} ult at discretion.`,
            `When ${NPC_ID.TWINS_BOSS} starts teleport phase, ${ASSIGNMENT_ID.DPS} tab-target ${NPC_ID.TWINS_BOSS} and note where their orb spawns.`,
          ]
        },
        {
          name: "Teleport Phase",
          details: [
            `${ASSIGNMENT_ID.DPS} go to assigned domes. If freed up, drop DoTs in middle.`,
            `Last ${ASSIGNMENT_ID.DPS} who's holding dome check if there is . If leftover right-colour ${NPC_ID.TWINS_DOGS}, ${ASSIGNMENT_ID.MT} takes them there; DD holds dome until ${NPC_ID.TWINS_DOGS} die.`,
            `MT helps interrupt with Crushing Shock.`,
            "Tip: Look at the orb beside you and take the dome of opposite colour."
          ]
        },
        {
          name: "Execute Phase 1 (Before Swap at 15%)",
          details: [
            `Large side starts: with a Slayer when they are stacked at their conor. Ult order: All ${ASSIGNMENT_ID.DPS} → ${ASSIGNMENT_ID.H1} Naz extend → Tanks ult whenever. DDs ult on CD after.`,
            `${MAIN_ROLE_ID.H1} stays outside dome for jump rescue. ${ASSIGNMENT_ID.TWINS_EXECUTE_DOME_HOLDERS} swap domes on jump/brands. ${ASSIGNMENT_ID.DPS6} grabs first.`,
            `${ASSIGNMENT_ID.TWINS_WEAPON_SLAYER} kills ${NPC_ID.TWINS_WEAPONS} after a mech finishes and calls out when weapon is about to explode`,
            `Small side: ${ASSIGNMENT_ID.H2} takes dome first. She holds PP until she is not holding dome then pops it on large side. Any ${ASSIGNMENT_ID.DPS} permanently on small side can ult on cooldown`,
            `${ASSIGNMENT_ID.MT} calls swaps. ${ASSIGNMENT_ID.TANKS} stack puddles along sides in L-shape pattern. Don't run into DDs doing brands during boss swap. Take dogs with you during swaps.`
          ]
        },
        {
          name: "Side Swap (Large side boss at 15%)",
          details: [
            "Called when large-side ${NPC_ID.TWINS_BOSS} is at 15% and no active mech is happening.",
            `All ${ASSIGNMENT_ID.HEALERS} and ${ASSIGNMENT_ID.DPS} swap sides. ${ASSIGNMENT_ID.TWINS_EXECUTE_DOME_HOLDERS} stay until someone takes dome off them. Tanks always stay until their own swap.`,
            `${ASSIGNMENT_ID.TWINS_EXECUTE_DOME_HOLDERS} drop HoTs in their old dome before leaving.`
          ]
        },
        {
          name: "Execute Phase 2",
          details: [
            `${ASSIGNMENT_ID.DPS} burn. Can largely ignore ${NPC_ID.TWINS_WEAPONS}.`,
            `Final execute: large-side ${NPC_ID.TWINS_BOSS} is dead. ${ASSIGNMENT_ID.TWINS_EXECUTE_DOME_HOLDERS} whose bose is dead will drop dome. MAKE SURE you are not running with dome to the other side.`,
            `Both ${NPC_ID.TWINS_BOSS} must die within 10s of each other or the domes will disappear and it will be a wipe.`
          ]
        }
      ],
      reminders: [
        `Block ${NPC_ID.TWINS_WEAPONS} waves before execute if you are not tank.`,
        `Roll-dodge ${NPC_ID.TWINS_WEAPONS} waves at execute (especially same-colour wave) or if you are tank.`,
        `${ASSIGNMENT_ID.TWINS_EXECUTE_DOME_HOLDERS} during execute: move vertically (entrance↔exit). Only move horizontally if ${NPC_ID.TWINS_BOSS} channels at middle outside dome — be very careful. Do NOT put domes on brands`,
        `${ASSIGNMENT_ID.HEALERS} and ${ASSIGNMENT_ID.DPS} with brands - please make sure you can see a GPS icon on the floor. That is the indicator of where you should go. If you don't have it, download Slip's Sanity's Edge add-on`,
      ]
    },
    builds: {
      [MAIN_ROLE_ID.DPS1]: { sets: ["Null", "Deadly/Tideborn", "Velothi"], ult: "Languid or Standard", misc: ["Banner"], notes: "Banner DD. Take Exit Left Dome during teleport." },
      [MAIN_ROLE_ID.DPS2]: { sets: ["Alkosh", "Deadly/Tideborn", "Velothi"], ult: "Colo", notes: "Alkosh DD. Take Exit Right Dome. Call out Colos to notify Naz." },
      [MAIN_ROLE_ID.DPS3]: { sets: ["Null", "Deadly/Tideborn", "Velothi"], ult: "Languid or Standard", notes: "Take Entrance Right Dome during teleport." },
      [MAIN_ROLE_ID.DPS4]: { sets: ["Null", "Deadly/Tideborn", "Velothi"], ult: "Languid or Standard", notes: "War Machine Left Slayer. Take Entrance Left Dome." },
      [MAIN_ROLE_ID.DPS5]: { sets: ["Null", "Deadly/Tideborn", "Velothi"], ult: "Languid or Standard", misc: ["Banner"], notes: "Banner DD. Bash Exit Left Dome. Backup dome grab." },
      [MAIN_ROLE_ID.DPS6]: { sets: ["Null", "Deadly/Tideborn", "Velothi"], ult: "Languid or Standard", notes: "Bash Exit Right Dome. Backup dome grab. Tab-target boss pre-teleport." },
      [MAIN_ROLE_ID.DPS7]: { sets: ["Null", "Deadly/Tideborn", "Velothi"], ult: "Languid or Standard", notes: "Bash Entrance Right Dome. Backup dome grab." },
      [MAIN_ROLE_ID.DPS8]: { sets: ["Null", "Deadly/Tideborn", "Velothi"], ult: "Languid or Standard", notes: "Take dome when boss comes down. Move dome out at 80%, back in at channel or 2nd right-colour atro. Bash Entrance Left Dome." },
      [MAIN_ROLE_ID.H1]:   { sets: ["SPC", "MA", "PoE", "Naz"], ult: "Horn", misc: ["Weakening"], notes: "Big group. Stay outside dome, grab on jump. Heal OT. Naz extend Colo, PP." },
      [MAIN_ROLE_ID.H2]:   { sets: ["Xoryn", "PP", "PoE"], ult: "Barrier", misc: ["Weakening"], notes: "Small group. Heal MT. PP on CD." },
      [MAIN_ROLE_ID.MT]:   { sets: ["LE", "PA", "Baron"], ult: "Atro / Barrier as needed", notes: "No guard this fight — be tanky. Both tanks run PA. Coordinate boss swaps. Frost Cloak at weapon spawn, teleport, tank swaps, brands/jumps." },
      [MAIN_ROLE_ID.OT]:   { sets: ["PW", "PA", "Baron"], ult: "Horn / Magma Shell as needed", notes: "No guard — be tanky. Both tanks run PA. Take wrong-colour atros slightly out of dome. Magma Shell for execute abuse." }
    },
    buffsDebuffs: [
      { name: "Alkosh", owners: [MAIN_ROLE_ID.DPS2] },
      { name: "Barrier", owners: [MAIN_ROLE_ID.H2] },
      { name: "Crusher", owners: [MAIN_ROLE_ID.MT, MAIN_ROLE_ID.OT] },
      { name: "Horn", owners: [MAIN_ROLE_ID.H1, MAIN_ROLE_ID.OT] },
      { name: "LE", owners: [MAIN_ROLE_ID.MT] },
      { name: "Major Breach", owners: [MAIN_ROLE_ID.MT, MAIN_ROLE_ID.OT] },
      { name: "Major Resolve", owners: [MAIN_ROLE_ID.MT] },
      { name: "Minor Breach", owners: [MAIN_ROLE_ID.MT, MAIN_ROLE_ID.OT] },
      { name: "Minor Brittle", owners: [MAIN_ROLE_ID.OT] },
      { name: "Minor Brutality", owners: [MAIN_ROLE_ID.OT] },
      { name: "Minor Vulnerability", owners: [MAIN_ROLE_ID.OT] },
      { name: "Major Vulnerability", owners: [MAIN_ROLE_ID.DPS2] },
      { name: "Naz", owners: [MAIN_ROLE_ID.H1] },
      { name: "Off Balance", owners: [MAIN_ROLE_ID.H1, MAIN_ROLE_ID.H2] },
      { name: "PA", owners: [MAIN_ROLE_ID.MT, MAIN_ROLE_ID.OT] },
      { name: "PP", owners: [MAIN_ROLE_ID.H2] },
      { name: "PW", owners: [MAIN_ROLE_ID.OT] },
      { name: "Slayer", owners: [MAIN_ROLE_ID.DPS4] },
      { name: "SPC", owners: [MAIN_ROLE_ID.H1] },
      { name: "Weakening", owners: [MAIN_ROLE_ID.H1, MAIN_ROLE_ID.H2] },
      { name: "Xoryn", owners: [MAIN_ROLE_ID.H2] }
    ],
    assignments: [
      ASSIGNMENT_ID.TWINS_GENERAL_ROLES,
      ASSIGNMENT_ID.TWINS_SLAYERS,
      ASSIGNMENT_ID.TWINS_CENTER_DOME_HOLDER,
      ASSIGNMENT_ID.TWINS_TELEPORT,
      ASSIGNMENT_ID.TWINS_EXECUTE,
    ]
  }],
  [FIGHT_ID.MINIS, {
    id: FIGHT_ID.MINIS,
    name: "Sail Ripper & Bow Breaker + Trash Pulls",
    shortName: "Minis",
    icon: "🐦🐢",
    strategy: {
      details: [
        `For trash pulls before ${NPC_ID.SAIL_RIPPER}/${NPC_ID.BOW_BREAKER}, ${ASSIGNMENT_ID.NON_LEVER_TANK} and ${ASSIGNMENT_ID.NON_LEVER_HEALER} are officially solo-tank and solo-heal as ${ASSIGNMENT_ID.LEVERS} are away doing ${LOCATION_ID.TRASH_LEVER}s.`,
        `People not responsible for ${LOCATION_ID.TRASH_LEVER}s wait at exit as soon as trash is dead.`,
        `${ASSIGNMENT_ID.LEVERS} run to ${LOCATION_ID.TRASH_LEVER}s or wait for trash (at discretion). For last ${LOCATION_ID.TRASH_LEVER} set before boss, hotkey gear swap via Wizard's Wardrobe.`,
        `At ${NPC_ID.SAIL_RIPPER}, Slayers and ult-dump will happen when boss flies for the first time.`,
        `Don't ult on ${NPC_ID.BOW_BREAKER} — save for ${NPC_ID.REEF_GUARDIANS} immediately after.`,
        `${ASSIGNMENT_ID.OT} takes boss and first adds since other tank may be late from ${LOCATION_ID.TRASH_LEVER}s.`,
        `${ASSIGNMENT_ID.MT} takes small adds and stacks on boss once pulled into group.`,
      ]
    },
    builds: {
      [MAIN_ROLE_ID.DPS1]: { sets: ["Null", "Deadly/Tideborn", "Velothi"], ult: "Standard", misc: ["Banner"], notes: "Banner DD." },
      [MAIN_ROLE_ID.DPS2]: { sets: ["Alkosh", "Deadly/Tideborn", "Velothi"], ult: "Colo", notes: "Alkosh DD." },
      [MAIN_ROLE_ID.DPS3]: { sets: ["Null", "Deadly/Tideborn", "Velothi"], ult: "Standard", notes: "" },
      [MAIN_ROLE_ID.DPS4]: { sets: ["Null", "Deadly/Tideborn", "Velothi"], ult: "Standard", notes: "" },
      [MAIN_ROLE_ID.DPS5]: { sets: ["Null", "Deadly/Tideborn", "Velothi"], ult: "Standard", misc: ["Banner"], notes: "Banner DD." },
      [MAIN_ROLE_ID.DPS6]: { sets: ["Null", "Deadly/Tideborn", "Velothi"], ult: "Standard", notes: "" },
      [MAIN_ROLE_ID.DPS7]: { sets: ["Null", "Deadly/Tideborn", "Velothi"], ult: "Standard", notes: "Lever duty. Hotkey gear swaps." },
      [MAIN_ROLE_ID.DPS8]: { sets: ["Null", "Deadly/Tideborn", "Velothi"], ult: "Standard", notes: "" },
      [MAIN_ROLE_ID.H1]:   { sets: ["MA", "PP", "Naz"], ult: "Horn", misc: ["Weakening"], notes: "Naz extend." },
      [MAIN_ROLE_ID.H2]:   { sets: ["SPC", "PA", "PoE", "Oze"], ult: "Barrier", misc: ["Weakening"], notes: "Lever duty. Hotkey gear swaps." },
      [MAIN_ROLE_ID.MT]:   { sets: ["LE", "Xoryn", "Baron"], ult: "Atro only", notes: "Lever duty. Race Against Time as needed. Take small adds, stack on boss." },
      [MAIN_ROLE_ID.OT]:   { sets: ["PW", "Crimson", "Encratis"], ult: "Horn", notes: "Boss tank for both Sail Ripper and Bow Breaker. Solo-tank initially since MT may be late from levers. Take boss and first adds." }
    },
    buffsDebuffs: [
      { name: "Alkosh", owners: [MAIN_ROLE_ID.DPS2] },
      { name: "Crimson Oath", owners: [MAIN_ROLE_ID.OT] },
      { name: "Crusher", owners: [MAIN_ROLE_ID.MT, MAIN_ROLE_ID.OT] },
      { name: "Encratis", owners: [MAIN_ROLE_ID.OT] },
      { name: "Horn", owners: [MAIN_ROLE_ID.H1, MAIN_ROLE_ID.OT] },
      { name: "LE", owners: [MAIN_ROLE_ID.MT] },
      { name: "Major Breach", owners: [MAIN_ROLE_ID.MT, MAIN_ROLE_ID.OT] },
      { name: "Major Resolve", owners: [MAIN_ROLE_ID.MT] },
      { name: "Minor Breach", owners: [MAIN_ROLE_ID.OT] },
      { name: "Minor Brittle", owners: [MAIN_ROLE_ID.OT] },
      { name: "Minor Brutality", owners: [MAIN_ROLE_ID.OT] },
      { name: "Minor Vulnerability", owners: [MAIN_ROLE_ID.OT] },
      { name: "Major Vulnerability", owners: [MAIN_ROLE_ID.DPS2] },
      { name: "Naz", owners: [MAIN_ROLE_ID.H1] },
      { name: "Off Balance", owners: [MAIN_ROLE_ID.H1, MAIN_ROLE_ID.H2] },
      { name: "PA", owners: [MAIN_ROLE_ID.H2] },
      { name: "PP", owners: [MAIN_ROLE_ID.H1] },
      { name: "PW", owners: [MAIN_ROLE_ID.OT] },
      { name: "Slayer", owners: [MAIN_ROLE_ID.H1] },
      { name: "SPC", owners: [MAIN_ROLE_ID.H2] },
      { name: "Weakening", owners: [MAIN_ROLE_ID.H1, MAIN_ROLE_ID.H2] },
      { name: "Xoryn", owners: [MAIN_ROLE_ID.MT] }
    ],
    assignments: [
      ASSIGNMENT_ID.MINIS_GENERAL_ROLES,
      ASSIGNMENT_ID.REEF_GUARDIAN_SLAYERS,
      ASSIGNMENT_ID.LEVERS,
    ]
  }],
  [FIGHT_ID.REEF, {
    id: FIGHT_ID.REEF,
    name: "Reef Guardian",
    shortName: "Reef",
    icon: "🪸",
    strategy: {
      details: [
        "This is a pretty complicated fight. Please make sure you understand the mechanics and the flow.",
        `${NPC_ID.REEF_GUARDIANS} never lose taunt — they always follow the last person who taunted them.`,
        `${ASSIGNMENT_ID.REEF_MT_TANK} ults whenever he needs.`,
        `The expected order of Reefs should be clockwised as followed: ${LOCATION_ID.REEF_CHALICE} (${NPC_ID.REEF_GUARDIAN_LARGE}) → ${LOCATION_ID.REEF_CROSSBONES} (${NPC_ID.REEF_GUARDIAN_MEDIUM_1}) → ${LOCATION_ID.REEF_SKULL} (${NPC_ID.REEF_GUARDIAN_SMALL_1}) → ${LOCATION_ID.REEF_ANCHOR} (${NPC_ID.REEF_GUARDIAN_MEDIUM_2}) → ${LOCATION_ID.REEF_WHEEL} (${NPC_ID.REEF_GUARDIAN_SMALL_2}).`,
      ],
      phases: [
        {
          name: "Before Pull",
          details: [
            `${ASSIGNMENT_ID.DPS} that are NOT ${ASSIGNMENT_ID.REEF_GROUP_1} and ${ASSIGNMENT_ID.REEF_FIRST_CROSSBONES} go downstairs to ${LOCATION_ID.REEF_CHALICE}.`,
          ]
        },
        {
          name: "Chalice - Start",
          details: [
            "Everyone hold ult.",
            `${ASSIGNMENT_ID.REEF_OT_TANK} taunts ${NPC_ID.REEF_GUARDIAN_LARGE}. ${ASSIGNMENT_ID.REEF_MT_TANK} taunts ${NPC_ID.REEF_GUARDIAN_MEDIUM_1} when ${NPC_ID.REEF_GUARDIAN_LARGE} splits at 99% and stacks it onto the ${NPC_ID.REEF_GUARDIAN_LARGE} that is channelling.`,
            `Downstairs ${ASSIGNMENT_ID.DPS} kill heart at ${LOCATION_ID.REEF_CHALICE} and come up.`,
            `Upstairs ${ASSIGNMENT_ID.DPS} burn ${NPC_ID.REEF_GUARDIAN_MEDIUM}, ${NPC_ID.REEF_GUARDIAN_SMALL} that spawn. Note: ${ASSIGNMENT_ID.REEF_MT_TANK} should take run to ${LOCATION_ID.REEF_CROSSBONES} (right side) when ${NPC_ID.REEF_GUARDIAN_SMALL_1} gets close to 85% or when ${LOCATION_ID.REEF_CHALICE} mage is dead`,
            `${ASSIGNMENT_ID.REEF_OT_TANK} takes ${NPC_ID.REEF_GUARDIAN_BEAR}, ${NPC_ID.REEF_GUARDIAN_MAGE}, and ${NPC_ID.REEF_GUARDIAN_CAT} when ${LOCATION_ID.REEF_CHALICE} clears. The ${NPC_ID.REEF_GUARDIAN_LARGE} will not need re-taunt and it will stand for a little while`,
            `Slayer ult: ${ASSIGNMENT_ID.DPS} + ${ASSIGNMENT_ID.REEF_OT_TANK} → ${ASSIGNMENT_ID.REEF_OT_HEALER} Naz → ${ASSIGNMENT_ID.REEF_MT_HEALER} PP.`
          ]
        },
        {
          name: "Crossbones",
          details: [
            `${ASSIGNMENT_ID.REEF_OT_TANK} takes ${NPC_ID.REEF_GUARDIAN_LARGE} (no re-taunt needed) and puts it on left side of the reef.`,
            `${ASSIGNMENT_ID.REEF_MT_TANK} stacks all ${NPC_ID.REEF_GUARDIAN_SMALL} and ${NPC_ID.REEF_GUARDIAN_MEDIUM} on right side.`,
            `Upstairs ${ASSIGNMENT_ID.DPS} parse ${NPC_ID.REEF_GUARDIAN_LARGE} on left side ONLY. Right side does NOT get burned to avoid pushing reef spawns. No ults.`,
            `When ${LOCATION_ID.REEF_CROSSBONES} heart is at 40%:  informs group. ${ASSIGNMENT_ID.REEF_FIRST_CROSSBONES} takes ${NPC_ID.REEF_GUARDIAN_LARGE} into right stack. Upstairs ${ASSIGNMENT_ID.DPS} lay DoTs on right side.`,
            `When ${LOCATION_ID.REEF_CROSSBONES} heart clears: ${ASSIGNMENT_ID.REEF_FIRST_CROSSBONES} comes up. ${ASSIGNMENT_ID.REEF_OT_TANK} takes ${NPC_ID.REEF_GUARDIAN_MAGE}, ${NPC_ID.REEF_GUARDIAN_BEAR}, and ${NPC_ID.REEF_GUARDIAN_CAT}. ${ASSIGNMENT_ID.REEF_GROUP_1} proceeds to ${LOCATION_ID.REEF_SKULL}.`,
            `Ult dump when ${NPC_ID.REEF_GUARDIAN_MAGE} is into group: ${ASSIGNMENT_ID.DPS} and ${ASSIGNMENT_ID.REEF_OT_TANK} ult → ${MAIN_ROLE_ID.H1} Naz → ${MAIN_ROLE_ID.H2} PP.`
          ]
        },
        {
          name: "General Pattern (After Crossbones)",
          details: [
            `Upstairs ${ASSIGNMENT_ID.DPS} stays at a reef until its ${NPC_ID.REEF_GUARDIAN_MAGE} spawns and is killed (removes need for OOT), then goes clockwise to next reef.`,
            `${ASSIGNMENT_ID.REEF_OT_TANK} stacks ${NPC_ID.REEF_GUARDIANS} on right side of a reef. Ults whenever.`,
            `${ASSIGNMENT_ID.REEF_OT_TANK} watches for adds whenever a reef clears. Grab ${NPC_ID.REEF_GUARDIAN_MAGE}, ${NPC_ID.REEF_GUARDIAN_BEAR}, and ${NPC_ID.REEF_GUARDIAN_CAT} immediately. Rubberbands ${NPC_ID.REEF_GUARDIAN_MAGE} into group.`,
            `${ASSIGNMENT_ID.REEF_MT_HEALER} focuses group and ${ASSIGNMENT_ID.REEF_OT_TANK}. ${ASSIGNMENT_ID.REEF_MT_HEALER} pocket heals ${ASSIGNMENT_ID.REEF_MT_TANK}.`,
            `Slayer and PP called by ${ASSIGNMENT_ID.REEF_LEFT_SLAYER_PROVIDER} and ${ASSIGNMENT_ID.REEF_RIGHT_SLAYER_PROVIDER}. Timing: when enemies are stacked, not while running.`,
            `Criteria to move to next reef: (1) 2 active channels in reefs after current one, OR (2) ${NPC_ID.REEF_GUARDIAN_MAGE} of current reef is dead. ${ASSIGNMENT_ID.REEF_MT_TANK} and RL decide.`,
            "The idea: Each Reef Group does 2 hearts in sequence instead of 1."
          ]
        },
        {
          name: "Backward Reefs",
          details: [
            `If a boss goes counter-clockwise to channel (e.g. ${LOCATION_ID.REEF_CROSSBONES}→${LOCATION_ID.REEF_CROWN}), it's a 'backwards' reef. This usually happens when ${NPC_ID.REEF_GUARDIAN_MEDIUM_2} and ${NPC_ID.REEF_GUARDIAN_SMALL_1} both run to channel at around the same time.`,
            `${ASSIGNMENT_ID.REEF_BACKUP} go down immediately to kill the heart. Note: Check your parasite cooldown if you are ${ASSIGNMENT_ID.REEF_FIRST_CROSSBONES}.`,
            `${ASSIGNMENT_ID.REEF_OT_TANK} must watch for ${NPC_ID.REEF_GUARDIAN_MAGE} and animals spawned far away after a backwards reef clears.`
          ]
        },
                {
          name: "General flow of the fight",
          details: [
            `There are 5 ${NPC_ID.REEF_GUARDIANS} in total: ${NPC_ID.REEF_GUARDIAN_LARGE}, ${NPC_ID.REEF_GUARDIAN_MEDIUM_1}, ${NPC_ID.REEF_GUARDIAN_SMALL_1}, ${NPC_ID.REEF_GUARDIAN_MEDIUM_2}, and ${NPC_ID.REEF_GUARDIAN_SMALL_2}. They spawn in that order. ${NPC_ID.REEF_GUARDIAN_LARGE} splits to ${NPC_ID.REEF_GUARDIAN_MEDIUM_1} and ${NPC_ID.REEF_GUARDIAN_MEDIUM_2} at 99% (start of fight) and 80% respectively. ${NPC_ID.REEF_GUARDIAN_MEDIUM_1} and ${NPC_ID.REEF_GUARDIAN_MEDIUM_2} will each split into ${NPC_ID.REEF_GUARDIAN_SMALL_1} and ${NPC_ID.REEF_GUARDIAN_SMALL_2} at 80%.`,
            `${NPC_ID.REEF_GUARDIANS} will run to a reef to channel over the course of the fight. They always run to the unoccupied reef closest to them. They will run at some health thresholds and on some unspecified timer. What's known is that ${NPC_ID.REEF_GUARDIAN_MEDIUM_1} run at 75% and ${NPC_ID.REEF_GUARDIAN_SMALL} run at 80%. They can also run 30 seconds after they spawn even if they are still above 80% health.`,
            `A major part of the fight is controlling when and where the ${NPC_ID.REEF_GUARDIANS} channels. This is done by holding damage on some ${NPC_ID.REEF_GUARDIANS} at certain time points and to re-position the group periodically to force the ${NPC_ID.REEF_GUARDIANS} to channel at the reefs we wanted.`,
            `The group will always be positioned at the earliest channeling reef until that reef clears and the ${NPC_ID.REEF_GUARDIAN_MAGE} is dead.`,
            `The group starts at ${LOCATION_ID.REEF_CHALICE} because that is where ${NPC_ID.REEF_GUARDIAN_LARGE} will channel immediately.`,
            `The expected order of Reefs should be clockwised as followed: ${LOCATION_ID.REEF_CHALICE} (${NPC_ID.REEF_GUARDIAN_LARGE}) → ${LOCATION_ID.REEF_CROSSBONES} (${NPC_ID.REEF_GUARDIAN_MEDIUM_1}) → ${LOCATION_ID.REEF_SKULL} (${NPC_ID.REEF_GUARDIAN_SMALL_1}) → ${LOCATION_ID.REEF_ANCHOR} (${NPC_ID.REEF_GUARDIAN_MEDIUM_2}) → ${LOCATION_ID.REEF_WHEEL} (${NPC_ID.REEF_GUARDIAN_SMALL_2}).`,
            `${LOCATION_ID.REEF_CROSSBONES} is the critical part of the fight. The group needs to ensure ${NPC_ID.REEF_GUARDIAN_SMALL_1} gets pushed to ${LOCATION_ID.REEF_SKULL} shortly after ${LOCATION_ID.REEF_CROSSBONES} clears. Afterwards, the group must quickly go to ${LOCATION_ID.REEF_SKULL} and push ${NPC_ID.REEF_GUARDIAN_MEDIUM_2} to ${LOCATION_ID.REEF_ANCHOR}.`,
            `The key of this fight is to make sure ${NPC_ID.REEF_GUARDIAN_SMALL_1} and ${NPC_ID.REEF_GUARDIAN_MEDIUM_2} do not both run to channel before transition to ${LOCATION_ID.REEF_SKULL}. The fight can be come very bad if one of the two runs backwards to ${LOCATION_ID.REEF_CHALICE} or ${LOCATION_ID.REEF_CROWN}.`,
            `There are two factors that can be used (1) Pushing ${NPC_ID.REEF_GUARDIAN_SMALL_1} to channel appears to delay ${NPC_ID.REEF_GUARDIAN_MEDIUM_2}'s own channel and (2) delaying ${NPC_ID.REEF_GUARDIAN_MEDIUM_2}'s spawn from ${NPC_ID.REEF_GUARDIAN_LARGE} until ${LOCATION_ID.REEF_CHALICE} clears will also buy the group time to reposition to ${LOCATION_ID.REEF_SKULL} before ${NPC_ID.REEF_GUARDIAN_MEDIUM_2} channels.`,
            `High damage groups: They usually have ${NPC_ID.REEF_GUARDIAN_SMALL_1} and ${NPC_ID.REEF_GUARDIAN_MEDIUM_2} pushed out when ${LOCATION_ID.REEF_CHALICE} ${NPC_ID.REEF_GUARDIAN_MAGE} is dead. They should try to kill ${NPC_ID.REEF_GUARDIAN_LARGE} at ${LOCATION_ID.REEF_CROSSBONES} and Medium at ${LOCATION_ID.REEF_SKULL}`,
            `Lower damage groups: They usually only have ${NPC_ID.REEF_GUARDIAN_SMALL_1} pushed out when ${LOCATION_ID.REEF_CHALICE} ${NPC_ID.REEF_GUARDIAN_MAGE} is dead. They should stop burning ${NPC_ID.REEF_GUARDIAN_LARGE} when ${NPC_ID.REEF_GUARDIAN_MAGE} is dead and push ${NPC_ID.REEF_GUARDIAN_SMALL_1} at ${LOCATION_ID.REEF_CROSSBONES}. Then push out ${NPC_ID.REEF_GUARDIAN_MEDIUM_2} at ${LOCATION_ID.REEF_SKULL} and try to kill ${NPC_ID.REEF_GUARDIAN_LARGE} and ${NPC_ID.REEF_GUARDIAN_MEDIUM_1} at either ${LOCATION_ID.REEF_SKULL} or ${LOCATION_ID.REEF_ANCHOR}.`,
            `Rough illustration of the fight<img src="../resources/dsr/reef-guardian-movement.png" alt="Reef Guardian Movement Map" style="max-width: 100%; height: auto; margin-top: 0.5rem; border-radius: 4px; border: 1px solid var(--border);">`

          ]
        },
      ]
    },
    builds: {
      [MAIN_ROLE_ID.DPS1]: { sets: ["Kazpian/Whorl/Ansuul", "Tideborn"], misc: ["Major Breach", "Banner"], ult: "Standard", notes: "Reef Group 1. Bring Major Breach. Start upstairs." },
      [MAIN_ROLE_ID.DPS2]: { sets: ["Alkosh", "Deadly/Tideborn/Nerien'eth"], ult: "Colo", notes: "Alkosh DD. Start at Chalice. Permanent upstairs after." },
      [MAIN_ROLE_ID.DPS3]: { sets: ["Kazpian/Whorl/Ansuul", "Deadly/Tideborn/Nerien'eth"], ult: "Standard", notes: "Reef backup (first). Start at Chalice." },
      [MAIN_ROLE_ID.DPS4]: { sets: ["Kazpian/Whorl/Ansuul", "Tideborn"], ult: "Standard", notes: "Reef Group 1. Start upstairs." },
      [MAIN_ROLE_ID.DPS5]: { sets: ["Kazpian/Whorl/Ansuul", "Deadly/Tideborn/Nerien'eth"], ult: "Standard", notes: "Reef backup (second). Start at Chalice." },
      [MAIN_ROLE_ID.DPS6]: { sets: ["Kazpian/Whorl/Ansuul", "Tideborn"], misc: ["Major Breach", "Hurricane"], ult: "Standard", notes: "Reef Group 2. Bring Major Breach. Start at Chalice." },
      [MAIN_ROLE_ID.DPS7]: { sets: ["Kazpian/Whorl/Ansuul", "Tideborn"], misc: ["Hurricane"], ult: "Standard", notes: "Reef Group 2. Start at Chalice." },
      [MAIN_ROLE_ID.DPS8]: { sets: ["Kazpian/Whorl/Ansuul", "Deadly/Tideborn/Nerien'eth"], ult: "Standard", misc: ["Banner"], notes: "Start upstairs. Do first Crossbones. Can slot self-heal for portal." },
      [MAIN_ROLE_ID.H1]:   { sets: ["SPC", "PA", "PoE", "Naz"], ult: "Horn", misc: ["Crusher"], notes: "Heal group and MT. Naz extend Colo." },
      [MAIN_ROLE_ID.H2]:   { sets: ["MA", "PP", "PoE"], ult: "Barrier", misc: ["Crusher"], notes: "Heal OT. PP + Slayer. Time PP after OT ult. Major + Minor Expedition on move. Rubberband mage into group if MT requests." },
      [MAIN_ROLE_ID.MT]:   { sets: ["LE", "WM", "Baron"], ult: "Atro only", notes: "Watch for bears/cats on every portal clear. Taunt Large Guardian. Rubberband mages into group. Frost Cloak at reef clears and acid reflux. Left Slayer with 3s countdown." },
      [MAIN_ROLE_ID.OT]:   { sets: ["PW", "Flex", "Baron/Encratis/Selfish"], ult: "Selfish ults", misc: ["Ele Sus"], notes: "Dictates group stack position. Stack on right side of reef. Race Against Time. Don't overstay — avoid backwards mediums/smalls." }
    },
    buffsDebuffs: [
      { name: "Alkosh", owners: [MAIN_ROLE_ID.DPS2] },
      { name: "Barrier", owners: [MAIN_ROLE_ID.H2] },
      { name: "Crusher", owners: [MAIN_ROLE_ID.H1, MAIN_ROLE_ID.H2, MAIN_ROLE_ID.MT, MAIN_ROLE_ID.OT] },
      { name: "Expedition (Major + Minor)", owners: [MAIN_ROLE_ID.H2] },
      { name: "Horn", owners: [MAIN_ROLE_ID.H1] },
      { name: "LE", owners: [MAIN_ROLE_ID.MT] },
      { name: "Major Breach", owners: [MAIN_ROLE_ID.MT, MAIN_ROLE_ID.OT] },
      { name: "Major Breach (portals)", owners: [MAIN_ROLE_ID.DPS1, MAIN_ROLE_ID.DPS6] },
      { name: "Major Resolve", owners: [MAIN_ROLE_ID.MT] },
      { name: "Minor Breach", owners: [MAIN_ROLE_ID.MT, MAIN_ROLE_ID.OT] },
      { name: "Minor Brittle", owners: [MAIN_ROLE_ID.OT] },
      { name: "Minor Brutality", owners: [MAIN_ROLE_ID.OT] },
      { name: "Minor Vulnerability", owners: [MAIN_ROLE_ID.OT] },
      { name: "Major Vulnerability", owners: [MAIN_ROLE_ID.DPS2] },
      { name: "Naz", owners: [MAIN_ROLE_ID.H1] },
      { name: "Off Balance", owners: [MAIN_ROLE_ID.H1, MAIN_ROLE_ID.H2] },
      { name: "PA", owners: [MAIN_ROLE_ID.H1] },
      { name: "PP", owners: [MAIN_ROLE_ID.H2] },
      { name: "PW", owners: [MAIN_ROLE_ID.OT] },
      { name: "Slayer", owners: [MAIN_ROLE_ID.MT, MAIN_ROLE_ID.H2] },
      { name: "SPC", owners: [MAIN_ROLE_ID.H1] }
    ],
    assignments: [
      ASSIGNMENT_ID.REEF_GENERAL_ROLES,
      ASSIGNMENT_ID.REEF_GROUPS,
      ASSIGNMENT_ID.REEF_GUARDIAN_SLAYERS
    ]
  }],
  [FIGHT_ID.TALERIA, {
    id: FIGHT_ID.TALERIA,
    name: "Tideborn Taleria",
    shortName: "Taleria",
    icon: "🌊",
    strategy: {
      details: [
        `Drop DoTs on ${NPC_ID.TALERIA_BOSS} as she spawns.`,
        "Ult dump: DDs → OT (front) and H2 (back) proc Slayer + PP.",
        "H1 waits for Naz extend at Maelstrom when first Barrier runs out."
      ],
      phases: [
        {
          name: "While Not in Winter Storm",
          details: [
            ` kites slam slightly out of stack but everyone should watch and out of slams.`,
            `Waves: If you are VERY certain ${ASSIGNMENT_ID.TALERIA_OT_TANK}'s wave is not on you, keep parsing. Otherwise, roll dodge.`,
            "Maelstrom: Keep parsing until addon tells you to roll-dodge, then roll-dodge.",
            `Matrons: ${ASSIGNMENT_ID.DPS} will kill them if in range, DoT or beam ${NPC_ID.TALERIA_SIRENS}. Don't chase far ones. ${ASSIGNMENT_ID.TALERIA_OT_TANK} will taunt them.`
          ]
        },
        {
          name: "Winter Storm",
          details: [
            `Group leads ${ASSIGNMENT_ID.TALERIA_MT_TANK} before Maelstrom (so ${ASSIGNMENT_ID.TALERIA_MT_TANK} doesn't move during Maelstrom). ${ASSIGNMENT_ID.TALERIA_MT_TANK} leads after Maelstrom (to get space).`,
            `If Winter Storm spawns at ${ASSIGNMENT_ID.TALERIA_MT_TANK}'s side, ${ASSIGNMENT_ID.TALERIA_MT_TANK} and group roll through each other so group leads.`,
            "Maelstrom usually happens once at 4-5 clock units from origin. Stack tight. Ult-dump sequence usually happens at this Maelstrom.",
            `While running: Stay well ahead while parsing ${NPC_ID.TALERIA_BOSS}. ${ASSIGNMENT_ID.H2} provides Major and Minor Expedition.`,
            `Matrons: ${ASSIGNMENT_ID.TALERIA_OT_TANK} Ele Sus, DDs put DoTs and beam backwards from ${NPC_ID.TALERIA_BOSS} to kill.`
          ]
        },
        {
          name: "First Bridge Spawns",
          details: [
            "Watch Maelstrom timer. If within 10 seconds: stay for Maelstrom first.",
            `${ASSIGNMENT_ID.TALERIA_BRIDGE_DPS} go to their ${LOCATION_ID.TALERIA_BRIDGE} (roll dodge through ${ASSIGNMENT_ID.TALERIA_MT_TANK} if needed to avoid cleave).`,
            "Group moves to dome next to ${LOCATION_ID.TALERIA_BRIDGE} (coloured icon on map).",
            `Unless dome is very close (e.g. ${LOCATION_ID.TALERIA_YELLOW_DOME} being first bridge), ${ASSIGNMENT_ID.TALERIA_MT_TANK} always leads group to dome destination to ensure everyone goes same direction and ${ASSIGNMENT_ID.TALERIA_MT_TANK} gets heals.`,
            `Everyone but ${ASSIGNMENT_ID.TALERIA_MT_TANK} hold ults.`
          ]
        },
        {
          name: "Green Dome (Resource Drain)",
          details: [
            "Drains resources and ult. Drop any ult ASAP.",
            "Watch resources (especially stamina). HA/potion/siphoning attacks for stam for RD/break free.",
            `${ASSIGNMENT_ID.HEALERS} can forget PoE uptimes to play safe.`,
            `Risk: ${ASSIGNMENT_ID.HEALERS} running out of mag and people dying to Siren lures.`
          ]
        },
        {
          name: "Purple Dome (Heal Debuff)",
          details: [
            `Heal debuff active. ${ASSIGNMENT_ID.HEALERS} and ${ASSIGNMENT_ID.TALERIA_MT_TANK} be extra careful with health.`,
            "Maelstrom + purple mage can be deadly. Healers may alternate Barriers on Maelstrom.",
            `Don't be near the purple mage.`
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
            `${ASSIGNMENT_ID.TALERIA_MT_TANK} gets ${NPC_ID.TALERIA_MAGE} and stacks on ${NPC_ID.TALERIA_BOSS}.`,
            "After mage dies, group gets out of dome to clear debuff.",
            "If second ${LOCATION_ID.TALERIA_BRIDGE} already spawned, use movement heuristic (Maelstrom timer, destination).",
            `If not yet spawned, ${ASSIGNMENT_ID.TALERIA_MT_TANK} moves over a bit to let group exit dome.`
          ]
        },
        {
          name: "Execute (Skip Last Bridge)",
          details: [
            "Group should always skip last ${LOCATION_ID.TALERIA_BRIDGE} unless doing Full Tour Achievement.",
            `Skipped bridges apply their debuff until ${NPC_ID.TALERIA_BOSS} dies — be mindful.`,
          ]
        },
        {
          name: "Execute (Skip 2 Bridges) - We probably won't do this",
          details: [
            "Skipping 2 ${LOCATION_ID.TALERIA_BRIDGE}s requires ~1.06M group DPS (avg 132.5K per DD). Group holds ult, stops FOO/DoTs at 41%, stops damage at 38%.",
            `${ASSIGNMENT_ID.OT} takes ${NPC_ID.TALERIA_MAGE} out of group and ${ASSIGNMENT_ID.DPS} kill the mage without cleaving ${NPC_ID.TALERIA_BOSS}.`,
            "Burn when: ${LOCATION_ID.TALERIA_BRIDGE} clears AND either Winter Storm or Maelstrom happens.",
            "Trick: Wait for Winter Storm before pushing ${LOCATION_ID.TALERIA_BRIDGE} 1 to extend time before next Winter Storm."
          ]
        }
      ]
    },
    builds: {
      [MAIN_ROLE_ID.DPS1]: { sets: ["Null", "Deadly/Tideborn/Nerien'eth", "Velothi"], ult: "Standard", misc: ["Banner"], notes: "Stay with group. DoT and cleave sirens." },
      [MAIN_ROLE_ID.DPS2]: { sets: ["Null", "Deadly/Tideborn/Nerien'eth", "Velothi"], ult: "Colo", notes: "No Alkosh on Taleria — use parse trial set. Keep Colo. Stay with group." },
      [MAIN_ROLE_ID.DPS3]: { sets: ["Null", "Deadly/Tideborn/Nerien'eth", "Velothi"], ult: "Standard", notes: "Bridge backup #1. Slot self-heal/shield for bridge. Bring extra pen." },
      [MAIN_ROLE_ID.DPS4]: { sets: ["Null", "Deadly/Tideborn/Nerien'eth", "Velothi"], ult: "Standard", notes: "Stay with group. DoT and cleave sirens." },
      [MAIN_ROLE_ID.DPS5]: { sets: ["Null", "Deadly/Tideborn/Nerien'eth", "Velothi"], ult: "Standard", misc: ["Banner"], notes: "Banner DD. 2nd bridge backup." },
      [MAIN_ROLE_ID.DPS6]: { sets: ["Null", "Tideborn", "Velothi"], ult: "Standard", misc: ["Major Breach", "Hurricane"], notes: "Bridge DD. Slot self-heal and/or shield. Bring extra pen." },
      [MAIN_ROLE_ID.DPS7]: { sets: ["Null", "Tideborn", "Velothi"], ult: "Standard", misc: ["Hurricane"], notes: "Bridge DD. Slot self-heal and/or shield. Bring extra pen." },
      [MAIN_ROLE_ID.DPS8]: { sets: ["Null", "Deadly/Tideborn/Nerien'eth", "Velothi"], ult: "Standard", notes: "Bridge backup. DoT and cleave sirens." },
      [MAIN_ROLE_ID.H1]:   { sets: ["SPC", "PA", "PoE", "Naz"], ult: "Barrier", misc: ["Weakening"], notes: "Seeds on MT. Naz extend Colo. Barrier without waiting for Colo if group in danger." },
      [MAIN_ROLE_ID.H2]:   { sets: ["MA", "PP", "PoE"], ult: "Barrier", misc: ["Weakening"], notes: "PP + Back Slayer. Focus healing OT (especially with Behemoth). Occasional HoT/synergy to MT. Major + Minor Expedition on move." },
      [MAIN_ROLE_ID.MT]:   { sets: ["LE", "Xoryn/EC", "Trem"], ult: "Selfish", notes: "Taunt Taleria, focus surviving. Be selfish. Go into group for Maelstrom as needed. Keep ~1.5 clock units from group. Frost Cloak at Maelstrom and end of bridge when mage spawns." },
      [MAIN_ROLE_ID.OT]:   { sets: ["PW", "WM", "Baron"], ult: "Horn", misc: ["Ele Sus"], notes: "Behemoth is #1 priority — perma-block while alive. Stack mage close to Taleria. Ele Sus and taunt in-range matrons. Break free from Siren lure before Behemoth kills you. Proc Slayer (front) and ultigen. Stagger only if no mages/behemoths." }
    },
    buffsDebuffs: [
      { name: "Barrier", owners: [MAIN_ROLE_ID.H1, MAIN_ROLE_ID.H2] },
      { name: "Crusher", owners: [MAIN_ROLE_ID.MT, MAIN_ROLE_ID.OT] },
      { name: "Expedition (Major + Minor)", owners: [MAIN_ROLE_ID.H2] },
      { name: "Horn", owners: [MAIN_ROLE_ID.OT] },
      { name: "LE", owners: [MAIN_ROLE_ID.MT] },
      { name: "Major Breach", owners: [MAIN_ROLE_ID.MT, MAIN_ROLE_ID.OT] },
      { name: "Major Resolve", owners: [MAIN_ROLE_ID.MT] },
      { name: "Minor Breach", owners: [MAIN_ROLE_ID.MT, MAIN_ROLE_ID.OT] },
      { name: "Major Vulnerability", owners: [MAIN_ROLE_ID.DPS2] },
      { name: "Minor Vulnerability", owners: [MAIN_ROLE_ID.OT] },
      { name: "Minor Brittle", owners: [MAIN_ROLE_ID.OT] },
      { name: "Minor Brutality", owners: [MAIN_ROLE_ID.OT] },
      { name: "Naz", owners: [MAIN_ROLE_ID.H1] },
      { name: "Off Balance", owners: [MAIN_ROLE_ID.H1, MAIN_ROLE_ID.H2] },
      { name: "PA", owners: [MAIN_ROLE_ID.H1] },
      { name: "PP", owners: [MAIN_ROLE_ID.H2] },
      { name: "PW", owners: [MAIN_ROLE_ID.OT] },
      { name: "Slayer", owners: [MAIN_ROLE_ID.OT, MAIN_ROLE_ID.H2] },
      { name: "SPC", owners: [MAIN_ROLE_ID.H1] },
      { name: "Tremorscale", owners: [MAIN_ROLE_ID.MT] },
      { name: "Weakening", owners: [MAIN_ROLE_ID.H1, MAIN_ROLE_ID.H2] },
      { name: "Xoryn", owners: [MAIN_ROLE_ID.MT] }
    ],
    assignments: [
      ASSIGNMENT_ID.TALERIA_GENERAL_ROLES,
      ASSIGNMENT_ID.TALERIA_BRIDGE,
      ASSIGNMENT_ID.TALERIA_SLAYERS
    ]
  }]
]);