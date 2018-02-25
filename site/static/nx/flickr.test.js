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

  it('returns parsed flickr album object', function(){

    var flickrData = {"photoset":{"id":"72157686321315123","primary":"36694607660","owner":"152071786@N03","ownername":"nicolajadetimson","photo":[{"id":"36694607660","secret":"e3d1f831f9","server":"4375","farm":5,"title":"","isprimary":"1","ispublic":1,"isfriend":0,"isfamily":0,"url_m":"https:\/\/farm5.staticflickr.com\/4375\/36694607660_e3d1f831f9.jpg","height_m":"500","width_m":"387","url_o":"https:\/\/farm5.staticflickr.com\/4375\/36694607660_fa924baa54_o.jpg","height_o":"3701","width_o":"2865"},{"id":"36920345302","secret":"2a584d3c22","server":"4434","farm":5,"title":"","isprimary":"0","ispublic":1,"isfriend":0,"isfamily":0,"url_m":"https:\/\/farm5.staticflickr.com\/4434\/36920345302_2a584d3c22.jpg","height_m":"455","width_m":"500","url_o":"https:\/\/farm5.staticflickr.com\/4434\/36920345302_e5f11135bf_o.jpg","height_o":"2974","width_o":"3272"},{"id":"36695091770","secret":"919d940901","server":"4374","farm":5,"title":"","isprimary":"0","ispublic":1,"isfriend":0,"isfamily":0,"url_m":"https:\/\/farm5.staticflickr.com\/4374\/36695091770_919d940901.jpg","height_m":"310","width_m":"500","url_o":"https:\/\/farm5.staticflickr.com\/4374\/36695091770_43450af389_o.jpg","height_o":"2469","width_o":"3981"}],"page":1,"per_page":500,"perpage":500,"pages":1,"total":"3","title":"Classroom Displays"},"stat":"ok"};

    var actual = _flickrApiService.parseFlickrResponse(flickrData);
    var expected = [{ title: '', thumbnailsrc: 'https://farm5.staticflickr.com/4375/36694607660_e3d1f831f9.jpg', imgsrc: 'https://farm5.staticflickr.com/4375/36694607660_fa924baa54_o.jpg' },
                    { title: '', thumbnailsrc: 'https://farm5.staticflickr.com/4434/36920345302_2a584d3c22.jpg', imgsrc: 'https://farm5.staticflickr.com/4434/36920345302_e5f11135bf_o.jpg' },
                    { title: '', thumbnailsrc: 'https://farm5.staticflickr.com/4374/36695091770_919d940901.jpg', imgsrc: 'https://farm5.staticflickr.com/4374/36695091770_43450af389_o.jpg' }];

    expect(expected).toEqual(actual);

  });

});
