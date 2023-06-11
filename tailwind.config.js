/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    layers: ["base", "components", "utilities"],
  },
  theme: {
    extend: {
      screens: {
        desktop: "1130px",
      },

      colors: {
        "primary-color": "#16FF00",
      },
    },
  },
  plugins: [],
};
