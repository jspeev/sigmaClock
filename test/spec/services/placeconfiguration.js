'use strict';

describe('Service: placeconfiguration', function () {

  // load the service's module
  beforeEach(module('sigmaWorldClockApp'));

  // instantiate service
  var placeconfiguration;
  beforeEach(inject(function (_placeconfiguration_) {
    placeconfiguration = _placeconfiguration_;
  }));

  it('should do something', function () {
    expect(!!placeconfiguration).toBe(true);
  });

});
