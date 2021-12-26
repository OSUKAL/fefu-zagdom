const mix = require('laravel-mix')
const { resolve } = require('path')

mix
    .setPublicPath('public')
    .js('resources/scripts/app.js', 'build/bundle.js')
    .sass('resources/styles/style.scss', 'build/bundle.css', {}, [
        require('postcss-axis')
    ])
    .browserSync({
        watch: true,
        proxy: 'localhost',
        files: [
            './public/**/*',
            './resources/**/*.blade.php',
            './resources/**/*.php',
            './resources/**/*.twig'
        ]
    })

    mix.alias({'uikit-util': resolve(__dirname, 'node_modules/uikit/src/js/util')})