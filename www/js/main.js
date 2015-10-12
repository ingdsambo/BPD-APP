// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute', 'ngMaterial']);


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
            .when('/servicios/familia', {
                templateUrl: 'pages/family.html',
                controller: 'familyController'
            })
            .otherwise({
                redirectTo: '/home'
            });
});

angularRoutingApp.service("Template", function () {
    return {};
});

angularRoutingApp.controller('mainController', function ($scope, Template, $location) {
    var initialStatus = "ng-hide";

    //<editor-fold defaultstate="collapsed" desc="Template">
    $scope.template = Template;
    $scope.template.title = "Inicio";
    $scope.template.main = "ng-show";
    $scope.template.family = "ng-hide";
    $scope.template.health = "ng-hide";
    $scope.template.house = "ng-hide";
    $scope.template.vehicle = "ng-hide";
    $scope.template.others = "ng-hide";
    $scope.template.menuStatus = initialStatus;
    $scope.template.subMenuSP = initialStatus;
    $scope.template.smFamiliar = initialStatus;
    $scope.template.smSalud = initialStatus;
    $scope.template.smHogar = initialStatus;
    $scope.template.smVehiculo = initialStatus;
    $scope.template.smOtros = initialStatus;
    $scope.template.smAutoGestion = initialStatus;
    $scope.template.finder = initialStatus;
    $scope.template.emergency = initialStatus;
    //</editor-fold>

    $scope.onSwipeLeft = function (ev) {
        alert("algo");
    };

    $scope.toggleMenu = function (value) {
        if (!value) {
            if ($scope.template.menuStatus === "ng-hide") {
                $scope.template.menuStatus = "ng-show";
            } else {
                $scope.template.menuStatus = "ng-hide";
            }
        } else {
            $scope.template.menuStatus = value;
        }
    };

    $scope.activateSubMenu = function (value, module) {
        switch (module) {
            case 'personal':
                if (!value) {
                    if ($scope.template.subMenuSP === "ng-hide") {
                        $scope.template.subMenuSP = "ng-show";
                    } else {
                        $scope.template.subMenuSP = "ng-hide";
                    }
                } else {
                    $scope.template.subMenuSP = value;
                }
                break;

            case 'familiar':
                if (!value) {
                    if ($scope.template.smFamiliar === "ng-hide") {
                        $scope.template.smFamiliar = "ng-show";
                    } else {
                        $scope.template.smFamiliar = "ng-hide";
                    }
                } else {
                    $scope.template.smFamiliar = value;
                }
                break;
            case 'salud':
                if (!value) {
                    if ($scope.template.smSalud === "ng-hide") {
                        $scope.template.smSalud = "ng-show";
                    } else {
                        $scope.template.smSalud = "ng-hide";
                    }
                } else {
                    $scope.template.smSalud = value;
                }
                break;
            case 'hogar':
                if (!value) {
                    if ($scope.template.smHogar === "ng-hide") {
                        $scope.template.smHogar = "ng-show";
                    } else {
                        $scope.template.smHogar = "ng-hide";
                    }
                } else {
                    $scope.template.smHogar = value;
                }
                break;
            case 'vehiculo':
                if (!value) {
                    if ($scope.template.smVehiculo === "ng-hide") {
                        $scope.template.smVehiculo = "ng-show";
                    } else {
                        $scope.template.smVehiculo = "ng-hide";
                    }
                } else {
                    $scope.template.smVehiculo = value;
                }
                break;
            case 'otros':
                if (!value) {
                    if ($scope.template.smOtros === "ng-hide") {
                        $scope.template.smOtros = "ng-show";
                    } else {
                        $scope.template.smOtros = "ng-hide";
                    }
                } else {
                    $scope.template.smOtros = value;
                }
                break;
            case 'autogestion':
                if (!value) {
                    if ($scope.template.smAutoGestion === "ng-hide") {
                        $scope.template.smAutoGestion = "ng-show";
                    } else {
                        $scope.template.smAutoGestion = "ng-hide";
                    }
                } else {
                    $scope.template.smAutoGestion = value;
                }
                break;
        }
    };

    $scope.template.finderStatus = function (value) {
        $scope.template.finder = value;
    };

    $scope.template.emergencyStatus = function (value) {
        $scope.template.emergency = value;
    };

    $scope.template.goTo = function (value) {
        $scope.template.menuStatus = initialStatus;
        $location.url(value);
    };
});

angularRoutingApp.controller('notifyController', function ($scope, Template) {
    //<editor-fold defaultstate="collapsed" desc="Template">
    var initialStatus = 'ng-hide';

    $scope.template = Template;
    $scope.template.title = "Notificaciones";
    $scope.template.main = "ng-show";
    $scope.template.family = initialStatus;
    $scope.template.health = initialStatus;
    $scope.template.house = initialStatus;
    $scope.template.vehicle = initialStatus;
    $scope.template.others = initialStatus;
    $scope.template.menuStatus = initialStatus;
    $scope.template.finder = initialStatus;
    $scope.template.emergency = initialStatus;
    //</editor-fold>
});

angularRoutingApp.controller('familyController', function ($scope, Template) {
    //<editor-fold defaultstate="collapsed" desc="Template">

    var initialStatus = 'ng-hide';

    $scope.template = Template;
    $scope.template.title = "Familia";
    $scope.template.main = initialStatus;
    $scope.template.family = "ng-show";
    $scope.template.health = initialStatus;
    $scope.template.house = initialStatus;
    $scope.template.vehicle = initialStatus;
    $scope.template.others = initialStatus;
    $scope.template.menuStatus = initialStatus;
    $scope.template.finder = initialStatus;
    $scope.template.emergency = initialStatus;
    //</editor-fold>
});