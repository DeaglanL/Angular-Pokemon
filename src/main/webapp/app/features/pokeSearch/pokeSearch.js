(function() {

    var pokeSearch =  function(apiGet)
    {
        var  vm = this;
        vm.searchNotDone = true;


         vm.search = function(term) {
           console.log(term);
           vm.searchNotDone = false;
             console.log("before*********");
           apiGet.getPokemon(term).then(function (result) {
               console.log("after*********");
               console.log(term);
               vm.pokemon = result;
               console.log(result);
           })


        }

    };
    angular.module('pidgeotto').controller('pokeSearch', ['apiGet', pokeSearch]);
}());