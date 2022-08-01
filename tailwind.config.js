/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      keyframes:{
        fade:{
          '0%':{opacity: 0},
          '100%':{opacity: 1},
        }
      },
      animation:{
        fade:"fade 3s ease",
      }
    },
  },
  plugins: [],
}
