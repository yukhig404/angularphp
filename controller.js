var app = angular.module('app', ['ngResource']);

app.controller('MainCtrl', function($scope, $resource) {
  var Student = $resource('students.php', {}, {
    'update': {method: 'PUT'}
  });
  $scope.students = Student.query();
  $scope.add = function() {
    $scope.students.push(Student.save());
  };
});

app.controller('DetailCtrl', function($scope) {
  $scope.update = function() {
    $scope.student.$update();
    alert("更新しました。");
  };
  $scope.delete = function(index) {
    $scope.student.$delete($scope.student);
    $scope.students.splice(index, 1);
    alert("削除しました。");
  };
});