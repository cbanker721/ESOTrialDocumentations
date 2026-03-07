// ============================================================
// DSR HM Progression — App Logic
// ============================================================


let currentFightId = null;
let currentTab = 'builds';

document.addEventListener('DOMContentLoaded', () => {
  const navFights = document.getElementById('nav-fights');
  const playerFilter = document.getElementById('player-filter');
  const fightSelector = document.getElementById('fight-selector');
  const btnPersonal = document.getElementById('btn-personal-view');

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
  const refNav = document.createElement('a');
  refNav.href = '#references-section';
  refNav.textContent = '📚 Refs';
  navFights.appendChild(refNav);

  // Populate player dropdown
  const playerOrder = [MAIN_ROLE_ID.MT, MAIN_ROLE_ID.OT, MAIN_ROLE_ID.H1, MAIN_ROLE_ID.H2, MAIN_ROLE_ID.DPS1, MAIN_ROLE_ID.DPS2, MAIN_ROLE_ID.DPS3, MAIN_ROLE_ID.DPS4, MAIN_ROLE_ID.DPS5, MAIN_ROLE_ID.DPS6, MAIN_ROLE_ID.DPS7, MAIN_ROLE_ID.DPS8];
  playerOrder.forEach(id => {
    if (!PLAYERS[id]) return;
    const opt = document.createElement('option');
    opt.value = id;

    const roleClass = getRoleClass(id);
    let icon = '';
    if (roleClass === 'role-tank') icon = '🛡️ ';
    else if (roleClass === 'role-healer') icon = '⚕️ ';
    else if (roleClass === 'role-dps') icon = '⚔️ ';

    opt.textContent = `${icon}${PLAYERS[id].shortName} [${PLAYERS[id].tag}]`;
    if (roleClass) opt.classList.add(roleClass);

    playerFilter.appendChild(opt);
  });

  // Render guidance
  renderGuidance();

  // Handle URL params for state persistence
  const params = new URLSearchParams(window.location.search);
  const urlFight = params.get('fight');
  const urlTab = params.get('tab');
  if (urlTab && ['builds', 'assignments', 'strategy', 'buffs'].includes(urlTab)) {
    currentTab = urlTab;
  }
  const initialFightId = (urlFight && FIGHTS.has(urlFight)) ? urlFight : FIGHTS.values().next().value.id;
  selectFight(initialFightId);

  // Render levers & references
  renderReferences();

  // Player filter
  playerFilter.addEventListener('change', () => applyPlayerFilter(playerFilter.value));

  // Personal View Button
  btnPersonal.addEventListener('click', () => {
    const pid = playerFilter.value;
    if (pid && pid !== 'all') {
      window.open(`player.html?id=${pid}`, '_blank');
    } else {
      alert('Please select a specific player from the dropdown first.');
    }
  });

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
  const fight = FIGHTS.get(fightId);
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
  updateURL();
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

// ---- Render: Builds ----

function renderBuilds(fight) {
  const container = document.createElement('div');
  const grid = document.createElement('div');
  grid.className = 'build-grid';

  const playerOrder = [MAIN_ROLE_ID.MT, MAIN_ROLE_ID.OT, MAIN_ROLE_ID.H1, MAIN_ROLE_ID.H2, MAIN_ROLE_ID.DPS1, MAIN_ROLE_ID.DPS2, MAIN_ROLE_ID.DPS3, MAIN_ROLE_ID.DPS4, MAIN_ROLE_ID.DPS5, MAIN_ROLE_ID.DPS6, MAIN_ROLE_ID.DPS7, MAIN_ROLE_ID.DPS8];
  playerOrder.forEach(pid => {
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
        <span class="player-name"${nameTooltip}>${p.shortName} <span class="player-id">(${pid})</span></span>
        ${p.tag ? `<span class="player-tag">${p.tag}</span>` : ''}
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
  const assignmentRenderer = new AssignmentRenderer();

  container.innerHTML = assignmentRenderer.renderAssignments(fight.assignments, null, false);

  return container;
}
function makeAssignmentCardFromDef(def) {
  const card = document.createElement('div');
  card.className = 'assignment-card';
  
  // Title with tooltip description
  card.innerHTML = `<h4 title="${def.description || ''}">${def.name}</h4>`;
  
  // Owners as pills
  if (def.role_ids && def.role_ids.length > 0) {
    const ownersDiv = document.createElement('div');
    ownersDiv.style.marginBottom = '0.5rem';
    ownersDiv.innerHTML = def.role_ids.map(id => createOwnerPillHtml(id)).join(' ');
    card.appendChild(ownersDiv);
  }

  // Instructions
  if (def.instructions) {
    const p = document.createElement('p');
    p.style.fontSize = '0.85rem';
    p.style.color = 'var(--text-muted)';
    p.textContent = def.instructions;
    card.appendChild(p);
  }

  return card;
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
      tdOwner.innerHTML = bd.owners.map(id => createOwnerPillHtml(id)).join(' ');
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
    <h3>🔢 Pen/Crit Calculators and Utilities</h3>
    <a href="${REFERENCES.penCrit.trash}" target="_blank">Trash (no crusher, no brittle)</a>
    <a href="${REFERENCES.penCrit.twins}" target="_blank">Twins</a>
    <a href="${REFERENCES.penCrit.reef}" target="_blank">Reef (inconsistent crusher)</a>
    <a href="${REFERENCES.penCrit.taleria}" target="_blank">Taleria (replace Alkosh with Trem)</a>
    <a href="${REFERENCES.builds.hyperBeam}" target="_blank">Hyperioxy's Beam Builds (U48)</a>
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

function updateURL() {
  const params = new URLSearchParams(window.location.search);
  if (currentFightId) params.set('fight', currentFightId);
  if (currentTab) params.set('tab', currentTab);
  const newUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
  window.history.replaceState(null, '', newUrl);
}
