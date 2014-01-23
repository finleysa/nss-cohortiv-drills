(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#showImage').click(showImage);
  }

  function showImage() {
    var textbox = $('#textbox').val();
    var image = $('<div>');
    image.addClass('box');
    image.css('background-image', 'url('+textbox+')');
    $('#container').append(image);
  }
})();

