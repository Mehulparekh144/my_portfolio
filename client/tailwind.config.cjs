/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
    darkMode : "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            background : "#1B2430",
            primary : "#E94560",
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            emerald: colors.emerald,
            indigo: colors.indigo,
            yellow: colors.yellow,
            red : colors.red,
        },
        fontFamily: {
            primary: "DM Sans",
            display: "Caxo",
        },
        extend: {
            display: ["group-hover"],
            boxShadow : {
                'primary'  : '5px 5px #E94560'
            }
        },
    },  
    plugins: [],
};
