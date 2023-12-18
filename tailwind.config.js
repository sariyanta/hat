const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./**/*.html', './**/*.ts', './**/*.js'],
  theme: {
    extend: {
      /** HubSpot Related Stuff */
      '.hs-menu-wrapper ul' : {
        display: 'flex', 
        flexWrap: 'wrap',
        listStyle: 'none',
        margin: '0',
        paddingLeft: '0',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
