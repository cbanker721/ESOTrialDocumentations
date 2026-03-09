class AssignmentRenderer {
  constructor() {
    // No-op
  }

  /**
   * Main public method.
   * Renders assignments for either the main view (hierarchical) or personal view (flat list for a player).
   */
  renderAssignments(assignmentIds, playerId, isPersonalView = false) {
    if (!assignmentIds || !assignmentIds.length) {
      // For personal view, return empty string and let caller handle the "no assignments" message,
      // as other content (like levers) might still exist.
      return isPersonalView ? '' : '<p style="color:var(--text-muted)">No specific assignments.</p>';
    }

    if (isPersonalView) {
      let html = '<ul class="personal-list">';
      let hasContent = false;
      
      assignmentIds.forEach(assignId => {
        const nodeHtml = this.renderPersonalNode(assignId, playerId, false);
        if (nodeHtml) {
          html += nodeHtml;
          hasContent = true;
        }
      });
      html += '</ul>';

      if (!hasContent) {
        return '';
      }
      return html;

    } else { // Main View
      let html = '<div class="assignments-block">';
      assignmentIds.forEach(assignId => {
        if (this.isSpecialAssignment(assignId)) {
          const def = ASSIGNMENTS.get(assignId);
          html += this.renderSpecialAssignment(def, null, false);
        } else {
          html += this.renderMainViewSubtree(assignId);
        }
      });
      html += '</div>';
      return html;
    }
  }

  /**
   * [PRIVATE] Renders a node for the personal view (filtered tree).
   * Renders the node if the player is directly assigned OR if any descendants are assigned.
   */
  renderPersonalNode(assignmentId, playerId, isParentDirectlyAssigned = false) {
    const def = ASSIGNMENTS.get(assignmentId);
    if (!def) return '';

    // Check direct assignment
    let myCustomPos = null;
    if (def.custom_positions) {
      myCustomPos = def.custom_positions.find(p => p.player === playerId)?.pos;
    }
    
    const isDirectlyAssigned = (def.role_ids && def.role_ids.includes(playerId)) || (myCustomPos !== null);

    // Recurse children
    let childrenHtml = '';
    if (def.assignment_ids) {
      childrenHtml = def.assignment_ids
        .map(childId => this.renderPersonalNode(childId, playerId, isDirectlyAssigned))
        .join('');
    }

    // Flatten hierarchy for ancestors that are not directly assigned
    if (!isDirectlyAssigned && childrenHtml) {
      return childrenHtml;
    }

    // Render if directly assigned
    if (isDirectlyAssigned) {
      let html = '';
      let content = '';
      
      if (myCustomPos) {
        content = `: ${myCustomPos}`;
      } else if (def.instructions) {
        content = `: ${resolvePlayerNameAsPill(def.instructions)}`;
      }

      // If this node is a child of another assigned node, render it more concisely.
      html = isParentDirectlyAssigned 
        ? `<li><span class="chained-arrow">↳</span> <strong>${def.name}</strong>${content}`
        : `<li><strong>${def.name}</strong>${content}`;

      if (childrenHtml) {
        html += `<ul class="personal-list">${childrenHtml}</ul>`;
      }
      html += `</li>`;
      return html;
    }

    return '';
  }

  /**
   * [PRIVATE] Renders a hierarchical tree for the main view.
   */
  renderMainViewSubtree(assignmentId) {
    const def = ASSIGNMENTS.get(assignmentId);
    if (!def) return '';

    let ownersHtml = '';
    if (def.role_ids && def.role_ids.length > 0) {
      ownersHtml = def.role_ids.map(id => createOwnerPillHtml(id)).join(' ');
    }

    let childrenHtml = '';
    if (def.assignment_ids && def.assignment_ids.length > 0) {
      childrenHtml += '<div class="assignment-children">';
      def.assignment_ids.forEach(childId => {
        childrenHtml += this.isSpecialAssignment(childId)
          ? this.renderSpecialAssignment(ASSIGNMENTS.get(childId), null, false)
          : this.renderMainViewSubtree(childId);
      });
      childrenHtml += '</div>';
    }

    return `
      <div class="assignment-card">
        <h4 title="${def.description || ''}">${def.name}</h4>
        ${ownersHtml ? `<div class="assignment-owners">${ownersHtml}</div>` : ''}
        ${def.instructions ? `<p class="assignment-instructions">${resolvePlayerNameAsPill(def.instructions)}</p>` : ''}
        ${childrenHtml}
      </div>
    `;
  }

  isSpecialAssignment(assignmentId) {
    return [
      ASSIGNMENT_ID.TWINS_TELEPORT,
      ASSIGNMENT_ID.TWINS_EXECUTE,
      ASSIGNMENT_ID.TWINS_SLAYERS,
      ASSIGNMENT_ID.REEF_GUARDIAN_SLAYERS,
      ASSIGNMENT_ID.TALERIA_SLAYERS,
      ASSIGNMENT_ID.LEVERS
    ].includes(assignmentId);
  }

  renderSpecialAssignment(def, playerId, isPersonalView) {
    if (def.id === ASSIGNMENT_ID.TWINS_TELEPORT) {
      return this.renderTwinsTeleport(def, playerId, isPersonalView);
    }
    if (def.id === ASSIGNMENT_ID.TWINS_EXECUTE) {
      return this.renderTwinsExecute(def, playerId, isPersonalView);
    }
    if (def.id === ASSIGNMENT_ID.LEVERS) {
      return this.renderLevers(def, playerId, isPersonalView);
    }

    // We expect 4 children: Left/Front Provider, Left/Front Group, Right/Back Provider, Right/Back Group
    // We need to categorize them.
    const children = (def.assignment_ids || []).map(id => ASSIGNMENTS.get(id)).filter(d => d);
    
    let leftFrontProvider, leftFrontGroup, rightBackProvider, rightBackGroup;

    children.forEach(c => {
      const name = c.name.toLowerCase();
      if (name.includes('left') || name.includes('front')) {
        if (name.includes('provider')) leftFrontProvider = c;
        else leftFrontGroup = c;
      } else if (name.includes('right') || name.includes('back')) {
        if (name.includes('provider')) rightBackProvider = c;
        else rightBackGroup = c;
      }
    });

    if (isPersonalView) {
      // For personal view, we just want to show the relevant parts for the player
      let html = `<ul class="personal-list"><li><strong>${def.name}</strong>`;
      html += '<ul class="personal-list">';
      
      [leftFrontProvider, leftFrontGroup, rightBackProvider, rightBackGroup].forEach(c => {
        if (c && c.role_ids && c.role_ids.includes(playerId)) {
           html += `<li><strong>${c.name}:</strong> ${c.instructions}</li>`;
        }
      });
      
      html += '</ul></li></ul>';
      return html;
    } else {
      // Main view: 4-column layout
      const leftLabel = def.id === ASSIGNMENT_ID.TALERIA_SLAYERS ? 'Front' : 'Left';
      const rightLabel = def.id === ASSIGNMENT_ID.TALERIA_SLAYERS ? 'Back' : 'Right';

      return `
        <div class="assignment-card special-slayer-card">
          <h4 title="${def.description || ''}">${def.name}</h4>
          ${def.instructions ? `<p class="assignment-instructions">${resolvePlayerNameAsPill(def.instructions)}</p>` : ''}
          <div class="slayer-grid">
            <div class="slayer-col">
              <h5>${leftLabel} Provider</h5>
              ${this.renderSlayerBlock(leftFrontProvider)}
            </div>
            <div class="slayer-col">
              <h5>${leftLabel} Group</h5>
              ${this.renderSlayerBlock(leftFrontGroup)}
            </div>
            <div class="slayer-col">
              <h5>${rightLabel} Provider</h5>
              ${this.renderSlayerBlock(rightBackProvider)}
            </div>
            <div class="slayer-col">
              <h5>${rightLabel} Group</h5>
              ${this.renderSlayerBlock(rightBackGroup)}
            </div>
          </div>
        </div>
      `;
    }
  }

  renderTwinsTeleport(def, playerId, isPersonalView) {
    // Children: Interrupter, TopLeft, TopRight, BottomLeft, BottomRight
    const children = (def.assignment_ids || []).map(id => ASSIGNMENTS.get(id)).filter(d => d);

    const topLeft = children.find(c => c.id === ASSIGNMENT_ID.TWINS_TELEPORT_TOP_LEFT);
    const topRight = children.find(c => c.id === ASSIGNMENT_ID.TWINS_TELEPORT_TOP_RIGHT);
    const bottomLeft = children.find(c => c.id === ASSIGNMENT_ID.TWINS_TELEPORT_BOTTOM_LEFT);
    const bottomRight = children.find(c => c.id === ASSIGNMENT_ID.TWINS_TELEPORT_BOTTOM_RIGHT);
    const interrupter = children.find(c => c.id === ASSIGNMENT_ID.TWINS_TELEPORT_INTERRUPTER);

    if (isPersonalView) {
      // Personal view logic remains flat/simple, just showing relevant parts
      // The _collectPersonalAssignments method handles the recursion and filtering,
      // so we shouldn't actually reach here for personal view if we use the standard flow.
      // However, if called directly:
      return ''; 
    }

    // Main View Layout
    return `
      <div class="assignment-card special-teleport-card">
        <h4 title="${def.description || ''}">${def.name}</h4>
        ${def.instructions ? `<p class="assignment-instructions">${resolvePlayerNameAsPill(def.instructions)}</p>` : ''}

        <div class="teleport-grid">
          <div class="teleport-quadrant">
            <h5>Top Left (Exit)</h5>
            ${this.renderTeleportSubTree(topLeft)}
          </div>
          <div class="teleport-quadrant">
            <h5>Top Right (Exit)</h5>
            ${this.renderTeleportSubTree(topRight)}
          </div>
          <div class="teleport-quadrant">
            <h5>Bottom Left (Entrance)</h5>
            ${this.renderTeleportSubTree(bottomLeft)}
          </div>
          <div class="teleport-quadrant">
            <h5>Bottom Right (Entrance)</h5>
            ${this.renderTeleportSubTree(bottomRight)}
          </div>
          <div class="teleport-quadrant">
            <h5>Interrupter</h5>
            ${this.renderTeleportBlock(interrupter)}
          </div>
        </div>
      </div>
    `;
  }

  renderTeleportSubTree(parentDef) {
    if (!parentDef || !parentDef.assignment_ids) return '';
    // Expecting Holder and Basher children
    const children = parentDef.assignment_ids.map(id => ASSIGNMENTS.get(id)).filter(d => d);
    return children.map(c => this.renderTeleportBlock(c)).join('');
  }

  renderTeleportBlock(def) {
    if (!def) return '';
    // Simple block with name and owners
    const ownersHtml = (def.role_ids || []).map(id => createOwnerPillHtml(id)).join(' ');

    return `<div class="teleport-role-row"><span class="teleport-role-label">${def.name}:</span> ${ownersHtml}</div>`;
  }

  renderTwinsExecute(def, playerId, isPersonalView) {
    const children = (def.assignment_ids || []).map(id => ASSIGNMENTS.get(id)).filter(d => d);
    const weaponSlayer = children.find(c => c.id === ASSIGNMENT_ID.TWINS_WEAPON_SLAYER);
    const largeSide = children.find(c => c.id === ASSIGNMENT_ID.TWINS_LARGE_SIDE);
    const smallSide = children.find(c => c.id === ASSIGNMENT_ID.TWINS_SMALL_SIDE);

    if (isPersonalView) {
      return ''; // Handled by recursion
    }

    return `
      <div class="assignment-card special-execute-card">
        <h4 title="${def.description || ''}">${def.name}</h4>
        
        <div class="execute-weapon-area">
          ${this.renderTeleportBlock(weaponSlayer)}
        </div>

        <div class="execute-grid">
          <div class="execute-col">
            <h5>Large Side</h5>
            ${this.renderExecuteSubTree(largeSide)}
          </div>
          <div class="execute-col">
            <h5>Small Side</h5>
            ${this.renderExecuteSubTree(smallSide)}
          </div>
        </div>
      </div>
    `;
  }

  renderExecuteSubTree(parentDef) {
    if (!parentDef) return '';

    // The default rendering now handles children side-by-side, so no special logic is needed.
    // It will render the parent card, and inside it, a grid of its children cards.
    return this.renderMainViewSubtree(parentDef.id);
  }

  renderSlayerBlock(def) {
    if (!def) return '';
    
    let ownersHtml = '';
    if (def.role_ids && def.role_ids.length > 0) {
      ownersHtml = def.role_ids.map(id => createOwnerPillHtml(id)).join(' ');
    }

    return `
      <div class="slayer-sub-block">
        <div class="slayer-owners">${ownersHtml}</div>
      </div>
    `;
  }

  renderLevers(def, playerId, isPersonalView) {
    if (isPersonalView) {
      // For personal view, we want to show the specific lever assignments for this player
      // The recursive collector will handle finding the specific LEVERS_LIGHTNING_X assignments
      // if we set up the data correctly.
      // However, since we added 'custom_positions' and not 'role_ids' to the leaf nodes in data.js,
      // the standard collector won't pick them up automatically unless we update the collector
      // or handle it here.
      // Let's rely on the standard collector finding the *instructions* if we put role_ids there,
      // OR we can just render the whole block if it's relevant.
      // Actually, the user asked to merge the info.
      // Let's just return empty here and let the recursion handle it?
      // No, LEVERS is a parent.
      // Let's render the maps for everyone in the main view, and specific lines in personal.
      return ''; 
    }

    const children = (def.assignment_ids || []).map(id => ASSIGNMENTS.get(id)).filter(d => d);
    const lightning = children.find(c => c.id === ASSIGNMENT_ID.LEVERS_LIGHTNING);
    const poison = children.find(c => c.id === ASSIGNMENT_ID.LEVERS_POISON);

    return `
      <div class="assignment-card special-levers-card">
        <h4 title="${def.description || ''}">${def.name}</h4>
        ${def.instructions ? `<p class="assignment-instructions">${resolvePlayerNameAsPill(def.instructions)}</p>` : ''}
        
        <div class="levers-container">
          ${this.renderLeverSide(lightning, 'bird-lever.png')}
          ${this.renderLeverSide(poison, 'turtle-lever.png')}
        </div>
      </div>
    `;
  }

  renderLeverSide(def, imageName) {
    if (!def) return '';
    const children = (def.assignment_ids || []).map(id => ASSIGNMENTS.get(id)).filter(d => d);

    let rowsHtml = '';
    children.forEach((child, index) => {
        if (child.custom_positions) {
            const colors = ['#00ff0d', '#00e1ff', '#ec407a']; // Green, Teal, Pink
            const headerColor = colors[index] || 'white';
            
            rowsHtml += `
              <div class="lever-set-box">
                <h5 style="color:${headerColor}; border-bottom: 1px solid ${headerColor}; margin-bottom: 0.25rem;">${child.name}</h5>
                ${child.custom_positions.map(p => `
                  <div class="lever-pos-row">
                    <span class="lever-pos-label">${p.pos}</span>
                    <span class="lever-pos-player">${createOwnerPillHtml(p.player)}</span>
                  </div>
                `).join('')}
              </div>`;
        }
    });

    return `
      <div class="lever-side-col">
        <h5>${def.name}</h5>
        <img src="../resources/dsr/${imageName}" alt="${def.name} Map" class="lever-map-img">
        <div class="lever-sets-grid">
            ${rowsHtml}
        </div>
      </div>
    `;
  }
}

