module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
    babel: {
      options: {
        plugins: ['transform-react-jsx'],
        presets: ['es2015', 'react']
      },
      jsx: {
        files: [{
          expand: true,
          cwd: './public', // Custom folder
          src: ['**/*.jsx'],
          dest: './public/.tmp/', // Custom folder
          ext: '.js'
        }]
      }
    },
	  webdriver: {
	    test: {
	        configFile: './wdio.conf.js'
	    }
  	},
    watch: {
      files: ['public/src/**'],
      tasks: ['babel','concat']
    },
    express: {
      all: {
        options: {
          port: 3000,
          hostname: 'localhost',
          bases: [
            './public/'
          ],
          livereload: true
        }
      }
    },
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      dist: {
        // the files to concatenate
        src: ['public/.tmp/src/**/*.js'],
        // the location of the resulting JS file
        dest: 'public/.tmp/app.js'
      }
    },
    uglify: {
      options: {
        // the banner is inserted at the top of the output
        banner: '/*! app <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'public/dist/app.min.js': [
            'public/vendors/js/jquery.min.js'
            ,'public/vendors/js/react.min.js'
            ,'public/vendors/js/react-dom.min.js'
            ,'public/.tmp/app.js']
        }
      }
    },
    copy: {
      home: {
        files: [{
          expand: true, 
          flatten: true, 
          src: ['public/*.html'], 
          dest: 'public/.tmp'
        }]
      }
    }   
  });

  grunt.loadNpmTasks('grunt-webdriver');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-bower-task');

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask("default", ["babel"]);

  grunt.registerTask('start-server', [
    'express',
    'watch'
  ]);
};