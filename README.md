Ember Sinon
===========

[![Greenkeeper badge](https://badges.greenkeeper.io/csantero/ember-sinon.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/csantero/ember-sinon.svg?branch=master)](https://travis-ci.org/csantero/ember-sinon)
[![Ember Observer Score](http://emberobserver.com/badges/ember-sinon.svg)](http://emberobserver.com/addons/ember-sinon)
[![Code Climate](https://codeclimate.com/github/csantero/ember-sinon/badges/gpa.svg)](https://codeclimate.com/github/csantero/ember-sinon)
[![Codacy Badge](https://api.codacy.com/project/badge/grade/b6e21f46906b4847907956ea4806cfa9)](https://www.codacy.com/app/hawker-jordan/ember-sinon)

This addon adds support for [Sinon](https://github.com/cjohansen/Sinon.JS) to assist in testing your Ember CLI app.

Installation
------------------------------------------------------------------------------

```
ember install ember-sinon
```


Usage
------------------------------------------------------------------------------

While in testing mode (i.e. either when visiting `/tests` or when running `ember test`), `sinon` will be available as an import.

```js
import sinon from 'sinon';

test(".runCallback() should run the callback passed", function(assert) {
  var spy = sinon.spy();
  this.subject().runCallback(spy);

  // Default Sinon messages:
  sinon.assert.calledOnce(spy);
  sinon.assert.calledWith(spy, 'foo');

  // Custom messages:
  assert.ok(spy.calledOnce, "the callback should be called once");
  assert.ok(spy.calledWith('foo'), "the callback should be passed 'foo' as an argument");
});
```

## Integration with testing frameworks

Check out [ember-sinon-qunit](https://github.com/elwayman02/ember-sinon-qunit) for integration with Ember-QUnit!

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
