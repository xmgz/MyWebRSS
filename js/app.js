// Configure RequireJS
requirejs.config({
	baseUrl: 'js/lib',
	paths: {
		'app': '../app',
		'views': '../app/views',
		'models': '../app/models',
		'collections': '../app/collections',
		'templates': '../../templates',
		'localStorage': 'backbone.localStorage'
	},
	shim: {
		'zepto': {
			exports: '$'
		},
		'jquery.storage': {
			deps: ['zepto']
		},
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: ['underscore', 'jquery.storage'],
			exports: 'Backbone'
		}
	}
});

// Load the main app file
requirejs(['app/main'], function(App) {
	App.initialize();
});
