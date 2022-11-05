/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'mediumYellow': '#FFC017',
      'black': 'black',
      'white': 'white',
      'green':'rgb(21 128 61)'
    },
    extend: {},
  },
  plugins: [],
}
