/*global module:false*/
module.exports = function(grunt) {

	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-mocha");
	grunt.loadNpmTasks("grunt-contrib-coffee");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-requirejs");

	// Project configuration.
	grunt.initConfig({
		
		watch: {
			files: [ 'app/**/*.*' ],
			tasks: 'default'
		},

		coffee: {
			compile: {
				expand: true,
				cwd: "app/scripts",
				src: [
					"*.coffee",
					"models/*.coffee",
					"views/*.coffee",
					"collections/*.coffee",
					"routers/*.coffee"
				],
				ext: ".js",
				dest: "app/scripts",
				options: {
					bare: true
				}
			}
		},

		jshint: {
			options: {
				curly: false,
				smarttabs: true,
				loopfunc: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				browser: true,
				globals: {
					console: true,
					define: true
				}
			},
			files: [
				'app/scripts/models/**/*.js',
				'app/scripts/views/**/*.js',
				'app/scripts/collections/**/*.js',
				'app/scripts/routers/**/*.js',
				'app/tests/(!lib)/**/*.js'
			]
		},

		requirejs: {
			concat: {
				options: {
					baseUrl: "app/scripts",
					name: "main",
					mainConfigFile: "app/scripts/main.js",
					out: "app/scripts/main.built.js",
					optimize: "none"
				}
			},
			concatugly: {
				options: {
					baseUrl: "app/scripts",
					name: "main",
					mainConfigFile: "app/scripts/main.js",
					out: "app/scripts/main.built.js",
					optimize: "uglify"
				}
			}
		},

		mocha: {
			all: 'app/tests/test.html'
		},

		copy: {
			dist: {
				files: [
					{
						src: "app/components/requirejs/require.js",
						dest: "app/dist/components/requirejs/require.js"
					},
					{
						src: "app/index.html",
						dest: "app/dist/index.html"
					},
					{
						src: "app/scripts/main.built.js",
						dest: "app/dist/scripts/main.js"
					},
					{
						expand: true,
						cwd: "app/styles/",
						src: "**/*.css",
						dest: "app/dist/styles",
						ext: ".css"
					}
				]
			}
		}
		
	});

	// Default task.
	grunt.registerTask('default', [ 'coffee', 'jshint', 'mocha' ]);
	grunt.registerTask('deploy', [ 'default', 'requirejs:concat', "copy" ]);
	grunt.registerTask('deployugly', [ 'default', 'requirejs:concatugly', "copy" ]);

};
