/* simple sign controller */

app.controller('simpleSignController',['$scope', '$firebaseArray',function($scope, $firebaseArray) {
	
	var url = 'https://simple-sign.firebaseio.com/signs';
	var signsRef = new Firebase(url);
	
	// bind array to the Firebase reference
	$scope.signs = $firebaseArray(signsRef);
	
	$scope.newSign = {
		signText: '',
		signSubtext: ''
	};
	
	$scope.message = "hello!";
	
	$scope.saveSign = function() {
		$scope.tasks.$add($scope.newSign).then( function() {
			$scope.newSign = {
				signText: '',
				signSubtext: ''
			},
			function(err) {
				console.log(err);
			} 
		});
	};
	
}]);