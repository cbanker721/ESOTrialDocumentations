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
      const personalAssignments = [];
      this._collectPersonalAssignments(assignmentIds, playerId, personalAssignments, new Set());
      
      if (!personalAssignments.length) {
        return '';
      }
      return `<ul class="personal-list">${personalAssignments.join('')}</ul>`;

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
   * [PRIVATE] Recursively collects personal assignments for a player.
   */
  _collectPersonalAssignments(assignmentIds, playerId, results, visited) {
    if (!assignmentIds) return;
    
    assignmentIds.forEach(assignId => {
      if (visited.has(assignId)) return;
      visited.add(assignId);

      const def = ASSIGNMENTS.get(assignId);
      if (!def) return;

      // If the player is directly part of this assignment, add it.
      if (def.role_ids && def.role_ids.includes(playerId)) {
        // Don't add the generic "Slayers" parent if a more specific child role exists for the player.
        const isSpecialParent = this.isSpecialAssignment(assignId);
        const playerInChildren = (def.assignment_ids || []).some(childId => {
            const childDef = ASSIGNMENTS.get(childId);
            return childDef && childDef.role_ids && childDef.role_ids.includes(playerId);
        });

        if (!isSpecialParent || !playerInChildren) {
            results.push(`<li><strong>${def.name}:</strong> ${resolvePlayerName(def.instructions)}</li>`);
        }
      }

      // Recurse into children to find more specific roles.
      if (def.assignment_ids) {
        this._collectPersonalAssignments(def.assignment_ids, playerId, results, visited);
      }
    });
  }

  /**
   * [PRIVATE] Renders a hierarchical tree for the main view.
   */
  renderMainViewSubtree(assignmentId) {
    const def = ASSIGNMENTS.get(assignmentId);
    if (!def) return '';

    let ownersHtml = '';
    if (def.role_ids && def.role_ids.length > 0) {
      ownersHtml = def.role_ids.map(id => {
        const roleClass = getOwnerRoleClass(id);
        const display = resolvePlayerName(id, true);
        return `<span class="owner-pill ${roleClass}" data-owner-id="${id}">${display}</span>`;
      }).join(' ');
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
        ${def.instructions ? `<p class="assignment-instructions">${resolvePlayerName(def.instructions)}</p>` : ''}
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
      ASSIGNMENT_ID.TALERIA_SLAYERS
    ].includes(assignmentId);
  }

  renderSpecialAssignment(def, playerId, isPersonalView) {
    if (def.id === ASSIGNMENT_ID.TWINS_TELEPORT) {
      return this.renderTwinsTeleport(def, playerId, isPersonalView);
    }
    if (def.id === ASSIGNMENT_ID.TWINS_EXECUTE) {
      return this.renderTwinsExecute(def, playerId, isPersonalView);
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
      // Main view: 2-column layout
      const leftLabel = def.id === ASSIGNMENT_ID.TALERIA_SLAYERS ? 'Front' : 'Left';
      const rightLabel = def.id === ASSIGNMENT_ID.TALERIA_SLAYERS ? 'Back' : 'Right';

      return `
        <div class="assignment-card special-slayer-card">
          <h4 title="${def.description || ''}">${def.name}</h4>
          <div class="slayer-grid">
            <div class="slayer-col">
              <h5>${leftLabel}</h5>
              ${this.renderSlayerBlock(leftFrontProvider, 'Provider')}
              ${this.renderSlayerBlock(leftFrontGroup, 'Group')}
            </div>
            <div class="slayer-col">
              <h5>${rightLabel}</h5>
              ${this.renderSlayerBlock(rightBackProvider, 'Provider')}
              ${this.renderSlayerBlock(rightBackGroup, 'Group')}
            </div>
          </div>
        </div>
      `;
    }
  }

  renderTwinsTeleport(def, playerId, isPersonalView) {
    // Children: Interrupter, TopLeft, TopRight, BottomLeft, BottomRight
    const children = (def.assignment_ids || []).map(id => ASSIGNMENTS.get(id)).filter(d => d);
    
    const interrupter = children.find(c => c.id === ASSIGNMENT_ID.TWINS_TELEPORT_INTERRUPTER);
    const topLeft = children.find(c => c.id === ASSIGNMENT_ID.TWINS_TELEPORT_TOP_LEFT);
    const topRight = children.find(c => c.id === ASSIGNMENT_ID.TWINS_TELEPORT_TOP_RIGHT);
    const bottomLeft = children.find(c => c.id === ASSIGNMENT_ID.TWINS_TELEPORT_BOTTOM_LEFT);
    const bottomRight = children.find(c => c.id === ASSIGNMENT_ID.TWINS_TELEPORT_BOTTOM_RIGHT);

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
        <p class="assignment-instructions">${resolvePlayerName(def.instructions)}</p>
        
        <div class="teleport-interrupter-area">
          ${this.renderTeleportBlock(interrupter)}
        </div>

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
    const ownersHtml = (def.role_ids || []).map(id => {
      const roleClass = getOwnerRoleClass(id);
      return `<span class="owner-pill ${roleClass}" data-owner-id="${id}">${resolvePlayerName(id, true)}</span>`;
    }).join(' ');

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

  renderSlayerBlock(def, label) {
    if (!def) return '';
    
    let ownersHtml = '';
    if (def.role_ids && def.role_ids.length > 0) {
      ownersHtml = def.role_ids.map(id => {
        const roleClass = getOwnerRoleClass(id);
        const display = resolvePlayerName(id, true);
        return `<span class="owner-pill ${roleClass}" data-owner-id="${id}">${display}</span>`;
      }).join(' ');
    }

    return `
      <div class="slayer-sub-block">
        <div class="slayer-sub-label">${label}</div>
        <div class="slayer-owners">${ownersHtml}</div>
      </div>
    `;
  }
}

