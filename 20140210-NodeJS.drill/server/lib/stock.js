
function Stock(symbol, value){
  'use strict';
  this.symbol = symbol;
  this.value = getRandom(50, 250);
  }

function getRandom(min, max){
  'use strict';
  var random = Math.random() * (max-min) + min;
  return random.toFixed(2);
}

module.exports = Stock;
