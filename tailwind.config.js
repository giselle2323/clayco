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
        minLightBlack: "#575757",
        // minLightBlack: "#101010",
        offWhite: "#f5f5f5"
      },
    },
    fontFamily: {
      cabinet: ['Cabinet Grotesk', 'sans-serif']
    }
  },
  plugins: [require('@tailwindcss/typography')],
};
