requirejs.config({
    paths: {
        "angular": '/lib/angularjs/angular',
        "angular-route": "/lib/angular-route/angular-route",
        "angularAMD": "/lib/angularAMD/angularAMD"
    },
    shim: {
        'angularAMD': ['angular'],
        'ngload': ['angularAMD']
    },
    deps: ['app']
});