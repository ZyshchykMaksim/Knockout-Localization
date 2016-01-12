'use strict';

requirejs.config({
	baseUrl: '/Scripts/',
	urlArgs: "v=" + (new Date()).getTime(),
	shim: {
		'bootstrap': {
			deps: ['jquery']
		}
	},

	paths: {
		jquery: 'jquery-1.9.1',
		bootstrap: 'bootstrap.min',
		knockout: 'knockout-3.4.0'
	}

});

requirejs.onError = function (err) {
	console.log(err.requireType);
	if (err.requireType === 'timeout') {
		console.log('modules: ' + err.requireModules);
	}

	console.log(err);
};