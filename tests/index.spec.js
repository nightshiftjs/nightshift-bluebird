'use strict';

describe('The support for bluebird promises', function () {

    var Promise = require('bluebird');
    var nightShift = require('nightshift-core');
    var bluebird = require('../src');

    beforeEach(function () {
        nightShift.plugin(bluebird);
    });

    it('should create a bluebird promise', function () {
        var executor = jasmine.createSpy('executor');
        var promise = nightShift.promises.newPromise(executor);
        expect(executor).toHaveBeenCalledWith(jasmine.any(Function), jasmine.any(Function));
        expect(promise).toEqual(jasmine.any(Promise));
    });

    it('should create a deferred object with a bluebird promise', function () {
        var deferred = nightShift.promises.defer();
        expect(deferred).toEqual({
            promise: jasmine.any(Promise),
            resolve: jasmine.any(Function),
            reject: jasmine.any(Function)
        });
    });

    it('should fulfill the bluebird promise when resolving a deferred object', function (done) {
        var deferred = nightShift.promises.defer();
        var fulfillment = 'fulfillment';
        deferred.resolve(fulfillment);

        var onFulfill = jasmine.createSpy('onFulfill');
        deferred.promise
            .then(onFulfill)
            .then(function () {
                expect(onFulfill).toHaveBeenCalledWith(fulfillment);
            })
            .then(done);
    });

    it('should reject the bluebird promise when rejecting a deferred object', function (done) {
        var deferred = nightShift.promises.defer();
        var error = 'error';
        deferred.reject(error);

        var onReject = jasmine.createSpy('onReject');
        deferred.promise
            .then(null, onReject)
            .then(function () {
                expect(onReject).toHaveBeenCalledWith(error);
            })
            .then(done);
    });

    it('should give access to the bluebird romise constructor', function () {
        expect(nightShift.promises.Promise).toBe(Promise);
    });
});