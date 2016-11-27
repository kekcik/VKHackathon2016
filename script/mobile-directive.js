app.directive('subject', function() {
    return {
        restrict: 'A',
        scope: true,
        templateUrl: 'page/mobile-subject-directive.html',
        controller: function ($scope, $element) {

        }  
    }  
});
app.directive('date', function() {
    return {
        restrict: 'A',
        scope: true,
        templateUrl: 'page/mobile-date-directive.html',
        controller: function ($scope, $element) {

        }  
    }  
});
app.directive('description', function() {
    return {
        restrict: 'A',
        scope: true,
        templateUrl: 'page/mobile-description-directive.html',
        controller: function ($scope, $element) {

        }  
    }  
});