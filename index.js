var R = require('ramda'); 
var fetch = require('isomorphic-fetch'); //self patching global
var bb = require('bluebird');

//patch global Ramda
if (typeof global !== 'undefined') global.R = R;
this.R = R;

//make i-promise use bluebird
require('i-promise/config').use(bb);

//make global Promise implementation bluebird
this.Promise = bb;

//export the modules this uses
module.exports = {
  R: R,
  fetch: fetch,
  Promise: bb
};