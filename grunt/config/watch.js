// TODO excludes
module.exports = {
  bowerJson: {
    files: ['<%= sourcedir %>*/*/bower.json'],
    tasks: ['dev']
  },
  scripts: {
    files: ['<%= sourcedir %>*/*/scripts/*'],
    tasks: ['dev']
  },
  less: {
    files: ['<%= sourcedir %>**/*.less'],
    tasks: ['less:dev']
  },
  handlebars: {
    files: ['<%= sourcedir %>**/*.hbs'],
    tasks: ['handlebars', 'javascript:dev']
  },
  courseJson: {
    files: ['<%= outputdir %>course/**/*.<%= jsonext %>'],
    tasks: ['jsonlint', 'check-json', 'schema-defaults', 'create-json-config', 'copy', 'replace']
  },
  js: {
    files: ['<%= sourcedir %>**/*.js'],
    tasks: ['javascript:dev']
  },
  componentsAssets: {
    files: ['<%= sourcedir %>components/**/assets/**'],
    tasks: ['newer:copy:componentAssets']
  },
  componentsFonts: {
    files: ['<%= sourcedir %>components/**/fonts/**'],
    tasks: ['newer:copy:componentFonts']
  },
  extensionsAssets: {
    files: ['<%= sourcedir %>extensions/**/assets/**'],
    tasks: ['newer:copy:extensionAssets']
  },
  extensionsFonts: {
    files: ['<%= sourcedir %>extensions/**/fonts/**'],
    tasks: ['newer:copy:extensionFonts']
  },
  menuAssets: {
    files: ['<%= sourcedir %>menu/<%= menu %>/**/assets/**'],
    tasks: ['newer:copy:menuAssets']
  },
  menuFonts: {
    files: ['<%= sourcedir %>menu/<%= menu %>/**/fonts/**'],
    tasks: ['newer:copy:menuFonts']
  },
  themeAssets: {
    files: ['<%= sourcedir %>theme/<%= theme %>/**/assets/**'],
    tasks: ['newer:copy:themeAssets']
  },
  themeFonts: {
    files: ['<%= sourcedir %>theme/<%= theme %>/**/fonts/**'],
    tasks: ['newer:copy:themeFonts']
  },
  libraries: {
    files: ['<%= sourcedir %>core/libraries/**/*','<%= sourcedir %>*/*/libraries/**/*'],
    tasks: ['newer:copy:libraries']
  },
  required: {
    files: ['<%= sourcedir %>core/required/**/*','<%= sourcedir %>*/*/required/**/*'],
    tasks: ['newer:copy:required']
  }
}
