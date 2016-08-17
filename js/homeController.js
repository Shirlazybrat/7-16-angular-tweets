tweetApp.controller('homeController', function($scope, $http, $location, $mdDialog, $mdMedia){
	$scope.homePage = true;

	$scope.$watch(function(){
		return $location.path();
	},
	function(newPath){
		$scope.trump = "";
		$scope.hillary = "";
		$scope.home = "";
		console.log("The path changed is now" + newPath);
		if(newPath === "/trump"){
			$scope.trump = "active";
		}
		else if(newPath === "/hillary"){
			$scope.hillary = "active";
		}
		else if( newPath === "/"){
			$scope.home = "active";
		}
	}
	);

	$scope.showPrompt = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.prompt()
      .title('What would you name your dog?')
      .textContent('Bowser is a common name.')
      .placeholder('Dog name')
      .ariaLabel('Dog name')
      .targetEvent(ev)
      .ok('Okay!')
      .cancel('I\'m a cat person');
    $mdDialog.show(confirm).then(function(result) {
      $scope.status = 'You decided to name your dog ' + result + '.';
    }, function() {
      $scope.status = 'You didn\'t name your dog.';
    });
  };


	// $scope.isActive = function(view){
	// 	console.log($location.path);
	// 	return view === $location.path;
	// }
});
	//console.log($scope);