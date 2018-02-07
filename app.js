var AngularGUI = angular.module('AngularGUI', ['ngRoute']);
AngularGUI.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/home', {
		templateUrl: 'views/home.html'
		// controller: 'homeController'
	}).
	otherwise({
		redirectTo: '/home'
	});
}]);