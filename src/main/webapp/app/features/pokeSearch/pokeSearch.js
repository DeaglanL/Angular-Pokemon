(function() {

    var pokeSearch =  function(apiGet)
    {
        var  vm = this;
        vm.searchNotDone = true;


         vm.search = function(term) {
           vm.searchNotDone = false;
           apiGet.getPokemon(term).then(function (result) {
               vm.pokemon = result;

               var rEle = document.getElementById("results");
               var img = new Image;
               img.src = vm.pokemon.sprites.front_default;
               rEle.appendChild(img);



               var text = document.createTextNode(vm.pokemon.name);
               rEle.appendChild(text);




           })
        }
    };
    angular.module('pidgeotto').controller('pokeSearch', ['apiGet', pokeSearch]);
}());