/** @type {import('tailwindcss').Config} */ 
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../assets/img/fondo.png')",
      }
    },
  },

  plugins: [require("daisyui")],

}
