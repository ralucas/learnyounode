var net = require('net');

var s = net.createServer(function(client) {
  // "YYYY-MM-DD hh:mm"
  var d = new Date();
  d.setHours(d.getHours() - d.getTimezoneOffset()/60);
  var date = d.toISOString();
  var end = date.length - 8;
  var fmtTime = date.split('T').join(' ').substr(0, end) + '\n';
  client.write(fmtTime);
  client.end();
});

s.listen(process.argv[2]);
