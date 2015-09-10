var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var streamify = require('gulp-streamify');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var less = require('gulp-less');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var plumber = require('gulp-concat');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

var dependencies = [
	'alt',
	'react',
	'react-router',
	'lodash'
];

/*
Combine all JS libs into a single file for fewer HTTP requests
*/
gulp.task('vendor', function(){
	gulp.src([

		])
})
