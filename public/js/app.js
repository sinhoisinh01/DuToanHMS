angular.module('DuToan2', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("");
        $stateProvider
            .state('about', {
                url: '/',
                views: {
                    'header': {
                        templateUrl : 'views/aboutMenu.html'
                    },
                    'content': {
                        templateUrl : 'views/about.html'
                    },
                    'sideBar': {
                        templateUrl : ''
                    }
                }
            })
            .state('home', {
                url: '/home',
                views: {
                    'header': {
                        templateUrl : 'views/homeMenu.html',
                        controller  : 'HomeMenuController'
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                        controller  : 'HomeController'
                    },
                    'sideBar': {
                        templateUrl : ''
                    }
                }
            })
            .state('construction', {
                url: '/construction/:id',
                views: {
                    'header': {
                        templateUrl : 'views/constructionMenu.html',
                        controller  : 'ConstructionMenuController'
                    },
                    'content': {
                        templateUrl : 'views/table.html',
                        controller  : 'TableController'
                    },
                    'sideBar': {
                        templateUrl : 'views/categories.html',
                        controller  : 'CategoriesController'
                    }
                }
            })
    });