angular.module('your-app-name-goes-here')
  .controller('ExampleController', ExampleController);

ExampleController.$inject=[];
function ExampleController() {
  console.log("ExampleController!");

  var vm = this;

  vm.sayHi = sayHi;

  ////

  function sayHi(name) {
    return "Hello " + name;
  }
}
