(function() {

    var apiGet =  function(pokeDal) {

        this.getPokemon = function (term)
        {
            return pokeDal.getPokemon(term);
        };
    };

    angular.module('pidgeotto').service('apiGet', ['pokeDal',apiGet]);
}());
