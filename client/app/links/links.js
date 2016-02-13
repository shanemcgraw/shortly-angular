angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  // Your code here

  //$scope.data = ['one', 'two'];

  //$scope.callback = function(data){console.log("DATAAAA >>>>>>",data)};

  // $scope.showData = function() {
  //   $scope.data = Links.getAll();
  // }
  $scope.callback = function(data){
    $scope.data = data;
    console.log(data);
  };

  $scope.data = Links.getAll($scope.callback);

  // console.log(Links.getAll());


});

