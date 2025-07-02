// src/components/ui/FilterPanel.tsx
import React, { useState } from 'react';

export interface ActiveFilters {
  format: string[];
  status: string[];
  stage: string[];
  price: string[];
}

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
  activeFilters: ActiveFilters;
  onApplyFilters: (filters: ActiveFilters) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  isOpen,
  onClose,
  activeFilters,
  onApplyFilters
}) => {
  const [tempFilters, setTempFilters] = useState<ActiveFilters>({
    ...activeFilters
  });

  const handleCheckboxChange = (category: keyof ActiveFilters, value: string) => {
    setTempFilters(prev => {
      const updatedCategory = prev[category].includes(value)
        ? prev[category].filter(v => v !== value)
        : [...prev[category], value];
      
      return {
        ...prev,
        [category]: updatedCategory
      };
    });
  };

  const handleApply = () => {
    onApplyFilters(tempFilters);
    onClose();
  };

  const handleClearAll = () => {
    setTempFilters({
      format: [],
      status: [],
      stage: [],
      price: []
    });
  };

  const isChecked = (category: keyof ActiveFilters, value: string) => {
    return tempFilters[category].includes(value);
  };

  if (!isOpen) return null;

  return (
    <div 
      id="filterPanel"
      className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-xl rounded-xl p-6 border border-white/20 w-[calc(100%-32px)] md:w-96 max-w-md shadow-2xl z-[3100] animate-slideDown"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold">Filters</h3>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>

      {/* Format Filters */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold mb-3 text-neutral-400">Format</h4>
        <div className="space-y-2">
          {['battle', 'jam session', 'world cup', 'olympic'].map(format => (
            <label key={format} className="flex items-center gap-2 cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors">
              <input 
                type="checkbox" 
                className="format-filter w-4 h-4 cursor-pointer"
                value={format}
                checked={isChecked('format', format)}
                onChange={() => handleCheckboxChange('format', format)}
              />
              <span className="text-sm capitalize">{format}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Stage Type Filters */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold mb-3 text-neutral-400">Stage Type</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors">
            <input 
              type="checkbox" 
              className="stage-filter w-4 h-4 cursor-pointer"
              value="single"
              checked={isChecked('stage', 'single')}
              onChange={() => handleCheckboxChange('stage', 'single')}
            />
            <span className="text-sm">Single Stage</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors">
            <input 
              type="checkbox" 
              className="stage-filter w-4 h-4 cursor-pointer"
              value="multi"
              checked={isChecked('stage', 'multi')}
              onChange={() => handleCheckboxChange('stage', 'multi')}
            />
            <span className="text-sm">Multi Stage</span>
          </label>
        </div>
      </div>

      {/* Price Filters */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold mb-3 text-neutral-400">Entry Fee</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors">
            <input 
              type="checkbox" 
              className="price-filter w-4 h-4 cursor-pointer"
              value="free"
              checked={isChecked('price', 'free')}
              onChange={() => handleCheckboxChange('price', 'free')}
            />
            <span className="text-sm">Free</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors">
            <input 
              type="checkbox" 
              className="price-filter w-4 h-4 cursor-pointer"
              value="paid"
              checked={isChecked('price', 'paid')}
              onChange={() => handleCheckboxChange('price', 'paid')}
            />
            <span className="text-sm">Paid</span>
          </label>
        </div>
      </div>

      {/* Status Filters */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold mb-3 text-neutral-400">Status</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors">
            <input 
              type="checkbox" 
              className="status-filter w-4 h-4 cursor-pointer"
              value="ongoing"
              checked={isChecked('status', 'ongoing')}
              onChange={() => handleCheckboxChange('status', 'ongoing')}
            />
            <span className="text-sm">Live Now</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors">
            <input 
              type="checkbox" 
              className="status-filter w-4 h-4 cursor-pointer"
              value="upcoming"
              checked={isChecked('status', 'upcoming')}
              onChange={() => handleCheckboxChange('status', 'upcoming')}
            />
            <span className="text-sm">Upcoming</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors">
            <input 
              type="checkbox" 
              className="status-filter w-4 h-4 cursor-pointer"
              value="closed"
              checked={isChecked('status', 'closed')}
              onChange={() => handleCheckboxChange('status', 'closed')}
            />
            <span className="text-sm">Closed</span>
          </label>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button 
          onClick={handleClearAll}
          className="flex-1 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition-colors text-sm font-semibold"
        >
          Clear All
        </button>
        <button 
          onClick={handleApply}
          className="flex-1 py-2 rounded-lg bg-gradient-to-r from-[#F5484D] to-[#9747FF] hover:shadow-lg transition-all text-sm font-semibold"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;