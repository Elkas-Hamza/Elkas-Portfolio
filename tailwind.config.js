/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      colors: {
        mine: "#c9beba",
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96",
        primaryDark: "#58E6D9",
      },
      backgroundImage: {
        circles:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px,#f5f5f5 100px)",
      },
    },
  },
  plugins: [],
};
