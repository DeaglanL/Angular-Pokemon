"use strict";

(function () {

    angular.module('pidgeotto').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/pokeSearch");

        $stateProvider.state("pokeSearch", {
            url: "/pokeSearch",
            templateUrl: "app/features/pokeSearch/pokeSearch.html"
        }).state("pokeBox", {
            url: "/pokeBox",
            templateUrl: "app/features/pokeBox/pokeBox.html"
        }).state("pokeBattle", {
            url: "/pokeBattle",
            templateUrl: "app/features/pokeBattle/pokeBattle.html"
        })
    });
}());