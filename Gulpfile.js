var     gulp = require('gulp');
var     rename = require('gulp-rename');
var     babel = require('babelify');
var     browserify = require('browserify');
var     source = require('vinyl-source-stream');
var     less = require('gulp-less');
var     watch = require('gulp-watch');
var     cssmin = require('gulp-cssmin');
var     uglify = require('gulp-uglifyjs');
var     image = require('gulp-image');
var     htmlmin = require('gulp-htmlmin');
var     ngAnnotate = require('gulp-ng-annotate');

var paths = {
  scripts: './scripts/**/*.js',
  less: './**/*.less'
};



gulp.task('scripts', function(){
    browserify('./scripts/app.js')
        .transform(babel)
        .bundle()
        .pipe(source('app.js'))
        .pipe(rename('app.js'))
        .pipe(gulp.dest('./js'));
});




/**
 * @gulpdoc task
 * @name copy --> gulp copy
 * @description Copy files folder ./app to folder ./dist
 */
gulp.task('copy', function() {
  gulp.src('./public/fonts/**/*.{ttf,woff,eof,svg}').pipe(gulp.dest('./dist/fonts'));
  gulp.src('./public/css/**/*.css').pipe(gulp.dest('./dist/css'));
  gulp.src('./public/**/*.{ico,json}').pipe(gulp.dest('./dist'));
}); 



// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
});