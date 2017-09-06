"use strict";

(function () {

    angular.module("pidgeotto").service("pokeDal", ["dal", pokeDal]);

    function pokeDal (dal) {

        this.getPokemon = function (term) {
            return dal.http.GET("http://pokeapi.co/api/v2/pokemon/" + term);
        };
    }
}());
