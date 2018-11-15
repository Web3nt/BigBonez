module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'../bigbonez/js/script.js': ['components/js/*.js']
				} //files
			} //myTarget
		}, //uglify
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				} //options
			} //dev
		}, //compass
		watch: {
			options: { livereload: true },
			scripts: {
				files: ['components/js/*.js'],
				tasks: ['uglify']
			}, //scripts
			sass: {
				files: ['components/sass/*.scss','components/sass/*/*.scss','components/sass/*/*/*.scss'],
				tasks: ['compass:dev']
			}, //sass
			html: {
				files: ['*.html'],
			} //html
		} //watch
	}) //initConfig
	grunt.registerTask('default', 'watch');
} //exports
