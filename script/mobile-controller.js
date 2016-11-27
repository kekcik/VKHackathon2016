app.controller('MainMobilePageController', function MainMobilePageController ($scope, $mdDialog, $http) {
    $scope.dates = [
        {
            date: 1457987234,
            flag: 1,
            lesson: 'К этому уроку Вам нужно было написать непонятные иероглифы, а сделали ничерта.' + 
            'Но вы держитесь там. ВСе доброго и здоровья.',
            lessonTag: '#Course15_12_16@M3238', 
            lastModified: 'Ivan Trofimov'
        },
        {
            date: 1467987234,
            flag: 2,
            lesson: 'К этому уроку Вам нужно было написать непонятные иероглифы, а сделали ничерта.' + 
            'Но вы держитесь там. ВСе доброго и здоровья.',
            lessonTag: '#Course15_12_16@M3238', 
            lastModified: 'Ivan Trofimov'
        },
        {
            date: 1477987234,
            flag: 3,
            lesson: 'К этому уроку Вам нужно было написать непонятные иероглифы, а сделали ничерта.' + 
            'Но вы держитесь там. ВСе доброго и здоровья.',
            lessonTag: '#Course15_12_16@M3238', 
            lastModified: 'Ivan Trofimov'
        },
        {
            date: 1487987234,
            flag: 4,
            lesson: 'К этому уроку Вам нужно было написать непонятные иероглифы, а сделали ничерта.' + 
            'Но вы держитесь там. ВСе доброго и здоровья.',
            lessonTag: '#Course15_12_16@M3238', 
            lastModified: 'Ivan Trofimov'
        },
        {
            date: 1497987234,
            flag: 5,
            lesson: 'К этому уроку Вам нужно было написать непонятные иероглифы, а сделали ничерта.' + 
            'Но вы держитесь там. ВСе доброго и здоровья.',
            lessonTag: '#Course15_12_16@M3238', 
            lastModified: 'Ivan Trofimov'
        },
        {
            date: 1507987234,
            flag: 6,
            lesson: 'К этому уроку Вам нужно было написать непонятные иероглифы, а сделали ничерта.' + 
            'Но вы держитесь там. ВСе доброго и здоровья.',
            lessonTag: '#Course15_12_16@M3238', 
            lastModified: 'Ivan Trofimov'
        },
        {
            date: 1517987234,
            flag: 7,
            lesson: 'К этому уроку Вам нужно было написать непонятные иероглифы, а сделали ничерта.' + 
            'Но вы держитесь там. ВСе доброго и здоровья.',
            lessonTag: '#Course15_12_16@M3238', 
            lastModified: 'Ivan Trofimov'
        },
        {
            date: 1527987234,
            flag: 8,
            lesson: 'К этому уроку Вам нужно было написать непонятные иероглифы, а сделали ничерта.' + 
            'Но вы держитесь там. ВСе доброго и здоровья.',
            lessonTag: '#Course15_12_16@M3238', 
            lastModified: 'Ivan Trofimov'
        },
        {
            date: 1537987234,
            flag: 9,
            lesson: 'К этому уроку Вам нужно было написать непонятные иероглифы, а сделали ничерта.' + 
            'Но вы держитесь там. ВСе доброго и здоровья.',
            lessonTag: '#Course15_12_16@M3238', 
            lastModified: 'Ivan Trofimov'
        },
        {
            date: 1547987234,
            flag: 10,
            lesson: 'К этому уроку Вам нужно было написать непонятные иероглифы, а сделали ничерта.' + 
            'Но вы держитесь там. ВСе доброго и здоровья.',
            lessonTag: '#Course15_12_16@M3238', 
            lastModified: 'Ivan Trofimov'
        }]
    $scope.subjects = [
        {
            title: 'Course',
            tag: '#Course@M3238',
            description: 'А это демо курс. Потому что у нас ничего друго нет. Но мы это, держимся'
        },
        {
            title: 'iOS Course',
            tag: '#iOSCourse@M3238',
            description: 'А это демо курс. Потому что у нас ничего друго нет. Но мы это, держимся'
        },
        {
            title: 'Android',
            tag: '#Android@M3238',
            description: 'А это демо курс. Потому что у нас ничего друго нет. Но мы это, держимся'
        },
        {
            title: 'C++',
            tag: '#C++@M3238',
            description: 'А это демо курс. Потому что у нас ничего друго нет. Но мы это, держимся'
        },
        {
            title: 'Demo course',
            tag: '#DemoCourse@M3238',
            description: 'А это демо курс. Потому что у нас ничего друго нет. Но мы это, держимся'
        },
        {
            title: 'English',
            tag: '#English@M3238',
            description: 'А это демо курс. Потому что у нас ничего друго нет. Но мы это, держимся'
        },
        {
            title: 'French',
            tag: '#French@M3238',
            description: 'А это демо курс. Потому что у нас ничего друго нет. Но мы это, держимся'
        },
        {
            title: 'Algithm',
            tag: '#Algithm@M3238',
            description: 'А это демо курс. Потому что у нас ничего друго нет. Но мы это, держимся'
        },
        {
            title: 'Data structure',
            tag: '#Datastructure@M3238',
            description: 'А это демо курс. Потому что у нас ничего друго нет. Но мы это, держимся'
        },
        {
            title: 'Some Subject',
            tag: '#SomeSubject@M3238',
            description: 'А это демо курс. Потому что у нас ничего друго нет. Но мы это, держимся'
        }
    ]
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
        // subject = {
        //     title: 'Course',
        //     tag: '#Course@M3238',
        //     description: 'А это демо курс. Потому что у нас ничего друго нет. Но мы это, держимся'
        // }
        $scope.incLevel();
        $scope.currentSubject = subject
    }
    $scope.clickDate = function (date) {
        // date = {
        //     lesson: 'К этому уроку Вам нужно было написать непонятные иероглифы, а сделали ничерта.' + 
        //     'Но вы держитесь там. ВСе доброго и здоровья.',
        //     lessonTag: '#Course15_12_16@M3238', 
        //     lastModified: 'Ivan Trofimov'
        // }
        $scope.incLevel();
        $scope.currentDate = date
    }

});