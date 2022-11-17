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
    },
  },
  plugins: [],
}
