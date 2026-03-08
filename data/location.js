const LOCATION_ID = Object.freeze({
  REEF_CHALICE: 'loc-reef-chalice-3a4b',
  REEF_CROSSBONES: 'loc-reef-crossbones-5c6d',
  REEF_SKULL: 'loc-reef-skull-7e8f',
  REEF_ANCHOR: 'loc-reef-anchor-9a0b',
  REEF_WHEEL: 'loc-reef-wheel-1c2d',
  REEF_CROWN: 'loc-reef-crown-3e4f',
  TALERIA_BRIDGE: 'loc-taleria-bridge-5a6b',
  TALERIA_YELLOW_DOME: 'loc-taleria-yellow-dome-7c8d',
  TALERIA_GREEN_DOME: 'loc-taleria-green-dome-9e0f',
  TALERIA_PURPLE_DOME: 'loc-taleria-purple-dome-1a2b',
  TRASH_LEVER: 'loc-trash-lever-3c4d',
});

const LOCATION_DEFINITIONS = new Map([
  [LOCATION_ID.REEF_CHALICE, { name: "Chalice", icon: "🏆", color: "#ffd700" }],
  [LOCATION_ID.REEF_CROSSBONES, { name: "Crossbones", icon: "☠️", color: "#c0c0c0" }],
  [LOCATION_ID.REEF_SKULL, { name: "Skull", icon: "💀", color: "#f5f5f5" }],
  [LOCATION_ID.REEF_ANCHOR, { name: "Anchor", icon: "⚓", color: "#87ceeb" }],
  [LOCATION_ID.REEF_WHEEL, { name: "Wheel", icon: "☸️", color: "#deb887" }],
  [LOCATION_ID.REEF_CROWN, { name: "Crown", icon: "👑", color: "#ffa500" }],
  [LOCATION_ID.TALERIA_BRIDGE, { name: "Bridge", icon: "🌉", color: "#a0522d" }],
  [LOCATION_ID.TALERIA_YELLOW_DOME, { name: "Yellow Dome", icon: "🟡", color: "#ffff00" }],
  [LOCATION_ID.TALERIA_GREEN_DOME, { name: "Green Dome", icon: "🟢", color: "#00ff00" }],
  [LOCATION_ID.TALERIA_PURPLE_DOME, { name: "Purple Dome", icon: "🟣", color: "#da70d6" }],
  [LOCATION_ID.TRASH_LEVER, { name: "Lever", icon: "🕹️", color: "#cd853f" }],
]);