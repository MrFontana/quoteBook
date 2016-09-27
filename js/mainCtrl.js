angular.module('quoteBook').controller('mainCtrl', function($scope, dataService) {

    $scope.quotes = dataService.getQuotes();

    // $scope.addData = function(o,l){
    //     dataService.addData(o,l);
    // }

    $scope.removeData = function(){
      dataService.removeData();
    }
    $scope.deleteMe = function(textToDelete){
  dataService.removeData(textToDelete);
}

$scope.addQuote = function(){
  var newQuote = {
    text:$scope.newQuoteText,
    author:$scope.newQuoteAuthor
  }
  if(dataService.addData(newQuote))
  {
    $scope.newQuoteText = '';
    $scope.newQuoteAuthor= '';
  }
}
});
