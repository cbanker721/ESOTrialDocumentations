/**
 * Special rendering logic for Dreadsail Reef (DSR).
 */
class DSRSpecialRenderer extends TrialSpecialRenderer {
  isSpecial(assignmentId) {
    return [
      ASSIGNMENT_ID.TWINS_TELEPORT,
      ASSIGNMENT_ID.TWINS_EXECUTE,
      ASSIGNMENT_ID.TWINS_SLAYERS,
      ASSIGNMENT_ID.REEF_GUARDIAN_SLAYERS,
      ASSIGNMENT_ID.TALERIA_SLAYERS,
      ASSIGNMENT_ID.LEVERS
    ].includes(assignmentId);
  }

  render(def, playerId, isPersonalView, mainRenderer) {
    if (def.id === ASSIGNMENT_ID.TWINS_TELEPORT) {
      return this.renderTwinsTeleport(def, playerId, isPersonalView, mainRenderer);
    }
    if (def.id === ASSIGNMENT_ID.TWINS_EXECUTE) {
      return this.renderTwinsExecute(def, playerId, isPersonalView, mainRenderer);
    }
    if (def.id === ASSIGNMENT_ID.LEVERS) {
      return this.renderLevers(def, playerId, isPersonalView, mainRenderer);
    }

    // Default: Slayer 4-column layout
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
      let html = `<ul class="personal-list"><li><strong>${def.name}</strong><ul class="personal-list">`;
      [leftFrontProvider, leftFrontGroup, rightBackProvider, rightBackGroup].forEach(c => {
        if (c && c.role_ids && c.role_ids.includes(playerId)) {
           html += `<li><strong>${c.name}:</strong> ${c.instructions}</li>`;
        }
      });
      return html + '</ul></li></ul>';
    }

    const leftLabel = def.id === ASSIGNMENT_ID.TALERIA_SLAYERS ? 'Front' : 'Left';
    const rightLabel = def.id === ASSIGNMENT_ID.TALERIA_SLAYERS ? 'Back' : 'Right';

