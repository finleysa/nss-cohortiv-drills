(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#button1').click(firstClick);
    $('#container').on('click', 'button', dynamicClick);
  }

  function firstClick(){
    var button2 = '<button id="two" class="buttons">Button Two</button>';
    var button3 = '<button id="three" class="buttons">Button Three</button>';
    $('#container').append(button2, button3);
  }

  function dynamicClick(){
    switch(this.id){
      case 'two':
        $('#one').detach();
        break;
      case 'three':
        $('#two').detach();
        break;
    }
  }

})();

