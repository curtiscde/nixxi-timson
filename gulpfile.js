var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src('./public/**/*')
    .pipe(ghPages({
      "remoteUrl": "git@github.com:curttimson/nixxi-timson.git"
    }));
});

gulp.task('copy-hugo-theme', function(){
  return gulp.src('./node_modules/hugo-theme-forty/**/*')
          .pipe(gulp.dest('themes/forty'));
});
