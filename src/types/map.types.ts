// Map related types
import { Marker } from 'mapbox-gl';
import { Event, Coordinates } from './event.types';

export type ViewMode = 'all' | 'indoor' | 'outdoor' | 'global';

export interface MapMarker extends Marker {
  _eventId?: string | number;
  _actualPosition?: Coordinates;
  _isOrbital?: boolean;
}

export interface OrbitalSystem {
  marker: MapMarker;
  orbit: Orbit;
  lastUpdate: number;
  eventId: string | number;
  progress: number;
  startPosition: Coordinates;
  smoothDelta?: number;
  pausedAt?: number;
}

export interface Orbit {
  type: 'satellite' | 'regional';
  center: Coordinates;
  altitude?: number;
  inclination?: number;
  phase?: number;
  period: number;
  direction?: number;
  ascendingNode?: number;
  orbitType?: string;
  startPosition?: Coordinates;
  radiusX?: number;
  radiusY?: number;
  angle?: number;
}

export interface MarkerCollisionData {
  lat: number;
  lng: number;
  priority: number;
  radius: number;
}

export interface NetworkConnection {
  eventId: string | number;
  participants: Array<{
    lat: number;
    lng: number;
    city: string;
    count?: number;
    isOrganizer?: boolean;
  }>;
}

export interface GlobeVisibilityThresholds {
  [key: number]: number; // zoom level -> threshold
}

export interface ClusterProperties {
  cluster: boolean;
  cluster_id?: number;
  point_count?: number;
  eventId?: string | number;
  eventType?: string;
  eventName?: string;
  isVirtual?: boolean;
  isInactive?: boolean;
}