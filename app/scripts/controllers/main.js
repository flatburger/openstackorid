'use strict';

/**
 * @ngdoc function
 * @name hoqiiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hoqiiApp
 */
angular.module('hoqiiApp')
  .controller('MainCtrl', function ($scope, $animate, $window) {
    $animate.enabled(false);
    $scope.slide = {
    	'interval': 5000,
    	'slides': [
    		{
    			'image': 'images/bg1.jpg',
    			'text': 'title',
    			'title': 'Produk',
    			'description': 'Open Source Software yang di desain untuk me-manage jaringan-jaringan skala besar, virtual mesin serta menciptakan platform yang scalable untuk cloud-computing.',
    			'faClass': 'icon-dice',
                'link': '#products'
    		},
    		{
    			'image': 'images/bg2.jpg',
    			'text': 'title',
    			'title': 'Komunitas',
    			'description': 'OpenStack Indonesia adalah sebuah komunitas untuk para peminat teknologi cloud computing di Indonesia.',
    			'faClass': 'icon-cogs',
                'link': '#forum'
    		},
    		{
    			'image': 'images/bg3.jpg',
    			'text': 'title',
    			'title': 'Kegiatan',
    			'description': 'OpenStack Summit merupakan sebuah acara Conference tahunan oleh komunitas OpenStack.',
    			'faClass': 'icon-copy2',
                'link': '#eventopen'
    		}
    	]
    };

    $scope.slides = $scope.slide.slides;

    $scope.slide.labelStyle = {
    	'padding-top': $window.innerHeight/3
    };

    $scope.slide.getStyle = function(index) {
    	return {
    		'height': $window.innerHeight,
    		'background-image': 'url(' + $scope.slide.slides[index].image + ')',
    		'background-position': '50%',
            'background-size': 'cover'
    	};
    };
  });
