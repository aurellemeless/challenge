
// initialize angular chalenge module
angular.module("challenge", ["ngResource"]);

 if(localStorage.getItem('database')==null){
    localStorage.setItem('database', JSON.stringify([]));
 }

angular.module('challenge')
    .controller('ChallengeController',function($scope, $filter){
        $scope.user = {};
        $scope.onlyMinor = false;
        // get list from database
        $scope.userList = JSON.parse(localStorage.getItem('database'));
        $scope.save = function(){
            var newUser = $scope.user;
            database = [];
            // remake list to avoid ngrepeat index issue
            angular.forEach($scope.userList, function(i){
                database.push({
                    firstname : i.firstname,
                    lastname : i.lastname,
                    age : i.age,
                    sexe : i.sexe,
                    city : i.city,
                    country : i.country
                });
            });
            // add the form data as new user
            database.push({
                firstname : newUser.firstname,
                lastname : newUser.lastname,
                age : newUser.age,
                sexe : newUser.sexe,
                city : newUser.city,
                country : newUser.country
            });
            $scope.userList = database;
            // store in database
            localStorage.setItem('database', JSON.stringify(database));
            // reset the form
               $scope.user.firstname='';
                $scope.user.lastname='';
                $scope.user.age=0;
               $scope.user.sexe='male';
                $scope.user.city='Abidjan';
                $scope.user.country='Belgium';
            
        };


    });
