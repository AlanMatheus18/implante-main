/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          700: '#6E2594',
          800: '#5A1E7A',
          900: '#4A1A65'
        },
        gray: {
          500: '#808080',
          50: '#F0F0F0'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
};