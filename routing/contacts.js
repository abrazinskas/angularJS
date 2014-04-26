angular
    .module('contacts', ['ngRoute'])
    .config(function ($routeProvider) {
        // Config the routes
        $routeProvider
            .when('/contact/:index', {
                // Edit contact
                templateUrl: 'edit.html',
                controller: 'edit'
            })
            .when('/add', {
                // Add new contacts
                controller: 'add',
                templateUrl: 'edit.html'
            })
            .when('/delete/:index', {
                controller: 'delete',
                templateUrl: 'edit.html'
            })
            .when('/', {
                // List all contacts
                templateUrl: 'list.html'
            });

    })
    .controller('contacts', function ($scope) {
        // Contacts is the parent controller, so
        // $scope.contacts is available in all children
        $scope.contacts = [
            {name: "Tom", number: '21598050'},
            {name: "Jim", number: '21598050'},
            {name: "Harry", number: '21598050'}
        ];
    })
    .controller('edit', function ($scope, $routeParams) {
        // Load in a contact from the route (/ contact/:index)
        $scope.contact = $scope.contacts[$routeParams.index];
        $scope.index = $routeParams.index;

    })
    .controller('add', function ($scope, $routeParams) {


        var length = $scope.contacts.push({
            name: 'New contact',
            number: ''
        });
        $scope.contact = $scope.contacts[length - 1];
        $scope.index = length - 1;

    })
    .controller('delete', function ($scope, $routeParams,$location) {

        $scope.contacts.splice($routeParams.index,1);
        $location.path('/').replace();

    });
