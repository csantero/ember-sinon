/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-sinon',

  options: {
    nodeAssets: {
      'sinon': {
        import: [{ path: 'pkg/sinon.js', type: 'test' }]
      }
    }
  },

  included: function (app) {
    this._super.included.apply(this, arguments);

    app.import('vendor/shims/sinon.js', { type: 'test' });
  }
};
