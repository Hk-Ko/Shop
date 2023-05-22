/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppin: "Poppins",
      },
      colors: {
        primary: "#fffffe",
        secondary: "#90b4ce",
        header: "#094067",
        para: "#5f6c7b",
        danger: "#ef4565",
        info: "#3da9fc",
      },
    },
  },
  plugins: [],
};
