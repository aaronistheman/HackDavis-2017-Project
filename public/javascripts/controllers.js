var app = angular.module('hackathon', []);



var LocalStorageTokenName = 'rate-token';
app.factory('auth', [
'$http',
'$window',
function($http, $window) {
    var auth = {};

  auth.saveToken = function(token){
    $window.localStorage[LocalStorageTokenName] = token;
  };

  auth.getToken = function(){
    return $window.localStorage[LocalStorageTokenName];
  };

  // Returns true if the user is logged in
  auth.isLoggedIn = function(){
    var token = auth.getToken();

    if(token){
      var payload = JSON.parse($window.atob(token.split('.')[1]));

      // check if the payload expired
      return payload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  };

  // Returns username of the user that's logged in
  auth.currentUser = function(){
    if(auth.isLoggedIn()){
      var token = auth.getToken();
      var payload = JSON.parse($window.atob(token.split('.')[1]));

      return payload.username;
    }
  };

  auth.register = function(user){
    return $http.post('/register', user).success(function(data){
      auth.saveToken(data.token);
    });
  }

  auth.logIn = function(user){
    return $http.post('/login', user).success(function(data){
      auth.saveToken(data.token);
    });
  };

  auth.logOut = function(){
    $window.localStorage.removeItem(LocalStorageTokenName);
  };

  return auth;
}]); // auth factory



app.controller('AuthCtrl', [
'$scope',
'auth',
function($scope, auth){
  $scope.user = {};

  $scope.register = function(){
    auth.register($scope.user).error(function(error){
      $scope.error = error;
    }).then(function(){
      // $state.go('home');
    });
  };

  $scope.logIn = function(){
    auth.logIn($scope.user).error(function(error){
      $scope.error = error;
    }).then(function(){
      // $state.go('home');
    })
  };
}]); // AuthCtrl controller


// app.controller('RegisterCtrl', [
// '$scope', '$state',
// function($scope, $state) {

// }]); // RegisterCtrl