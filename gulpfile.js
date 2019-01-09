const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const browserSync = require('browser-sync');

// jade
gulp.task('jade', () => {
  return gulp.src('./source/**/*.jade')
    .pipe($.plumber())
    .pipe($.jade({
      pretty: true,
    }))
    .pipe(gulp.dest('./dist'))
})

// sass
gulp.task('sass', function () {
  return gulp.src('./source/scss/*.scss')
    .pipe($.sass().on('error', $.sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

// babel
gulp.task('babel', () =>
  gulp.src('./source/js/**/*.js')
    .pipe($.sourcemaps.init())
    .pipe($.babel({
      presets: ['@babel/env']
    }))
    .pipe($.concat('all.js'))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.stream())
);


// browser-sync
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./dist",
    }
  });
});

// watch
gulp.task('watch', () => {
  gulp.watch('./source/scss/**/*.scss', ['sass'])
  gulp.watch('./source/**/*.jade', ['jade'])
  gulp.watch('./source/js/*.js', ['babel'])
})

gulp.task('default', ['jade', 'sass', 'babel', 'browser-sync', 'watch']);