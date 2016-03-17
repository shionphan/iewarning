/* jshint node: true */
module.exports = function(grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  RegExp.quote = function(string) {
    return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
  };

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        compress: {
          warnings: false
        },
        mangle: true,
        preserveComments: false
      },
      warning:{
        src: 'src/warning.js',
        dest: 'demo/warning.min.js'
      }
    },
    copy:{
      warning:{        
        expand: true,
        cwd: 'src',
        src: '**/*',
        dest: 'demo/'
      }
    }
  });

  // load plugin
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  // register task
  grunt.registerTask('default', ['uglify:warning','copy']);
};