// Add styles for the special renderer
const style = document.createElement('style');
style.innerHTML = `
  /* General card conciseness */
  .assignments-block .assignment-card { padding: 0.6rem; }
  .assignments-block .assignment-card h4 { font-size: 0.9rem; margin: 0 0 0.4rem 0; }
  .assignments-block .assignment-card h5 { font-size: 0.8rem; margin: 0 0 0.4rem 0; text-transform: uppercase; color: var(--text-muted); }

  /* Slayer card conciseness */
  .special-slayer-card .slayer-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem; margin-top: 0.4rem; }
  .slayer-col { background: rgba(255,255,255,0.03); padding: 0.4rem; border-radius: 4px; }
  .slayer-col h5 { text-align: center; border-bottom: 1px solid var(--border); padding-bottom: 0.25rem; }
  .slayer-sub-block { margin-top: 0.3rem; }
  .slayer-owners { display: flex; flex-wrap: wrap; gap: 0.25rem; }

  /* Styles for standard hierarchical assignments */
  .assignment-owners { display: flex; flex-wrap: wrap; gap: 0.25rem; margin-bottom: 0.5rem; }
  .assignment-instructions { font-size: 0.85rem; color: var(--text-muted); margin: 0; line-height: 1.3; }
  .assignment-children {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    gap: 0.4rem;
    margin-top: 0.6rem;
  }
  .assignment-children .assignment-card {
    background: rgba(0,0,0,0.2);
    border: 1px solid var(--border-dim);
    height: 100%;
    padding: 0.5rem;
  }

  /* Styles for Twins Teleport Special Renderer */
  .special-teleport-card .teleport-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.5rem; margin-top: 0.5rem; }
  .teleport-quadrant { background: rgba(255,255,255,0.03); padding: 0.4rem; border-radius: 4px; }
  .teleport-quadrant h5 { text-align: center; border-bottom: 1px solid var(--border); padding-bottom: 0.25rem; }
  .teleport-role-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.25rem; font-size: 0.85rem; }

  /* Styles for Twins Execute Special Renderer */
  .special-execute-card .execute-weapon-area { margin: 0.5rem 0; padding: 0.4rem; background: rgba(255,255,255,0.05); border-radius: 4px; text-align: center; }
  .special-execute-card .execute-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-top: 0.5rem; }
  .execute-col { background: rgba(255,255,255,0.03); padding: 0.4rem; border-radius: 4px; }

  /* Styles for Levers Special Renderer */
  .levers-container { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 0.5rem; }
  .lever-side-col { background: rgba(255,255,255,0.03); padding: 0.5rem; border-radius: 4px; }
  .lever-map-img { max-width: 100%; height: auto; border-radius: 4px; border: 1px solid var(--border); margin-bottom: 0.5rem; }
  .lever-sets-grid { display: grid; gap: 0.5rem; }
  .lever-set-box { background: rgba(0,0,0,0.2); padding: 0.4rem; border-radius: 4px; }
  .lever-pos-row { display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; margin-bottom: 0.1rem; }
  .lever-pos-label { color: var(--text-muted); }

  /* Styles for Role Symbols in Pills */
  .role-symbol {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    font-size: 10px;
    font-weight: bold;
    margin-left: 4px;
    color: white;
    vertical-align: middle;
    position: relative;
    top: -2px;
    line-height: 1;
  }
  .role-symbol.role-dps { background-color: rgba(211, 47, 47, 0.9); border: 1px solid rgba(255, 255, 255, 0.15); }
  .role-symbol.role-healer { background-color: rgba(56, 142, 60, 0.9); border: 1px solid rgba(255, 255, 255, 0.15); }
  .role-symbol.role-tank { background-color: rgba(25, 118, 210, 0.9); border: 1px solid rgba(255, 255, 255, 0.15); }

  .assignment-pill {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid var(--border);
    padding: 0 4px;
    border-radius: 4px;
    font-size: 0.9em;
    color: var(--text-bright);
  }
  .chained-arrow {
    color: var(--text-muted);
    margin-right: 0.25rem;
    font-weight: bold;
  }
`;
document.head.appendChild(style);


