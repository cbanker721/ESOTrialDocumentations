// ============================================================
// DSR HM Progression — App Logic
// ============================================================

let currentFightId = null;
let currentTab = 'builds';

document.addEventListener('DOMContentLoaded', () => {
  const navFights = document.getElementById('nav-fights');
  const playerFilter = document.getElementById('player-filter');
  const fightSelector = document.getElementById('fight-selector');

  // Build fight selector buttons
  FIGHTS.forEach((f, i) => {
    const btn = document.createElement('button');
    btn.className = 'fight-sel-btn';
    btn.textContent = `${f.icon} ${f.shortName}`;
    btn.dataset.fight = f.id;
    btn.addEventListener('click', () => selectFight(f.id));
    fightSelector.appendChild(btn);
  });

  // Build tab bar (static — same 4 tabs for every fight)
  const tabBar = document.getElementById('fight-tab-bar');
  const tabs = [
    { id: 'builds', label: '🛡️ Builds' },
    { id: 'assignments', label: '👥 Assignments' },
    { id: 'strategy', label: '📋 Strategy' },
    { id: 'buffs', label: '✦ Buffs / Debuffs' }
  ];
  tabs.forEach(t => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn';
    btn.textContent = t.label;
    btn.dataset.tab = t.id;
    btn.addEventListener('click', () => switchTab(t.id));
    tabBar.appendChild(btn);
  });

  // Populate nav links
  const guideNav = document.createElement('a');
  guideNav.href = '#guidance-section';
  guideNav.textContent = '⚙️ Guide';
  navFights.appendChild(guideNav);
  FIGHTS.forEach(f => {
    const a = document.createElement('a');
    a.href = '#fight-viewer';
    a.textContent = `${f.icon} ${f.shortName}`;
    a.dataset.fight = f.id;
    a.addEventListener('click', (e) => {
      e.preventDefault();
      selectFight(f.id);
      document.getElementById('fight-viewer').scrollIntoView({ behavior: 'smooth' });
    });
    navFights.appendChild(a);
  });
  const levNav = document.createElement('a');
  levNav.href = '#levers-section';
  levNav.textContent = '🔧 Levers';
  navFights.appendChild(levNav);
  const refNav = document.createElement('a');
  refNav.href = '#references-section';
  refNav.textContent = '📚 Refs';
  navFights.appendChild(refNav);

  // Populate player dropdown
  const playerOrder = ['MT','OT','H1','H2','DPS1','DPS2','DPS3','DPS4','DPS5','DPS6','DPS7','DPS8'];
  playerOrder.forEach(id => {
    if (!PLAYERS[id]) return;
    const opt = document.createElement('option');
    opt.value = id;

    const roleClass = getRoleClass(id);
    let icon = '';
    if (roleClass === 'role-tank') icon = '🛡️ ';
    else if (roleClass === 'role-healer') icon = '⚕️ ';
    else if (roleClass === 'role-dps') icon = '⚔️ ';

    opt.textContent = `${icon}${PLAYERS[id].name} [${PLAYERS[id].tag}]`;
    if (roleClass) opt.classList.add(roleClass);

    playerFilter.appendChild(opt);
  });

  // Render guidance
  renderGuidance();

  // Select first fight
  selectFight(FIGHTS[0].id);

  // Render levers & references
  renderLevers();
  renderReferences();

  // Player filter
  playerFilter.addEventListener('change', () => applyPlayerFilter(playerFilter.value));

  // Scroll spy
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll('.nav-fights a').forEach(a => a.classList.remove('active'));
        if (e.target.id === 'fight-viewer') {
          const link = document.querySelector(`.nav-fights a[data-fight="${currentFightId}"]`);
          if (link) link.classList.add('active');
        } else {
          const link = document.querySelector(`.nav-fights a[href="#${e.target.id}"]`);
          if (link) link.classList.add('active');
        }
      }
    });
  }, { rootMargin: '-80px 0px -60% 0px' });

  document.querySelectorAll('.fight-section, .content-section').forEach(s => observer.observe(s));
});

// ---- Fight selection & tab switching ----

