/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        mont: ['"Montserrat Subrayada"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

