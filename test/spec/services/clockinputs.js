'use strict';

describe('Service: clockinputs', function () {

  // load the service's module
  beforeEach(module('sigmaWorldClockApp'));

  // instantiate service
  var clockinputs;
  beforeEach(inject(function (_clockinputs_) {
    clockinputs = _clockinputs_;
  }));

  it('should do something', function () {
    expect(!!clockinputs).toBe(true);
  });

});