function selectFight(fightId) {
  const fight = FIGHTS.find(f => f.id === fightId);
  if (!fight) return;
  currentFightId = fightId;

  // Update selector buttons
  document.querySelectorAll('.fight-sel-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.fight === fightId);
  });

  // Update nav links
  document.querySelectorAll('.nav-fights a[data-fight]').forEach(a => {
    a.classList.toggle('active', a.dataset.fight === fightId);
  });

  // Update header
  document.getElementById('fight-viewer-icon').textContent = fight.icon;
  document.getElementById('fight-viewer-title').textContent = fight.name;

  // Populate panels
  const buildsPanel = document.getElementById('panel-builds');
  const assignPanel = document.getElementById('panel-assignments');
  const stratPanel = document.getElementById('panel-strategy');
  const buffsPanel = document.getElementById('panel-buffs');

  buildsPanel.innerHTML = '';
  assignPanel.innerHTML = '';
  stratPanel.innerHTML = '';
  buffsPanel.innerHTML = '';

  buildsPanel.appendChild(renderBuilds(fight));
  assignPanel.appendChild(renderAssignments(fight));
  stratPanel.appendChild(renderStrategy(fight));

  if (fight.buffsDebuffs && fight.buffsDebuffs.length) {
    buffsPanel.appendChild(renderBuffsTable(fight.buffsDebuffs));
  } else {
    buffsPanel.innerHTML = '<p style="color:var(--text-muted);font-size:0.9rem;">No buff/debuff data for this fight.</p>';
  }

  // Restore current tab
  switchTab(currentTab);

  // Re-apply player filter
  const filterVal = document.getElementById('player-filter').value;
  if (filterVal !== 'all') applyPlayerFilter(filterVal);
}

function switchTab(tabId) {
  currentTab = tabId;
  document.querySelectorAll('#fight-tab-bar .tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tabId);
  });
  ['builds', 'assignments', 'strategy', 'buffs'].forEach(id => {
    document.getElementById(`panel-${id}`).classList.toggle('active', id === tabId);
  });
}

// ---- Role helpers ----

function getRoleClass(playerId) {
  if (playerId.startsWith('H')) return 'role-healer';
  if (playerId === 'MT' || playerId === 'OT') return 'role-tank';
  if (playerId.startsWith('DPS')) return 'role-dps';
  return '';
}

function getOwnerRoleClass(id) {
  if (id === 'MT' || id === 'OT') return 'owner-tank';
  if (id.startsWith('H')) return 'owner-healer';
  if (id.startsWith('DPS')) return 'owner-dps';
  return '';
}

// ---- Render: Builds ----

function renderBuilds(fight) {
  const container = document.createElement('div');
  const grid = document.createElement('div');
  grid.className = 'build-grid';

  const order = ['MT','OT','H1','H2','DPS1','DPS2','DPS3','DPS4','DPS5','DPS6','DPS7','DPS8'];
  order.forEach(pid => {
    const b = fight.builds[pid];
    if (!b) return;
    const card = document.createElement('div');
    card.className = `build-card ${getRoleClass(pid)}`;
    card.dataset.player = pid;

    const p = PLAYERS[pid] || { name: pid, tag: '', nickname: '' };
    const nameTooltip = p.nickname ? ` title="${p.nickname}"` : '';
    const skills = PLAYER_SKILLS[pid] || [];
    const skillsHtml = skills.length ? `
      <div class="build-skills">
        ${skills.map(s => `<span class="skill-pill">${s.skill}</span>`).join('')}
      </div>
    ` : '';
    const miscRowHTML = b.misc && b.misc.length ? `
      <div class="build-row">
        ${b.misc.map(s => `<span class="misc-pill">${s}</span>`).join('')}
      </div>
    ` : '';

    card.innerHTML = `
      <div class="build-card-header">
        <span class="player-name"${nameTooltip}>${p.name} <span class="player-id">(${pid})</span></span>
        <span class="player-tag">${p.tag}</span>
      </div>
      <div class="build-row">
        ${b.sets.map(s => `<span class="set-pill">${s}</span>`).join('')}
      </div>
      <div class="build-row">
        <span class="ult-pill">Ult: ${b.ult}</span>
      </div>
      ${miscRowHTML}
      ${skillsHtml}
      ${b.notes ? `<div class="build-notes">${resolvePlayerName(b.notes)}</div>` : ''}
    `;
    grid.appendChild(card);
  });

  container.appendChild(grid);
  return container;
}

// ---- Render: Strategy ----

