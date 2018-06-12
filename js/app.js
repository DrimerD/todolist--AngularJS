var taskManagerApp = angular.module('taskManagerApp', []);

taskManagerApp.controller('TaskManagerController', function ($scope) {

    $scope.position = true;
    $scope.authorName = 'Author list';
    $scope.allTasks =
        [{
            'task': 'hello',
            'check': true
        },
        {
            'task' : 'hefdsfdllo',
            'check' : false
        },
        {
            'task' : 'hefdsfsdfsdllo',
            'check' : true
        }];

    $scope.showInputUserName = function () {
        $scope.bounceInUp = true;
        $scope.bounceOutDown = false;
        $scope.position = false;
    };
    
    $scope.addUserName = function (userName) {
        $scope.bounceOutDown = true;
        $scope.bounceInUp = false;

        $scope.authorName = userName;
    };

    $scope.closeInputUserName = function () {
        $scope.bounceOutDown = true;
        $scope.bounceInUp = false;
    };

    $scope.addNewTask = function () {
        if ($scope.newTask.length > 0 && $scope.newTask != '') {
            $scope.allTasks.push({
                'task' : $scope.newTask,
                'check': false
            });

            $scope.newTask ='';
        }
    };

    $scope.removeTask = function (task) {
        $scope.allTasks.splice($scope.allTasks.indexOf(task), 1);
    };
})
    .directive('ngEnter', function() {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.ngEnter);
                    });
                    event.preventDefault();
                }
            });
        };
    })
    .directive('ngEscape', function() {
        return function(scope, element, attrs) {
            element.bind("keypress keydown", function(event) {
                if (event.which === 27) {
                    scope.$apply(function () {
                        scope.$eval(attrs.ngEnter);
                    });
                    event.preventDefault();
                }
            });
        };
    });

