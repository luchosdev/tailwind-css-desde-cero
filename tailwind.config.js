/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './js/*.js'
  ],
  theme: {
    container: {
      padding: {
        'DEFAULT': '1.4rem',
        '2xl': '7rem',
      }
    },
    extend: {
      spacing: {
        'quarter': '25%',
      },
      fontFamily: {
        'sans': "'Inter', sans-serif",
        'epilogue': "'Epilogue', sans-serif",
        'cascadia': '"CascadiaCode"',
        'jetbrains': "'JetBrains Mono', monospace",
      },
      colors: {
        'do-blue-dark': '#080c2d',
        'do-blue-dark2': 'rgb(8, 27, 75)',
        'do-blue-dark3': 'rgb(3, 27, 78)',
        'do-blue-mediumdark': '#1d274c',
        'do-blue-mediumdark2': 'rgb(36, 51, 90)',
        'do-blue-medium': 'rgb(20, 86, 255)',
        'do-blue-medium2': 'rgb(0, 44, 155)',
        'do-blue-medium3': 'rgb(76, 126, 251)',
        'do-blue-light': 'rgb(0, 105, 255)',
        'do-blue-light2': 'rgb(18, 83, 250)',
        'do-gray-medium': 'rgb(77, 91, 124)',
        'do-gray-medium2': 'rgb(169, 179, 202)',
        'do-gray-medium3': 'rgb(138 150 181)',
        'do-white': 'rgb(249, 250, 254)',
        'do-white2': 'rgb(255, 255, 255)',
        'do-white3': 'rgb(222 236 255)',
        'do-white4': 'rgb(214, 220, 234)',
        'do-white5': 'rgb(239, 242, 251)',
        'do-white6': 'rgb(227, 232, 244)',
        'do-red-medium': 'rgb(255, 76, 108)',
        'do-green-light': 'rgb(123, 222, 255)',
      },
      boxShadow: {
        'input': '0 5px 1px 0 rgb(0, 0, 0, 0.1)',
        'input-focus': '0 2px 1px 0 rgb(0, 0, 0, 0.1)',
        'btn-1': '0 6px 20px -6px rgb(8, 27, 75, 0.35)',
        'btn-2': '0 6px 20px -6px rgb(11, 43, 158, 0.15)',
      },
      /* letterSpacing: {
        tightest: '-0.025em',
      }, */
      fontSize: {
        '4.5xl': '40px',
        '7.5xl': '88px',
      },
      width: {
        '88': '22rem',
      },
      lineHeight: {
        '96px': '96px',
      },
      borderRadius: {
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
