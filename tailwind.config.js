/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        widescreen: { raw: '(min-aspect-ratio: 3/2)' },
        tallscreen: { raw: '(max-aspect-ratio: 13/20)' },
      },
    },
  },
  plugins: [],
};
