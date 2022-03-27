module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      objectPosition: {
        'right-top': 'top right',
      }
    },
    container:{
      center: true,
      padding: "1 rem",
      screens:{
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
}