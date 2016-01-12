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
		jquery: 'jquery-2.1.4',
		bootstrap: 'bootstrap.min',
		knockout: 'knockout-3.3.0'
	}

});

requirejs.onError = function (err) {
	console.log(err.requireType);
	if (err.requireType === 'timeout') {
		console.log('modules: ' + err.requireModules);
	}

	console.log(err);
};