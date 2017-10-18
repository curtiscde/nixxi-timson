describe('service: photoUI', function(){

  var _photoUIService;

  beforeEach(module('photoUI'));

  beforeEach(inject(function(photoUIService) {
    _photoUIService = photoUIService;
  }));

  it('binds photo data from JSON to HTML', function(){

    var input = [{ title: 'a', thumbnailsrc: 'https://farm5.staticflickr.com/4375/36694607660_e3d1f831f9.jpg', imgsrc: 'https://farm5.staticflickr.com/4375/36694607660_fa924baa54_o.jpg' },
                  { title: 'b', thumbnailsrc: 'https://farm5.staticflickr.com/4434/36920345302_2a584d3c22.jpg', imgsrc: 'https://farm5.staticflickr.com/4434/36920345302_e5f11135bf_o.jpg' },
                  { title: 'c', thumbnailsrc: 'https://farm5.staticflickr.com/4374/36695091770_919d940901.jpg', imgsrc: 'https://farm5.staticflickr.com/4374/36695091770_43450af389_o.jpg' }];

    var expected =  '<div>'
                    + '<img alt="a" src="https://farm5.staticflickr.com/4375/36694607660_e3d1f831f9.jpg" data-image="https://farm5.staticflickr.com/4375/36694607660_fa924baa54_o.jpg" data-description="a" />'
                    + '<img alt="b" src="https://farm5.staticflickr.com/4434/36920345302_2a584d3c22.jpg" data-image="https://farm5.staticflickr.com/4434/36920345302_e5f11135bf_o.jpg" data-description="b" />'
                    + '<img alt="c" src="https://farm5.staticflickr.com/4374/36695091770_919d940901.jpg" data-image="https://farm5.staticflickr.com/4374/36695091770_43450af389_o.jpg" data-description="c" />'
                    + '</div>';

    var actual = _photoUIService.parsePhotoDataToHTML(input).outerHTML;

    expect(expected).toEqual(actual);

  });

});
