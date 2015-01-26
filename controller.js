var app = angular.module('app', ['ngResource']);

app.controller('MainCtrl', function($scope, $resource) {
  var Student = $resource('students.php', {page:'@page', size:'@size', sort:'@sort'}, {
    'update': {method: 'PUT'},
    'query2': {method: 'GET'},
    'save': {
      method: 'POST',
      params : {
        pass : '@pass',
      },
  },
  });
  $scope.students = Student.query({
              // page : $scope.page,
              // size : $scope.size,
              // sort : $scope.key + ',' + $scope.order,
            });
 $scope.add = function() {

    var postData = {
      pass : 'hgoehogehgoe'
    };

    $scope.students.push(Student.save(
      {},
      postData,
      function(data) {console.log(data);}));
  };

   $scope.add = function() {

    var postData = {
      pass : 'hgoehogehgoe'
    };

    $scope.students.push(Student.save(
      {},
      postData,
      function(data) {console.log(data);}));
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