(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#makeBoxes').click(inception);
  }

  function inception() {
    var textbox = $('#textbox').val();
    var box = $('<div>');
    box.addClass('box');
    var numDivs = [];
    numDivs[0] = box;
    $('#boxes').append(numDivs[0]);
    for(var i=0; i<textbox; i++){
      console.log(i);
      numDivs[i] = box;
      console.log(numDivs[i]);
      $('#boxes > div').wrap(numDivs[i]);
    }
  }
})();

