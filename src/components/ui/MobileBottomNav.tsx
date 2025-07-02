// src/components/ui/MobileBottomNav.tsx
import React from 'react';

interface MobileBottomNavProps {
  onSearchClick?: () => void;
  onCreateClick?: () => void;
  onAboutClick?: () => void;
  onProfileClick?: () => void;
}

const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  onSearchClick,
  onCreateClick,
  onAboutClick,
  onProfileClick
}) => {
  return (
    <nav className="mobile-bottom-nav fixed bottom-0 left-0 right-0 h-14 bg-neutral-900 border-t border-white/10 px-6 z-[99999] md:hidden">
      <div className="mobile-nav-container flex items-center justify-between h-full px-6">
        {/* Search */}
        <button 
          onClick={onSearchClick}
          className="mobile-nav-btn mobile-nav-search rounded-full bg-[#F5484D] w-12 h-12 p-2 flex items-center justify-center hover:opacity-70 transition-opacity"
        >
          <i className="fas fa-search text-white"></i>
        </button>

        {/* Create */}
        <button 
          onClick={onCreateClick}
          className="mobile-nav-btn p-2 bg-transparent border-none cursor-pointer text-white transition-opacity hover:opacity-70 h-10 w-10 flex items-center justify-center"
        >
          <i className="fas fa-plus text-xl"></i>
        </button>

        {/* About (Grid) */}
        <button 
          onClick={onAboutClick}
          className="mobile-nav-btn p-2 bg-transparent border-none cursor-pointer text-white transition-opacity hover:opacity-70 h-10 w-10 flex items-center justify-center"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
            <rect x="3" y="3" width="8" height="8" fill="white"/>
            <rect x="13" y="3" width="8" height="8" fill="white"/>
            <rect x="3" y="13" width="8" height="8" fill="white"/>
            <rect x="13" y="13" width="8" height="8" fill="white"/>
          </svg>
        </button>

        {/* Profile */}
        <button 
          onClick={onProfileClick}
          className="mobile-nav-btn p-2 bg-transparent border-none cursor-pointer text-white transition-opacity hover:opacity-70 h-10 w-10 flex items-center justify-center"
        >
          <i className="fas fa-user text-xl"></i>
        </button>
      </div>
    </nav>
  );
};

export default MobileBottomNav;