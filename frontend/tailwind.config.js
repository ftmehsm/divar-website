/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Vazir": "Vazir",
        "Vazir-Thin":"Vazir-Thin",
        "Vazir-Medium": "Vazir-Medium",
        "Vazir-Bold": "Vazir-Bold",
        "Vazir-ExtraBold": "Vazir-ExtraBold",
      },
      colors:{
        "Primary" : "#a62626"
      }
    },
  },
  plugins: [],
};
