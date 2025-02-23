/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textDecorationThickness: {
        0: '1px'
      }, height:{
        10: '38px'
      }, padding:{
        36: '135px',
        1.5: '7px'
      }, margin:{
        36: '135px'
      }
    },
    plugins: [],
  }
}