var app = angular.module('myApp', []);
/* app.config(function($routeProvider) {
    $routeProvider
    .when("/repositories", {
        templateUrl : "repositories.html",
		controller: 'RepoController'
    });
}); */

app.controller('myCtrl', function($scope, $http) {	
	$scope.follow = 'Follow';
	$scope.content = [];
	$scope.content.email = 'andhikamaheva@gmail.com';
	
	$http.get("https://api.github.com/users/andhikamaheva").then(function(response) {
        $scope.content = response.data;
        $scope.statuscode = response.status;
        $scope.statustext = response.statusText;
    });
});

app.controller('RepoController', function($scope, $http) {
	$http.get("https://api.github.com/users/andhikamaheva/repos").then(function(response) {
		$scope.repo = response.data;
	});
});