var R = require('ramda'); 
var fetch = require('isomorphic-fetch');
var bb = require('bluebird');


//make i-promise use bluebird
require('i-promise/config').use(bb);


//patch globals and context
if (typeof global !== 'undefined') {
  global.R = R;
  global.Promise = bb;
  global.fetch = fetch;
} 
this.R = R;
this.Promise = bb;
this.fetch = fetch;


//export the modules this uses
module.exports = {
  R: R,
  fetch: fetch,
  Promise: bb
};
