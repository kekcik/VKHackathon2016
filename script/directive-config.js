app.directive('subject', function() {
    return {
        restrict: 'A',
        scope: true,
        templateUrl: 'page/subject-directive.html',
        controller: function ($scope, $element) {

        }  
    }  
});

app.directive('date', function() {
    return {
        restrict: 'A',
        scope: true,
        templateUrl: 'page/date-directive.html',
        controller: function ($scope, $element) {

        }  
    }  
});

app.directive('description', function() {
    return {
        restrict: 'A',
        scope: true,
        templateUrl: 'page/description-directive.html',
        controller: function ($scope, $element) {

        }  
    }  
});