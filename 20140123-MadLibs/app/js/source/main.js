/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#makeSquares').click(makeSquares);
    $('.box').on('click', '.box',sendToContainer);
  }

  function makeSquares(){
    var sentence = $('#textbox').val();
    sentence = sentence.split(' ');
    for (var i=0; i<sentence.length; i++){
      console.log(sentence[i]);
      var $div = $('<div>');
      console.log($div);
      $div.text(sentence[i]);
      $div.addClass('box');
      $('#squares').append($div);
    }
  }

  function sendToContainer(){
    alert('hi');
    $('#container p').text(this.text+' ');
    console.log(this.text);
  }
})();
