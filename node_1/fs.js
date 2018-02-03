var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
    fs.readFile('./test/aa.txt', function (err, data) {
        if (err) {
            throw err;
        }
        console.log(1)
        res.end(data)
    })
    //创建文件夹
    fs.mkdir("./test/aaa",function(){
        console.log(34)
    })
    //删除文件夹
    fs.rmdir("./test/vvv",function(){
        console.log(45)
    })
    console.log(2)
})
server.listen(3000, '127.0.0.1')