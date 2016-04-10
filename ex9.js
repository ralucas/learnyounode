var http = require('http');

var request = function request(url, cb) {
  http.get(url, function(res) {
    var collector = '';
    res.setEncoding('utf-8');
    res.on('data', function(data) {
      collector += data; 
    });
    res.on('end', function() {
      cb(null, collector);
    });
  }).on('error', function(err) {
    console.error(err);
    cb(err);
  });
};

function run() {
  var urls = process.argv.slice(2);
  var len = urls.length;
  var out = urls.map(function(u) { return false; });
  urls.forEach(function(url, i) {
    request(url, function(err, data) {
      if (err) throw new Error(err);
      out[i] = data;
      if ( out.every(function(o) { return !!o; }) ) {
        setImmediate(function() {
          out.forEach(function(o) {
            console.log(o);
          });
        });
      }
    });
  });
}

run();

