/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream:  '#f0f4f8',
        noir:   '#080c14',
        paper:  '#e8edf5',
        ink:    '#111827',
        // accent: electric cyan — replaces amber everywhere
        amber: {
          DEFAULT: '#00c6ff',
          light:   '#66d9f5',
          dark:    '#0099cc',
        },
        warm: {
          100: '#e8edf5',
          200: '#d0d8e8',
          300: '#a8b4c8',
          400: '#7a8898',
          500: '#556070',
          600: '#3a4455',
          700: '#242d3d',
          800: '#161e2e',
          900: '#0d1220',
        },
      },
      fontFamily: {
        display: ['"Chakra Petch"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.4s ease forwards',
        'slide-down': 'slideDown 0.2s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(24px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to:   { opacity: 1 },
        },
        slideDown: {
          from: { opacity: 0, transform: 'translateY(-8px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
