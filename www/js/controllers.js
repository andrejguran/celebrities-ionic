angular.module('starter.controllers', [])

	.controller('HomeCtrl', function($scope, $localstorage) {
		$scope.app = $localstorage.getObject('app');

		$scope.app.location = 'home';
	  	$scope.app.title = 'New game';


	  	$scope.$watch(function(){
	  		$localstorage.setObject('app', $scope.app);
	  	});
	})

	.controller('PlayersCtrl', function($scope, $localstorage) {
		$scope.app = $localstorage.getObject('app');

		$scope.app.location = 'players';
	  	$scope.app.title = 'Create teams';

	  	if ($scope.app.teams == undefined) {
	  		$scope.app.teams = [];
	  		$scope.app.teams[0] = ['', ''];
	  		$scope.app.teams[1] = ['', ''];
	  	}

	  	$scope.addAnotherTeam = function()
	  	{
	  		$scope.app.teams.push(['', '']);
	  	}

	  	$scope.$watch(function(){
	  		$localstorage.setObject('app', $scope.app);
	  	});
	  	
	})

	.controller('CelebritiesCtrl', function($scope, $localstorage) {
		$scope.app = $localstorage.getObject('app');

		$scope.app.location = 'celebrities';
	  	$scope.app.title = 'Create celebrities';


	  	$scope.$watch(function(){
	  		$localstorage.setObject('app', $scope.app);
	  	});
	})
;