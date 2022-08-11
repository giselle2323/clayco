/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    typography: (theme) => ({}),
    extend: {
      colors: {
        brandGrey: "#F9F9F9",
        minBlack: "#131419",
        minlightBlack: "#0e0e13"
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
