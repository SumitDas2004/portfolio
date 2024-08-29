/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-yellow": "#D4C19C",
        gold: "#ffd900",
        charcoalBlack: "#333333"
      },
    },
  },
  plugins: [],
};
