const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')(require('sass'))
const uglifyCSS = require('gulp-uglifycss')
const concat =  require('gulp-concat')
const htmlMin = require('gulp-htmlmin')

function appHTML() {
  return gulp.src('src/**/*.html')
    .pipe(htmlMin({ collapseWhitespace: true}))
    .pipe(gulp.dest('build'))
}

function appCSS() {
  return gulp.src('src/assets/sass/index.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(uglifyCSS({ "ugglyComments": true}))
  .pipe(concat('app.min.css'))
  .pipe(gulp.dest('build/assets/css'))
}

function appJS() {
  return gulp.src('src/assets/js/**/*.js')
  .pipe(babel({ presets: ['@babel/preset-env']}))
  .pipe(uglify())
  .pipe(concat('app.min.js'))
  .pipe(gulp.dest('build/assets/js'))
}

function appIMG() {
  return gulp.src('src/assets/imgs/**/*.*')
  .pipe(gulp.dest('build/assets/imgs'))
}

gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)
gulp.task('appIMG', appIMG)

module.exports = {
  appHTML,
  appCSS,
  appJS,
  appIMG
}