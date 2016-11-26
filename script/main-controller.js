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
    function showDialog($event) {
       var parentEl = angular.element(document.body);
       $mdDialog.show({
         parent: parentEl,
         targetEvent: $event,
         templateUrl: 'page/add-subject-directive.html',
         locals: {
           items: $scope.items
         },
         controller: DialogController
      });
      function DialogController($scope, $mdDialog, items) {
        $scope.items = items;
        $scope.closeDialog = function() {
          $mdDialog.hide();
        }
      }
    }
});