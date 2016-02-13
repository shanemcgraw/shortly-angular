angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http) { //TODO: insert Links factory

  $scope.postLink = function (newLink) {
    console.log('Post from client', newLink);

    var postData = JSON.stringify( {url: newLink} );

    $http.post("http://localhost:3000/api/links", postData)
      .success(function (response) {
        console.log('success!', response);
      });
  };

  $scope.validateLink = function (link) {
    console.log('validations....');
    var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;
    var linkIsValid = link.match(rValidUrl);
    if ( link.length === 0) {
      $scope.urlMessage = '';
    } else if ( linkIsValid ) {
      $scope.urlMessage = "Cool";
    } else {
      $scope.urlMessage = "INVALID LINK"; //TODO: emoji for later U+1F4A9
    }
  };
});