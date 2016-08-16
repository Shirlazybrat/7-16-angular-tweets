//Initialize the app
var tweetApp = angular.module("tweetApp", ['ngRoute']);


tweetApp.directive('customMenu', function(){
	return {
		restrict: 'E', //E = element, A = attribute, C =  class, M = Comment (dont use comment)
		templateUrl: "views/menu.html"
	}
});


tweetApp.config(function($routeProvider){
	$routeProvider.when('/',{ //at /, load home.html with home controller
		templateUrl: 'views/home.html',
		controller: 'homeController'
	});
	$routeProvider.when('/trump',{
		templateUrl: 'views/home.html',
		controller: 'trumpController'
	});
	$routeProvider.when('/hillary',{ // at /hillary, load same template but new controller
		templateUrl: 'views/home.html',
		controller: 'hillaryController'
	});
	$routeProvider.otherwise('/'); //default

});

this.tweeter1 = function(){
	this.tweet = "";
};


