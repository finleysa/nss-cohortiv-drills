(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#start').click(reset);
    $('.shell').click(playGame);
  }

  function reset(){
    $('#shellA').css('background-color', 'black');
    $('#shellB').css('background-color', 'black');
    $('#shellC').css('background-color', 'black');
    $('#box').empty();
  }
  
  var correct=1;
  var incorrect=1;
  function playGame() {
    var random = Math.random() * 3;
    var $answer ='';
    
    if (random <=1){
      $answer = $('#shellA');
    }
    else if (random > 1 && random <= 2){
      $answer = $('#shellB');
    }
    else if (random > 2){
      $answer = $('#shellC');
    }
    $answer.css('background-color', 'green');
   
    if($(this).text() !== $answer.text()){
      $('#box').text('Wrong ansa sucka!');
      $('#numwrong').text(incorrect++ +' incorrect');
    }
    else{
      $('#box').text('You did it!');
      $('#numcorrect').text(correct++ +' correct');
    }
  }
})();

