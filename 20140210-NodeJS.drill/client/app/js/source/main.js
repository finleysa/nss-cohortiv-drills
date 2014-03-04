(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#getQuote').click(getQuote);

  }

  function getQuote(){
    var quote = $('#symbol').val();
    var url = window.location.origin.replace(/\d{4}/, 4000);
    url += '/quote/?symbol='+quote+'&callback=?';
    $.getJSON(url, function(data){
      console.log(data);
    });
  }

})();

