'use strict';

var gulp = require('gulp');
var karma = require('gulp-karma');

gulp.task('test', ['browserify'], function () {
  return gulp.src('./use-from-karma-conf') // use from karma.conf.js instead
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function (err) {
      this.emit('end');
    });
});

gulp.task('autotest', ['test'], function () {
  return gulp.watch(['src/**/*.js', 'src/**/*.coffee', 'test/**/*Spec.js', 'test/**/*Spec.coffee'], ['test']);
});
