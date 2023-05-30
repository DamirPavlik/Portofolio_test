/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      maxWidth: {
        '1700': '1700px',
        '1600': '1600px',
        '1500': '1500px',
        '1350': '1350px',
        '1300': '1300px',
      },
      columns: {
        '4xs': '14rem',
      },
      colors: {
        purple: '#714CDF',
        slate: '#CCD6F6',
        gray: '#8892B0',
        bgblack: '#0C0D16',
        navblack: '#0B0C13',
        darkpurple: '#04000E',
        navtext: '#666A71',

        numbergray: '#666A71',
        purpleContact: '#C678DD',
        yellowContact: '#E5C07B',
        greenString: '#98C379',
        comment: '#abb2bfaa',
        redContact: '#E06C75',
        blueContact: '#56B6C2',
        contactText: '#ABB2BF',
        errorRed: '#FF9494'
      },
      fontFamily: {
        jetbrainsmono: ["JetBrains Mono", "sans-serif"],
        spacemono: ["Space Mono", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1450px",
      xxl: "1800px",
      xxxl: "1900px"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
};