/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "PlayFair": ["PlayFair Display"],
        "DancingScript": ["Dancing Script"],
        "Montserrat": ["Montserrat"]
      },
      width: {
        90: '26rem',
      },
      height: {
        85: '22rem',
        120: '30rem',
      },
    },
  },
  plugins: [],
}
