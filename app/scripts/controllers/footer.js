'use strict';

/**
 * @ngdoc function
 * @name hoqiiApp.controller:FooterCtrl
 * @description
 * # FooterCtrl
 * Controller of the hoqiiApp
 */
angular.module('hoqiiApp')
  .controller('footerCtrl', function ($scope, footerService) {
    footerService.getMenus().success(function(data) {
    	$scope.menus = data;
    });
  });
