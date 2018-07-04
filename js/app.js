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
    $scope.statusCorrectTask = false;

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
        if ($scope.newTask) {
            $scope.allTasks.push({
                'task' : $scope.newTask,
                'check': false
            });

            $scope.newTask ='';
        }
    };

    $scope.updateTask = function (event) {
        $scope.current_image = event.currentTarget;
        $scope.current_element = event.currentTarget.nextSibling.nextSibling.firstChild;
        $scope.parent_id = $scope.current_element.parentElement.parentElement.dataset.id;
        $scope.current_element.disabled = false;

        if(!$scope.statusCorrectTask) {
            $scope.current_element.select();
            $scope.current_element.style.borderBottom = '1px solid black';
            $scope.current_image.src = "images/check-correct.png";
            $scope.statusCorrectTask = true;
        } else {
            $scope.allTasks[$scope.parent_id].task = $scope.current_element.value;
            $scope.current_element.style.borderBottom = 'none';
            $scope.statusCorrectTask = false;
            $scope.current_image.src = "images/update-logo.png";
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

