const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./images/brick-wall.svg')",
      },
      colors: {
        'blue-gray': colors.blueGray,
        'true-gray': colors.trueGray,
        'warm-gray': colors.warmGray,
        'light-blue': colors.lightBlue,
        'cool-gray': colors.coolGray,
      },
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
      inset: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
