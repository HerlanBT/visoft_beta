/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // <-- IMPORTANTE
    content: [
        "./src/**/*.{js,jsx,ts,tsx,vue}",
        "./pages/**/*.{js,jsx,ts,tsx,vue}",
        "./components/**/*.{js,jsx,ts,tsx,vue}",
    ],
    theme: {
        extend: {
            colors: {
                'text': 'var(--text)',
                'background': 'var(--background)',
                'primary': 'var(--primary)',
                'secondary': 'var(--secondary)',
                'accent': 'var(--accent)',
            },

            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