function renderStrategy(fight) {
  const container = document.createElement('div');

  const summary = document.createElement('div');
  summary.className = 'strategy-summary';
  summary.innerHTML = resolvePlayerNameAsPill(fight.strategy.summary);
  container.appendChild(summary);

  if (fight.strategy.details && fight.strategy.details.length) {
    const details = document.createElement('div');
    details.className = 'strategy-details';
    const ul = document.createElement('ul');
    fight.strategy.details.forEach(d => {
      const li = document.createElement('li');
      li.innerHTML = resolvePlayerNameAsPill(d);
      ul.appendChild(li);
    });
    details.appendChild(ul);
    container.appendChild(details);
  }

  if (fight.strategy.phases) {
    fight.strategy.phases.forEach(phase => {
      const block = document.createElement('div');
      block.className = 'phase-block';

      const header = document.createElement('div');
      header.className = 'phase-header';
      header.textContent = phase.name;
      header.addEventListener('click', () => {
        header.classList.toggle('collapsed');
        phaseBody.classList.toggle('collapsed');
      });
      block.appendChild(header);

      const phaseBody = document.createElement('div');
      phaseBody.className = 'phase-body';
      const ul = document.createElement('ul');
      phase.details.forEach(d => {
        const li = document.createElement('li');
        li.innerHTML = resolvePlayerNameAsPill(d);
        ul.appendChild(li);
      });
      phaseBody.appendChild(ul);
      block.appendChild(phaseBody);

      container.appendChild(block);
    });
  }

  if (fight.strategy.reminders && fight.strategy.reminders.length) {
    const rem = document.createElement('div');
    rem.className = 'reminders';
    rem.innerHTML = '<h4>⚠ Reminders</h4>';
    const ul = document.createElement('ul');
    ul.style.listStyle = 'none';
    fight.strategy.reminders.forEach(r => {
      const li = document.createElement('li');
      li.innerHTML = resolvePlayerNameAsPill(r);
      ul.appendChild(li);
    });
    rem.appendChild(ul);
    container.appendChild(rem);
  }

  return container;
}

// ---- Render: Assignments ----

function renderAssignments(fight) {
  const container = document.createElement('div');
  const a = fight.assignments;
  const hasAssignments = a && Object.keys(a).length > 0;

  if (!hasAssignments) {
    container.innerHTML = '<p style="color:var(--text-muted);font-size:0.9rem;">No specific assignments for this fight.</p>';
    return container;
  }

  const grid = document.createElement('div');
  grid.className = 'assignments-grid';

  if (a.domes) {
    grid.appendChild(makeAssignmentCard('Dome Assignments', [
      `Start: ${a.domes.start}`,
      `Teleport Carriers: ${a.domes.teleport.join(', ')}`,
      `Bash/Backup: ${a.domes.bashBackup.join(', ')}`,
      `Execute Large: ${a.domes.executeLarge.join(', ')}`,
      `Execute Small: ${a.domes.executeSmall.join(', ')}`
    ]));
  }

  if (a.sides) {
    grid.appendChild(makeAssignmentCard('Side Assignments', [
      `Big Side: ${a.sides.bigSide.join(', ')}`,
      `Small Side: ${a.sides.smallSide.join(', ')}`
    ]));
  }

  if (a.healerFocus) {
    const lines = Object.entries(a.healerFocus).map(([h, t]) => `${h} → ${t}`);
    grid.appendChild(makeAssignmentCard('Healer Focus', lines));
  }

  if (a.slayer) {
    const lines = Object.entries(a.slayer).map(([side, p]) => `${side.charAt(0).toUpperCase() + side.slice(1)}: ${p}`);
    grid.appendChild(makeAssignmentCard('Slayer', lines));
  }

  if (a.weaponSlayers) {
    grid.appendChild(makeAssignmentCard('Weapon Slayers', a.weaponSlayers));
  }

  if (a.reefGroups) {
    const rg = a.reefGroups;
    grid.appendChild(makeAssignmentCard('Reef Group 1', [
      `Players: ${rg.group1.players.join(', ')}`,
      `Reefs: ${rg.group1.reefs.join(' → ')}`
    ]));
    grid.appendChild(makeAssignmentCard('Reef Group 2', [
      `Players: ${rg.group2.players.join(', ')}`,
      `Reefs: ${rg.group2.reefs.join(' → ')}`
    ]));
    grid.appendChild(makeAssignmentCard('Special Roles', [
      `Chalice Only: ${rg.chaliceOnly}`,
      `Backup #1: ${rg.backupFirst}`,
      `Backup #2: ${rg.backupSecond}`
    ]));
    if (a.note) {
      grid.appendChild(makeAssignmentCard('Note', [a.note]));
    }
  }

  if (a.bridge) {
    grid.appendChild(makeAssignmentCard('Bridge Assignments', [
      `Primary: ${a.bridge.primary.join(', ')}`,
      `Backup #1: ${a.bridge.backup1}`,
      `Backup #2: ${a.bridge.backup2}`
    ]));
  }

  if (a.levers) {
    grid.appendChild(makeAssignmentCard('Levers', [a.levers]));
  }

  container.appendChild(grid);
  return container;
}

