/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#020617',         // Deep space blue
          bgDark: '#01040a',     // Absolute black/blue
          bgSurface: '#0b0f19',  // Acrylic card surface
          bgSurfaceHover: '#131929',
          border: '#1e293b',     // Sutil border
          borderLight: '#334155',// Brighter border
          accent: '#0ea5e9',     // Accenture-inspired teal
          accentHover: '#38bdf8',// Cyan hover
          violet: '#9333ea',     // Neon Violet
          violetAccent: '#a855f7',// Light violet
          indigo: '#6366f1',     // Globe node indigo
          ink: '#f8fafc',        // White text
          inkMuted: '#94a3b8',   // Muted slate text
          inkMutedDark: '#64748b'// Darker muted text
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      }
    },
  },
  plugins: [],
}
