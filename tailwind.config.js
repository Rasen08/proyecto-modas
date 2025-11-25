/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.html",
    "./src/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bannerImg:"url('/assets/img/gallery/bosquejo.jpg')",
      },
      fontFamily: {
        gabarito: ['"Gabarito"', 'system-ui', 'sans-serif'],
        gondens: ['"Gondens"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
  
}
