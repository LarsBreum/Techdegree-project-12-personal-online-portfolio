const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const minifyJS = require('gulp-js-minify');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const image = require('gulp-image');
const clean = require('gulp-clean');
const webserver = require('gulp-webserver');
const inlinesource = require('gulp-inline-source');
const gutil = require('gulp-util');

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

gulp.task('process-css', () => {
	let plugins = [
		autoprefixer({
			browsers: ['last 3 versions']
		})
	];
	return gulp.src('src/css/*.css')
		.pipe(postcss(plugins))
		.pipe(cleanCSS())
		.pipe(concat('dist.min.css'))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('concatJS', ['clean'], () => {
	return gulp.src([
		'src/js/slick.js',
		'src/js/slick-settings.js',
		'src/js/nav.js'
		])
	.pipe(concat('app.js'))
	.pipe(gulp.dest('src/js'));
});

gulp.task('minifyJS', ['concatJS'], function(){
  return gulp.src('./src/js/app.js')
    .pipe(minifyJS())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('minifyHTML', ['clean'], () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('cleanImg', () => {
	return gulp.src(['./dist/img'])
		.pipe(clean())
});

gulp.task('minifyImg', ['cleanImg'], function () {
  gulp.src(['src/img/*'])
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: false	,
      jpegRecompress: false,
      mozjpeg: true,
      guetzli: false,
      gifsicle: true,
      svgo: true,
      concurrent: 10
    }))
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('clean', () => {
	return gulp.src(['./dist/css', './dist/js', './dist/*.html'])
		.pipe(clean())
});

gulp.task('build', ['clean', 'process-css', 'concatJS', 'minifyJS', 'minifyHTML'])

gulp.task('default', ['build']);