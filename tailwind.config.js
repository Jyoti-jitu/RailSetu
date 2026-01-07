/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'irctc-bg': '#F5F4F2',
                'irctc-text': '#858585',
                'irctc-dark': '#393838',
                'irctc-blue': '#000075',
                'irctc-royal': '#222275',
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
