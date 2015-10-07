// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);


// Configuración de las rutas
angularRoutingApp.config(function ($routeProvider) {

    $routeProvider
            .when('/home', {
                templateUrl: 'pages/main.html',
                controller: 'mainController'
            })
            .when('/notify', {
                templateUrl: 'pages/notify.html',
                controller: 'notifyController'
            })
            .when('/popular', {
                templateUrl: 'pages/popular.html',
                controller: 'popularController'
            })
            .when('/profile', {
                templateUrl: 'pages/profile.html',
                controller: 'profileController'
            })
            .otherwise({
                redirectTo: '/home'
            });
});

angularRoutingApp.service("Template", function () {
    return {};
});

angularRoutingApp.controller('mainController', function ($scope, Template) {
    //<editor-fold defaultstate="collapsed" desc="Template">
    $scope.template = Template;
    $scope.template.title = "Principal";
    $scope.template.main = "selected";
    $scope.template.notify = "";
    $scope.template.popular = "";
    $scope.template.profile = "";
    //</editor-fold>

    $scope.menuStatus = "ng-hide";

    $scope.toggleMenu = function (value) {
        if (!value) {
            if ($scope.menuStatus === "ng-hide") {
                $scope.menuStatus = "ng-show";
            } else {
                $scope.menuStatus = "ng-hide";
            }
        } else {
            $scope.menuStatus = value;
        }
    };
});

angularRoutingApp.controller('notifyController', function ($scope, Template) {
    //<editor-fold defaultstate="collapsed" desc="Template">
    $scope.template = Template;
    $scope.template.title = "Notificaciones";
    $scope.template.main = "";
    $scope.template.notify = "selected";
    $scope.template.popular = "";
    $scope.template.profile = "";
    //</editor-fold>
});

angularRoutingApp.controller('popularController', function ($scope, Template) {
    //<editor-fold defaultstate="collapsed" desc="Template">
    $scope.template = Template;
    $scope.template.title = "Populares";
    $scope.template.main = "";
    $scope.template.notify = "";
    $scope.template.popular = "selected";
    $scope.template.profile = "";
    //</editor-fold>
});

angularRoutingApp.controller('profileController', function ($scope, Template) {
    //<editor-fold defaultstate="collapsed" desc="Template">
    $scope.template = Template;
    $scope.template.title = "Perfil";
    $scope.template.main = "";
    $scope.template.notify = "";
    $scope.template.popular = "";
    $scope.template.profile = "selected";
    //</editor-fold>
});