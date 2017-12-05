var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var sassFiles = 'src/sass/*.scss'
gulp.task('css', function(){
  return gulp.src(sassFiles)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('css/'))
});

gulp.task('default', [ 'css' ]);

gulp.task('watch',function() {
  gulp.watch(sassFiles, ['css']);
});