/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorPrimaryBlue: "#5F35F5",
        colorAccentYellow: "#EA6C00",
      },

      fontFamily: {
        poppins: ["Poppins", "san-serif"],
        nunito: ["Nunito", "san-serif"],
        openSan: ["Open San", "san-serif"],
      },
    },
  },
  plugins: [],
};
