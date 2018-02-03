var http = require("http");
var url = require("url");

var server = http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    var query = url.parse(req.url, true).query;
    var age = query.age;
    console.log(query)
    console.log('pathname:' + pathname);
    console.log('query:' + JSON.stringify(query));
    console.log('age:' + age)
    res.end();
})
server.listen(3000, '127.0.0.1')