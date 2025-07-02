// src/components/ui/LoadingOverlay.tsx
import React from 'react';

interface LoadingOverlayProps {
  message?: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ 
  message = 'Loading events...' 
}) => {
  return (
    <div className="fixed inset-0 bg-black/90 z-[10000] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-white/20 border-t-[#F5484D] rounded-full animate-spin mb-4"></div>
        <p className="text-white text-lg">{message}</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;