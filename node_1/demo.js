//require表示引包，引包就是引用自己的一个特殊功能
var http = require("http");
var fs = require("fs");
//创建服务器，参数是一个回调函数，表示如果有请求进来，要做什么
var server = http.createServer(function(req, res) {
    //req表示请求，request;res表示响应，response
    //设置http头部，状态码是200，文件类型是HTML，字符集是utf-8
    var aa = '';
    if(req.url== '/fang'){
        fs.readFile('./test1.html', function(err, data) {
            res.writeHead(200, {
                'Content-type': 'text/html;charset=UTF-8'
            });
            res.end(data);
        })
    }else if(req.url== '/red'){
        fs.readFile('./test2.html', function(err, data) {
            res.writeHead(200, {
                'Content-type': 'text/html;charset=UTF-8'
            });
            res.end(data);
        })
    }else if(req.url== '/ccc.css'){
        fs.readFile('./aaa.css', function(err, data) {
            res.writeHead(200, {
                'Content-type': 'text/css'
            });
            res.end(data);
        })
    }else{
        res.writeHead(404, {
            'Content-type': 'text/html;charset=UTF-8'
        });
        res.end('没有这个页面啊')
    }
})

server.listen(3000, "127.0.0.1");