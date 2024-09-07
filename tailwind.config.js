/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary: '#2586FE',
       
      },
      height: {
        'custom-height-nav': 'calc(100svh - 74.4px)', // Classe personalizada
      },
    },
  },
  plugins: [],
}