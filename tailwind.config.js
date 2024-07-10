/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BLACK: "#000000",
        BLUE: "#14213D",
        ORANGE: "#B1560F			",
        GRAY: "#E5E5E5",
        WHITE: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
