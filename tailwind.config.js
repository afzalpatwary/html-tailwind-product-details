/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "{html,js}", './index.html', './aboutus.html'
  ], 
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'body': ['"Roboto"'],
    },



    screens: {
      'sm': '575px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1400px',
    },


    extend: {

      fontSize: {
        's12': '12px',
        's14': '14px',
        's16': '16px',
        's20': '20px',
        's24': '24px',
        's28': '28px',
        's32': '32px',
        's36': '36px',
        's40': '40px',
      },

      colors: {
        black: "#3B4747",
        dark: "#373737",
        dark_blue: "#364A63",
        gray: "#8091A7",
        purple1: "#816BFF",
        cyan: "#1FCEC9",
        blue: "#4B97D3",
        yellow: "#FFBB5A",
      },

    },
  },
  plugins: [],
}
