(function () {
  angular
    .module('myApp')
    .controller('myController', ['$scope', 'myAppTitle', function ($scope, myAppTitle) {
      $scope.myModel = "Katamari is life";
      $scope.title = myAppTitle;
    }]);
})();