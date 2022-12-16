/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.{html,js}', './public/index.html'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter']
            },
            animation: {
                'spin-slow': 'spin 3s linier infinite',
            }
        },
    },
    plugins: [],
}