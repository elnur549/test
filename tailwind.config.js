/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./public/**/*.{html,js,vue,jsx}"],
  
  theme: {
    container:{
    center:true,

    screens:{
      "lg":'996px',
      xl: '720px',
      '2xl':'1140px',
    },
  },
 
 
 
 
 
    fontFamily: {
      'body': ['"GeWorkbench"'],
      'gemunu': ["'Gemunu Libre', 'sans-serif'"]

    },
    extend: {
      fontFamily:{
        Gemunu:[ 'Gemunu Libre', 'sans-serif '],
        Opensans:['Open Sans', 'sans-serif']
        
      },
      colors:{
        "ozrengim": '#BC1A45',
        "black": '#000000',
        "grey": "#808080",
        'yellow':"#FFFF00",
        'transparent':"rgba(0, 0, 0, 0)",
        
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
  
      },
      spacing:{
        "128":"32rem",
        '512':'512px'
      },
  

    },
  },
  plugins: [],
}