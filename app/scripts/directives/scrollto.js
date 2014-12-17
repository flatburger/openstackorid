'use strict';

/**
 * @ngdoc directive
 * @name hoqiiApp.directive:scrollTo
 * @description
 * # scrollTo
 */
angular.module('hoqiiApp').directive('scrollTo', function () {
	return {
		restrict: 'A',
		link: function(scope, elm, attrs) {
			angular.element(elm).bind('click', function() {
				angular.element('body,html').animate({scrollTop: angular.element(attrs.scrollTo).offset().top - 65}, 'slow');
				console.log(angular.element(attrs.scrollTo).offset().top);
			});
		}
	};
});
