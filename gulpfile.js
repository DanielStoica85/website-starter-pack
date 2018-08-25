// Main tools
const postcss = require('gulp-postcss');
const gulp = require('gulp');

// Gulp tools
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

// PostCss tools
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rucksack = require('rucksack-css');

// TASKS

// Copy all html files
gulp.task('copyHtml', () => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

// Optimize images
gulp.task('imageMin', () => {
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

// Minify JS
gulp.task('minifyJs', () => {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

// Compile Sass and process resulting CSS
gulp.task('css', () => {
    const processors = [
        // PostCSS plugins
        rucksack,
        autoprefixer({ browsers: ['last 4 versions']}),
        cssnano(),
        ];
    return gulp.src('./src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist/css'));
});

// Concatenate all scripts - do not run minifyJs if you use this
gulp.task('concatJs', () => {
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

// Run all tasks in one -> build production website
gulp.task('default', ['copyHtml', 'imageMin', 'css', 'concatJs']);

// Watch
gulp.task('watch', () => {
    // enable this if you have multiple scripts
    gulp.watch('src/js/*.js', ['concatJs']);
    // gulp.watch('src/js/*.js', ['minifyJs']);
    gulp.watch('src/images/*', ['imageMin']);
    gulp.watch('src/sass/*.scss', ['css']);
    gulp.watch('src/*.html', ['copyHtml']);
});