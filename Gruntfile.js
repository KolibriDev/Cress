
module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'dist/cress.css': 'scss/cress.scss'
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          'dist/cress.min.css': 'dist/cress.css'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  return grunt.registerTask('build', ['sass', 'cssmin']);
};
