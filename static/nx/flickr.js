(function(){

  angular.module('flickrApi', [])
    .factory('flickrApiService', function(){

      var flickr = {
         API_KEY: '264fbe68492fe1c3e4e1696f67112bfa',
         USER_ID: '152071786@N03'
       };

       var getFlickrApiUrl = function(apiKey, flickrId, userId){
         return "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos"
                    + "&api_key=" + apiKey
                    + "&photoset_id=" + flickrId
                    + "&user_id=" + userId
                    + "&extras=url_m%2C+url_o"
                    + "&format=json"
                    + "&nojsoncallback=1";
       };

      return {
        getFlickrApiUrl: getFlickrApiUrl
      };

    });

})();
