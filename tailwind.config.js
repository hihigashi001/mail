module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'primary': '#6A3906',
        'secondary': '#996C33',
        'tertiary': '#F2E6CD',
        'accent-1': '#CD202D',
        'accent-2': '#6E941C',
        'accent-3': '#B7AA00',
        'background-origin': '#eae8de'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
