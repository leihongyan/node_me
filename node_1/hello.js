var http= require("http");
var server = http.createServer(function (req,res){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end("代码")
})
server.listen(3000,'127.0.0.1')
//node hello.js  光标没有被返回，服务器挂起状态