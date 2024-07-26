/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**"],
  theme: {
    extend: {
      screens: {
        'xss': '468px',
      },
      fontFamily: {
        roboto: ['Roboto'],
        poppins: ['Poppins']
      },
      colors: {
        blackPiano:'#141414'
      },
    },
  },
  plugins: [],
}