// Application constants extracted from the original code

// Map Configuration
export const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2lja21pbmQiLCJhIjoiY2wyZzExbzF3MGVsejNkbzNkaG5zMnJuZSJ9.VHx0R2sNy9_TOrXOF0iiCA';
export const DEFAULT_MAP_CENTER: [number, number] = [6.897218, 44.884432]; // Italia
export const DEFAULT_USER_LOCATION = { lat: 45.4642, lng: 9.1900 }; // Milano (fallback)

// Zoom Levels
export const ZOOM_LEVELS = {
  USER_LOCATION: 5.5,
  DEFAULT_ITALY: 3,
  GLOBAL_MODE: 3,
  ALL_MODE: 3,
  GPS_CLICK: 5.5,
} as const;

// Clustering Configuration
export const CLUSTER_CONFIG = {
  RADIUS: 100,        // Raggio in pixel per raggruppare i marker
  MAX_ZOOM: 7,        // Zoom massimo per mostrare cluster
  MIN_POINTS: 3,      // Numero minimo di marker per formare un cluster
} as const;

// Marker Configuration
export const MARKER_CONFIG = {
  OFFSET_PIXELS: 25,  // Distanza in pixel tra i centri dei marker
  COLLISION_PRIORITIES: {
    PREMIUM_GYM: 3,
    PHYSICAL_EVENT: 2,
    VIRTUAL_EVENT: 1,
    CLUSTER: 0,
  },
} as const;

// Animation Configuration
export const ANIMATION_CONFIG = {
  TARGET_FPS: 60,
  FRAME_DURATION: 1000 / 60, // 16.67ms per frame
  ORBIT_PERIOD: 120000,       // 2 minuti default
  DIRECTION_CHANGE_INTERVAL: 30000, // Cambia direzione ogni 30 secondi
} as const;

// Carousel Configuration
export const CAROUSEL_CONFIG = {
  AUTO_SCROLL_DELAY: 3000,  // 3 secondi tra ogni scroll
  SCROLL_SPEED: 25,         // pixels per secondo
} as const;

// API Configuration
export const API_CONFIG = {
  DATA_URL: '/data.json',
  MAPBOX_STYLE: 'mapbox://styles/mapbox/dark-v11',
} as const;

// View Modes
export const VIEW_MODES = {
  ALL: 'all',
  INDOOR: 'indoor', 
  OUTDOOR: 'outdoor',
  GLOBAL: 'global',
} as const;

// Event Configuration
export const EVENT_CONFIG = {
  TYPES: {
    INDOOR: 'indoor',
    OUTDOOR: 'outdoor',
    VIRTUAL: 'virtual',
  },
  STATUSES: {
    ONGOING: 'ongoing',
    UPCOMING: 'upcoming',
    CLOSED: 'closed',
  },
  FORMATS: {
    BATTLE: 'battle',
    JAM_SESSION: 'jam session',
    WORLD_CUP: 'world cup',
    OLYMPIC: 'olympic',
    MULTI_STAGE: 'multi_stage',
  },
} as const;

// Colors
export const COLORS = {
  BRAND_GREEN: '#B9FF66',
  BRAND_RED: '#F5484D',
  BRAND_PURPLE: '#9747FF',
  GOLD: '#FFD700',
  DARK_BG: '#171717',
} as const;

// Breakpoints
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1280,
} as const;

// Globe Visibility Thresholds
export const GLOBE_VISIBILITY_THRESHOLDS: Record<number, number> = {
  2: 75,
  2.5: 78,
  3: 82,
  3.5: 85,
  4: 88,
  5: 90,
  6: 92,
};