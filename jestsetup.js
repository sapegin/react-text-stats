// Author: Artem Sapegin http://sapegin.me, 2015
// Jest environment setup

var path = require('path');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

/**
 * Disable lodash memoization.
 */
require('lodash').memoize = function(func) {
	return func;
};

/**
 * Expose React and TestUtils to all modules and tests.
 */
global.React = React;
global.TestUtils = TestUtils;

/**
 * Fake localStorage.
 */
var storage = {};
global.localStorage = {
	getItem: function(key) {
		return storage[key] || null;
	},
	setItem: function(key, value) {
		return storage[key] = String(value);
	},
	clear: function(key) {
		storage = {};
	}
};
