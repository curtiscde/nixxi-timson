(function(){

  angular.module('nx', ['flickrApi'])
    .controller('mainController', function(){



    })
    .directive('flickrlist', function(flickrApiService){
      return {
        scope: {
          flickrid: '@flickrid'
        },
        link: function(scope, element, attrs){

          var flickr = {
             API_KEY: '264fbe68492fe1c3e4e1696f67112bfa',
             USER_ID: '152071786@N03'
           };

           var url = flickrApiService.getFlickrApiUrl(flickr.API_KEY, scope.flickrid, flickr.USER_ID);

           flickrApiService.getFlickrAlbumData(url).then(function(flickrResponse){
             console.log(flickrApiService.parseFlickrResponse(flickrResponse.data));
           });

        }
      }
    });

})();
