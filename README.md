# nightshift-bluebird

[![Build Status][build]](https://travis-ci.org/nightshiftjs/nightshift-bluebird) [![Coverage Status][coverage]](https://coveralls.io/github/nightshiftjs/nightshift-bluebird) [![Dependencies Status][deps]](https://david-dm.org/nightshiftjs/nightshift-bluebird)

[build]: https://img.shields.io/travis/nightshiftjs/nightshift-bluebird/promises.svg?maxAge=0&style=flat
[coverage]: https://img.shields.io/coveralls/nightshiftjs/nightshift-bluebird/promises.svg?maxAge=0&style=flat
[deps]: https://img.shields.io/david/nightshiftjs/nightshift-bluebird/promises.svg?maxAge=0&style=flat

This [NightShift](https://github.com/nightshiftjs) plugin replaces native ES6 promises by [bluebird](https://github.com/petkaantonov/bluebird) promises.

## Working with Promises
NightShift encourages the usage of promises instead of callback functions. 

NightShift supports two ways of working with promises: one that creates a new promise for an executor function (like ES6 or [bluebird](https://github.com/petkaantonov/bluebird)), and the other one that creates a deferred object (like [Q](https://github.com/kriskowal/q)).

### Promise
`nightShift.promises.Promise` is the bluebird's constructor function. 

### newPromise(executor)
The method `nightShift.promises.newPromise(executor)` creates a new bluebird promise.

```javascript
var promise = nightShift.promises.newPromise(function (resolve, reject) { 
    ... 
});
```

### defer()
The method `nightShift.promises.defer()` creates a deferred object that exposes the associated bluebird promise as well as the resolving functions that can be used to change its state.

```javascript
var deferred = nightShift.promises.defer();

var promise = deferred.promise;

// use deferred.resolve(...) or deferred.reject(...) to change the state of the promise
```