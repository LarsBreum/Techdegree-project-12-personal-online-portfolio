'use strict';
const gulp = require('gulp'),
			sass = require('gulp-sass'),
			webserver = require('gulp-webserver');

//File location variables
const sassFileLoc = 'src/scss/application.scss';
const cssLoc = 'src/css'

gulp.task('webserver', ['watch'], () => {
	return gulp.src('src')
	.pipe(webserver({
		livereload: {
			enable: true
			},
    open: true,
    fallback: 'index.html',
	}));
});

gulp.task('sass', () => {
  return gulp.src(sassFileLoc)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cssLoc));
});

gulp.task('watch', () => {
  return gulp.watch(sassFileLoc, ['sass']);
});

gulp.task('default', ['watch']);