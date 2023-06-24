/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./main.js", "./index.html"],
  theme: {
    fontFamily: {
      header: ["Source Sans Pro", "sans-serif"],
      main: ["Raleway", "sans-serif"],
    },
    extend: {},
  },
  plugins: ["tailwindcss"],
};
