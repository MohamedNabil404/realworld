/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titillium: ["titillium-web", "sans-serif"],
      },
      colors: {
        pgreen: "#5CB85C",
        pgray: "#818a91",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
