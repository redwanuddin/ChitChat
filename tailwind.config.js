/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorPrimaryBlue: "#5F35F5",
        colorAccentYellow: "#EA6C00",
        colorPrimaryTextDarkBlue: "#11175D",
      },

      fontFamily: {
        poppins: ["Poppins", "san-serif"],
        nunito: ["Nunito", "san-serif"],
        openSans: ["Open Sans", "san-serif"],
      },
    },
  },
  plugins: [],
};
