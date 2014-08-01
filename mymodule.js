var fs = require('fs');

var filteredLs = function(arg1, arg2, cb) {
    var test = "\\." + arg2;
    var re = new RegExp(test);

    fs.readdir(arg1, function(err, files) {
        if (err) return cb(err);
        var filtered = files.filter(function(file) {
            re.test(file) ? console.log(file) : '';
            return re.test(file);
        });
        cb(null, filtered);
    });
};

module.exports = filteredLs;
