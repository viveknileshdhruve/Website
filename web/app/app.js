/* global angular */

'use strict';
var lams = angular.module('lams',
        [
            'ui.router'
        ]);

lams.config(["$stateProvider", "$controllerProvider", "$urlRouterProvider", "$locationProvider", function ($stateProvider, $controllerProvider, $urlRouterProvider, $locationProvider) {

        angular.module("lams").controller = $controllerProvider.register;

        // Dont Remove
        $locationProvider.hashPrefix('');
        $urlRouterProvider.otherwise('home');

        $stateProvider.state('menu', {
            url: '/',
            templateUrl: 'app/pages/menu.html'
        }).state('menu.home', {
            url: 'home',
            templateUrl: 'app/pages/home.html'
        }).state('menu.page1', {
            url: 'HomeLoan',
            templateUrl: 'app/pages/page1.html'
        }).state('menu.carloan', {
            url: 'CarLoan',
            templateUrl: 'app/pages/carloan.html'
        }).state('menu.loanagaistproperty', {
            url: 'LoanAgainstProperty',
            templateUrl: 'app/pages/loanagaistproperty.html'
        }).state('menu.educationloan', {
            url: 'EducationLoan',
            templateUrl: 'app/pages/educationloan.html'
        }).state('menu.personalloan', {
            url: 'PersonalLoan',
            templateUrl: 'app/pages/personalloan.html'
        }).state('menu.partnerspage', {
            url: 'partnerspage',
            templateUrl: 'app/pages/partners.html'
        }).state('menu.aboutus', {
            url: 'aboutus',
            templateUrl: 'app/pages/aboutus.html'
        }).state('menu.faq', {
            url: 'faq',
            templateUrl: 'app/pages/faq.html',
            controller: 'faqcontroller'
        }).state('menu.contactus', {
            url: 'contactus',
            templateUrl: 'app/pages/contactus.html'
        });
    }]);

angular.module('lams').run(function ($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function () {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
});