'use strict';

describe('Controller: GuestsCtrl', function () {

  // load the controller's module
  beforeEach(module('newVentureApp'));

  var GuestsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GuestsCtrl = $controller('GuestsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GuestsCtrl.awesomeThings.length).toBe(3);
  });
});
