'use strict';

/**
 * @ngdoc function
 * @name hoqiiApp.controller:TopnavCtrl
 * @description
 * # TopnavCtrl
 * Controller of the hoqiiApp
 */
angular.module('hoqiiApp').controller('topNavCtrl', function ($scope, topNavService, $location) {
	$scope.logoTransparent = true;

	$scope.$on('$routeChangeStart', function() {
		$scope.isNotIndex = $location.path() !== '/' && $location.path() !== 'index.html';

		if ($scope.isNotIndex) {
			$scope.logoTransparent = false;
		} else {
			$scope.logoTransparent = true;
		}
	});

	topNavService.getMenus().success(function(data) {
		$scope.menus = data;
	});
});
