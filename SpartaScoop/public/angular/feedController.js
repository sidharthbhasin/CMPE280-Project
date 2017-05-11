/**
 * Created by amitpandey on 5/10/17.
 */
var myApp=angular.module("myApp", [])
myApp.controller("FeedAppCtrl", function($scope,$http,$window) {


    $http({
        method: "GET",
        url: '/v1/jobs',
        data: {}
    }).success(function (data) {
        $scope.post = data;



    }).error(function (error) {
        console.log("inside error");
        console.log(error);
        $scope.unexpected_error = false;
        $scope.invalid_login = true;
        // $window.alert("unexpected_error");
    });


    $scope.jobPost =function () {

        var postedby="590f5eb7ec96bf2b5cdd3421";
        var postedbydetails = {
            "_id": "590f5eb7ec96bf2b5cdd3421",
            "username": sessionStorage.getItem('username'),
            "user_emailid": sessionStorage.getItem('email'),
            "user_password": "xxxxxxxxxx",
            "user_profilepicture_url": sessionStorage.getItem('imageSrc'),
            "user_degree": "masters",
            "user_major": "IE",
        };


        $http({
            method : "POST",
            url : '/v1/jobs',
            data : {
                type:$scope.type,
                title:$scope.title,
                description:$scope.description,
                location:$scope.location,
                email:$scope.email,
                url:$scope.url,
                dateposted:$scope.dateposted,
                department:$scope.department,
                payrate:$scope.payrate,
                postedby: postedby,
                postedbydetails:postedbydetails


            }
        }).success(function(data) {
            window.location.assign("/profilefeed");

        }).error(function(error) {
            console.log("inside error");
            console.log(error);
            $scope.unexpected_error = false;
            $scope.invalid_login = true;
            // $window.alert("unexpected_error");
        });

    }


    $scope.logout=function() {
        sessionStorage.clear("username");
        sessionStorage.clear("email");
        sessionStorage.clear("password");
        window.location.assign("/index");
    }

});