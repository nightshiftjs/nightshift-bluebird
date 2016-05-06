'use strict';

var Promise = require('bluebird');
var pluginFactory = require('./plugin');

module.exports = pluginFactory(Promise);