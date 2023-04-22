/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: "#212224",
        light: "#fcfaf4",
        boxi: "#333639",
        myYellow: "#ffc552",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },

      dropShadow: {
        'image': '0 0 6px #ffc552'
      },


    },
  },
  plugins: [],
}




