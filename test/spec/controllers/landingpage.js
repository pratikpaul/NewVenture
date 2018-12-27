'use strict';

describe('Controller: LandingpageCtrl', function () {

  // load the controller's module
  beforeEach(module('newVentureApp'));

  var LandingpageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LandingpageCtrl = $controller('LandingpageCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LandingpageCtrl.awesomeThings.length).toBe(3);
  });
});
