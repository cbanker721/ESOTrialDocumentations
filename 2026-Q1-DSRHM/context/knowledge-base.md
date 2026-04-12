# ESOTrialDocumentations — Knowledge Base

## Project Overview

ESOTrialDocumentations is a static HTML/CSS/JS website project that serves as a raid guide for 12-player ESO (Elder Scrolls Online) trial progression groups. Each trial progression group gets its own folder under the root `ESOTrialDocumentations/` directory, named by quarter and trial abbreviation (e.g., `2026-Q1-DSRHM`).

The project has no build system — it's pure static files served directly.

## Directory Structure

```
ESOTrialDocumentations/
├── index.html                  # Landing page linking to all trial groups
├── data/                       # Shared data layer (constants, enums, fight framework)
│   ├── role.js                 # MAIN_ROLE_ID enum (MT, OT, H1, H2, DPS1-8)
│   ├── assignment-ids.js       # ASSIGNMENT_ID enum (unique IDs for all assignment nodes)
│   ├── assignments.js          # ASSIGNMENTS Map (hierarchical assignment definitions)
│   ├── fights.js               # FIGHT_ID enum + FIGHTS Map (fight definitions with builds/strategy/buffs)
│   ├── npc.js                  # NPC_ID enum + NPC_DEFINITIONS Map
│   ├── location.js             # LOCATION_ID enum + LOCATION_DEFINITIONS Map
│   ├── render-option.js        # RENDER_OPTION enum
│   └── role.js                 # ROLE_SYMBOLS (icons/classes per role)
├── renderer/
│   └── assignment-renderer.js  # AssignmentRenderer class + global helpers (pill rendering, name resolution)
├── resources/                  # Static images (maps, diagrams) per trial
│   └── dsr/                    # DSR-specific images
├── 2026-Q1-DSRHM/             # Trial-specific folder
│   ├── index.html              # Main guide page
│   ├── player.html             # Personal view page (per-player filtered view)
│   ├── styles.css              # Dark theme styles
│   ├── app.js                  # Main rendering logic
│   ├── player-view.js          # Personal view rendering logic
│   ├── data.js                 # Trial-specific data (PLAYER_SKILLS, REFERENCES, GUIDANCE constants, fight-specific overrides)
│   ├── players.js              # Player roster (PLAYERS object with name/tag/nickname/shortName)
│   ├── context/                # Knowledge base and raw info for AI assistance
│   │   ├── knowledge-base.md   # This file
│   │   └── raw_info.md         # Raw Discord messages / strategy notes
│   └── misc/                   # Miscellaneous logs, pull notes
└── 2026-Q2-SEHM/              # Next trial folder (same structure)
```

## Shared Data Layer (`data/`)

The shared data layer defines the framework that all trial folders consume. Trial-specific folders reference these via `<script src="../data/...">` tags.

### role.js
- `MAIN_ROLE_ID`: Frozen object mapping role names to string IDs: MT, OT, H1, H2, DPS1-DPS8.
- `ROLE_SYMBOLS`: Maps each role ID to `{ icon, number, class }` for rendering pills.

### assignment-ids.js
- `ASSIGNMENT_ID`: Frozen object of unique string IDs for every assignment node. IDs use kebab-case with a 4-char hex suffix (e.g., `twins-teleport-8f2a`).
- New trials add their own assignment IDs here.

### assignments.js
- `ASSIGNMENTS`: A `Map<string, AssignmentDef>` where each entry defines:
  - `id`: matches the ASSIGNMENT_ID key
  - `name`: display name
  - `role_ids`: array of MAIN_ROLE_ID values (who is assigned)
  - `assignment_ids`: optional array of child assignment IDs (for hierarchy)
  - `fights`: array of FIGHT_ID values this assignment applies to
  - `description`: tooltip text
  - `instructions`: rendered text (supports embedded IDs that get resolved to pills)
  - `render_option`: optional, defaults to RENDER_ROLE
  - `custom_positions`: optional, for lever-style positional assignments

### fights.js
- `FIGHT_ID`: Frozen object of fight identifiers (e.g., `trash`, `twins`, `reef`, `taleria`).
- `FIGHTS`: A `Map<string, FightDef>` where each fight has:
  - `id`, `name`, `shortName`, `icon`
  - `strategy`: `{ summary?, details?, phases?, reminders?, supplemental? }`
  - `builds`: keyed by MAIN_ROLE_ID, each with `{ sets[], ult, misc?[], notes? }`
  - `buffsDebuffs`: array of `{ name, owners: MAIN_ROLE_ID[] }`
  - `assignments`: array of top-level ASSIGNMENT_ID values to render

### npc.js / location.js
- Define NPC and location enums with display metadata (name, icon, color).
- Referenced in strategy text via their IDs, which get resolved to colored pills by the renderer.

## Renderer (`renderer/assignment-renderer.js`)

The `AssignmentRenderer` class handles:
- Hierarchical rendering of assignment trees for the main view
- Flat/filtered rendering for the personal view (shows only assignments relevant to a specific player)
- Special renderers for complex assignments (Teleport grid, Execute sides, Slayer columns, Lever maps)