    return `
      <div class="assignment-card special-slayer-card">
        <h4>${def.name}</h4>
        ${def.instructions ? `<p class="assignment-instructions">${resolvePlayerNameAsPill(def.instructions)}</p>` : ''}
        <div class="slayer-grid">
          <div class="slayer-col"><h5>${leftLabel} Provider</h5>${mainRenderer.renderSlayerBlock(leftFrontProvider)}</div>
          <div class="slayer-col"><h5>${leftLabel} Group</h5>${mainRenderer.renderSlayerBlock(leftFrontGroup)}</div>
          <div class="slayer-col"><h5>${rightLabel} Provider</h5>${mainRenderer.renderSlayerBlock(rightBackProvider)}</div>
          <div class="slayer-col"><h5>${rightLabel} Group</h5>${mainRenderer.renderSlayerBlock(rightBackGroup)}</div>
        </div>
      </div>`;
  }

  renderTwinsTeleport(def, playerId, isPersonalView, mainRenderer) {
    const children = (def.assignment_ids || []).map(id => ASSIGNMENTS.get(id)).filter(d => d);
    const topLeft = children.find(c => c.id === ASSIGNMENT_ID.TWINS_TELEPORT_TOP_LEFT);
    const topRight = children.find(c => c.id === ASSIGNMENT_ID.TWINS_TELEPORT_TOP_RIGHT);
    const bottomLeft = children.find(c => c.id === ASSIGNMENT_ID.TWINS_TELEPORT_BOTTOM_LEFT);
    const bottomRight = children.find(c => c.id === ASSIGNMENT_ID.TWINS_TELEPORT_BOTTOM_RIGHT);
    const interrupter = children.find(c => c.id === ASSIGNMENT_ID.TWINS_TELEPORT_INTERRUPTER);

    return `
      <div class="assignment-card special-teleport-card">
        <h4>${def.name}</h4>
        <div class="teleport-grid">
          <div class="teleport-quadrant"><h5>Top Left (Exit)</h5>${this.renderTeleportSubTree(topLeft)}</div>
          <div class="teleport-quadrant"><h5>Top Right (Exit)</h5>${this.renderTeleportSubTree(topRight)}</div>
          <div class="teleport-quadrant"><h5>Bottom Left (Entrance)</h5>${this.renderTeleportSubTree(bottomLeft)}</div>
          <div class="teleport-quadrant"><h5>Bottom Right (Entrance)</h5>${this.renderTeleportSubTree(bottomRight)}</div>
          <div class="teleport-quadrant"><h5>Interrupter</h5>${mainRenderer.renderTeleportBlock(interrupter)}</div>
        </div>
      </div>`;
  }

  renderTeleportSubTree(parentDef) {
    if (!parentDef || !parentDef.assignment_ids) return '';
    const children = parentDef.assignment_ids.map(id => ASSIGNMENTS.get(id)).filter(d => d);
    // We'll call back into mainRenderer for standard blocks
    const mainRenderer = new AssignmentRenderer(); 
    return children.map(c => mainRenderer.renderTeleportBlock(c)).join('');
  }

  renderTwinsExecute(def, playerId, isPersonalView, mainRenderer) {
    const children = (def.assignment_ids || []).map(id => ASSIGNMENTS.get(id)).filter(d => d);
    const weaponSlayer = children.find(c => c.id === ASSIGNMENT_ID.TWINS_WEAPON_SLAYER);
    const largeSide = children.find(c => c.id === ASSIGNMENT_ID.TWINS_LARGE_SIDE);
    const smallSide = children.find(c => c.id === ASSIGNMENT_ID.TWINS_SMALL_SIDE);

    return `
      <div class="assignment-card special-execute-card">
        <h4>${def.name}</h4>
        <div class="execute-weapon-area">${mainRenderer.renderTeleportBlock(weaponSlayer)}</div>
        <div class="execute-grid">
          <div class="execute-col"><h5>Large Side</h5>${mainRenderer.renderMainViewSubtree(largeSide.id)}</div>
          <div class="execute-col"><h5>Small Side</h5>${mainRenderer.renderMainViewSubtree(smallSide.id)}</div>
        </div>
      </div>`;
  }

  renderLevers(def, playerId, isPersonalView, mainRenderer) {
    const children = (def.assignment_ids || []).map(id => ASSIGNMENTS.get(id)).filter(d => d);
    const lightning = children.find(c => c.id === ASSIGNMENT_ID.LEVERS_LIGHTNING);
    const poison = children.find(c => c.id === ASSIGNMENT_ID.LEVERS_POISON);

    return `
      <div class="assignment-card special-levers-card">
        <h4>${def.name}</h4>
        <div class="levers-container">
          ${this.renderLeverSide(lightning, 'bird-lever.png')}
          ${this.renderLeverSide(poison, 'turtle-lever.png')}
        </div>
      </div>`;
  }

  renderLeverSide(def, imageName) {
    if (!def) return '';
    const children = (def.assignment_ids || []).map(id => ASSIGNMENTS.get(id)).filter(d => d);
    let rowsHtml = '';
    children.forEach((child, index) => {
        if (child.custom_positions) {
            const colors = ['#00ff0d', '#00e1ff', '#ec407a'];
            const headerColor = colors[index] || 'white';
            rowsHtml += `
              <div class="lever-set-box">
                <h5 style="color:${headerColor}; border-bottom: 1px solid ${headerColor};">${child.name}</h5>
                ${child.custom_positions.map(p => `
                  <div class="lever-pos-row">
                    <span class="lever-pos-label">${p.pos}</span>
                    <span class="lever-pos-player">${createOwnerPillHtml(p.player)}</span>
                  </div>`).join('')}
              </div>`;
        }
    });
    return `
      <div class="lever-side-col">
        <h5>${def.name}</h5>
        <img src="../resources/dsr/${imageName}" class="lever-map-img">
        <div class="lever-sets-grid">${rowsHtml}</div>
      </div>`;
  }
}