function makeAssignmentCard(title, lines) {
  const card = document.createElement('div');
  card.className = 'assignment-card';
  card.innerHTML = `<h4>${title}</h4>`;
  const ul = document.createElement('ul');
  lines.forEach(l => {
    const li = document.createElement('li');
    li.innerHTML = resolvePlayerNameAsPill(l);
    ul.appendChild(li);
  });
  card.appendChild(ul);
  return card;
}

// ---- Render: Buffs / Debuffs ----

const DEBUFF_NAMES = new Set([
  'Crusher', 'Major Breach', 'Major Breach (portals)', 'Minor Breach',
  'Minor Brittle', 'Off Balance', 'Weakening', 'Tremorscale'
]);

function isDebuff(name) { return DEBUFF_NAMES.has(name); }

function sortBuffsDebuffs(list) {
  return [...list].sort((a, b) => {
    const aHas = a.owners.length ? 0 : 1;
    const bHas = b.owners.length ? 0 : 1;
    if (aHas !== bHas) return aHas - bHas;
    return a.name.localeCompare(b.name);
  });
}

function buildMiniTable(items, label) {
  const col = document.createElement('div');
  col.className = 'buffs-col';
  col.innerHTML = `<h5 class="buffs-col-label">${label}</h5>`;
  const table = document.createElement('table');
  table.className = 'buffs-table';
  table.innerHTML = '<thead><tr><th>Modifier</th><th>Responsible</th></tr></thead>';
  const tbody = document.createElement('tbody');
  items.forEach(bd => {
    const tr = document.createElement('tr');
    if (!bd.owners.length) tr.className = 'unassigned';
    const tdName = document.createElement('td');
    tdName.textContent = bd.name;
    const tdOwner = document.createElement('td');
    if (bd.owners.length) {
      tdOwner.innerHTML = bd.owners.map(id => {
        const roleClass = getOwnerRoleClass(id);
        const display = resolvePlayerName(id, true);
        return `<span class="owner-pill ${roleClass}" data-owner-id="${id}">${display}</span>`;
      }).join(' ');
    } else {
      tdOwner.innerHTML = '<span class="no-owner">—</span>';
    }
    tr.appendChild(tdName);
    tr.appendChild(tdOwner);
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  col.appendChild(table);
  return col;
}

function renderBuffsTable(buffsDebuffs) {
  const wrapper = document.createElement('div');
  wrapper.className = 'buffs-table-wrapper standalone';
  const buffs = sortBuffsDebuffs(buffsDebuffs.filter(bd => !isDebuff(bd.name)));
  const debuffs = sortBuffsDebuffs(buffsDebuffs.filter(bd => isDebuff(bd.name)));
  const row = document.createElement('div');
  row.className = 'buffs-two-col';
  row.appendChild(buildMiniTable(buffs, '✦ Buffs'));
  row.appendChild(buildMiniTable(debuffs, '✧ Debuffs'));
  wrapper.appendChild(row);
  return wrapper;
}

// ---- Player name resolution ----

function resolvePlayerNameAsPill(text) {
  let result = text;
  const ids = Object.keys(PLAYERS).sort((a, b) => b.length - a.length);
  ids.forEach(id => {
    const regex = new RegExp(`\\b${id}\\b`, 'g');
    if (regex.test(result)) {
      const p = PLAYERS[id];
      const roleClass = getOwnerRoleClass(id);
      const nick = p.nickname ? ` title="${p.nickname}"` : '';
      result = result.replace(regex, `<span class="owner-pill ${roleClass}" data-owner-id="${id}"${nick}>${p.name} (${id})</span>`);
    }
  });
  return result;
}

function resolvePlayerName(text, asHtml) {
  let result = text;
  const ids = Object.keys(PLAYERS).sort((a, b) => b.length - a.length);
  ids.forEach(id => {
    const regex = new RegExp(`\\b${id}\\b`, 'g');
    if (regex.test(result)) {
      const p = PLAYERS[id];
      if (asHtml && p.nickname) {
        result = result.replace(regex, `<span class="has-nickname" title="${p.nickname}">${p.name} (${id})</span>`);
      } else {
        result = result.replace(regex, `${p.name} (${id})`);
      }
    }
  });
  return result;
}

// ---- Render: Levers ----

function renderLevers() {
  const grid = document.getElementById('lever-grid');

  const lightGroup = document.createElement('div');
  lightGroup.className = 'lever-group';
  lightGroup.innerHTML = `
    <h3>⚡ Lightning Side</h3>
    <img src="../resources/dsr/bird-lever.png" alt="Lightning Levers Map" style="max-width: 100%; height: auto; margin-bottom: 1rem; border-radius: 4px; border: 1px solid #333;">
  `;
  LEVERS.lightning.forEach((set, i) => lightGroup.appendChild(makeLeverTable(set, i)));
  grid.appendChild(lightGroup);

  const poisonGroup = document.createElement('div');
  poisonGroup.className = 'lever-group';
  poisonGroup.innerHTML = `
    <h3>☠️ Poison Side</h3>
    <img src="../resources/dsr/turtle-lever.png" alt="Poison Levers Map" style="max-width: 100%; height: auto; margin-bottom: 1rem; border-radius: 4px; border: 1px solid #333;">
  `;
  LEVERS.poison.forEach((set, i) => poisonGroup.appendChild(makeLeverTable(set, i)));
  grid.appendChild(poisonGroup);
}

function makeLeverTable(leverSet, index = 0) {
  const wrapper = document.createElement('div');
  wrapper.style.marginBottom = '0.75rem';

  // Colors: Green, Teal, Magenta (adjusted for dark theme visibility)
  const colors = ['#00ff0d', '#00e1ff', '#ec407a'];
  const headerColor = colors[index] || 'white';

  const table = document.createElement('table');
  table.className = 'lever-table';
  table.innerHTML = `
    <thead><tr><th colspan="2" style="color: ${headerColor}">${leverSet.name}</th></tr></thead>
    <tbody>
      ${leverSet.positions.map(p => `<tr><td>${p.pos}</td><td data-player-text="${p.player}">${resolvePlayerNameAsPill(p.player)}</td></tr>`).join('')}
    </tbody>
  `;
  wrapper.appendChild(table);
  return wrapper;
}

// ---- Render: Guidance ----

function renderGuidance() {
  const container = document.getElementById('guidance');
  const grid = document.createElement('div');
  grid.className = 'guidance-grid';

  const tankCard = document.createElement('div');
  tankCard.className = 'guidance-card guidance-tank';
  tankCard.innerHTML = `
    <h3>Tanks</h3>
    <p><span class="guidance-key">MT Subclass:</span> ${TANK_GUIDANCE.MT.subclass}</p>
    <p><span class="guidance-key">MT Buffs:</span> ${TANK_GUIDANCE.MT.buff}</p>
    <p><span class="guidance-key">OT Subclass:</span> ${TANK_GUIDANCE.OT.subclass}</p>
    <p><span class="guidance-key">OT Buffs:</span> ${TANK_GUIDANCE.OT.buff}</p>
  `;
  grid.appendChild(tankCard);

  const healCard = document.createElement('div');
  healCard.className = 'guidance-card guidance-healer';
  healCard.innerHTML = `
    <h3>Healers</h3>
    <p><span class="guidance-key">H1 Subclass:</span> ${HEALER_GUIDANCE.H1.subclass}</p>
    <p><span class="guidance-key">H1 Group Skill:</span> ${HEALER_GUIDANCE.H1.groupSkill}</p>
    <p><span class="guidance-key">H2 Subclass:</span> ${HEALER_GUIDANCE.H2.subclass}</p>
    <p><span class="guidance-key">H2 Group Skills:</span> ${HEALER_GUIDANCE.H2.groupSkills}</p>
  `;
  grid.appendChild(healCard);

  const dpsCard = document.createElement('div');
  dpsCard.className = 'guidance-card guidance-dps';
  dpsCard.innerHTML = `
    <h3>DPS</h3>
    <p><span class="guidance-key">Subclass:</span> ${DPS_GUIDANCE.subclass}</p>
    <p><span class="guidance-key">Banner DDs:</span> ${DPS_GUIDANCE.bannerDDs}</p>
    <p><span class="guidance-key">Beam DDs:</span> ${DPS_GUIDANCE.beamDDs}</p>
    <p><span class="guidance-key">Alkosh DD:</span> ${DPS_GUIDANCE.alkoshDPS}</p>
  `;
  grid.appendChild(dpsCard);

  container.appendChild(grid);
}

// ---- Render: References ----

function renderReferences() {
  const container = document.getElementById('references');
  const grid = document.createElement('div');
  grid.className = 'ref-grid';

  const mechCard = document.createElement('div');
  mechCard.className = 'ref-card';
  mechCard.innerHTML = `
    <h3>📖 Mechanics Guides (eso-hub)</h3>
    <a href="${REFERENCES.mechanics.twins}" target="_blank">Boss 1: Lylanar & Turlassil</a>
    <a href="${REFERENCES.mechanics.reef}" target="_blank">Boss 2: Reef Guardian</a>
    <a href="${REFERENCES.mechanics.taleria}" target="_blank">Boss 3: Tideborn Taleria</a>
  `;
  grid.appendChild(mechCard);

  const vidCard = document.createElement('div');
  vidCard.className = 'ref-card';
  vidCard.innerHTML = `
    <h3>🎬 Video Guides</h3>
    <a href="${REFERENCES.videos.twinsTank}" target="_blank">o_Temp — Twins Tank Guide</a>
    <a href="${REFERENCES.videos.reefMT}" target="_blank">o_Temp — Reef Guardian MT Guide</a>
    <a href="${REFERENCES.videos.taleriaOT}" target="_blank">o_Temp — Taleria OT Guide</a>
  `;
  grid.appendChild(vidCard);

  const povCard = document.createElement('div');
  povCard.className = 'ref-card';
  povCard.innerHTML = `
    <h3>🎬 Full Clear POVs</h3>
    <a href="${REFERENCES.videos.scrappyClear}" target="_blank">Scrappy Clear (U45) - H2 POV</a>
    <a href="${REFERENCES.videos.cleanerClear}" target="_blank">Cleaner Clear (U45) - H2 POV</a>
    <a href="${REFERENCES.videos.trifectaClear}" target="_blank">Trifecta Clear (U45) - H2 POV</a>
  `;
  grid.appendChild(povCard);

  const penCard = document.createElement('div');
  penCard.className = 'ref-card';
  penCard.innerHTML = `
    <h3>🔢 Pen/Crit Calculators</h3>
    <a href="${REFERENCES.penCrit.trash}" target="_blank">Trash (no crusher, no brittle)</a>
    <a href="${REFERENCES.penCrit.twins}" target="_blank">Twins</a>
    <a href="${REFERENCES.penCrit.reef}" target="_blank">Reef (inconsistent crusher)</a>
    <a href="${REFERENCES.penCrit.taleria}" target="_blank">Taleria (replace Alkosh with Trem)</a>
  `;
  grid.appendChild(penCard);

  container.appendChild(grid);
}

// ---- Player filter ----

function applyPlayerFilter(playerId) {
  const isAll = playerId === 'all';

  document.querySelectorAll('.build-card').forEach(card => {
    card.classList.remove('highlighted', 'dimmed');
    if (!isAll) {
      card.classList.toggle('highlighted', card.dataset.player === playerId);
      card.classList.toggle('dimmed', card.dataset.player !== playerId);
    }
  });

  document.querySelectorAll('.lever-table td[data-player-text]').forEach(td => {
    td.classList.remove('highlight-player');
    if (!isAll && td.getAttribute('data-player-text').includes(playerId)) {
      td.classList.add('highlight-player');
    }
  });

  document.querySelectorAll('.owner-pill').forEach(pill => {
    pill.classList.remove('owner-highlighted', 'owner-dimmed');
    if (!isAll) {
      pill.classList.toggle('owner-highlighted', pill.dataset.ownerId === playerId);
      pill.classList.toggle('owner-dimmed', pill.dataset.ownerId !== playerId);
    }
  });
}
