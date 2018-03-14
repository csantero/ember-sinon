import { module, test } from 'qunit';
import sinon from 'sinon';

module('Acceptance | sinon', function () {
  test('sinon is available as an import and works', function (assert) {
    let foo = sinon.spy();

    foo(3);
    assert.equal(foo.callCount, 1, 'Spy was called the right number of times.');
    assert.equal(foo.firstCall.args[0], 3, 'Spy was called with the right argument.');
  });
});

