/*!
 * json-gallery - gulpfile.js
 *
 * Description: Generates 'build/' directory
 * MIT License (c) 2014 Jorge Yau
 * codenameyau.github.io
 */

'use strict';

// Load dependencies
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var rimraf = require('rimraf');

// Paths
var PATHS = {
  script : 'src/assets/js/json-gallery.js',
  stylesheet : 'src/assets/css/json-gallery.css',
  output : 'build',
};

// Task: clean 'build'
gulp.task('clean', function(cb) {
  rimraf('build/', cb);
});

// Task: uglify 'json-gallery.js'
gulp.task('uglify js', ['clean'], function() {
  gulp.src(PATHS.script)
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(PATHS.output));
});

// Task: minify 'json-gallery.css'
gulp.task('minify css', ['clean'], function() {
  gulp.src(PATHS.stylesheet)
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(PATHS.output));
});

// Task: Run and generate 'build/'
gulp.task('default', ['clean', 'uglify js', 'minify css']);
