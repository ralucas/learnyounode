var http = require('http');

    http.get(arg, function(res) {
        var allData = '';
        res.setEncoding('utf-8');
        res.on('data', function(data) {
            allData += data;
        });
        res.on('end', function() {
            var splitStr = allData.split('\n');
            var len = allData.length;
            var str0 = splitStr[0];
            var str1 = splitStr[1];
            console.log(len);
            console.log(str0);
            console.log(str1);
        });
    }).on('error', function(err) {
        console.error(err);
    });

