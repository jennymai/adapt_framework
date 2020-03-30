/**
 * For development
 */
module.exports = function(grunt) {
  grunt.registerTask('dev', 'Creates a developer-friendly build of the course', function(diff) {
    diff = diff ? ":diff" : '';
    grunt.task.run([
      'check-json',
      'json-prettify',
      'schema-defaults',
      'tracking-insert',
      `server-build:dev${diff}`,
      'watch'
    ]);
  });
};
