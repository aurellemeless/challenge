// initialize angular chalenge module
angular.module("challenge", ["ngResource"]);

angular.module('challenge')
    .controller('ChallengeController',function($scope, $filter){
        // var database = [];
        
        $scope.user = {};
        $scope.onlyMinor = false;
        $scope.userList = [];
        $scope.save = function(){
            var newUser = $scope.user;
            $scope.userList.push({
                firstname : newUser.firstname,
                lastname : newUser.lastname,
                age : newUser.age,
                sexe : newUser.sexe,
                city : newUser.city,
                country : newUser.country
            });
               $scope.user.firstname='';
                $scope.user.lastname='';
                $scope.user.age=0;
               $scope.user.sexe='male';
                $scope.user.city='Abidjan';
                $scope.user.country='Belgium';
        };


    });
