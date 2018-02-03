var http = require("http");
var url = require("url");

var server = http.createServer(function (req, res) {
    //得到查询部分，true为得到一个对象
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    var queryObj = url.parse(req.url, true).query;
    var age = queryObj.age;
    var sex = queryObj.sex;
    var name = queryObj.name;
    console.log(sex)
    res.end("服务得到请求：" + name +age +sex);
})
server.listen(3000, '127.0.0.1')