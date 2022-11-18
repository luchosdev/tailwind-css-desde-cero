/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './js/*.js'
  ],
  theme: {
    container: {
      padding: '1.4rem',
    },
    extend: {
      spacing: {
        'quarter': '25%',
      },
      fontFamily: {
        'sans': "'Inter', sans-serif",
        'epilogue': "'Epilogue', sans-serif",
        'cascadia': '"CascadiaCode"',
      },
      colors: {
        'do-blue-dark': '#080c2d',
        'do-blue-dark2': 'rgb(8, 27, 75)',
        'do-blue-dark3': 'rgb(3, 27, 78)',
        'do-blue-mediumdark': '#1d274c',
        'do-blue-mediumdark2': 'rgb(36, 51, 90)',
        'do-blue-medium': 'rgb(20, 86, 255)',
        'do-blue-light': 'rgb(0, 105, 255)',
        'do-gray-medium': 'rgb(77, 91, 124)',
        'do-white': 'rgb(249, 250, 254)',
      },
      boxShadow: {
        'input': '0 5px 1px 0 rgb(0, 0, 0, 0.1)',
        'input-focus': '0 2px 1px 0 rgb(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
