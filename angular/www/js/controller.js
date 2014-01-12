var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('toDoCtrl', ['$scope', '$http',
  function ($scope, $http){
  $scope.init = function() {
    document.addEventListener("deviceready", onDeviceReady, false);     
}
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

function onDeviceReady(){
         alert("device readyee");  
        var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
        db.transaction(populateDB, errorCB, successCB);
    }

function populateDB(tx) {
	    tx.executeSql('DROP TABLE IF EXISTS DEMO');
         tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
         tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
         tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');	
	}
  function  errorCB(tx, err){
        alert("Error processing SQL: "+err);
    }

    function successCB(){
        alert("success!");
    }

$scope.init();
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

	$scope.init = function() {
		var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
        	db.transaction(queryDB, errorCB);
	}
  
  function queryDB(tx) {
    tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorDB);
}

// Query the success callback
function querySuccess(tx, results) {
   // this will be empty since no rows were inserted.
        console.log("Insert ID = " + results.insertId);
        // this will be 0 since it is a select statement
        console.log("Rows Affected = " + results.rowAffected);
        // the number of rows returned by the select statement
        console.log("Insert ID = " + results.rows.length);
}


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
$scope.init();
}]);