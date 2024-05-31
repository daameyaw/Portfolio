/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      screens: {
        sm: "550px",
        md: "900px",
        lg: "1200px",
        xl: "1440px",
      },

      keyframes: {
        morph: {
          "0%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
          },
          "100%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
        },
      },
      animation: {
        morph: "morph 8s ease-in-out infinite",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      colors: {
        customBlue: "#147efb", // Add your custom color here
      },
      borderRadius: {
        custom: "60% 40% 30% 70% / 60% 30% 70% 40%",
      },
      content: {
        heroImg: "url('./assets/hero-1.jpg')",
      },
    },
  },
  plugins: [],
};
