// ============================================================
// DSR HM Progression — Role Definitions
// ============================================================

const MAIN_ROLE_ID = Object.freeze({
  MT: 'MT',
  OT: 'OT',
  H1: 'H1',
  H2: 'H2',
  DPS1: 'DPS1',
  DPS2: 'DPS2',
  DPS3: 'DPS3',
  DPS4: 'DPS4',
  DPS5: 'DPS5',
  DPS6: 'DPS6',
  DPS7: 'DPS7',
  DPS8: 'DPS8',
});

const ROLE_SYMBOLS = Object.freeze({
  [MAIN_ROLE_ID.MT]:   { icon: '🛡️', number: '1', class: 'tank' },
  [MAIN_ROLE_ID.OT]:   { icon: '🛡️', number: '2', class: 'tank' },
  [MAIN_ROLE_ID.H1]:   { icon: '⚕️', number: '1', class: 'healer' },
  [MAIN_ROLE_ID.H2]:   { icon: '⚕️', number: '2', class: 'healer' },
  [MAIN_ROLE_ID.DPS1]: { icon: '🔥', number: '1', class: 'dps' },
  [MAIN_ROLE_ID.DPS2]: { icon: '🔥', number: '2', class: 'dps' },
  [MAIN_ROLE_ID.DPS3]: { icon: '🔥', number: '3', class: 'dps' },
  [MAIN_ROLE_ID.DPS4]: { icon: '🔥', number: '4', class: 'dps' },
  [MAIN_ROLE_ID.DPS5]: { icon: '🔥', number: '5', class: 'dps' },
  [MAIN_ROLE_ID.DPS6]: { icon: '🔥', number: '6', class: 'dps' },
  [MAIN_ROLE_ID.DPS7]: { icon: '🔥', number: '7', class: 'dps' },
  [MAIN_ROLE_ID.DPS8]: { icon: '🔥', number: '8', class: 'dps' },
});
