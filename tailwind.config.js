/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        fuchsia: colors.fuchsia,
      }
    },
  },
  plugins: [],
};
