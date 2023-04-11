/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/*.liquid",
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
    "./templates/**/*.liquid",
  ],
  theme: {
    extend: {
      height: {
        94: "22rem",
      },
      backgroundImage: {
        "hero-bg-image":
          "url('https://st2.depositphotos.com/7595566/42556/i/450/depositphotos_425567256-stock-photo-women-minimal-fashion-pastel-clothes.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
