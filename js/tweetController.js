tweetApp.controller('tweetController', function($scope, $http, $location, $routeParams){

	console.log($scope);

$scope.test = "I am working";
$scope.tweets = tweets;

//console.log($location.hash());
console.log($routeParams);

	if($routeParams.searchTerm){
		var searchTerm  = $routeParams.searchTerm;
	}
	else { 
	var searchTerm = 'puppylove';
	}


$http({
	      method: 'GET',
	      url: 'http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=' + searchTerm
	    }).then(function success(tweetData){
	      $scope.tweets = tweetData.data.statuses;
	      console.log(tweetData.data.statuses);

	  }, function failedFunction(tweetData){
	  	console.log(tweetData);
	  });    

// $http({
// 	      method: 'GET',
// 	      url: 'http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=;hate'
// 	  }).then(function success(tweetData){
// 	      $scope.tweets = tweetData.data.statuses;
// 	      console.log(tweetData.data.statuses);

// 	  }, function failedFunction(tweetData){
// 	  	console.log(tweetData);
// 	  });    

});



