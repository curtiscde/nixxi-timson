describe('service: flickrApi', function(){

  var _flickrApiService;

  beforeEach(module('flickrApi'));

  beforeEach(inject(function(flickrApiService) {
    _flickrApiService = flickrApiService;
  }));

  it('returns correct flickr Api Url', function(){

    var apiKey = '264fbe68492fe1c3e4e1696f67112bfa';
    var flickrId = '72157686321315123';
    var userId = '152071786@N03';

    var actualUrl = _flickrApiService.getFlickrApiUrl(apiKey, flickrId, userId);
    var expectedUrl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=264fbe68492fe1c3e4e1696f67112bfa&photoset_id=72157686321315123&user_id=152071786@N03&extras=url_m%2C+url_o&format=json&nojsoncallback=1';

    expect(expectedUrl).toBe(actualUrl);

  });

  it('returns flickr album object', function(){

  });

});
