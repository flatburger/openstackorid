'use strict';

/**
 * @ngdoc service
 * @name hoqiiApp.footerService
 * @description
 * # footerService
 * Factory in the hoqiiApp.
 */
angular.module('hoqiiApp')
  .factory('footerService', function ($http) {
    // Service logic
    return {
      getMenus: function () {
        return $http.get('scripts/contents/footer.json');
      }
    };
  });
