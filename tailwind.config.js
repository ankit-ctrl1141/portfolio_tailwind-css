/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        "sm" : "480px"  //break point for small screen devices.
        // here it means {min-width:480px to above all}
      }
    },
    fontFamily:{
      nunito : ['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}
