
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'soft': '0 10px 25px rgba(0,0,0,0.25)',
        'glow': '0 0 40px rgba(99,102,241,0.3)'
      }
    },
  },
  plugins: [],
}
