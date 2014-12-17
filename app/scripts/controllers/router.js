'use strict';

/**
 * @ngdoc function
 * @name hoqiiApp.controller:RouterCtrl
 * @description
 * # RouterCtrl
 * Controller of the hoqiiApp
 */
angular.module('hoqiiApp')
  .controller('routerCtrl', function ($scope, $routeParams) {
    $scope.templateUrl = 'views/'+ $routeParams.id + '.html';
  });
