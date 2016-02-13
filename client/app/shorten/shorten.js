angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http) {

  $scope.postLink = function (newLink) {
    console.log('Post from client', newLink);

    var postData = JSON.stringify( {url: newLink} );

    $http.post("http://localhost:3000/api/links", postData)
      .success(function(response){ 
        console.log('success!', response);
      });
  
  };

});