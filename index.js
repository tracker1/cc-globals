var R = require('ramda');
var fetch = require('isomorphic-fetch');
var env = this;

module.exports = {
  ramda: R
  ,fetch: fetch
  ,load: loadGlobals
};

function loadGlobals() {
    module.exports.load = function(){}; //only load once
    R.installTo(env);
    env.fetch = fetch;
};