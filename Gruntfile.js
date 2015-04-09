module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-bower-task');

	grunt.initConfig({
		bower : {
			install: {
				targetDir: '/public',
				layout: 'byComponent',
				install: true,
				verbose: false,
				cleanTargetDir: false,
				cleanBowerDir: false,
				bowerOptions: {}
			}
		}
	});
};
