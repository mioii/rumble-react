/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#B9FF66',
        'brand-red': '#F5484D',
        'brand-purple': '#9747FF',
        'dark-bg': '#171717',
        'neutral': {
          800: '#262626',
          900: '#171717',
        }
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'beacon-pulse': 'beaconPulse 3s ease-out infinite',
        'grid-move': 'gridMove 20s linear infinite',
        'slide-down': 'slideDown 0.2s ease-out',
        'flow': 'flowAnimation 3s linear infinite',
        'virtual-pulse': 'virtualPulse 3s ease-out infinite',
        'centroid-pulse': 'centroidPulse 3s ease-in-out infinite',
        'expand-ring': 'expandRing 3s ease-out infinite',
        'peek': 'peekAnimation 1s ease-out',
        'ping-small': 'pingSmall 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'premium-pulse': 'premiumPulse 3s ease-in-out infinite',
        'location-pulse': 'locationPulse 2s ease-out infinite',
        'gps-pulse': 'gpsPulse 1.5s ease-in-out infinite',
        'single-pulse': 'singlePulse 1.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '25%': { transform: 'translate3d(5px, -8px, 0) rotate(-2deg)' },
          '50%': { transform: 'translate3d(0, -10px, 0) rotate(0deg)' },
          '75%': { transform: 'translate3d(-5px, -8px, 0) rotate(2deg)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(30px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(30px) rotate(-360deg)' },
        },
        beaconPulse: {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.3)', opacity: '0.4' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        gridMove: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(50px, 50px, 0)' },
        },
        slideDown: {
          'from': { opacity: '0', transform: 'translate3d(0, -10px, 0)' },
          'to': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        flowAnimation: {
          'to': { 'stroke-dashoffset': '-10' },
        },
        virtualPulse: {
          '0%': { transform: 'scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        centroidPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
        },
        expandRing: {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        peekAnimation: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-50px)' },
        },
        pingSmall: {
          '75%, 100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        premiumPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
          '50%': { transform: 'scale(1.15)', opacity: '0' },
        },
        locationPulse: {
          '0%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '1' },
          '100%': { transform: 'translate(-50%, -50%) scale(3)', opacity: '0' },
        },
        gpsPulse: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        singlePulse: {
          '0%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.8' },
          '100%': { transform: 'translate(-50%, -50%) scale(3)', opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}