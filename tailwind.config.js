/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*"],
    theme: {

        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            boxShadow: {
                'dark': '0 2px 10px 0 rgba(0,0,0,0.75)',
            },
            animation: {
                'bounce': 'bounce 6s infinite',

            },
        },
    },
    plugins: [],
}