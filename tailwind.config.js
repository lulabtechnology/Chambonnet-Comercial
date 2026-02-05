/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#D10F1B",
          black: "#0B0B0D",
          white: "#FFFFFF"
        }
      },
      boxShadow: {
        soft: "0 12px 30px rgba(0,0,0,.10)"
      }
    }
  },
  plugins: []
};
