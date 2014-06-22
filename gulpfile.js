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
  style : 'src/assets/css/json-gallery.css',
};

// Task: clean 'build'
gulp.task('clean', function(cb) {
  rimraf('build/', cb);
});

// Task: Uglify 'json-gallery.js'
gulp.task('script', ['clean'], function() {
  console.log(PATHS.script);
});

