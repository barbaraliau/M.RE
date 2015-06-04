var app = angular.module('MRE', ['ui.router','ui.bootstrap']);


app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/reservations');

	$stateProvider
		.state('profile', {
			url: '/profile',
			templateUrl: '',
			controllerAs: 'profileCtrl as pr'
		})

		.state('reservations', {
			url: '/reservations',
			templateUrl: '/routes/reservations/reservations.html',
			controller: 'reservationsCtrl'
		});
});
