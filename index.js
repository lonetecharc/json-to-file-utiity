
var fs = require('fs')
var formatjson = require('json-format')

exports.writeToFile = function (inputjson, filename){
    var stringifiedData = JSON.stringify(inputjson);
    fs.writeFileSync(__dirname + '/' + filename + '.json', formatjson(inputjson));
}