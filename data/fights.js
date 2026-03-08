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
            `${MAIN_ROLE_ID.MT} Grabs dome. Not ults here. Also a natural ulti-pull if we need ult`,
          ]
        },
        {
          name: "Boss at Center",
          details: [
            `${MAIN_ROLE_ID.OT} starts with ${NPC_ID.TWINS_BOSS}. After getting debuff, let ${MAIN_ROLE_ID.MT} take over. Then focus on stacks wrong-colour atronachs out of group (~2 o'clock).`,
            "Everyone hold ult until Slayer callout.",
            `${ASSIGNMENT_ID.DPS} beam ${NPC_ID.TWINS_WEAPONS} as soon as they spawn.`,
            `${ASSIGNMENT_ID.TWINS_CENTER_DOME_HOLDER} moves dome out of ${NPC_ID.TWINS_BOSS} at 80%, returns for (1) boss channel or (2) 2nd same-colour atronachs.`,
            `When atronachs are stacked, do slayer stacks and drop ult. Ult order: All ${ASSIGNMENT_ID.DPS} → ${MAIN_ROLE_ID.H1} Naz → ${ASSIGNMENT_ID.H2} PP. ${ASSIGNMENT_ID.TANKS} ult at discretion.`,
            `<b>Pre-Teleport:</b> ${ASSIGNMENT_ID.DPS} tab-target ${NPC_ID.TWINS_BOSS} to see where your orb spawns.`,
          ]
        },
        {
          name: "Teleport Phase",
          details: [
            `<b>Go to assigned domes.</b> Tip: Look at the orb beside you and take the dome of the <b>opposite</b> colour.`,
            `${MAIN_ROLE_ID.MT} helps interrupt with Crushing Shock.`,
            `<b>Last Dome Holder:</b> Check for leftover right-colour atronachs. If any remain, wait for ${MAIN_ROLE_ID.MT} to stack them on you before dropping dome.`
          ]
        },
        {
          name: "Execute Phase 1 (Before Swap at 15%)",
          details: [
            `<b>Large Side:</b> Start with Slayer. Ult order: ${ASSIGNMENT_ID.DPS} → ${ASSIGNMENT_ID.H1} Naz. Then ult on CD.`,
            `<b>Dome Swaps:</b> ${ASSIGNMENT_ID.TWINS_EXECUTE_DOME_HOLDERS} swap on jump/brands. ${MAIN_ROLE_ID.H1} stays outside for rescue.`,
            `<b>Small Side:</b> ${ASSIGNMENT_ID.H2} takes dome first. Pops PP on large side when free.`,
            `<b>Tanks:</b> Stack puddles in L-shape along edges. Do not run into Brands during swaps. Take dogs with you on swap.`
          ]
        },
        {
          name: "Side Swap (Large side boss at 15%)",
          details: [
            "<b>Trigger:</b> Large-side boss at 15% (and no active mechanics).",
            `All ${ASSIGNMENT_ID.HEALERS} and ${ASSIGNMENT_ID.DPS} swap sides.`,
            `<b>Dome Holders:</b> Stay until someone takes dome, then swap.`,
            `<b>Tanks:</b> You are not part of this. You follow your own boss-swap schedule.`
          ]
        },
        {
          name: "Execute Phase 2",
          details: [
            `Same as Execute Phase 1. We most likely we ignore weapons unless they spawn close to domes`,
            `<b>Final Execute:</b> When Large-side boss dies, that Dome Holder drops dome immediately. <b>Do NOT run to the other side with the dome.</b>`,
            `Both bosses must die within 10s of each other.`
          ]
        }
      ],
      reminders: [
        `<b>Waves:</b> Block before execute. Roll-dodge during execute.`,
        `<b>Dome Movement:</b> Move vertically (Entrance ↔ Exit). Never put domes on Brands.`,
        `<b>Brands:</b> Look for the GPS icon on the floor (Slip's Addon).`,
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
      summary: `Key to success: Reef Guardians should channel in this order: <b>Chalice → Crossbones → Skull → Anchor → Wheel</b>. ${NPC_ID.REEF_GUARDIAN_MEDIUM_2} and ${NPC_ID.REEF_GUARDIAN_SMALL_1} must not both run at ${LOCATION_ID.REEF_CROSSBONES}.`,
      details: [
        `${NPC_ID.REEF_GUARDIANS} <b>never lose taunt</b> — they always follow the last person who taunted them.`,
        `<button class="show-map-btn" data-img-src="../resources/dsr/reef-guardian-movement.png">Click to see movement map</button>`
      ],
      phases: [
        {
          name: "Before Pull",
          details: [
            `All ${ASSIGNMENT_ID.DPS} (except ${ASSIGNMENT_ID.REEF_GROUP_1} & ${ASSIGNMENT_ID.REEF_FIRST_CROSSBONES}) go downstairs to ${LOCATION_ID.REEF_CHALICE}.`,
          ]
        },
        {
          name: "Chalice - Start",
          details: [
            `<b>Tanks:</b> ${ASSIGNMENT_ID.REEF_OT_TANK} taunts ${NPC_ID.REEF_GUARDIAN_LARGE}. ${ASSIGNMENT_ID.REEF_MT_TANK} taunts ${NPC_ID.REEF_GUARDIAN_MEDIUM_1} (spawns at 99%).`,
            `<b>Downstairs:</b> Kill heart, come up. Save ults for upstairs.`,
            `<b>Upstairs:</b> Burn Medium #1 & Smalls.`,
            `<b>Transition:</b> ${ASSIGNMENT_ID.REEF_MT_TANK} runs to ${LOCATION_ID.REEF_CROSSBONES} (Right side) when Small #1 is ~85%.`,
            `<b>Cleanup:</b> ${ASSIGNMENT_ID.REEF_OT_TANK} grabs Mage/Bear/Cat when Chalice clears.`
          ]
        },
        {
          name: "Crossbones",
          details: [
            `<b>Initial Positioning:</b> ${ASSIGNMENT_ID.REEF_OT_TANK} holds Large on <b>Left</b>. ${ASSIGNMENT_ID.REEF_MT_TANK} stacks Medium/Small on <b>Right</b>.`,
            `<b>DPS (if Medium #2 spawned):</b> DPS parse Large (Left) ONLY. <b>Do NOT burn right side</b> (delays Skull channel).`,
            `<b>DPS (if Medium #2 did NOT spawn):</b> DPS push Small (Right) ONLY. <b>Do NOT burn left side</b> (delays Medium #2 from spawning).`,
            `<b>At 40% Heart:</b> ${ASSIGNMENT_ID.REEF_FIRST_CROSSBONES} calls it. ${ASSIGNMENT_ID.REEF_OT_TANK} takes Large to ${ASSIGNMENT_ID.REEF_MT_TANK}. DPS switch to burning ALL enemies on right side.`,
            `<b>Clear:</b> ${ASSIGNMENT_ID.REEF_OT_TANK} grabs Mage/Adds. ${ASSIGNMENT_ID.REEF_GROUP_1} goes to ${LOCATION_ID.REEF_SKULL}.`,
            `<b>Ult Dump:</b> When Mage is stacked on reef guardians.`
          ]
        },
        {
          name: "Rest of the Fight (Skull → Anchor → Wheel)",
          details: [
            `<b>Pattern:</b> Stay at current reef until Mage dies. Move clockwise.`,
            `<b>Tanks:</b> ${ASSIGNMENT_ID.REEF_OT_TANK} stacks Guardians on Right. ${ASSIGNMENT_ID.REEF_MT_TANK} grabs new Mages/Adds.`,
            `<b>Move Criteria:</b> Mage is dead OR 2 active channels ahead.`,
            `<b>Slayers:</b> Called by ${ASSIGNMENT_ID.REEF_LEFT_SLAYER_PROVIDER} and ${ASSIGNMENT_ID.REEF_RIGHT_SLAYER_PROVIDER} when enemies are stacked.`
          ]
        },
        {
          name: "Backward Reefs",
          details: [
            `If a boss goes counter-clockwise (e.g. Crossbones → Chalice/Crown), it is <b>Backwards</b>.`,
            `<b>Action:</b> ${ASSIGNMENT_ID.REEF_BACKUP} go down immediately to kill the heart. They call out when reef clears.`,
            `<b>Warning:</b> ${ASSIGNMENT_ID.REEF_OT_TANK} must watch for Mage/Animals spawning far away and listen to reef clear call out.`
          ]
        },
        {
          name: "Supplemental: Portal Group Order",
          collapsed: true,
          details: [
            `<b>Group 1:</b> Reefs 2,3 (${LOCATION_ID.REEF_CROSSBONES}/${LOCATION_ID.REEF_SKULL}) → 6,7 (${LOCATION_ID.REEF_CROWN}/${LOCATION_ID.REEF_CHALICE}) → 10,11 (${LOCATION_ID.REEF_ANCHOR}/${LOCATION_ID.REEF_WHEEL})`,
            `<b>Group 2:</b> Reefs 4,5 (${LOCATION_ID.REEF_ANCHOR}/${LOCATION_ID.REEF_WHEEL}) → 8,9 (${LOCATION_ID.REEF_CROSSBONES}/${LOCATION_ID.REEF_SKULL}) → 12,13 (${LOCATION_ID.REEF_CROWN}/${LOCATION_ID.REEF_CHALICE})`
          ]
        },
        {
          name: "Supplemental: Crossbones",
          details: [
            `<b>Reef Guardians:</b> Large splits at 99% & 80%. Mediums split at 80%. Total: 1 Large, 2 Mediums, 2 Smalls.`,
            `<b>Channeling Logic:</b> Guardians run to the closest <i>unoccupied</i> reef to channel.`,
            `<b>The Core Problem:</b> We must prevent ${NPC_ID.REEF_GUARDIAN_SMALL_1} and ${NPC_ID.REEF_GUARDIAN_MEDIUM_2} from channeling at the same time.`,
            `<b>Controlling ${NPC_ID.REEF_GUARDIAN_SMALL_1}:</b> It reliably runs to channel shortly after its health drops below 80%. We control its burn to time this.`,
            `<b>Controlling ${NPC_ID.REEF_GUARDIAN_MEDIUM_2}:</b> Its 80% health trigger is unreliable. It can also run on a timer (~30s). Pushing ${NPC_ID.REEF_GUARDIAN_SMALL_1} first seems to delay its run, which is the goal at ${LOCATION_ID.REEF_CROSSBONES}.`,
            `<b>Kill Priority - (${NPC_ID.REEF_GUARDIAN_LARGE}):</b> Once it has spawned both Mediums, it is safe to burn and should kill before Anchor. If it hasn't spawned Medium #2, only burn after Small #1 is pushed.`,
            `<b>Kill Priority - (${NPC_ID.REEF_GUARDIAN_MEDIUM_1}):</b> Safe to burn as soon as it finishes channeling at ${LOCATION_ID.REEF_CROSSBONES}. Should kill before Anchor.`,
            `<b>Out of Scope (${NPC_ID.REEF_GUARDIAN_SMALL_2}):</b> Usually spawns during the transition to ${LOCATION_ID.REEF_SKULL}. We can push it below 80% at ${LOCATION_ID.REEF_ANCHOR}.`,           
          ]
        }
      ],
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
            `<b>Slam:</b> ${ASSIGNMENT_ID.TALERIA_OT_TANK} kites slightly out of stack.`,
            `<b>Waves:</b> ${ASSIGNMENT_ID.TALERIA_OT_TANK} will take them out if they can. If unsure about safety, always roll-dodge.`,
            `<b>Maelstrom:</b> Parse until last damage tick (add-on will tell you) and then roll-dodge.`,
            `<b>Matrons:</b> DoT/Beam if in range. Do not kill ones that are too far. ${ASSIGNMENT_ID.TALERIA_OT_TANK} taunts.`
          ]
        },
        {
          name: "Winter Storm",
          details: [
            `<b>Movement:</b> Group leads ${ASSIGNMENT_ID.TALERIA_MT_TANK} before Maelstrom. ${ASSIGNMENT_ID.TALERIA_MT_TANK} leads after.`,
            `<b>If Winterstorm Spawned on MT:</b> ${ASSIGNMENT_ID.TALERIA_MT_TANK} and group roll through each other so Group leads.`,
            `<b>Maelstrom in Winterstorm:</b> Stacks tight. Ult-dump usually happens here.`,
            `<b>Matrons:</b> ${ASSIGNMENT_ID.TALERIA_OT_TANK} aply Ele Sus. DDs beam backwards. They are priority targets.`
          ]
        },
        {
          name: "First Bridge Spawns",
          details: [
            `<b>Maelstrom:</b> If Maelstrom < 10s, group stays put. ${ASSIGNMENT_ID.TALERIA_BRIDGE_DPS} use their discretion on when to go.`,
            `<b>Bridge DDs:</b> Go to bridge if Maelstrom is not imminent. Roll dodge through MT if needed. Slot heals/shields`,
            `<b>Group:</b> Move to coloured dome icon. ${ASSIGNMENT_ID.TALERIA_MT_TANK} leads the way UNLESS it is YELLOW dome (which is just next to the group).`,
            `<b>Ults:</b> Except MT and Bridge, hold ults unless green dome.`
          ]
        },
        {
          name: "Bridge Domes",
          details: [
            `<b>Green (Resource Drain):</b> Drop Ult ASAP. Watch Stamina - heavy-attack if necessary. Healers play safe and don't push resources.`,
            `<b>Purple (Heal Debuff):</b> Stay away from Mage. ${ASSIGNMENT_ID.HEALERS} can alternate barriers on Maelstrom`,
            `<b>Yellow (Speed Debuff):</b> Move to edge early for Deluge.`
          ]
        },
        {
          name: "Bridge Clears",
          details: [
            `${ASSIGNMENT_ID.TALERIA_MT_TANK} stacks ${NPC_ID.TALERIA_MAGE} on Boss.`,
            `<b>Mage Dies:</b>. ${ASSIGNMENT_ID.TALERIA_MT_TANK} leads group out of dome by walking outwards by 2 clock units. Watch for Maelstrom. Stayput until next bridge. `,
            `<b>Winterstorm:</b>. This should not happen but if it does, just run along and hopefully push Taleria to cancel it with the next bridge.`,
            `<b>Second Bridge Spawns:</b>. Same as First Bridge. This time, always let ${ASSIGNMENT_ID.TALERIA_MT_TANK} lead regardless of dome colour.`,
          ]
        },
        {
          name: "Execute (Skip Last Bridge)",
          details: [
            `<b>Skipping last bridge:</b> Debuff persists until boss dies. Burn hard.`,
          ]
        },
        {
          name: "Execute (Skip 2 Bridges) - We probably won't do this",
          details: [
            `Skipping 2 ${LOCATION_ID.TALERIA_BRIDGE}s requires ~1.06M group DPS (avg 132.5K per DD). Group holds ult, stops FOO/DoTs at 41%, stops damage at 38%.`,
            `${ASSIGNMENT_ID.OT} takes ${NPC_ID.TALERIA_MAGE} out of group and ${ASSIGNMENT_ID.DPS} kill the mage without cleaving ${NPC_ID.TALERIA_BOSS}.`,
            `Burn when: ${LOCATION_ID.TALERIA_BRIDGE} clears AND either Winter Storm or Maelstrom happens.`,
            `Trick: Wait for Winter Storm before pushing ${LOCATION_ID.TALERIA_BRIDGE} 1 to extend time before next Winter Storm.`
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