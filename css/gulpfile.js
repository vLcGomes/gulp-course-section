const gulp = require('gulp')
const { series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCss() {
  return gulp.src('src/sass/index.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(uglifycss({
    'uglifyComments': true
  }))
  .pipe(concat('estilo.min.css'))
  .pipe(gulp.dest('build/css'))
}

function copiarHTML() {
  return gulp.src('src/index.html')
  .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoCss, copiarHTML)