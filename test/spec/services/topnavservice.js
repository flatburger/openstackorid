'use strict';

describe('Service: topNavService', function () {

  // load the service's module
  beforeEach(module('hoqiiApp'));

  // instantiate service
  var topNavService;
  beforeEach(inject(function (_topNavService_) {
    topNavService = _topNavService_;
  }));

  it('should do something', function () {
    expect(!!topNavService).toBe(true);
  });

});
