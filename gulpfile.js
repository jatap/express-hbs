'use strict';

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var cssnano     = require('gulp-cssnano');
var browserSync = require('browser-sync').create();

// Styles
gulp.task('styles', function () {
    return gulp.src([
        './assets/stylesheets/style.scss'
    ])
    .pipe(concat('app.css'))
    .pipe(sass({includePaths: ['./node_modules/foundation-sites/']}).on('error', sass.logError))
    .pipe(cssnano())
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream());
});

// Scripts
gulp.task('scripts', function () {
    return gulp.src([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/what-input/what-input.min.js',
        './node_modules/foundation-sites/dist/foundation.min.js',
        './assets/javascripts/**/*.js'
    ])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'));
});

// Build
gulp.task('build', ['styles', 'scripts']);

// Server
// Need running node before (npm start)
gulp.task('server', ['build'], function() {

    browserSync.init({
        proxy: "localhost:3000",
        port: "7000"
    });

    gulp.watch('./assets/stylesheets/**/*.scss', ['styles']);
    gulp.watch('./assets/javascripts/**/*.js', ['scripts']);
    gulp.watch("**/*.hbs").on('change', browserSync.reload);
});

// Default
gulp.task('default', ['server']);
