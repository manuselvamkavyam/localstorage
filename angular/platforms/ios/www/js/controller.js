var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('toDoCtrl', ['$scope', '$http',
  function ($scope, $http){
  $scope.name = 'World';
  $scope.todoCount=4;
  $scope.empty="false";
  $scope.todos=[{text:"first",status:"false"},{text:"second",status:"false"}];
  $scope.todoCount=
  $scope.greet = function() {
    ($window.mockWindow || $window).alert('Hello ' + $scope.name);
  }
  $scope.getTotalTodos=function () {
  return $scope.todos.length;
  }
  $scope.AddTodo=function (){
	alert($scope.formTodoText);
	if($scope.formTodoText == "undefined" || $scope.formTodoText == "")
		{
			$scope.empty="true";
			return false;
		} else {
			$scope.todos.push({text:$scope.formTodoText,status:"false"})
			$scope.formTodoText="";
			$scope.empty="false";
		}
  }
}]);

phonecatControllers.controller('contactCtrl', ['$scope', '$http',
  function ($scope, $http){
  $scope.name = 'World';
  $scope.todoCount=4;
  $scope.empty="false";
  $scope.todos=[{text:"first",status:"false"},{text:"second",status:"false"}];
  $scope.todoCount=
  $scope.greet = function() {
    ($window.mockWindow || $window).alert('Hello ' + $scope.name);
  }
  $scope.getTotalTodos=function () {
  return $scope.todos.length;
  }
  $scope.AddTodo=function (){
  alert($scope.formTodoText);
  if($scope.formTodoText == "undefined" || $scope.formTodoText == "")
    {
      $scope.empty="true";
      return false;
    } else {
      $scope.todos.push({text:$scope.formTodoText,status:"false"})
      $scope.formTodoText="";
      $scope.empty="false";
    }
  }
}]);

phonecatControllers.controller('loginCtrl', ['$scope', '$http','$location',
  function ($scope, $http,$location){
  $scope.name = 'World';
  $scope.todoCount=4;
  $scope.empty="false";
  $scope.todos=[{text:"first",status:"false"},{text:"second",status:"false"}];
  $scope.todoCount=
  $scope.greet = function() {
    ($window.mockWindow || $window).alert('Hello ' + $scope.name);
  }
  $scope.getTotalTodos=function () {
  return $scope.todos.length;
  }
  $scope.login=function (){
  //if($scope.lanId == "undefined" || $scope.lanId == "")
  $location.path('/contact');
  
  }
}]);