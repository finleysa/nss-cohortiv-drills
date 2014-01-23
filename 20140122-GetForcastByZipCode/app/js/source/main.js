/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#addZip').click(addZip);
    $('#getWeather').click(getWeather);
  }

  function addZip(){
    var zipCode = $('#textbox').val();
    console.log(zipCode);
    var $option = $('<option>');
    $option.val(zipCode);
    $option.text(zipCode);
    $('#list').append($option);
  }
  
  function getWeather(){
    var zip = $('#list').val();
    $.getJSON('http://api.wunderground.com/api/308b7b9ab10ef4d2/forecast/settings/q/'+zip+'.json?callback=?', recieve);
  }

  function recieve(data){
    console.log(data);
  }
})();
