﻿angular.module('moneyzoneApp', ['ngRoute']);

function config($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'home/home.view.html',
			controller: 'homeCtrl',
			controllerAs: 'vm'

		})
		.otherwise({redirectTo: '/'});
};


angular.module('moneyzoneApp')
	.config(['$routeProvider', config]);
