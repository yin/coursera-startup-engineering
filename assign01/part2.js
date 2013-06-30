#!/usr/bin/env node

var fs = require('fs');
var target = 100;
var primes = new Array();
var outfile = "primes.txt";

for(var curr = 2; primes.length < target; curr++) {
  var i;
  for (i = 0; i < primes.length; i++) {
    var p = primes[i];
    if (curr % p == 0) break;
  }
  if (i == primes.length) {
    primes.push(curr);
  }
}

var out = primes.join(',');
fs.writeFileSync(outfile, out);
console.log(out);

