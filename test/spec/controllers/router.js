'use strict';

describe('Controller: RouterCtrl', function () {

  // load the controller's module
  beforeEach(module('hoqiiApp'));

  var RouterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RouterCtrl = $controller('RouterCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
