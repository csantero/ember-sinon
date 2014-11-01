'use strict';

module.exports = {
  name: 'ember-sinon',

  included: function (app) {
    if (app.tests) {
      app.import('bower_components/sinon/index.js', {
        type: 'test'
      });
    }
  }
};
