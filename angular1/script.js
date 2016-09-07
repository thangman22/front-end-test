    angular.module('testSimpleLoop', [])
    .controller('MainLoop', function($http,$scope) {
        $http.get("generated.json").success(function(data) {
            $scope.Loaditems = data;
        })
    });
