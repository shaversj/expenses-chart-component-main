/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': "375px",
        'lg': "1440px"
      },
      colors: {
        "soft-red": "hsl(10, 79%, 65%)",
        "cyan": "hsl(186, 34%, 60%)",
        "dark-brown": "hsl(25, 47%, 15%)",
        "medium-brown": "hsl(28, 10%, 53%)",
        "cream": "hsl(27, 66%, 92%)",
        "very-pale-orange": "hsl(33, 100%, 98%)",
        "brown-divider": "hsl(33, 41%, 92%)",
        "chart-color": "hsl(37, 100%, 98%)",
        "footer-color": "hsl(37, 4%, 51%)",
      },
      fontFamily: {
        'DM-Sans': ['DM Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}