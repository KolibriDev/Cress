
var gulp   = require('gulp'),
    gutil  = require('gulp-util'),
    bump   = require('gulp-bump'),
    sass   = require('gulp-sass'),
    csso   = require('gulp-csso'),
    prefix = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    header = require('gulp-header'),
    filter = require('gulp-filter'),
    bowerFiles = require('gulp-bower-files'),
    bower  = require('bower'),
    pkg    = require('./package.json'),
    banner = [
      '/*!',
      '  <%= pkg.name %> v<%= pkg.version %>',
      '  Written by <%= pkg.author.name %>',
      '  <%= pkg.author.url %>',
      '  <%= pkg.author.email %>',
      '  License: <%= pkg.license %>',
      '*/','' ].join('\n');

gulp.task('bower', function() {
  return bower.commands.install()
    .on('end', function() {

      var scssFilter = filter('**/*.scss');

      return bowerFiles()
        .pipe( rename({dirname: ''}) )
        .pipe( scssFilter )
        .pipe( gulp.dest('./src/vendor/') );
    });
});

gulp.task('bump', function() {
  var bumpType = 'patch';
  bumpType = gutil.env.minor ? 'minor' : bumpType;
  bumpType = gutil.env.major ? 'major' : bumpType;
  gulp.src('./*.json')
    .pipe(bump({type:bumpType}))
    .pipe(gulp.dest('./'));
});

gulp.task('build', function() {
  return gulp.src('src/*.scss')
    .pipe( sass() )
    .pipe( prefix({
        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'],
        cascade: false
      }) )
    .pipe( header(banner, {pkg: pkg}) )
    .pipe( gulp.dest('dist/') )
    .pipe( csso() )
    .pipe( rename({suffix: '.min'}) )
    .pipe( gulp.dest('dist/') );
});

gulp.task('default',['build']);
