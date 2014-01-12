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
					define: true,
					describe: true,
					it: true,
					expect: true,
					assert: true,
					require: true,
					requirejs: true
				}
			},
			files: [
				'app/scripts/**/*.js',
				'app/scripts/(!bower_components)/**/*.js',
				'app/tests/(!bower_components)/**/*.js'
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
			distweb: {
				files: [
					{
						src: "app/components/requirejs/require.js",
						dest: "app/dist/web/components/requirejs/require.js"
					},
					{
						src: "app/index.html",
						dest: "app/dist/web/index.html"
					},
					{
						src: "app/scripts/main.built.js",
						dest: "app/dist/web/scripts/main.js"
					},
					{
						expand: true,
						cwd: "app/styles/",
						src: "**/*.css",
						dest: "app/dist/web/styles",
						ext: ".css"
					}
				]
			},
			distcpa: {
				files: [
					{
						src: "app/components/requirejs/require.js",
						dest: "app/dist/cpa/components/requirejs/require.js"
					},
					{
						src: "app/index.html",
						dest: "app/dist/cpa/index.html"
					},
					{
						src: "app/scripts/main.built.js",
						dest: "app/dist/cpa/scripts/main.js"
					},
					{
						expand: true,
						cwd: "app/styles/",
						src: "**/*.css",
						dest: "app/dist/cpa/styles",
						ext: ".css"
					}
				]
			},
			cpa: {
				files: [
					{
						src: "app/cpa.js",
						dest: "app/dist/cpa/cpa.js"
					},
					{
						src: "app/manifest.json",
						dest: "app/dist/cpa/manifest.json"
					}
				]
			}
		}
		
	});

	// Default task.
	grunt.registerTask('default', [ 'coffee', 'jshint', 'mocha' ]);
	grunt.registerTask('deploy', [ 'default', 'requirejs:concat', "copy:distweb" ]);
	grunt.registerTask('deploycpa', [ 'default', 'requirejs:concat', "copy:distcpa", "copy:cpa" ]);
	grunt.registerTask('deployugly', [ 'default', 'requirejs:concatugly', "copy:distweb" ]);
	grunt.registerTask('deployuglycpa', [ 'default', 'requirejs:concatugly', "copy:distcpa", "copy:cpa" ]);

};
