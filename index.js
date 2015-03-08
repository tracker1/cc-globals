var R = require('ramda');
var fetch = require('isomorphic-fetch');
var env = this;

R.installTo(typeof(global) !== 'undefined' ? global : this);
