(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#makelist').click(makeList);
  }

  function makeList() {
    var textbox = $('#textbox').val();
    textbox = parseInt(textbox);

    for (var i=0; i < textbox; i++){
      if (i % 2 === 0){
        var $box = $('<li>').text(i);
        $box.addClass('box');
        $('#container').append($box);
      }
      else{
        $box = $('<li>').text(i);
        $box.addClass('box2');
        $('#container').append($box);
      }
    }
  }
})();

