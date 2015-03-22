	// create the module and name it scotchApp
	var singlePageTemplate = angular.module('singlePageTemplate', ['ngRoute']);

	// configure our routes
	singlePageTemplate.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			.when('/usage', {
				templateUrl : 'pages/usage.html',
				controller  : 'usageController'
			});
	});


	singlePageTemplate.controller('mainController', function() {
	});

	singlePageTemplate.controller('aboutController', function() {
	});

	singlePageTemplate.controller('usageController', function() {
	});