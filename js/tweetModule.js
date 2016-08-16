//Initialize the app
var tweetApp = angular.module("tweetApp", ['ngRoute']);


// tweetApp.directive('customMenu', function(){
// 	return {
// 		restrict: 'E', //E = element, A = attribute, C =  class, M = Comment (dont use comment)
// 		templateUrl: "views/menu.html"
// 	}
// });


tweetApp.config(function($routeProvider){
	$routeProvider.when('/',{ //at /, load home.html with home controller
		templateUrl: 'views/home.html',
		controller: 'tweetController'
	});

	$routeProvider.when('/:searchTerm',{
		templateUrl: 'views/home.html',
		controller: 'tweetController'
	});

	$routeProvider.when('/:searchTerm*',{
		templateUrl: 'views/home.html',
		controller: 'tweetController'
	});

// 	$routeProvider.when('/hillary',{ // at /hillary, load same template but new controller
// 		templateUrl: 'views/home.html',
// 		controller: 'hillaryController'
// 	});
// 	$routeProvider.otherwise('/'); //default

// });

// this.tweeter1 = function(){
// 	this.tweet = "";
});

tweetApp.factory('myFactory', function(){
    var factory = {};

    factory.getVar = function(){
        return this.variable;
    }

    factory.setVar = function(data){
        this.variable = data;
    }
    
    return factory;
});

tweetApp.controller('MainController', function($scope, myFactory){
    myFactory.setVar("this is a variable");
});

tweetApp.controller('AnotherController', function($scope, myFactory){
    console.log(myFactory.getVar());
    // "this is a variable"
})