// Add styles for the special renderer
const style = document.createElement('style');
style.innerHTML = `
  .special-slayer-card .slayer-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 0.5rem; }
  .slayer-col { background: rgba(255,255,255,0.03); padding: 0.5rem; border-radius: 4px; }
  .slayer-col h5 { margin: 0 0 0.5rem 0; text-align: center; border-bottom: 1px solid var(--border); padding-bottom: 0.25rem; }
  .slayer-sub-block { margin-bottom: 0.5rem; }
  .slayer-sub-label { font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.2rem; }
  .slayer-owners { display: flex; flex-wrap: wrap; gap: 0.25rem; }

  /* Styles for standard hierarchical assignments */
  .assignment-owners { display: flex; flex-wrap: wrap; gap: 0.25rem; margin-bottom: 0.5rem; }
  .assignment-instructions { font-size: 0.85rem; color: var(--text-muted); margin: 0; }
  .assignment-children {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .assignment-children .assignment-card {
    background: rgba(0,0,0,0.2);
    border: 1px solid var(--border-dim);
    height: 100%;
  }

  /* Styles for Twins Teleport Special Renderer */
  .special-teleport-card .teleport-interrupter-area { margin: 1rem 0; padding: 0.5rem; background: rgba(255,255,255,0.05); border-radius: 4px; text-align: center; }
  .special-teleport-card .teleport-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .teleport-quadrant { background: rgba(255,255,255,0.03); padding: 0.5rem; border-radius: 4px; }
  .teleport-quadrant h5 { margin: 0 0 0.5rem 0; text-align: center; border-bottom: 1px solid var(--border); padding-bottom: 0.25rem; color: var(--text-muted); font-size: 0.8rem; text-transform: uppercase; }
  .teleport-role-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.25rem; font-size: 0.9rem; }

  /* Styles for Twins Execute Special Renderer */
  .special-execute-card .execute-weapon-area { margin: 1rem 0; padding: 0.5rem; background: rgba(255,255,255,0.05); border-radius: 4px; text-align: center; }
  .special-execute-card .execute-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .execute-col { background: rgba(255,255,255,0.03); padding: 0.5rem; border-radius: 4px; }
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