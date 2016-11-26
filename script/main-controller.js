app.controller('MainPageController', function MainPageController ($scope, $mdDialog, $http) {
    $scope.ddd = "456"
    $scope.subjectFlag = false;
    $scope.datesFlag = false;
    $scope.subjects = [];
    $scope.dates = []
    $scope.currentSubject = 00;
    $scope.currentDate = 00;
    $scope.subjectTitle = '';
    $scope.subjectDescription = '';
    $scope.lessonDescription = '';
    $scope.lessonTagTag = '';
    $scope.lastModified = '';
    $scope.periodicity = [ 
        {id: 1, period: 'Once'},
        {id: 2, period: 'Once at week'},
        {id: 3, period: 'Once at two weeks'},
    ];

    $scope.clickSubject = function (subject) {
        $scope.currentSubject = subject.id;
        $scope.subjectTitle = subject.title;
        $scope.subjectDescription = subject.subject_description;
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