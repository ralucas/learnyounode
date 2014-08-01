// #1
//console.log('HELLO WORLD');

/** #2
var total = 0;
for (var i = 2; i < process.argv.length; i++) {
    total += parseInt(process.argv[i],10);
}
console.log(total);
**/

/** #3
var fs = require('fs');

var len = fs.readFileSync(process.argv[2]).toString().split('\n').length;

console.log(len - 1);
**/

/** #4
var fs = require('fs');

fs.readFile(process.argv[2],'utf-8', function(err, buf) {
    if (err) console.error(err, err.stack);
    var len = buf.toString().split('\n').length;
    console.log(len - 1);
});
**/

/** #5
var fs = require('fs');

var test = "\\." + process.argv[3];
var re = new RegExp(test);

fs.readdir(process.argv[2], function(err, files) {
    files.filter(function(file) {
        return re.test(file) ? console.log(file) : "";
    });
});
**/

var filteredLs = require('./mymodule');
filteredLs(process.argv[2], process.argv[3]);
