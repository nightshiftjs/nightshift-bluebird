'use strict';

module.exports = function createPluginFunction(Promise) {

    return function plugin(nightShift) {
        nightShift.promises.Promise = Promise;
    };
};