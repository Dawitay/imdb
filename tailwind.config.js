// tailwind.config.js
module.exports = {
  darkMode: 'class', // <- correct place for this
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
