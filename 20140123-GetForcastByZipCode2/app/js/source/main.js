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
    
    var $thursWeather = $('<h3>');
    var $friWeather = $('<h3>');
    var $satWeather = $('<h3>');
    var $sunWeather = $('<h3>');

    var thurs = data.forecast.simpleforecast.forecastday[0].icon_url;
    var thursCond = data.forecast.simpleforecast.forecastday[0].conditions;
    $thursWeather.text(thursCond);
    $('#thursday h3').append($thursWeather);
    $('#thursday').addClass('image');
    $('#thursday').css('background-image', 'url('+thurs+')');

    var fri = data.forecast.simpleforecast.forecastday[1].icon_url;
    var friCond = data.forecast.simpleforecast.forecastday[1].conditions;
    $friWeather.text(friCond);
    $('#friday h3').append($friWeather);
    $('#friday').addClass('image');
    $('#friday').css('background-image', 'url('+fri+')');

    var sat = data.forecast.simpleforecast.forecastday[2].icon_url;
    var satCond = data.forecast.simpleforecast.forecastday[2].conditions;
    $satWeather.text(satCond);
    $('#saturday h3').append($satWeather);
    $('#saturday').addClass('image');
    $('#saturday').css('background-image', 'url('+sat+')');

    var sun = data.forecast.simpleforecast.forecastday[3].icon_url;
    var sunCond = data.forecast.simpleforecast.forecastday[3].conditions;
    $sunWeather.text(sunCond);
    $('#sunday h3').append($sunWeather);
    $('#sunday').addClass('image');
    $('#sunday').css('background-image', 'url('+sun+')');
  }
})();
