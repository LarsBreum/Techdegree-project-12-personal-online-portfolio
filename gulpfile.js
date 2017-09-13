'use strict';
const gulp = require('gulp'),
			sass = require('gulp-sass'),
			webserver = require('gulp-webserver'),
			sourcemaps = require('gulp-sourcemaps');

//File location variables
const sassFileLoc = 'src/scss/application.scss';
const cssLoc = 'src/css'

gulp.task('webserver', () => {
	return gulp.src('src')
	.pipe(webserver({
		livereload: {
			enable: true
			},
    open: true,
    fallback: 'index.html',
	}));
});

gulp.task('devMode', ['webserver', 'sass:watch'], () => {
	console.log('Development Mode Activcated!');
});

gulp.task('default', () => {
	console.log('no build task specified yet!')
});