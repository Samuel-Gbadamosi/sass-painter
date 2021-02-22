let mix = require('laravel-mix');

mix.js('src/script.js', 'js').sass('src/style.scss', 'css')
.options({
  processCssUrls: false
});
