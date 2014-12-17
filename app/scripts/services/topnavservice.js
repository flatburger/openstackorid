'use strict';

/**
 * @ngdoc service
 * @name hoqiiApp.topNavService
 * @description
 * # topNavService
 * Factory in the hoqiiApp.
 */
angular.module('hoqiiApp')
  .factory('topNavService', function ($http) {
    // Public API here
    return {
      getMenus: function () {
        return $http.get('scripts/contents/topnav.json');
      }
    };
  });
