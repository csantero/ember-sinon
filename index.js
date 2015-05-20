'use strict';

module.exports = {
  name: 'ember-sinon',

  included: function (app) {
    if (app.tests) {
      app.import('bower_components/sinonjs/sinon.js', {
        type: 'test'
      });
    }
  }
};
