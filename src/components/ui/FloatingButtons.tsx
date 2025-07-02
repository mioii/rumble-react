// src/components/ui/FloatingButtons.tsx
import React, { useState, useEffect } from 'react';

export type CarouselState = 'hidden' | 'normal' | 'expanded';

interface FloatingButtonsProps {
  carouselState: CarouselState;
  onToggleCarousel: () => void;
  onExpandCarousel: () => void;
  onGPSClick: () => void;
  gpsActive?: boolean;
  gpsLoading?: boolean;
  hasUserLocation?: boolean;
}

const FloatingButtons: React.FC<FloatingButtonsProps> = ({
  carouselState,
  onToggleCarousel,
  onExpandCarousel,
  onGPSClick,
  gpsActive = false,
  gpsLoading = false,
  hasUserLocation = false
}) => {
  const [showGPSPulse, setShowGPSPulse] = useState(false);

  useEffect(() => {
    if (gpsActive && !gpsLoading) {
      setShowGPSPulse(true);
      const timer = setTimeout(() => setShowGPSPulse(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [gpsActive, gpsLoading]);

  const getFloatingButtonsClass = () => {
    let baseClass = "floating-buttons fixed left-0 right-0 flex justify-between transition-transform duration-300 z-[2600] px-4 md:px-6";
    
    // Desktop positioning
    if (window.innerWidth >= 768) {
      if (carouselState === 'hidden') {
        return `${baseClass} bottom-6 translate-y-[26vh]`;
      } else if (carouselState === 'expanded') {
        return `${baseClass} bottom-[calc(100vh-136px)]`;
      } else {
        return `${baseClass} bottom-[calc(26vh+24px)]`;
      }
    }
    
    // Mobile positioning
    if (carouselState === 'hidden') {
      return `${baseClass} bottom-[calc(56px+36vh+16px)] translate-y-[36vh]`;
    } else if (carouselState === 'expanded') {
      return `${baseClass} bottom-[calc(56px+16px)]`;
    } else {
      return `${baseClass} bottom-[calc(56px+36vh+16px)]`;
    }
  };

  return (
    <div className={getFloatingButtonsClass()}>
      {/* Chevron Buttons Container */}
      <div className="chevron-container flex gap-2 md:flex-row flex-col items-center">
        {/* Chevron Up Button - Shows when carousel is visible */}
        {carouselState !== 'hidden' && (
          <button 
            className="button-minimal chevron-button chevron-up w-12 h-12 bg-black/50 backdrop-blur-[10px] border-none rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 text-white/60 hover:bg-black/50 hover:text-white/80 hover:scale-105 active:scale-95"
            onClick={onExpandCarousel}
          >
            <i className={`fas fa-chevron-${carouselState === 'expanded' ? 'down' : 'up'} text-lg transition-transform duration-300`}></i>
          </button>
        )}

        {/* Chevron Down Button - Always visible on desktop, conditional on mobile */}
        {(carouselState !== 'expanded' || window.innerWidth >= 768) && (
          <button 
            className="button-minimal chevron-button chevron-down w-12 h-12 bg-black/50 backdrop-blur-[10px] border-none rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 text-white/60 hover:bg-black/50 hover:text-white/80 hover:scale-105 active:scale-95"
            onClick={onToggleCarousel}
          >
            <i className={`fas fa-chevron-down text-lg transition-transform duration-300 ${carouselState === 'hidden' ? 'rotate-180' : ''}`}></i>
          </button>
        )}
      </div>

      {/* GPS Button */}
      <button 
        className={`button-minimal gps-button w-12 h-12 bg-black/50 backdrop-blur-[10px] border-none rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 relative overflow-visible
          ${gpsActive ? 'bg-[#4285F4]/20 text-[#4285F4] shadow-[0_0_0_2px_rgba(66,133,244,0.3)]' : 'text-white/60 hover:bg-black/50 hover:text-white/80 hover:scale-105'}
          ${gpsLoading ? 'pointer-events-none' : ''}
          active:scale-95`}
        onClick={onGPSClick}
        disabled={gpsLoading}
      >
        <i className={`fas fa-location-crosshairs text-xl transition-all duration-300 relative z-[1] ${gpsLoading ? 'animate-pulse' : ''}`}></i>
        
        {/* GPS Accuracy Ring */}
        {showGPSPulse && (
          <div 
            className="gps-accuracy-ring absolute w-[60px] h-[60px] border-2 border-[#4285F4] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              animation: 'singlePulse 1.5s ease-out forwards'
            }}
          />
        )}
      </button>
    </div>
  );
};

export default FloatingButtons;