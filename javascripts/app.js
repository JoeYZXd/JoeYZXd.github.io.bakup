define(['angularAMD'], function(angularAMD) {
    var app = angular.module(app_name, ['webapp']);
    return angularAMD.bootstrap(app);
});

define(['app'], function(app) {
    app.controller('HomeCtrl', function($scope){
        $scope.message = "Message from HomeCtrl";
    });
});