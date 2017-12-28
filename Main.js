

var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "Tab1.html"
        })
        .when("/Tab2", {
            templateUrl : "Tab2.html"
        })
        .when("/Tab3", {
            templateUrl : "Tab3.html"
        })

});

app.controller("myCtrl1",function ($scope) {
    $scope.list=[{value:'Photo1.jpg', type:'Photos'},{value:'Photo2.jpg', type:'Photos'}, {value:'Video1.mp4', type:'Video'},{value:'Video2.mp4', type:'Video'},{value:'Text1.txt', type:'Text'},{value:'Text2.txt', type:'Text'}];
    $scope.Filter=function (data) {
        if($scope.input1.type === 'Show All'){
            return true;
        }
        else if(data.type === $scope.input1.type){
            return true;
        }
        else
            false;
    }
});

app.controller('myCtrl2',function ($scope) {
    $scope.list2=['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg'];
    $scope.fun= function () {
        $scope.imgSrc=this.x;
    }
});

app.controller('myCtrl3',function ($scope) {
    $scope.list3=['Item1','Item2','Item3','Item4','Item5'];
    $scope.Add=function () {
        var string= $scope.addItem;
        $scope.list3.unshift(string);
        $scope.list3.pop();
        $scope.addItem="";
    }
});