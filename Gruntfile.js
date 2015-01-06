var db = require("secondthought");
var assert = require("assert");

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'models/**/*.js', 'test/**/*.js','controllers/*.js','utils/*.js','config.js', 'index.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.registerTask("installDb", function() {
    var done = this.async();
    db.connect({db : "membership"}, function(err,db){
      db.install(['users','logs','sessions'], function(err,tableResult){
        assert.ok(err === null, err);
        console.log("DB installed: " + tableResult);
        done();
      });
    });

  });


  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);

};