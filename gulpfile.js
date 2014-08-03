/* Require */

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');


gulp.task('sass', function(){
	gulp.src('style/scss/styles.scss')
			.pipe(sass({inlcludePaths: ['scss']}))
			.pipe(gulp.dest('style/css'));
});

gulp.task('browser-sync', function() {  
    browserSync.init(["style/css/*.css", "script/js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['sass', 'browser-sync'], function () {  
    gulp.watch("style/scss/*.scss", ['sass']);
});
