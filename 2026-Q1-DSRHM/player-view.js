document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const playerId = params.get('id');

  populateDropdown(playerId);

  // Only render the content if a valid player is selected
  if (playerId && PLAYERS[playerId]) {
    renderHeader(playerId);
    renderContent(playerId);
  }
});

function getRole(id) {
  if (id.startsWith('H')) return 'Healer';
  if (id === 'MT' || id === 'OT') return 'Tank';
  return 'DPS';
}

function populateDropdown(currentId) {
  const selector = document.getElementById('player-selector');
  const playerOrder = ['MT','OT','H1','H2','DPS1','DPS2','DPS3','DPS4','DPS5','DPS6','DPS7','DPS8'];
  
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
    const role = getRole(id);
    if (role === 'Tank') icon = '🛡️ ';
    else if (role === 'Healer') icon = '⚕️ ';
    else icon = '⚔️ ';

    opt.textContent = `${icon}${PLAYERS[id].name} [${PLAYERS[id].tag}]`;
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
  const container = document.getElementById('header-content');
  
  let guidanceHtml = '';
  if (role === 'Tank') {
    const g = TANK_GUIDANCE[id] || {};
    guidanceHtml = `<div class="guidance-box"><p><strong>Subclass:</strong> ${g.subclass}</p><p><strong>Buffs:</strong> ${g.buff}</p></div>`;
  } else if (role === 'Healer') {
    const g = HEALER_GUIDANCE[id] || {};
    guidanceHtml = `<div class="guidance-box"><p><strong>Subclass:</strong> ${g.subclass}</p><p><strong>Group Skills:</strong> ${g.groupSkill || g.groupSkills}</p></div>`;
  } else {
    guidanceHtml = `<div class="guidance-box"><p><strong>DPS Guidance:</strong> ${DPS_GUIDANCE.subclass}</p></div>`;
  }

  container.innerHTML = `
    <h1 class="personal-title">${p.name} <span style="opacity:0.5">(${id})</span></h1>
    <div class="personal-subtitle">${role} • ${p.tag}</div>
    ${guidanceHtml}
  `;
}

function renderContent(id) {
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
        <div style="margin-bottom:0.5rem;"><strong>Sets:</strong> ${sets}</div>
        <div style="margin-bottom:0.5rem;"><strong>Ult:</strong> <span class="ult-pill">${build.ult}</span></div>
        ${misc ? `<div style="margin-bottom:0.5rem;"><strong>Misc:</strong> ${misc}</div>` : ''}
        ${build.notes ? `<div style="font-style:italic;color:var(--text-muted);margin-top:0.5rem;">📝 ${build.notes}</div>` : ''}
      `;
    }

    // 2. Assignments (Recursive search)
    const myAssignments = [];
    extractAssignments(fight.assignments, id, myAssignments);
    
    // Special: Inject Levers for the Minis fight
    if (fight.id === 'sailripper-bowbreaker') {
      const leverAssigns = getLeverAssignments(id);
      if (leverAssigns.length) myAssignments.push(...leverAssigns);
    }
    
    // 3. Buffs/Debuffs
    const myBuffs = (fight.buffsDebuffs || [])
      .filter(b => b.owners.includes(id))
      .map(b => b.name);

    // 4. Strategy Mentions
    const mentions = [];
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
        <span style="font-size:1.5rem">${fight.icon}</span>
        <h2>${fight.name}</h2>
      </div>
      <div class="personal-fight-body">
        <div class="personal-grid">
          
          <div class="personal-section">
            <h3>🛡️ Build</h3>
            ${buildHtml}
          </div>

          <div class="personal-section">
            <h3>📋 Assignments</h3>
            ${myAssignments.length ? `<ul class="personal-list">${myAssignments.map(a => `<li>${highlightId(a, id)}</li>`).join('')}</ul>` : '<p style="color:var(--text-muted)">No specific assignments.</p>'}
            ${myBuffs.length ? `<div style="margin-top:1rem;"><strong>Buffs/Debuffs:</strong> ${myBuffs.join(', ')}</div>` : ''}
          </div>

          <div class="personal-section">
            <h3>⚙️ Strategy Notes</h3>
            ${mentions.length ? `<ul class="personal-list">${mentions.map(m => `<li>${highlightId(m, id)}</li>`).join('')}</ul>` : '<p style="color:var(--text-muted)">No specific mentions.</p>'}
          </div>

        </div>
      </div>
    `;
    main.appendChild(card);
  });
}

function extractAssignments(obj, id, results, prefix = '') {
  if (!obj) return;
  
  for (const key in obj) {
    const value = obj[key];
    const label = prefix ? `${prefix} › ${formatKey(key)}` : formatKey(key);

    if (typeof value === 'string') {
      if (value.includes(id)) {
        results.push(`<strong>${label}:</strong> ${value}`);
      }
    } else if (Array.isArray(value)) {
      value.forEach(item => {
        if (typeof item === 'string' && item.includes(id)) {
          results.push(`<strong>${label}:</strong> ${item}`);
        }
      });
    } else if (typeof value === 'object') {
      extractAssignments(value, id, results, label);
    }
  }
}

function findMentions(lines, id) {
  return lines.filter(line => line.includes(id));
}

function formatKey(key) {
  // camelCase to Title Case
  return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}

function highlightId(text, id) {
  // Simple highlight of the ID
  return text.replace(new RegExp(id, 'g'), `<span class="highlight-me">${id}</span>`);
}

function getLeverAssignments(id) {
  const list = [];
  if (typeof LEVERS === 'undefined') return list;

  ['lightning', 'poison'].forEach(type => {
    if (LEVERS[type]) {
      LEVERS[type].forEach(set => {
        const match = set.positions.find(p => p.player === id);
        if (match) {
          const icon = type === 'lightning' ? '⚡' : '☠️';
          list.push(`<strong>${icon} ${set.name}:</strong> ${match.pos}`);
        }
      });
    }
  });
  return list;
}

// Re-using pill styles from main css, but ensuring they work here
const style = document.createElement('style');
style.innerHTML = `
  .set-pill { background: var(--accent-dim); color: var(--accent); padding: 2px 6px; border-radius: 4px; font-size: 0.85rem; }
  .ult-pill { background: rgba(188, 140, 255, 0.15); color: var(--purple); padding: 2px 6px; border-radius: 4px; font-size: 0.85rem; }
  .misc-pill { background: rgba(233, 183, 21, 0.2); color: var(--gold); padding: 2px 6px; border-radius: 4px; font-size: 0.85rem; }
`;
document.head.appendChild(style);