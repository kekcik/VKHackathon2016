app.controller('MainMobilePageController', function MainMobilePageController ($scope, $mdDialog, $http) {
    $scope.currentSubject = {}    
    $scope.currentDate = {}
    $scope.level = 0
    $scope.title = 'Choose subject'
    $scope.decLevel = function () {
        $scope.level--;
        if ($scope.level == 1) $scope.currentDate = {}
        if ($scope.level == 0) $scope.currentSubject = {}
        console.log($scope.level)
    }
    $scope.incLevel = function () {
        $scope.level++;
        console.log($scope.level)
    }
    $scope.clickSubject = function (subject) {
        subject = {
            title: 'Course',
            tag: '#Course@M3238',
            description: 'А это демо курс. Потому что у нас ничего друго нет. Но мы это, держимся'
        }
        $scope.incLevel();
        $scope.currentSubject = subject
    }
    $scope.clickDate = function (date) {
        date = {
            lesson: 'К этому уроку Вам нужно было написать непонятные иероглифы, а сделали ничерта.' + 
            'Но вы держитесь там. ВСе доброго и здоровья.',
            lessonTag: '#Course15_12_16@M3238', 
            lastModified: 'Ivan Trofimov'
        }
        $scope.incLevel();
        $scope.currentDate = date
    }
});