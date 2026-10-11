/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'port-yellow': '#38BDF8', // Upgraded to electric cyan for glassmorphism
        'port-hover': '#0EA5E9',
        'port-opyellow': 'rgba(56, 189, 248, 0.15)',
        navy: {
          950: '#060813', // Deepest midnight navy
          900: '#0A0E1A', // Base canvas
          850: '#0F1526', // Elevated layer
          800: '#161F36', // Subtle container
          700: '#1E293B',
        },
        accent: {
          DEFAULT: '#38BDF8', // Restrained electric cyan
          hover: '#0EA5E9',
          glow: 'rgba(56, 189, 248, 0.25)',
          soft: 'rgba(56, 189, 248, 0.1)',
        },
        slate: {
          muted: '#94A3B8',
          subtle: '#64748B',
          light: '#F8FAFC',
        },
        glass: {
          card: 'rgba(15, 21, 38, 0.65)',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 255, 255, 0.18)',
        }
      },
      boxShadow: {
        'glass-sm': '0 4px 16px 0 rgba(0, 0, 0, 0.3)',
        'glass-md': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-lg': '0 12px 48px 0 rgba(0, 0, 0, 0.45)',
        'glow-cyan': '0 0 25px -5px rgba(56, 189, 248, 0.35)',
      },
      screens: {
        'xs': {'min': '300px', 'max': '640px'},
        'sm': {'min': '300px', 'max': '767px'},
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min': '768px'},
      },
    },
  },
  plugins: [],
}
