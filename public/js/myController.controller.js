(function () {
  angular
    .module('myApp')
    .controller('myController', ['$scope', 'myAppTitle', 'CharacterVersionFactory', function ($scope, myAppTitle, CharacterVersionFactory) {
      $scope.myModel = "Katamari is life";
      $scope.title = myAppTitle;
      $scope.characters = CharacterVersionFactory;
    }]);
})();