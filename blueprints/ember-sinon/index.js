var fs = require('fs');
var path = require('path');

module.exports = {
  description: 'Performs post-installation tasks for ember-sinon',

  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function(options) {
    if (!options.dryRun && !options.project.isEmberCLIAddon() && !options.inRepoAddon) {
      addJSHintPredef(options.project.root);
    }

    return this.addBowerPackageToProject('sinonjs');
  },

  afterUninstall: function(options) {
    if (!options.dryRun && !options.project.isEmberCLIAddon() && !options.inRepoAddon) {
      removeJSHintPredef(options.project.root);
    }
  }
};

function addJSHintPredef(root) {
  var jshint = readJSHint(root);
  jshint.predef = jshint.predef || [];

  if (jshint.predef.indexOf('sinon') > -1) {
    return;
  }

  jshint.predef.push('sinon');

  writeJSHint(root, jshint);
}

function removeJSHintPredef(root) {
  var jshint = readJSHint(root);
  jshint.predef = jshint.predef || [];

  if (jshint.predef.indexOf('sinon') < 0) {
    return;
  }

  jshint = jshint.predef.filter(function(entry) {
    return entry !== 'sinon';
  });

  writeJSHint(root, jshint);
}

function readJSHint(root) {
  var jshintFile = jshintFilePath(root);
  try {
    return JSON.parse(fs.readFileSync(jshintFile, {encoding: 'utf8'}));
  } catch (err) {
    console.error('Unable to read tests/.jshintrc:', err);
    return {};
  }
}

function writeJSHint(root) {
  var jshintFile = jshintFilePath(root);
  try {
    fs.writeFileSync(jshintFile, JSON.stringify(jshint, null, 2), {encoding: 'utf8'});
  } catch (err) {
    console.error('Unable to write tests/.jshintrc:', err);
  }
}

function jshintFilePath(root) {
  return path.join(root, 'tests', '.jshintrc');
}
