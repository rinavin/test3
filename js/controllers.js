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
    //$http.get("customers.php")
    //.then(function (response) {$scope.names = response.data.records;});
    var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

    var obj = JSON.parse(text);
    $scope.jsonTbl = obj.employees;
    


}