/**
 * Note: The code requires access to global constants like ASSIGNMENTS and PLAYERS.
 * Make sure these are available in the scope where this is used.
 */

// ============================================================
// Global Helper Functions (used by app.js and player-view.js)
// ============================================================

function getOwnerRoleClass(id) {
  if (id === 'MT' || id === 'OT') return 'owner-tank';
  if (id.startsWith('H')) return 'owner-healer';
  if (id.startsWith('DPS')) return 'owner-dps';
  return '';
}

function createOwnerPillHtml(id) {
  const p = PLAYERS[id];
  if (!p) return `<span class="owner-pill" data-owner-id="${id}">${id}</span>`;

  const roleClass = getOwnerRoleClass(id);
  const nick = p.nickname ? ` title="${p.nickname}"` : '';
  const symbolInfo = ROLE_SYMBOLS[id];
  let symbolHtml = `(${id})`; // Fallback
  if (symbolInfo) {
    symbolHtml = `<span class="role-symbol role-${symbolInfo.class}">${symbolInfo.number}</span>`;
  }

  return `<span class="owner-pill ${roleClass}" data-owner-id="${id}"${nick}>${p.shortName}${symbolHtml}</span>`;
}

function resolvePlayerNameAsPill(text) {
  let result = text;
  const replacements = new Map();
  let placeholderIndex = 0;
  const getPlaceholder = () => `__TOKEN_${placeholderIndex++}__`;

  // Resolve Locations
  if (typeof LOCATION_ID !== 'undefined' && typeof LOCATION_DEFINITIONS !== 'undefined') {
    const locIds = Object.values(LOCATION_ID).sort((a, b) => b.length - a.length);
    locIds.forEach(id => {
      const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b${escapedId}\\b`, 'g');
      if (regex.test(result)) {
        const def = LOCATION_DEFINITIONS.get(id);
        if (def) {
          let styleAttr = '';
          if (def.color) {
            styleAttr = ` style="color:${def.color}; border-color:${def.color};"`;
          }
          const replacementHtml = `<span class="location-pill"${styleAttr}>${def.icon} ${def.name}</span>`;
          
          const token = getPlaceholder();
          replacements.set(token, replacementHtml);
          result = result.replace(regex, token);
        }
      }
    });
  }

  // Resolve NPCs
  if (typeof NPC_ID !== 'undefined' && typeof NPC_DEFINITIONS !== 'undefined') {
    const npcIds = Object.values(NPC_ID).sort((a, b) => b.length - a.length);
    npcIds.forEach(id => {
      const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b${escapedId}\\b`, 'g');
      if (regex.test(result)) {
        const def = NPC_DEFINITIONS.get(id);
        if (def) {
          let styleAttr = '';
          if (def.color) {
            styleAttr = ` style="color:${def.color}; border-color:${def.color};"`;
          }
          const replacementHtml = `<span class="npc-pill"${styleAttr}>${def.icon} ${def.name}</span>`;
          
          const token = getPlaceholder();
          replacements.set(token, replacementHtml);
          result = result.replace(regex, token);
        }
      }
    });
  }

  // Resolve Assignments
  if (typeof ASSIGNMENT_ID !== 'undefined' && typeof ASSIGNMENTS !== 'undefined') {
    const assignIds = Object.values(ASSIGNMENT_ID).sort((a, b) => b.length - a.length);
    assignIds.forEach(id => {
      const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b${escapedId}\\b`, 'g');
      if (regex.test(result)) {
        const def = ASSIGNMENTS.get(id);
        if (def) {
          const renderOption = def.render_option || RENDER_OPTION.RENDER_ROLE;
          let replacementHtml = '';

          if (renderOption === RENDER_OPTION.RENDER_ROLE && def.role_ids && def.role_ids.length > 0) {
            replacementHtml = def.role_ids.map(rid => createOwnerPillHtml(rid)).join(' ');
          } else {
            let styleAttr = '';
            if (def.color) {
              styleAttr = ` style="color:${def.color}; border-color:${def.color};"`;
            }
            replacementHtml = `<span class="assignment-pill"${styleAttr}>${def.name}</span>`;
          }

          const token = getPlaceholder();
          replacements.set(token, replacementHtml);
          result = result.replace(regex, token);
        }
      }
    });
  }

  // Resolve Players (Last, to avoid breaking IDs that contain player names like 'twins-mt-tank')
  const ids = Object.keys(PLAYERS).sort((a, b) => b.length - a.length);
  ids.forEach(id => {
    const regex = new RegExp(`\\b${id}\\b`, 'g');
    if (regex.test(result)) {
      const token = getPlaceholder();
      replacements.set(token, createOwnerPillHtml(id));
      result = result.replace(regex, token);
    }
  });

  // Restore Tokens
  replacements.forEach((html, token) => {
    result = result.split(token).join(html);
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
        result = result.replace(regex, `<span class="has-nickname" title="${p.nickname}">${p.shortName} (${id})</span>`);
      } else {
        result = result.replace(regex, `${p.shortName} (${id})`);
      }
    }
  });
  return result;
}