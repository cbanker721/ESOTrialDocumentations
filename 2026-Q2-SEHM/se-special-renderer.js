/**
 * Special rendering logic for Sanity's Edge (SE).
 */
class SESpecialRenderer extends TrialSpecialRenderer {
  isSpecial(assignmentId) {
    // Add IDs that need custom grid layouts (e.g. Woe rotation or portal groups)
    return [
      ASSIGNMENT_ID.SE_SLAYERS
    ].includes(assignmentId);
  }

  render(def, playerId, isPersonalView, mainRenderer) {
    if (def.id === ASSIGNMENT_ID.SE_SLAYERS) {
       // For now, re-use the 4-column slayer layout pattern if suitable
       // or implement something specific for SE's two-group stack.
    }
    return '';
  }
}