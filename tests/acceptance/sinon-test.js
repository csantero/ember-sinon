import { module, test } from 'qunit';
import { run } from '@ember/runloop';
import startApp from 'dummy/tests/helpers/start-app';
import sinon from 'sinon';

var application;

module('Acceptance | sinon', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    run(application, 'destroy');
  }
});

test('sinon is available as an import and works', function (assert) {
  var foo = sinon.spy();

  foo(3);
  assert.equal(foo.callCount, 1, 'Spy was called the right number of times.');
  assert.equal(foo.firstCall.args[0], 3, 'Spy was called with the right argument.');
});
