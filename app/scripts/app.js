'use strict';

/**
 * @ngdoc overview
 * @name hoqiiApp
 * @description
 * # hoqiiApp
 *
 * Main module of the application.
 */
angular
  .module('hoqiiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/:id', {
        templateUrl: 'views/router.html',
        controller: 'routerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
