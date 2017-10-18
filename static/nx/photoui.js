(function(){

  angular.module('photoUI', [])
    .factory('photoUIService', function(){

      var parsePhotoDataToHTML = function(photoData){

        var div = document.createElement('div');

        for(let i = 0; i < photoData.length; i++){
          var photo = photoData[i];

          if (photo.thumbnailsrc && photo.imgsrc){

            var img = document.createElement('img');
            img.setAttribute('alt', photo.title || '');
            img.setAttribute('src', photo.thumbnailsrc);
            img.setAttribute('data-image', photo.imgsrc);
            img.setAttribute('data-description', photo.title || '');

            div.appendChild(img);

          }
        }

        return div;
      };

      return {
        parsePhotoDataToHTML: parsePhotoDataToHTML
      };
    });

})();
