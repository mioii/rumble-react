import { Event, PremiumGym, VirtualEventOrganizer, VirtualEventParticipant } from '../types/event.types';

// Sample events data (subset for testing)
export const mockEvents: Event[] = [
  {
    id: 1,
    name: "Urban Boulder Bash",
    type: "indoor",
    status: "ongoing",
    format: "battle",
    description: "High-energy indoor climbing competition",
    location: "Milano, Italy",
    venue: "The Climbing Hangar",
    coordinates: { lat: 45.4642, lng: 9.1900 },
    difficulty: "Intermediate",
    rating: 4.7,
    players: 127,
    maxPlayers: 150,
    entryFee: "€25",
    prize: "€1,000",
    startDate: "2025-07-02T10:00:00",
    endDate: "2025-07-02T16:00:00",
    duration: "6 hours",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800"
  },
  {
    id: 2,
    name: "Alpine Summit Challenge",
    type: "outdoor",
    status: "upcoming",
    format: "world cup",
    description: "Elite outdoor climbing competition in the Alps",
    location: "Chamonix, France",
    venue: "Mont Blanc Massif",
    coordinates: { lat: 45.9237, lng: 6.8694 },
    difficulty: "Expert",
    rating: 4.9,
    players: 89,
    maxPlayers: 100,
    entryFee: "€50",
    prize: "€5,000",
    startDate: "2025-07-05T08:00:00",
    endDate: "2025-07-07T18:00:00",
    duration: "3 days"
  },
  {
    id: 3,
    name: "Global Kilter Board Championship",
    type: "virtual",
    status: "ongoing",
    format: "olympic",
    description: "Worldwide virtual climbing competition on Kilter Board",
    location: "Global",
    venue: "Online",
    difficulty: "All Levels",
    rating: 4.8,
    players: 1847,
    prize: "€10,000",
    startDate: "2025-07-01T00:00:00",
    endDate: "2025-07-07T23:59:59",
    duration: "7 days"
  }
];

export const mockPremiumGyms: PremiumGym[] = [
  {
    id: 1,
    name: "B-Side Bouldering",
    description: "Premium climbing facility with world-class routes",
    coordinates: { lat: 45.4788, lng: 9.2290 },
    logo: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=200",
    image: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=800",
    tier: "gold",
    features: ["moonboard", "training_area", "cafe", "gear_shop"],
    stats: {
      members: 1250,
      rating: 4.9,
      totalEvents: 156,
      activeEvents: 3
    }
  }
];

export const mockVirtualEventOrganizers: Record<string, VirtualEventOrganizer> = {
  "3": {
    lat: 51.5074,
    lng: -0.1278,
    city: "London"
  }
};

export const mockVirtualEventParticipants: Record<string, VirtualEventParticipant[]> = {
  "3": [
    { lat: 48.8566, lng: 2.3522, city: "Paris", count: 156 },
    { lat: 40.7128, lng: -74.0060, city: "New York", count: 243 },
    { lat: 35.6762, lng: 139.6503, city: "Tokyo", count: 189 },
    { lat: -33.8688, lng: 151.2093, city: "Sydney", count: 98 },
    { lat: 37.7749, lng: -122.4194, city: "San Francisco", count: 167 }
  ]
};