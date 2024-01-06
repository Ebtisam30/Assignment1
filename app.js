(function() {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.CheckIfTooMuch = function() {
            if (!$scope.lunchItems || $scope.lunchItems.trim() === "") {
                $scope.myObj = { 'message': 'Please enter data first', 'color': 'red' };
                return;
            }
            
            var items = $scope.lunchItems.split(',');
            
            if (items.length <= 3) {
                $scope.myObj = { 'message': 'Enjoy!', 'color': 'green' };
            } else {
                $scope.myObj = { 'message': 'Too much!', 'color': 'green' };
            }
        };
    }
})();
