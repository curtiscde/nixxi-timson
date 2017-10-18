(function(){

  angular.module('photoUI', [])
    .factory('photoUIService', function(){

      var parsePhotoDataToHTML = function(photoData){

        var div = document.createElement('div');



        return div;
      };

      return {
        parsePhotoDataToHTML: parsePhotoDataToHTML
      };
    });

})();
