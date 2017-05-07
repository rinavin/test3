/**
 *
 * Responsive website using AngularJS
 * http://www.script-tutorials.com/responsive-website-using-angularjs/
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Script Tutorials
 * http://www.script-tutorials.com/
 */

'use strict';

// optional controllers
function HomeCtrl($scope, $http)
{
  
}

function ProjectCtrl($scope, $http) {
 
}

function PrivacyCtrl($scope, $http, $timeout) {
    
}

function AboutCtrl($scope, $http, $timeout) {
   
}

function RinaCtrl($scope, $http, $timeout) {
    $scope.rina = 5;
    //$http.get("data.json")
    //.then(function (response) {
    //    $scope.names = response.data.employees;
    //});

    $http({
        method: "GET",
        url: "data.json"
    }).then(function mySucces(response) {
        $scope.myData = response.data;
    }, function myError(response) {
        $scope.myData = response.statusText;
    });

    var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

    var obj = JSON.parse(text);
    $scope.jsonTbl = obj.employees;
    //$scope.usersTable = new ngTableParams({
    //    page: 1,
    //    count: 10
    //}, {
    //    total: $scope.jsonTbl.length,
    //    getData: function ($defer, params) {
    //       // $scope.data = $scope.users.slice((params.page() - 1) * params.count(), params.page() * params.count());
    //        $defer.resolve($scope.data);
    //    }
    //});
    


}