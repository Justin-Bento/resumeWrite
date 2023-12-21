const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    colors: {
      // Configure your color palette here
      black: defaultTheme.colors.black,
      white: defaultTheme.colors.white,
      gray: {
        50: 'F6F6F6',
        100: 'E7E7E7',
        200: 'D1D1D1',
        300: 'B0B0B0',
        400: '888888',
        500: '6D6D6D',
        600: '5D5D5D',
        700: '4F4F4F',
        800: '454545',
        900: '3D3D3D',
        950: '262626',
      },
      red: defaultTheme.colors.red,
      orange: defaultTheme.colors.orange,
      yellow: defaultTheme.colors.yellow,
      green: defaultTheme.colors.green,
      blue: defaultTheme.colors.blue,
      indigo: defaultTheme.colors.indigo,
      purple: defaultTheme.colors.purple,
      pink: defaultTheme.colors.pink,
    },
    extend: {
      fontFamily: {
        sans: ['Lexend', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
