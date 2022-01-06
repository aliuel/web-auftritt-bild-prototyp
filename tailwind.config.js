module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screen: {
        'xs': '300px'
      },
      colors: {
        'dark-green': 'rgb(16, 16, 16)',
        'dark-blue': '#0C5D6E'
      }
    },
  },
  plugins: [],
}
