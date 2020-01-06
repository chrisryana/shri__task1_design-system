var gulp = require('gulp'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css');

var params = {
    out: 'build/',
    levels: ['common.blocks']
};

gulp.task('build', function() {
  gulp.src(['common.blocks/**/*.css', 'desktop.blocks/**/*.css', 'mobile.blocks/**/*.css'])
      .pipe(concat('style.css'))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest(params.out));
});

gulp.task('default', gulp.series('build'));

