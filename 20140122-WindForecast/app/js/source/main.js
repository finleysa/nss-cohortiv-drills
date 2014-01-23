/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#get-weather').click(getWeather);
  }

  function getWeather(){
    var url = 'http://api.wunderground.com/api/308b7b9ab10ef4d2/conditions/q/TN/Nashville.json?callback=?';
    $.getJSON(url, recieve);
  }

  function recieve(data){
    var windDescription = $('<div>');
    var windDirection = $('<div>');
    var degrees = $('<div>');
    var speed = $('<div>');
    var gust = $('<div>');
    
    windDescription.text(data.current_observation.wind_string);
    windDirection.text(data.current_observation.wind_dir);
    degrees.text(data.current_observation.temp_f);
    speed.text(data.current_observation.wind_mph);
    gust.text(data.current_observation.wind_gust_mph);

    $('#container').append(windDescription);
    $('#container').append(windDirection);
    $('#container').append(degrees);
    $('#container').append(speed);
    $('#container').append(gust);

  }

})();
