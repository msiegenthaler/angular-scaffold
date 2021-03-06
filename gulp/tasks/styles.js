'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var rename = require('gulp-rename');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');


function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}


module.exports = gulp.task('styles', function () {
  return gulp.src(config.paths.src.styles)
    .pipe(gulpif(!release, sourcemaps.init()))
    .pipe(less({
      paths: [
        config.paths.src.node_modules,
        path.join(config.paths.src.styles)
      ]
    }).on('error', handleError))
    .pipe(autoprefixer('last 1 version'))
    .pipe(gulpif(release, csso()))
    .pipe(gulpif(!release, sourcemaps.write()))
    .pipe(gulpif(release, rename(config.filenames.release.styles), rename(config.filenames.build.styles)))
    .pipe(gulpif(release, gulp.dest(config.paths.dest.release.styles), gulp.dest(config.paths.dest.build.styles)));
});
