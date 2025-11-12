/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html",
    "./**/*.html",
    "./src/**/*.{js,ts,css}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bannerImg:"url('/assets/img/gallery/bosquejo.jpg')",
      }
    },
  },
  plugins: [],
  
}
