angular.module('moneyzoneApp', ['ngRoute']);

function config($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'home/home.view.html'
		})
		.otherwise({redirectTo: '/'});
};


angular.module('moneyzoneApp')
	.config(['$routeProvider', config]);