Global helper functions (also in this file):
- `createOwnerPillHtml(id)`: Creates a role-colored pill with player name and role symbol
- `resolvePlayerNameAsPill(text)`: Resolves embedded IDs (player, NPC, location, assignment) in text to HTML pills
- `resolvePlayerName(text)`: Plain-text version of name resolution

## Trial-Specific Folder Pattern

Each trial folder contains:

### index.html
- Page shell with header, nav, guidance section, fight viewer (tabbed: Builds/Assignments/Strategy/Buffs), references section, footer.
- Loads shared data scripts from `../data/`, then local `data.js`, `players.js`, `app.js`.

### player.html
- Sidebar + main layout for per-player filtered view.
- Same script loading pattern.

### styles.css
- Dark theme with CSS variables. Role-colored accents (blue=tank, green=healer, orange=DPS).
- Responsive grid layouts.

### app.js
- Fight selection, tab switching, player filter, guidance/references rendering.
- URL state persistence via query params (`?fight=twins&tab=builds`).

### player-view.js
- Renders all fights filtered to a single player's perspective.
- Shows build, assignments, and strategy mentions per fight.

### data.js
- `PLAYER_SKILLS`: Map of role ID → skill/note pairs (shown on build cards).
- `REFERENCES`: Links to mechanics guides, videos, pen/crit calculators.
- `DPS_GUIDANCE`, `HEALER_GUIDANCE`, `TANK_GUIDANCE`: General build guidance constants.

### players.js
- `PLAYERS`: Object keyed by MAIN_ROLE_ID with `{ name, tag, nickname, shortName }`.
- This is the only file that changes when roster changes happen.

## Key Conventions

### Data Conventions
- `buffsDebuffs` uses `{ name, owners: [] }` array-of-objects format.
- Only ONE type of "Slayer" — don't differentiate PP vs WM.
- Player grid order: MT, OT, H1, H2, DPS1-8.
- `PLAYER_SKILLS` notes are internal reference only — NOT rendered on cards.

### Display Conventions
- Player references show "Name (ID)" format everywhere.
- Role-colored pills: faint blue = tanks, faint green = healers, faint red/orange = DPS.
- Build cards have faint colored backgrounds matching role.
- Skill pills are cyan.
- Nickname attribute shows as tooltip with dotted gold underline.
- Buffs table: sorted alphabetically, unowned entries at bottom, buffs left / debuffs right.
- Player dropdown filter highlights matching owner pills and build cards.

### Buff/Debuff Classification
Debuffs (applied to enemies): Crusher, Major Breach, Minor Breach, Minor Brittle, Off Balance, Weakening, Tremorscale. Everything else is a buff.

### Text Resolution System
Strategy text, assignment instructions, and other rendered text can embed IDs from any of the shared data layers:
- `MAIN_ROLE_ID.MT` → renders as a player pill
- `NPC_ID.TWINS_BOSS` → renders as a colored NPC pill
- `LOCATION_ID.REEF_CHALICE` → renders as a colored location pill
- `ASSIGNMENT_ID.REEF_GROUP_1` → renders as owner pills (if RENDER_ROLE) or assignment pill

This allows strategy text to be written with semantic references that automatically resolve to rich HTML.

## Adding a New Trial

1. Create a new folder: `2026-QX-TRIALABBREV/`
2. Copy the file structure from an existing trial folder
3. Add new fight IDs to `data/fights.js` (FIGHT_ID enum + FIGHTS Map entries)
4. Add new assignment IDs to `data/assignment-ids.js`
5. Add new assignment definitions to `data/assignments.js`
6. Add any new NPCs to `data/npc.js` and locations to `data/location.js`
7. Update `data.js` with trial-specific guidance, references, player skills
8. Update `players.js` with the new roster
9. Update the root `index.html` to link to the new trial
10. Optionally add a `context/` folder with a knowledge base and steering file

## ESO General Concepts (for AI context)

### Trials
- 12-player PVE group content (ESO's equivalent of raids)
- Normal, Veteran, and Veteran Hardmode difficulties
- Hardmode activated per boss via challenge banner
- Standard composition: 2 Tanks, 2 Healers, 8 DPS

### Gear Sets
- 5-piece sets grant escalating bonuses; the 5-piece bonus is the defining effect
- Monster sets are 2-piece (head + shoulders) from veteran dungeons
- Trial sets are bind-on-pickup; Veteran drops "Perfected" versions
- Players typically wear: 1 body set (5pc) + 1 weapon/jewelry set (5pc) + 1 monster set (2pc)

### Common Abbreviations
- MT/OT: Main Tank / Off Tank
- H1/H2: Healer 1 / Healer 2
- DPS1-8: Damage dealers
- PP: Pillager's Profit (healer set)
- SPC: Spell Power Cure
- PA: Power of the Light / Powerful Assault
- PW: Pearlescent Ward
- LE: Livewire / Lord Warden / Leeching (context-dependent, usually Livewire/Lord Warden)
- WM: War Machine
- Naz: Nazaray (ultimate extension)
- Colo: Colossus (necromancer ultimate)
- PoE: Power of the Elements
- MA: Master Architect
