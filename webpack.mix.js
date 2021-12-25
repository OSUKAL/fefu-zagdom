const mix = require('laravel-mix');

mix
    .setPublicPath('public')
    .js('resources/assets/js/app.js', 'build/bundle.js')
    .sass('resources/assets/scss/style.scss', 'build/bundle.css')
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
