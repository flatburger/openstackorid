'use strict';

/**
 * @ngdoc directive
 * @name hoqiiApp.directive:dynamicTopNav
 * @description
 * # dynamicTopNav
 */
angular.module('hoqiiApp')
  .directive('dynamicTopNav', function ($window, $location) {
    return {
      link: function postLink(scope) {
        var wd = angular.element($window);

        wd.bind('scroll', function() {
          if ($location.path() === '/' || $location.path() === 'index.html') {
            var distanceY = wd.scrollTop(), shrinkOn = $window.innerHeight;
            scope.logoTransparent = distanceY <= shrinkOn - 100;
          } else {
            scope.logoTransparent = false;
          }
          
          scope.$apply();
        });
      }
    };
  });
