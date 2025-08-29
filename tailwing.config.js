/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        poke: {
          50: '#FFF5F5',
          100: '#FEE7E7',
          600: '#EE1515',
          700: '#CC0000',
          900: '#2a0000',
        },
      },
      borderRadius: { '2xl': '1.25rem' },
    },
    fontFamily: {
      sans: ['var(--font-sans)']
    }
  },
  plugins: [],
};