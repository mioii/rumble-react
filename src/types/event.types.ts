// Event related types

export type EventType = 'indoor' | 'outdoor' | 'virtual';
export type EventStatus = 'ongoing' | 'upcoming' | 'closed';
export type EventFormat = 'battle' | 'jam session' | 'world cup' | 'olympic' | 'multi_stage';
export type BoardType = 'Kilter Board' | 'Moon Board' | 'Tension Board' | 'Shiny Wall' | 'Board Wall';

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Stage {
  stageNumber: number;
  name: string;
  location?: string;
  boardType?: string;
  coordinates?: Coordinates;
  status: 'upcoming' | 'ongoing' | 'completed';
  startDate?: string;
  endDate?: string;
}

export interface Event {
  id: string | number;
  name: string;
  type: EventType;
  status: EventStatus;
  format?: EventFormat;
  description: string;
  location: string;
  venue: string;
  coordinates?: Coordinates;
  difficulty: string;
  rating: number;
  players: number;
  maxPlayers?: number;
  entryFee?: string;
  prize: string;
  startDate?: string;
  endDate?: string;
  duration?: string;
  image?: string;
  gymId?: number;
  
  // Multi-stage specific
  stages?: Stage[];
  currentStage?: number;
  totalStages?: number;
  
  // For expanded stage events
  isStageEvent?: boolean;
  originalEventId?: string | number;
  originalEventName?: string;
  stageInfo?: Stage;
  isSingleLocationMultiStage?: boolean;
}

export interface PremiumGym {
  id: number;
  name: string;
  description: string;
  coordinates: Coordinates;
  logo?: string;
  image?: string;
  tier: 'gold' | 'silver' | 'bronze';
  features: string[];
  stats: {
    members: number;
    rating: number;
    totalEvents: number;
    activeEvents: number;
  };
}

export interface VirtualEventParticipant {
  lat: number;
  lng: number;
  city: string;
  count?: number;
  isOrganizer?: boolean;
}

export interface VirtualEventOrganizer {
  lat: number;
  lng: number;
  city: string;
}

export interface EventFilters {
  format: EventFormat[];
  status: EventStatus[];
  stage: ('single' | 'multi')[];
  price: ('free' | 'paid')[];
}

export interface EventDistance {
  eventId: string | number;
  distance: number;
}