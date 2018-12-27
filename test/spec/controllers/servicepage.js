'use strict';

describe('Controller: ServicepageCtrl', function () {

  // load the controller's module
  beforeEach(module('newVentureApp'));

  var ServicepageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServicepageCtrl = $controller('ServicepageCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ServicepageCtrl.awesomeThings.length).toBe(3);
  });
});
