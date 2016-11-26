app.controller('MainPageController', function MainPageController ($scope, $mdDialog, $http) {
    $scope.ddd = "456"
    $scope.subjectFlag = false;
    $scope.datesFlag = false;
    $scope.subjects = [
        {
            group_id: 00,
            id: 00,
            title: 'iOS VK',
            flag: 0,
            color: 'blue',
            subject_desription: '--'
        },
        {
            group_id: 00,
            id: 01,
            title: 'Android Cource',
            flag: 0,
            color: 'blue',
            subject_desription: 'Курс ко-ко/ Внимание! Сессия состоится 28 декабря. Не забываем сдавать Ваши проекты вовремя. Да и вообще, пройдите, пожалуйста тест на git.'
        },
        {
            group_id: 00,
            id: 02,
            title: 'Mathematics',
            flag: 0,
            color: 'blue',
            subject_desription: '--'
        },
        {
            group_id: 00,
            id: 03,
            title: 'Ochen\' dlinnoe nazvanie',
            flag: 0,
            color: 'blue',
            subject_desription: '--'
        },
        {
            group_id: 00,
            id: 04,
            title: 'Ochen\' dlinnoe nazvanie1',
            flag: 0,
            color: 'blue',
            subject_desription: '--'
        },
        {
            group_id: 00,
            id: 05,
            title: 'Ochen\' dlinnoe nazvanie2',
            flag: 0,
            color: 'blue',
            subject_desription: '--'
        },
        {
            group_id: 00,
            id: 06,
            title: 'Ochen\' dlinnoe nazvanie 3',
            flag: 0,
            color: 'blue',
            subject_desription: '--'
        },
        {
            group_id: 00,
            id: 07,
            title: 'Ochen\' dlinnoe nazvanie 4',
            flag: 0,
            color: 'blue',
            subject_desription: '--'
        }
    ];    
    $scope.dates = []
    $scope.currentSubject = 00;
    $scope.currentDate = 00;
    $scope.subjectTag = '';
    $scope.subjectTitle = '';
    $scope.subjectDescription = '';
    $scope.lessonDescription = '';
    $scope.lessonTagTag = '';
    $scope.lastModified = '';

    $scope.clickSubject = function (subject) {
        $scope.subjectTag = '#' + subject.title.replace(' ','').replace(' ','').replace(' ','') + "@M3238";
        $scope.currentSubject = subject.id;
        $scope.subjectTitle = subject.title;
        $scope.subjectDescription = subject.subject_description;
        $scope.lessonDescription = '';
        $scope.lessonTagTag = '';
        $scope.lastModified = '';
    }

    $scope.clickDate = function (date) {
        $scope.lessonDescription = '';
        $scope.lessonTagTag = '';
        $scope.lastModified = '';
    }

    $scope.clickVK = function () {
        getSubjects(1)
        getDates(1)
    }

    var getSubjects = function (id) {
        connectionUrl = 'http://77.244.216.254:8000/api/get/subject/?format=json&group_id=' + id
        $http.get(connectionUrl).success(function (data) {
            $scope.subjects = []
            for (var i = 0; i < data.objects.length; ++i) {
                $scope.subjects.push(data.objects[i]);
            }
            console.log(data);
        }).error(function (data) {
            console.log(data);
        })
    }

    var getDates = function (id) {
        connectionUrl = 'http://77.244.216.254:8000/api/get/date/?format=json&subject=' + id; 
        $http.get(connectionUrl).success(function (data) {
            $scope.dates = data.objects;
            console.log(data);
        }).error(function (data) {
            console.log(data);
        });
    }

    var getDatesForSubject = function (id) {
        connectionUrl = ''; 
        $http.get(connectionUrl).success(function (data) {

        }).error(function (data) {

        });
    }

    var alert;
    $scope.showDialog = showDialog;
    $scope.items = [1, 2, 3];

    $scope.openAddSubject = function ($event) {
        console.log(123)
        var tUrl = 'page/add-subject-directive.html';
        showDialog($event, tUrl);
    }

    $scope.openAddLesson = function ($event) {
        var tUrl = 'page/add-date-directive.html';
        showDialog($event, tUrl);
    }

    function showDialog($event, tUrl) {
        var parentEl = angular.element(document.body);
        $mdDialog.show({
            parent: parentEl,
            targetEvent: $event,
            templateUrl: tUrl,
            controller: DialogController
        });
        function DialogController($scope, $mdDialog) {
            $scope.closeDialog = function() {
                $mdDialog.hide();
            }
        }
    }

});