/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F28360',
        gray: "#272D37",
        lightGray: "#40454F"
      },
      boxShadow: {
        cards: ["0px 4px 10px rgba(15, 16, 18, 0.5)"],
      },


      fontSize: {
        xm: "8px",
        sm: '10px',
        base: '14px',
        xl: '16px',
        '2xl': '42px',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },

      fontFamily: {
        // 'paragraph': ['Casper'],
        // 'body': ['Karla', ],
        sans: ["PT Sans", "sans-serif", ...defaultTheme.fontFamily.sans],
        poppins: ["Casper", "sans-serif"],
      },

      backgroundImage: {
        eventbg: "url('../src/assets/image/eventbg.jpg')",
        bgSign: "url('../src/assets/image/bgSignup.png')", 
      },
    },
  },
  plugins: [],
}
