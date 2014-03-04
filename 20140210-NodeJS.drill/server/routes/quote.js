'use strict';

var Stock = require('../lib/stock');

exports.getQuote = function(req, res){
  var x = new Stock(req.query.symbol);
  res.jsonp({stock:x.symbol, value:x.value});
};


