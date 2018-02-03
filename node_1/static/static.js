var http = require("http");
var url = require('url');
var fs = require('fs');
var path=require('path');


var server = http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    if (pathname == '/') {
        pathname = '1.html'
    }
    //拓展名
    var extname=path.extname(pathname);
    console.log(extname)
    fs.readFile('./' + pathname, function (err, data) {
        if (err) {
            fs.readFile('./404.html', function (err, data) {
                res.writeHead(404, {"Content-type": "text/html;charset=utf8"});
                res.end(data)
            })
            return;
        }
        res.end(data)
    })
})
server.listen(3000, '127.0.0.1')