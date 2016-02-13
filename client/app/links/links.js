angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  // Your code here
    // $scope.data = ['www.google.com', 'test2'];
    $scope.data = Links.get();

});

