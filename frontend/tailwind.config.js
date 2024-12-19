/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6f6af8",
        white: "#ffffff",
        red: "rgb(255, 63, 63)",
        gray: {
          100: "hsl(220, 20%, 10%, 5%)",
          200: "hsl(220, 20%, 10%, 10%)",
          300: "hsl(220, 20%, 10%, 25%)",
          500: "hsl(220, 20%, 10%, 50%)",
          700: "#252542",
          900: "#0c0c22",
        },
      },
    },
  },
  plugins: [],
};
