console.log('js');
var myApp = angular.module('myApp', []);

// define controller
myApp.controller('controllerOne', function () {
  // bind View Model
  var vm = this;

  vm.thingOne = 'Text to be output!';
  // could also use this.thingOne = 'Hey class!'

  vm.thingTwo = 345+8839;

  vm.name = vm.thingOne;
}); // end myApp.controller
