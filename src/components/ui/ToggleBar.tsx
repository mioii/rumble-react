// src/components/ui/ToggleBar.tsx
import React, { useState, useEffect, useRef } from 'react';
import type { ViewMode } from '../../types/event.types';

interface ToggleBarProps {
  currentViewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  onSearch: (query: string) => void;
  activeFiltersCount: number;
  onToggleFilters: () => void;
}

const ToggleBar: React.FC<ToggleBarProps> = ({
  currentViewMode,
  onViewModeChange,
  onSearch,
  activeFiltersCount,
  onToggleFilters
}) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Focus search input when search mode is activated
  useEffect(() => {
    if (isSearchActive && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isSearchActive]);

  const toggleSearch = () => {
    if (isSearchActive) {
      // Closing search
      setIsSearchActive(false);
      setSearchQuery('');
      onSearch(''); // Clear search results
    } else {
      // Opening search
      setIsSearchActive(true);
    }
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(searchQuery);
    }
  };

  const clearSearch = () => {
    if (searchQuery === '') {
      toggleSearch();
    } else {
      setSearchQuery('');
      onSearch('');
      searchInputRef.current?.focus();
    }
  };

  const getButtonClasses = (mode: ViewMode) => {
    const isActive = currentViewMode === mode;
    const baseClasses = `toggle-button relative inline-flex items-center justify-center gap-0 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap overflow-hidden min-h-[40px] hover:scale-105`;
    
    const sizeClasses = isActive 
      ? 'w-auto px-3 md:px-6 gap-2 text-sm' 
      : 'w-10 h-10 p-0 text-base';
    
    const colorClasses = isActive 
      ? 'text-white' 
      : 'text-white/60 bg-transparent hover:text-white/80 hover:bg-white/10';

    return `${baseClasses} ${sizeClasses} ${colorClasses}`;
  };

  const getGradientStyle = (mode: ViewMode) => {
    const gradients = {
      all: 'linear-gradient(to right, #F5484D, #9747FF)',
      indoor: 'linear-gradient(to right, #F5484D, #dc2626)',
      outdoor: 'linear-gradient(to right, #9AD746, #7FB935)',
      global: 'linear-gradient(to right, #9747FF, #7c3aed)'
    };
    return { background: currentViewMode === mode ? gradients[mode] : 'transparent' };
  };

  return (
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-full md:w-auto md:px-0 z-[3000]">
      <div 
        ref={containerRef}
        id="mainToggleContainer"
        className={`bg-black/50 backdrop-blur-lg rounded-full p-1 transition-all duration-300 h-12 flex items-center
          ${isSearchActive ? 'search-active border-none' : ''}
          ${isSearchActive && window.innerWidth >= 768 ? 'min-w-[400px]' : ''}
          w-[calc(100%-32px)] mx-auto md:mx-0 md:w-auto`}
      >
        {/* Normal View */}
        <div 
          id="normalToggleView"
          className={`flex items-center gap-1 md:gap-1 justify-between md:justify-start w-full h-10
            ${isSearchActive ? 'hidden' : ''}
            ${window.innerWidth < 768 ? 'grid grid-cols-[40px_1fr_40px] gap-2' : ''}`}
        >
          {/* Filter Button */}
          <button 
            onClick={onToggleFilters}
            className={`toggle-button filter-button relative inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 cursor-pointer w-10 h-10 p-0 text-white/60 bg-transparent hover:text-white/80 hover:bg-white/10`}
          >
            <i className="fas fa-sliders-h"></i>
            {activeFiltersCount > 0 && (
              <span className="filter-badge absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center bg-[#F5484D] text-white rounded-full text-[11px] font-bold px-1 pointer-events-none">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* View Mode Buttons Container */}
          <div className="flex items-center gap-1 flex-1 justify-center md:flex-none md:justify-start">
            <button 
              onClick={() => onViewModeChange('all')}
              className={getButtonClasses('all')}
              style={getGradientStyle('all')}
            >
              <i className="fas fa-layer-group"></i>
              <span className={`button-text ${currentViewMode === 'all' ? 'inline' : 'hidden md:inline'}`}>
                All
              </span>
            </button>

            <button 
              onClick={() => onViewModeChange('indoor')}
              className={getButtonClasses('indoor')}
              style={getGradientStyle('indoor')}
            >
              <i className="fas fa-home"></i>
              <span className={`button-text ${currentViewMode === 'indoor' ? 'inline' : 'hidden md:inline'}`}>
                Indoor
              </span>
            </button>

            <button 
              onClick={() => onViewModeChange('outdoor')}
              className={getButtonClasses('outdoor')}
              style={getGradientStyle('outdoor')}
            >
              <i className="fas fa-mountain"></i>
              <span className={`button-text ${currentViewMode === 'outdoor' ? 'inline' : 'hidden md:inline'}`}>
                Outdoor
              </span>
            </button>

            <button 
              onClick={() => onViewModeChange('global')}
              className={getButtonClasses('global')}
              style={getGradientStyle('global')}
            >
              <span className="board-icon w-4 h-4 inline-flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="4" cy="4" r="2.5" fill="currentColor"/>
                  <circle cx="12" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7"/>
                  <circle cx="20" cy="4" r="2.5" fill="currentColor"/>
                  <circle cx="4" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7"/>
                  <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
                  <circle cx="20" cy="12" r="2.5" fill="currentColor"/>
                  <circle cx="4" cy="20" r="2.5" fill="currentColor"/>
                  <circle cx="12" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7"/>
                  <circle cx="20" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7"/>
                </svg>
              </span>
              <span className={`button-text ${currentViewMode === 'global' ? 'inline' : 'hidden md:inline'}`}>
                Board
              </span>
            </button>
          </div>

          {/* Search Button */}
          <button 
            onClick={toggleSearch}
            className="toggle-button search-button relative inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 cursor-pointer w-10 h-10 p-0 text-white/60 bg-transparent hover:text-white/80 hover:bg-white/10"
          >
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Search View */}
        {isSearchActive && (
          <div 
            id="searchToggleView"
            className="flex items-center px-2 w-full h-full gap-2"
          >
            <button 
              onClick={toggleSearch}
              className="p-2 rounded-full transition-all text-sm text-neutral-400 hover:text-white hover:bg-white/10 flex-shrink-0 w-10 h-10 flex items-center justify-center"
            >
              <i className="fas fa-arrow-left"></i>
            </button>
            
            <input 
              ref={searchInputRef}
              type="text" 
              placeholder="Search rumbles..."
              value={searchQuery}
              onChange={handleSearchInput}
              onKeyPress={handleSearchKeyPress}
              className="bg-transparent text-white placeholder-neutral-400 outline-none px-4 py-2 flex-1 text-sm min-w-0 h-10"
            />
            
            <button 
              onClick={clearSearch}
              className="p-2 rounded-full transition-all text-sm text-neutral-400 hover:text-white hover:bg-white/10 flex-shrink-0 w-10 h-10 flex items-center justify-center"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToggleBar;