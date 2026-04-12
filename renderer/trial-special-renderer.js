/**
 * Base class for trial-specific special rendering logic.
 * Each trial (DSR, SE, etc.) should extend this class.
 */
class TrialSpecialRenderer {
  /**
   * Returns true if the assignment ID requires a special custom layout.
   */
  isSpecial(assignmentId) {
    return false;
  }

  /**
   * Dispatches to specific rendering methods based on the assignment definition.
   * @param {Object} def - The assignment definition from ASSIGNMENTS map.
   * @param {string} playerId - Selected player ID (for personal view).
   * @param {boolean} isPersonalView - Whether rendering for a single player.
   * @param {AssignmentRenderer} mainRenderer - Reference to the caller to use helper methods.
   */
  render(def, playerId, isPersonalView, mainRenderer) {
    return '';
  }
}