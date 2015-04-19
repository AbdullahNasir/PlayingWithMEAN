/**
 * Created by Abdullah on 4/19/2015.
 */
app.controller('AccountCtrl',function($scope,$http,$state){

    $scope.signup = function(){
            $http.post('/user/signup',{name:$scope.name,email:$scope.email,password:$scope.password});
    }
    $scope.login = function(){
        $http.post('/user/login',{email:$scope.email,password:$scope.password}).success(function(response){
            if(response.success){
                $state.go('list');
            }else{
                $scope.login = false;
            }
        });
    }
});
