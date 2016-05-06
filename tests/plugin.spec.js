'use strict';

describe('The plugin', function () {

    var pluginFactory = require('../src/plugin');
    var nightShift;

    beforeEach(function () {
        nightShift = {
            promises: {}
        };
    });

    it('should set nightShift.promises.Promise', function () {
        var Promise = 'Promise';
        var plugin = pluginFactory(Promise);
        plugin(nightShift);
        expect(nightShift.promises.Promise).toBe(Promise);
    });
});