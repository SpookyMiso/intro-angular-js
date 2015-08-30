(function () {
  angular
    .module('myApp')
    .controller('myController', ['$scope', 'myAppTitle', 'CharacterVersionFactory', 'BookService', 'Movies', myController]);

    function myController ($scope, myAppTitle, CharacterVersionFactory, BookService, Movies) {
      $scope.myModel = "Katamari is life";
      $scope.title = myAppTitle;
      $scope.characters = CharacterVersionFactory;
      $scope.books = BookService.getBooks();
      $scope.book = BookService.getBook(1);
      $scope.addBook = BookService.addBook;
      $scope.movies = Movies.query();
    }
})();