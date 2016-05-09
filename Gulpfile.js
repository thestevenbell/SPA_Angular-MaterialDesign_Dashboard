var gulp = require('gulp'),
    jade = require('gulp-jade');
    sass = require('gulp-sass');
    $ = require('gulp-load-plugins')();
    browserSync = require('browser-sync').create();

var paths = {
    scss: './dev/stylesheets/*.scss'
};

//https://www.browsersync.io/docs/gulp/
// browser-sync set up
gulp.task('serve', ['styles', 'jade'], function() {

  var files = [
      '/*.html',
      'stylesheets/css/*.css',
      '/img/*.png',
      '/img/*.jpeg',
      '/img/*.jpg',
      '/js/*.js',
      '/js/users/*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './dist'
      }
   });

    gulp.watch("stylesheets/*.scss", ['styles']);
    gulp.watch("dev/html/*.jade", ['jade']);
    gulp.watch("dist/*.html").on('change', browserSync.reload);
    gulp.watch("dist/stylesheets/css/*.css").on('change', browserSync.reload);
    gulp.watch("/js/*.js").on('change', browserSync.reload);
    gulp.watch("/js/users/*.js").on('change', browserSync.reload);
});


// create TASK to watch for changes in css files
gulp.task('styles', function () {
    return gulp.src(paths.scss)
        .pipe(sass({

            errLogToConsole: true
        }))
        .pipe(gulp.dest('./dist/stylesheets/css'))
});

// create a TASK to compile Jade to HTML using gulp-jade
gulp.task('jade', function() {
   return gulp.src('./dev/html/*.jade')
   .pipe($.jade({
      pretty: true,
      doctype: 'html'
    }))
   .on('error', $.util.log)
   .pipe(gulp.dest('./dist'));
});

// create a TASK to WATCH for changes in your files
// this will "watch" for any changes in your files and rerun gulp if necessary
// use the CLI command `gulp watch`
gulp.task('watch', function() {
   gulp.watch(['./*.jade'], ['jade']); //first arg is the dir to watch, 2nd is the task
   gulp.watch(['./dev/stylesheets/*.scss'], ['styles']);
});

gulp.task('default',function(){
    gulp.start('styles')
    gulp.start('jade')
    gulp.start('watch')
});

// TASK default executed in bash with gulp command
gulp.task('default', ['jade', 'styles', 'watch', 'serve'], function() {});
gulp.task('browsersync', ['serve']);
