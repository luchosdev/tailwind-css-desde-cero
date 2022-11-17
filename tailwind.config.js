/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './js/*.js'
  ],
  theme: {
    extend: {
      spacing: {
        'quarter': '25%',
      },
      fontFamily: {
        'sans': "'Work Sans', sans-serif",
        'cascadia': '"CascadiaCode"',
      },
      colors: {
        'do-blue-dark': '#080c2d',
        'do-blue-medium': 'rgb(20, 86, 255)',
        'do-blue-light': 'rgb(0, 105, 255)',
      },
    },
  },
  plugins: [],
}
