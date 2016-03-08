var gulp = require('gulp');
var stylus=require('gulp-stylus');
var concat = require('gulp-concat');
var jshint=require('jshint');
var karma=require('karma').Server;

gulp.task('stylus', function(){
	return gulp.src('yeplooksNice/lab20.styl')
	.pipe(stylus())
	.pipe(gulp.dest('yeplooksNice'))
});


 
gulp.task('scripts', function() {//error can not find module gulp concat
  return gulp.src('scripts/*.js')
    .pipe(concat('most.js'))
    .pipe(gulp.dest('/'));
});

gulp.task('test', function(done){
	new karma({
		configFile: __dirname + '/karma.conf.js'
	}, done).start();
});
