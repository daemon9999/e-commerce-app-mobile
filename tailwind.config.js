/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/screens/**/*.{js,ts,jsx,tsx}",
  "./src/pages/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      spacing: {
        '13': '3.25rem'
      },
      colors: {
        'button-opacity': '#F2F2F2'
      },
      backgroundImage: {
        'hero': "url('./images/person.png')",
        'brand': "url('./images/brand.png')",
         
      }
    },
  },
  plugins: [],
}
