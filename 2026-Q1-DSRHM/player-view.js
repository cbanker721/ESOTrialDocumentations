document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const playerId = params.get('id');

  populateDropdown(playerId);
  

  // Only render the content if a valid player is selected
  if (playerId && PLAYERS[playerId]) {
    renderHeader(playerId);
    const assignmentRenderer = new AssignmentRenderer();
    renderContent(playerId, assignmentRenderer);

    // Inject dynamic style to highlight the current player's pill
    const highlightStyle = document.createElement('style');
    highlightStyle.innerHTML = `
      .owner-pill[data-owner-id="${playerId}"] {
        background-color: var(--accent);
        color: var(--bg-main);
        border-color: var(--accent);
      }
    `;
    document.head.appendChild(highlightStyle);
  }
});

function getRole(id) {
  if (id.startsWith('H')) return 'Healer';
  if (id === 'MT' || id === 'OT') return 'Tank';
  return 'DPS';
}

function getRoleClass(id) {
  if (id.startsWith('H')) return 'role-healer';
  if (id === 'MT' || id === 'OT') return 'role-tank';
  if (id.startsWith('DPS')) return 'role-dps';
  return '';
}

function populateDropdown(currentId) {
  const selector = document.getElementById('player-selector');
  const playerOrder = [MAIN_ROLE_ID.MT, MAIN_ROLE_ID.OT, MAIN_ROLE_ID.H1, MAIN_ROLE_ID.H2, MAIN_ROLE_ID.DPS1, MAIN_ROLE_ID.DPS2, MAIN_ROLE_ID.DPS3, MAIN_ROLE_ID.DPS4, MAIN_ROLE_ID.DPS5, MAIN_ROLE_ID.DPS6, MAIN_ROLE_ID.DPS7, MAIN_ROLE_ID.DPS8];

  // Add placeholder if no valid player is selected
  if (!currentId || !PLAYERS[currentId]) {
    const placeholder = document.createElement('option');
    placeholder.textContent = "Select a player...";
    placeholder.value = "";
    selector.appendChild(placeholder);
  }

  playerOrder.forEach(id => {
    if (!PLAYERS[id]) return;
    const opt = document.createElement('option');
    opt.value = id;
    
    let icon = '';
    const roleClass = getRoleClass(id);
    if (roleClass === 'role-tank') icon = '🛡️ ';
    else if (roleClass === 'role-healer') icon = '⚕️ ';
    else if (roleClass === 'role-dps') icon = '⚔️ ';

    var tag_render = "";
    if (PLAYERS[id].tag) {
      tag_render = ` [${PLAYERS[id].tag}]`;
    }
    opt.textContent = `${icon}${PLAYERS[id].shortName}${tag_render}`;
    if (roleClass) opt.classList.add(roleClass);
    selector.appendChild(opt);
  });

  if (currentId && PLAYERS[currentId]) {
    selector.value = currentId;
  }

  selector.addEventListener('change', (e) => {
    if (e.target.value) window.location.search = `?id=${e.target.value}`;
  });
}

function renderHeader(id) {
  const p = PLAYERS[id];
  const role = getRole(id);
  const container = document.getElementById('sidebar-content');
  
  let guidanceHtml = '';
  if (role === 'Tank') {
    const g = TANK_GUIDANCE[id] || {};
    guidanceHtml = `<div class="sidebar-guidance"><p><strong>Subclass:</strong> ${g.subclass}</p><p><strong>Buffs:</strong> ${g.buff}</p></div>`;
  } else if (role === 'Healer') {
    const g = HEALER_GUIDANCE[id] || {};
    guidanceHtml = `<div class="sidebar-guidance"><p><strong>Subclass:</strong> ${g.subclass}</p><p><strong>Responsible For: </strong> ${g.groupSkill || g.groupSkills}</p></div>`;
  } else {
    guidanceHtml = `<div class="sidebar-guidance"><p><strong>DPS Guidance:</strong> ${DPS_GUIDANCE.subclass}</p></div>`;
  }

  container.innerHTML = `
    <h1 class="sidebar-title">${p.shortName} <span class="sidebar-id">(${id})</span></h1>
    <div class="sidebar-meta">${role}${p.tag ? ` [${p.tag}]` : ''}</div>
    ${guidanceHtml}
  `;
}

function renderContent(id, assignmentRenderer) {
  const main = document.getElementById('main-container');
  
  FIGHTS.forEach(fight => {
    const card = document.createElement('div');
    card.className = 'personal-fight-card';
    
    // 1. Build Info
    const build = fight.builds[id];
    let buildHtml = '<p style="color:var(--text-muted)">No specific build data.</p>';
    
    if (build) {
      const sets = build.sets.map(s => `<span class="set-pill">${s}</span>`).join(' ');
      const misc = build.misc ? build.misc.map(m => `<span class="misc-pill">${m}</span>`).join(' ') : '';
      buildHtml = `
        <div style="margin-bottom:0.25rem;"><strong>Sets:</strong> ${sets}</div>
        <div style="margin-bottom:0.25rem;"><strong>Ult:</strong> <span class="ult-pill">${build.ult}</span></div>
        ${misc ? `<div style="margin-bottom:0.25rem;"><strong>Misc:</strong> ${misc}</div>` : ''}
        ${build.notes ? `<div style="font-style:italic;color:var(--text-muted);margin-top:0.25rem;">📝 ${resolvePlayerNameAsPill(build.notes)}</div>` : ''}
      `;
    }

    // 2. Assignments (Recursive search)
    const myAssignments = [];
    
    
    const mentions = [];
    const myBuffs = (fight.buffsDebuffs || [])
      .filter(bd => bd.owners.includes(id))
      .map(bd => bd.name);

    if (fight.strategy.details) mentions.push(...findMentions(fight.strategy.details, id));
    if (fight.strategy.phases) {
      fight.strategy.phases.forEach(phase => {
        const phaseMentions = findMentions(phase.details, id);
        if (phaseMentions.length) {
          mentions.push(`<strong>${phase.name}:</strong>`);
          mentions.push(...phaseMentions);
        }
      });
    }

    card.innerHTML = `
      <div class="personal-fight-header">
        <span style="font-size:1.25rem">${fight.icon}</span>
        <h2>${fight.name}</h2>
      </div>
      <div class="personal-fight-body">
        <div class="fight-content-grid">
          
          <div class="fight-col-build">
            <div class="personal-section" style="margin-bottom:0">
              <h3>🛡️ Build</h3>
              ${buildHtml}
            </div>
          </div>

          <div class="personal-section">
            <h3>📋 Assignments</h3>
            ${myAssignments.length ? `<ul class="personal-list">${myAssignments.map(a => `<li>${a}</li>`).join('')}</ul>` : ''}
            ${assignmentRenderer.renderAssignments(fight.assignments, id, true)}
            ${myBuffs.length ? `<div style="margin-top:0.5rem;"><strong>Buffs/Debuffs:</strong> ${myBuffs.join(', ')}</div>` : ''}
          </div>

          <div class="personal-section">
            <h3>⚙️ Strategy Notes</h3>
            ${mentions.length ? `<ul class="personal-list">${mentions.map(m => `<li>${resolvePlayerNameAsPill(m)}</li>`).join('')}</ul>` : '<p style="color:var(--text-muted)">No specific mentions.</p>'}
          </div>

        </div>
      </div>
    `;
    main.appendChild(card);
  });
}

function findMentions(lines, id) {
  return lines.filter(line => line.includes(id));
}