const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        './resources/js/**/*.js',
        './node_modules/preline/preline.js',
        "./node_modules/flowbite/**/*.js"
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        screens: {
            'xm': '400px',
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
            // 'xxl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        asideScrollbars: {
            light: 'light',
            gray: 'gray'
        },
        extend: {
            zIndex: {
                '-1': '-1'
            },
            flexGrow: {
                5: '5'
            },
            maxHeight: {
                'screen-menu': 'calc(100vh - 3.5rem)',
                modal: 'calc(100vh - 160px)'
            },
            transitionProperty: {
                position: 'right, left, top, bottom, margin, padding',
                textColor: 'color'
            },
            keyframes: {
                'fade-out': {
                    from: { opacity: 1 },
                    to: { opacity: 0 }
                },
                'fade-in': {
                    from: { opacity: 0 },
                    to: { opacity: 1 }
                }
            },
            animation: {
                'fade-out': 'fade-out 250ms ease-in-out',
                'fade-in': 'fade-in 250ms ease-in-out'
            },
            padding: ['hover'],
            padding: ['last'],
            colors: {
                primary: '#F37519',
                secondary: '#FFB422',
                lightsecondary: '#FFF9F5',
                lightprimary: '#F9D2CB',
                textcolor: '#5F5F5F',
                textcolorful:'#342D60',
                customblack: '#333333',
                agray: '#F7F7FB',
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '.2rem',
                sm: '.3rem',
                lg: '.4rem',
                xl: '3rem',
                '2xl': '5rem',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'aside-scrollbars': value => {
                        const track = value === 'light' ? '100' : '900'
                        const thumb = value === 'light' ? '300' : '600'
                        const color = value === 'light' ? 'gray' : value

                        return {
                            scrollbarWidth: 'thin',
                            scrollbarColor: `${theme(`colors.${color}.${thumb}`)} ${theme(`colors.${color}.${track}`)}`,
                            '&::-webkit-scrollbar': {
                                width: '8px',
                                height: '8px'
                            },
                            '&::-webkit-scrollbar-track': {
                                backgroundColor: theme(`colors.${color}.${track}`)
                            },
                            '&::-webkit-scrollbar-thumb': {
                                borderRadius: '0.25rem',
                                backgroundColor: theme(`colors.${color}.${thumb}`)
                            }
                        }
                    }
                },
                { values: theme('asideScrollbars') }
            )
        }),
        require('preline/plugin'),
        require('flowbite/plugin'),
    ]
}
