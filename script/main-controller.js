app.controller('MainPageController', function MainPageController ($scope, $mdDialog, $http) {
    $scope.ddd = "456"
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
        $scope.subjectDescription = subject.subject_desription;
        $scope.lessonDescription = '';
        $scope.lessonTagTag = '';
        $scope.lastModified = '';
    }

    $scope.clickVK = function () {
        VK.init(function() {
            console.log("vk init: success")
            // API initialization succeeded 
            // Your code here 
        }, function() { 
            console.log("vk init: error")
            // API initialization failed 
            // Can reload page here 
        }, '5.60');
    }

    $scope.clickPost = function () {
        VK.api("wall.post", {"message": "Hello!"}, function (data) {
            console.log("Post ID:" + data.response.post_id);
        }, function (data) {
            console.log("Post: error" + data);
        });
    }

    var getSubjects = function () {
        connectionUrl = ''
        $http.get(connectionUrl).success(function (data) {
            
        }).error(function () {

        })
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