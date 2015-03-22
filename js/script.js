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

			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	singlePageTemplate.controller('mainController', function($scope, $sce) {

	});

	singlePageTemplate.controller('aboutController', function($scope) {
		$scope.message = 'about';
	});

	singlePageTemplate.controller('contactController', function($scope) {
		$scope.message = 'contact';
	});