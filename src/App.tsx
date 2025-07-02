import React from 'react';
import './styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="bg-neutral-900 text-white overflow-x-hidden min-h-screen">
      {/* Loading Overlay - TODO: Convert to component */}
      <div className="fixed inset-0 bg-black/90 z-[10000] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white/20 border-t-brand-red rounded-full animate-spin mb-4"></div>
          <p className="text-white text-lg">Loading events...</p>
        </div>
      </div>

      {/* Main Content will go here */}
      <div className="relative">
        <h1 className="text-2xl font-bold p-8 text-center">
          Rumble React - Setup Complete! 🎉
        </h1>
        <div className="max-w-4xl mx-auto p-8">
          <div className="bg-white/10 rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold text-brand-green">Next Steps:</h2>
            <ul className="space-y-2 text-neutral-300">
              <li>✅ Project structure created</li>
              <li>✅ TypeScript types defined</li>
              <li>✅ Tailwind configured with animations</li>
              <li>✅ Global styles converted</li>
              <li className="text-brand-purple">→ Start Phase 2: Create UI Components</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;