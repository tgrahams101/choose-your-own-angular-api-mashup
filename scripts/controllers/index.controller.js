angular.module('moviemusicApp')
  .controller('IndexController', IndexController);

IndexController.$inject = ['$http'];
function IndexController($http) {
    var vm = this;
    vm.search_input = 'Avatar';



    getSoundtrack();

    ////

    function getSoundtrack() {
      console.log(vm.search_input);
        $http({
            method: 'GET',
            url: 'https://api.spotify.com/v1/search',
            params: {
              q: ( vm.search_input || 'inception') + " Soundtrack",
              limit: 1,
              type: 'album'
            }
        }).then(function successCallback(response) {
            vm.image = response.data.albums.items[0].images[0].url;
            console.log(response);
            console.log(response.data);
            response.data.albums
        }, function errorCallback(response) {
            console.log('There was an error getting the data', response);
        });
    }

  vm.search =  function search() {
      console.log(vm.search_input);
      var searchfield =  vm.search_input.trim();
        $http({
            method: 'GET',
            url: 'https://api.spotify.com/v1/search',
            params: {
              q: ( searchfield || 'inception') + " Soundtrack",
              limit: 1,
              type: 'album'
            }
        }).then(function successCallback(response) {
          console.log(response);
          if  (response.data.albums.items.length == 0){
            vm.image = 'http://www.jordans.com/~/media/jordans%20redesign/no-image-found.ashx?h=275&la=en&w=275&hash=F87BC23F17E37D57E2A0B1CC6E2E3EEE312AAD5B';
            return;
          }
            vm.image = response.data.albums.items[0].images[0].url;
            console.log(response);
            console.log(response.data);
            response.data.albums
        }, function errorCallback(response) {
            console.log('There was an error getting the data', response);
        });
    }

}
