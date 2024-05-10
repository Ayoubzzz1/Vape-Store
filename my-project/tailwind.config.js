/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
    primary:"#f8f7f4",
    secondary:"#16a34a",
    tertiary :"#222222",
    gray:{
    10:"#EEEEEE",
    20:"#A2A2A2A2",
    30:"#7B7B7B",
    },
 
    },
    backgroundImage:{
      hero:"url(/src/assets/ayoub.png)",
      banner:"url(/src/assets/offre.jpg)",
      footer:"url(/src/assets/footer.png)",
      main:"url(/src/assets/tack.png)"
    
    },
    },
    },

   
  plugins: [],
  };