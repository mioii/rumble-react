import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';  // IMPORTANTE: importa gli stili globali
import '@fortawesome/fontawesome-free/css/all.min.css';

import {
  LoadingOverlay,
  Header,
  MobileBottomNav,
  FloatingButtons,
  ToggleBar,
  FilterPanel,
  type CarouselState,
  type ActiveFilters
} from './components/ui';
// import type { ViewMode } from './types/event.types'; // Removed because ViewMode is not exported

// If ViewMode is needed, define it here or import from the correct module
type ViewMode = 'all' | 'someOtherMode'; // Adjust as needed
import AppComponent from './App';

function MainApp() {
  // State management
  const [isLoading, setIsLoading] = useState(true);
  const [carouselState, setCarouselState] = useState<CarouselState>('normal');
  const [currentViewMode, setCurrentViewMode] = useState<ViewMode>('all');
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter state
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    format: ['battle', 'jam session', 'world cup', 'olympic'],
    status: ['ongoing', 'upcoming', 'closed'],
    stage: ['single', 'multi'],
    price: ['free', 'paid']
  });

  // GPS state
  const [gpsActive, setGpsActive] = useState(false);
  const [gpsLoading, setGpsLoading] = useState(false);
  const [hasUserLocation, setHasUserLocation] = useState(false);

  // Calculate active filters count
  const getActiveFiltersCount = () => {
    let count = 0;
    const allFormats = ['battle', 'jam session', 'world cup', 'olympic'];
    const allStatuses = ['ongoing', 'upcoming', 'closed'];
    const allStages = ['single', 'multi'];
    const allPrices = ['free', 'paid'];

    if (activeFilters.format.length > 0 && activeFilters.format.length < allFormats.length) {
      count += activeFilters.format.length;
    }
    if (activeFilters.status.length > 0 && activeFilters.status.length < allStatuses.length) {
      count += activeFilters.status.length;
    }
    if (activeFilters.stage.length > 0 && activeFilters.stage.length < allStages.length) {
      count += activeFilters.stage.length;
    }
    if (activeFilters.price.length > 0 && activeFilters.price.length < allPrices.length) {
      count += activeFilters.price.length;
    }

    return count;
  };

  // Handlers
  const handleToggleCarousel = () => {
    if (carouselState === 'expanded') {
      setCarouselState('normal');
    } else if (carouselState === 'normal') {
      setCarouselState('hidden');
    } else {
      setCarouselState('normal');
    }
  };

  const handleExpandCarousel = () => {
    setCarouselState(carouselState === 'expanded' ? 'normal' : 'expanded');
  };

  const handleGPSClick = async () => {
    if (!hasUserLocation) {
      setGpsLoading(true);
      // Simulate getting user location
      setTimeout(() => {
        setGpsLoading(false);
        setGpsActive(true);
        setHasUserLocation(true);
      }, 2000);
    } else {
      // Center on user location
      setGpsActive(true);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log('Searching for:', query);
    // Implement search logic here
  };

  const handleApplyFilters = (filters: ActiveFilters) => {
    setActiveFilters(filters);
    console.log('Applied filters:', filters);
    // Implement filter logic here
  };

  // Simulate loading complete
  React.useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <div className="bg-neutral-900 text-white min-h-screen">
      {/* Loading Overlay */}
      {isLoading && <LoadingOverlay />}

      {/* Desktop Header */}
      <Header 
        onThemeToggle={() => console.log('Toggle theme')}
        onNotificationClick={() => console.log('Show notifications')}
        onProfileClick={() => console.log('Show profile')}
      />

      {/* Main Content */}
      <div className="relative">
        {/* Map Section (placeholder) */}
        <div className="map-section relative h-screen bg-neutral-900">
          <div className="absolute inset-0 flex items-center justify-center text-neutral-500">
            <div className="text-center">
              <i className="fas fa-map text-6xl mb-4"></i>
              <p className="text-xl">Map Component Here</p>
            </div>
          </div>

          {/* Toggle Bar */}
          <ToggleBar 
            currentViewMode={currentViewMode}
            onViewModeChange={setCurrentViewMode}
            onSearch={handleSearch}
            activeFiltersCount={getActiveFiltersCount()}
            onToggleFilters={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
          />

          {/* Filter Panel */}
          <FilterPanel 
            isOpen={isFilterPanelOpen}
            onClose={() => setIsFilterPanelOpen(false)}
            activeFilters={activeFilters}
            onApplyFilters={handleApplyFilters}
          />

          {/* Carousel placeholder */}
          <div 
            className={`fixed bottom-0 left-0 right-0 bg-neutral-800 transition-transform duration-300
              ${carouselState === 'hidden' ? 'translate-y-full' : ''}
              ${carouselState === 'expanded' ? 'h-[calc(100vh-80px)]' : 'h-[26vh] md:h-[26vh]'}
              ${window.innerWidth < 768 ? 'bottom-14' : 'bottom-0'}`}
          >
            <div className="flex items-center justify-center h-full text-neutral-500">
              <div className="text-center">
                <i className="fas fa-images text-4xl mb-2"></i>
                <p>Event Carousel Here</p>
                <p className="text-sm mt-2">State: {carouselState}</p>
              </div>
            </div>
          </div>

          {/* Floating Buttons */}
          <FloatingButtons 
            carouselState={carouselState}
            onToggleCarousel={handleToggleCarousel}
            onExpandCarousel={handleExpandCarousel}
            onGPSClick={handleGPSClick}
            gpsActive={gpsActive}
            gpsLoading={gpsLoading}
            hasUserLocation={hasUserLocation}
          />
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav 
        onSearchClick={() => console.log('Mobile search')}
        onCreateClick={() => console.log('Create event')}
        onAboutClick={() => console.log('About/Grid view')}
        onProfileClick={() => console.log('Profile')}
      />
    </div>
  );
}

export default MainApp;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppComponent />
  </React.StrictMode>
);