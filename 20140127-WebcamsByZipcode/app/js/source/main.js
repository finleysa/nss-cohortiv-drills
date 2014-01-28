(function(){

  'use strict';

  $(document).ready(init);


  function init(){
    $('#addzip').click(addZip);
    $('#getcams').click(showCameras);
    $('#clear').click(clear);
  }

  function clear(){
    $('#container').empty();
  }

  function addZip(){
    var textZip = $('#textbox').val();
    var $option = $('<option>');
    $option.val(textZip);
    $option.text(textZip);
    $('#zipcodes').append($option);
  }

  function showCameras(){
    var zip = $('#zipcodes').val();
    $.getJSON('http://api.wunderground.com/api/308b7b9ab10ef4d2/webcams/q/'+zip+'.json?callback=?', displayImages);
  }
  function makeSpace(){
    var $space = $('<div>');
    $space.addClass('extend');
    $('#container').append($space);
  }
  function displayImages(data){
    var count = 0;
    var i = 0;
    var j = 0;
    console.log(data);
    var images = data.webcams;
    for(var p=0; p<images.length; p++) {
      count = 0;
      if(count < 5){
        for(; j<images.length; j++){
          var $label = $('<label>');
          $label.addClass('label');
          if(images[j].neighborhood.length > 1){
            $label.text(j+1 +': '+images[j].neighborhood);
          }else{
            $label.text(j+1+': No information provided');
          }
          $('#container').append($label);
          makeSpace();
          count++;
          if(count === 5){
            break;
          }
        }
      }
      if(count >= 5){
        for(; i<images.length; i++){
          var $div = $('<div>');
          $div.addClass('box');
          console.log('url('+images[i].WIDGETCURRENTIMAGEURL+')');
          $div.css('background-image', 'url('+images[i].WIDGETCURRENTIMAGEURL+')');
          $('#container').append($div);
          makeSpace();
          count++;
          if(count === 10){
            break;
          }
        }
      }
      count =0;
    }
  }
})();
