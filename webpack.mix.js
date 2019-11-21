let mix = require('laravel-mix');

mix.setPublicPath('public');
mix.setResourceRoot('../');

mix.sass('sass/app.scss', 'css/app.css')


