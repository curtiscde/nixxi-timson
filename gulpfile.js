var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src('./public/**/*')
    .pipe(ghPages({
      "remoteUrl": "git@github.com:curttimson/nixxi-timson.git"
    }));
});

gulp.task('copy-hugo-theme', function(){
  return gulp.src('./node_modules/hugo-theme-massively/**/*')
          .pipe(gulp.dest('themes/massively'));
});


gulp.task('copy-npm-files', [
  'copy-npm-files-jquery',
  'copy-npm-files-angular',
  'copy-npm-files-unitegallery'
]);


gulp.task('copy-npm-files-jquery', function(){
  return gulp.src(['./node_modules/jquery/dist/jquery.min.js'])
      .pipe(gulp.dest('./static/npm/'))
});

gulp.task('copy-npm-files-angular', function(){
  return gulp.src(['./node_modules/angular/angular.min.js'])
      .pipe(gulp.dest('./static/npm/'))
});

gulp.task("copy-npm-files-unitegallery", function () {
    return gulp.src(['./node_modules/unitegallery/dist/**/*'])
        .pipe(gulp.dest('./static/npm/unitegallery'))
});
