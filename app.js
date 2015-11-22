'use strict'

angular.module('appName', [
	'firebase',
	'ui.bootstrap',
	'ngAnimate',
	'ngRoute'

])
.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'index.html',
		controller: 'simpleSignController'
	});
	$routeProvider.otherwise({redirectTo: '/'});
}]);