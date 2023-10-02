/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000",
        primaryLight: "#101010",
        secondary: "#fff",
        accent: "#24f9aa",
      },
    },
  },
  plugins: [],
};
