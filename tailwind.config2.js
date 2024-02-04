/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{index.html,js,css}"],
  theme: {
    container:{
      center:{
        center:true,
      }
    },
    extend: {
      fontFamily:{
        Gemunu:[ 'Gemunu Libre', 'sans-serif '],
        Opensans:['Open Sans', 'sans-serif']
        
      }
    },
  },
  plugins: [],
}

