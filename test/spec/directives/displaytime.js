'use strict';

describe('Directive: displaytime', function () {

  // load the directive's module
  beforeEach(module('sigmaWorldClockApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<displaytime></displaytime>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the displaytime directive');
  }));
});
