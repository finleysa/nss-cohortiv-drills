(function(){
  'use strict';

  $(document).ready(initialize);
  function initialize(){
    $('#add-option').click(addColor);
    $('#list').change(changeColor);
  }

  function addColor(){
    var $option = $('<option>');
    var boxColor = $('#textbox').val();
    var $list = $('#list');

    $option.val(boxColor.toLowerCase());
    $option.text(boxColor.toUpperCase());
    $list.append($option);
  }

  function changeColor(){
    var paintBox = $('#paint');
    var $list = $('#list');
    paintBox.css('background-color', $list.val() );
  }

})();

