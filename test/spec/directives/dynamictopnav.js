'use strict';

describe('Directive: dynamicTopNav', function () {

  // load the directive's module
  beforeEach(module('hoqiiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dynamic-top-nav></dynamic-top-nav>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dynamicTopNav directive');
  }));
});
