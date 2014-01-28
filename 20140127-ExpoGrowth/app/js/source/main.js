(function(){
  
  'use strict';
  
  $(document).ready(init);

  var timer;
  var currentNum = 1;
  var i = 0;
  function init(){
    $('#start').click(start);
    $('#stop').click(stop);
  }

  function start(){
    i=0;
    clearInterval(timer);
    $('#container').empty();
    timer = setInterval(multiply, $('#interval').val() * 1000);
  }
  
  function stop(){
    clearInterval(timer);
  }

  function multiply(){
    var $div = $('<div>');
    $div.addClass('box');
    currentNum *= $('#textbox').val();
    $div.text($('#textbox').val()+'E'+i+' = '+currentNum);
    $('#container').prepend($div);
    i++;
  }
})();
