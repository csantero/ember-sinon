/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-sinon',

  included: function(app) {
    this._super.included.apply(this, arguments);

    while (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    app.import('vendor/sinon/sinon.js', { type: 'test' });
    app.import('vendor/shims/sinon.js', { type: 'test' });
  },

  treeForVendor: function(tree) {
    var sinonPath = path.dirname(require.resolve('sinon/pkg/sinon'));
    var sinonTree = new Funnel(sinonPath, {
      files: ['sinon.js'],
      destDir: '/sinon',
    });

    var trees = [tree, sinonTree];

    return new MergeTrees(trees, {
      annotation: 'ember-sinon: treeForVendor'
    });
  }
};
