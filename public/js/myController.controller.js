(function () {
  angular
    .module('myApp')
    .controller('myController', ['$scope', 'myAppTitle', 'CharacterVersionFactory', 'BookService', myController]);

    function myController ($scope, myAppTitle, CharacterVersionFactory, BookService) {
      $scope.myModel = "Katamari is life";
      $scope.title = myAppTitle;
      $scope.characters = CharacterVersionFactory;
      $scope.books = BookService.getBooks();
      $scope.book = BookService.getBook(1);
    }
})();