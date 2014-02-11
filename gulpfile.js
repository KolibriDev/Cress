
var gulp   = require('gulp'),
    sass   = require('gulp-sass'),
    cssmin = require('gulp-minify-css'),
    prefix = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    header = require('gulp-header'),
    pkg    = require('./package.json'),
    banner = [
      '/*!',
      '  <%= pkg.name %> v<%= pkg.version %>',
      '  Written by <%= pkg.author.name %>',
      '  <%= pkg.author.url %>',
      '  <%= pkg.author.email %>',
      '  License: <%= pkg.license %>',
      '*/','' ].join('\n');

gulp.task('build', function() {
  return gulp.src('src/*.scss')
    .pipe( sass() )
    .pipe( prefix('> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1') )
    .pipe( header(banner, {pkg: pkg}) )
    .pipe( gulp.dest('dist/') )
    .pipe( cssmin() )
    .pipe( rename({suffix: '.min'}) )
    .pipe( gulp.dest('dist/') );
});
