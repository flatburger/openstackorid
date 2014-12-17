'use strict';

describe('Service: footerService', function () {

  // load the service's module
  beforeEach(module('hoqiiApp'));

  // instantiate service
  var footerService;
  beforeEach(inject(function (_footerService_) {
    footerService = _footerService_;
  }));

  it('should do something', function () {
    expect(!!footerService).toBe(true);
  });

});
