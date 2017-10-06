(function(){

  angular.module('flickrApi', [])
    .factory('flickrApiService', function($http, $q){

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

       var parseFlickrResponse = function(flickrData){

        return flickrData.photoset.photo.map(function(item){
          return {
            title: item.title,
            thumbnailsrc: item.url_m,
            imgsrc:item.url_o
          };
        });

       };

       var getFlickrAlbumData = function(flickrUrl){
         var defer = $q.defer();
         $http.get(flickrUrl)
            .success(function(data){
              defer.resolve(data);
            });
          return defer.promise;
       };

      return {
        getFlickrApiUrl: getFlickrApiUrl,
        parseFlickrResponse: parseFlickrResponse,
        getFlickrAlbumData: getFlickrAlbumData
      };

    });

})();
