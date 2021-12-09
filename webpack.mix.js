const mix = require('laravel-mix');

mix
    .js('resources/js/app.js', 'public/js')
    .sass('resources/scss/app.scss', 'public/css')
    .browserSync({
        watch: true,
        proxy: 'localhost',
        browser: 'chrome',
        files: [
            'resources/components/footer/**/*',
            'resources/components/header/**/*',
            'resources/components/**/*',
            'resources/layouts/**/*',
            'resources/routes/**/*',
            'resources/views/**/*',
            'resources/lang/**/*',
            'resources/scss/**/*',
            'resources/js/**/*',
            'resources/**/*'
        ]
    })
