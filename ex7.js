var http = require('http');

http.get(process.argv[2], function callback(res) {
    res.setEncoding('utf-8');
    res.on('data', function(data) {
        console.log(data);
    });
}).on('error', function(err) {
        console.log(err);
});
