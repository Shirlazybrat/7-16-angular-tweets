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
      .title('What hashtag would you like to search?')
      .textContent('#love, #lemonade, #Trump?')
      .placeholder('Enter search')
      .ariaLabel('#')
      .targetEvent(ev)
      .ok('Let\'s see!')
      .cancel('Not today');
    $mdDialog.show(confirm).then(function(result) {
      $scope.status = 'Below is your # search for ' + result + '.';
    }, function() {
      $scope.status = 'You didn\'t choose a # to search.';
    });
  };


	// $scope.isActive = function(view){
	// 	console.log($location.path);
	// 	return view === $location.path;
	// }
});
	//console.log($scope);