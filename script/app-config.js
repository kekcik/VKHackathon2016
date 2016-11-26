var app = angular.module('BlankApp', ['ngMaterial']);
app.directive('date', function() {
    return {
    restrict: 'A',
    scope: true,
    templateUrl: 'page/date-directive.html',
    controller: function ($scope, $element) {
        $scope.abc = "123";
    }  
    }  
});
app.controller('MainPageController', function MainPageController ($scope) {
    $scope.ddd = "456"
});