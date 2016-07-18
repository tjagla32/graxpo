var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglifycss = require('gulp-uglifycss')
    uglify = require('gulp-uglify')
    concatCss = require('gulp-concat-css'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
		replace = require('gulp-replace');

gulp.task('sass', function(){
		gulp.src(['bower_components/bootstrap-sass/assets/stylesheets/bootstrap.scss',
    'bower_components/font-awesome/scss/font-awesome.scss',
    'scss/**/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(concatCss('style.css'))
		.pipe(replace('../../..', '../bower_components')) //zasrane gówno, które nadpisywało ścieżki do fontów
    .pipe(gulp.dest('css'))
    .pipe(uglifycss())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('css'));
});
gulp.task('scripts', function(){
    gulp.src(['bower_components/jquery/dist/jquery.js',
              'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
              'js/scripts/script.js'])
              .pipe(concat('main.js'))
              .pipe(uglify())
              .pipe(gulp.dest('js'));
});
gulp.task('index', function(){
    gulp.src('index.html');
});

gulp.task('watch', function(){
	gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('scss/**/*.sass', ['sass']);
	gulp.watch('js/scripts/script.js', ['scripts']);
    gulp.watch('index.html', ['index']);
});

gulp.task('default', ['sass', 'watch', 'scripts']);
