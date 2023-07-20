/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./starter-code/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["DM Serif Display", "serif"],
        sans: ["Public Sans", "sans-serif"],
      },
      fontWeight: {
        400: "400",
        700: "700",
      },
      colors: {
        "dark-pink": "#BA4270",
        "link-water-white": "#FBFCFE",
        "sax-juan-blue": "#36536B",
        "mirage-blue": "#1B262F",
        "charm-pink": "#DA6D97",
        "light-san-juan-blue": "#6C8294",
        creamy: "#edf3f8",
      },
      maxWidth: {
        144: "144rem",
      },
      fontSize: {
        "1.5rem": "1.5rem",
        "1.6rem": "1.6rem",
        "1.8rem": "1.8rem",
        "2.4rem": "2.4rem",
        "3.2rem": "3.2rem",
        "4.8rem": "4.8rem",
        "5.6rem": "5.6rem",
        "7.2rem": "7.2rem",
      },
      lineHeight: {
        norm: "normal",
        "2.5rem": "2.5rem",
        "2.8rem": "2.8rem",
        "3.2rem": "3.2rem",
        "3.6rem": "3.6rem",
        "4rem": "4rem",
        "5.6rem": "5.6rem",
        "7.2rem": "7.2rem",
      },
      letterSpacing: {
        "-0.0115rem": "-0.0115rem",
        "-0.0554rem": "-0.0554rem",
        "-0.0369rem": "-0.0369rem",
        "-0.0138rem": "-0.0138rem",
        "-0.0246rem": "-0.0246rem",
        "-0.0185rem": "-0.0185rem",
        "-0.0431rem": "-0.0431rem",
      },
      borderRadius: {
        "2.4rem": "2.4rem",
      },
      width: {
        "44rem": "44rem",
        "59%": "59%",
      },
      height: {
        "50rem": "50rem",
      },
      spacing: {
        "35rem": "35rem",
        "30rem": "30rem",
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
      },
    },
  },
  plugins: [],
};
