module.exports = function(grunt){
	grunt.initConfig({
		jshint:{
			browser: ['public/js/**/*.js']
		},
		concat:{
			js:{
				files:{
					'build/js/bundle.js' : 'public/js/**/*.js'
				}
			}
		},
		uglify:{
			js:{
				files:{
					'build/js/bundle.min.js': 'build/js/bundle.js'
				}
			}
		},
		clean:{
			js:'build/js'
		},
		browserify: {

      debug: {
        files: {
          'build/js/main.js': 'public/js/main.js'
        },
        options: {
          // this produces a source map which gets baked into
          // a base64 uri embedded in the script file
          debug: true
        }
      },

      release: {
        files: {
          'build/js/app.js': 'js/app.js'
        }
      }
    }
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat')
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.registerTask('default', ['clean','jshint', 'concat','uglify']);
	grunt.registerTask('build:debug', ['browserify:debug']);
}