var http = require("http")
var querystring = require("querystring")
//创建服务器
var server = http.createServer(function (req, res) {
    if (req.url = '/dopost' && req.method.toLowerCase() == 'post') {
        var alldata = '';
        //post请求接收的一个公式
        //node为了追求极致，他是一个小段一个小段接收的
        //接收了一小段，可能就给别人服务了。
        req.addListener('data', function (chunk) {
            alldata += chunk;
        })
        req.addListener("end", function () {
            res.end("success");
            var dataObj = querystring.parse(alldata.toString());
            console.log(dataObj)
        })
    }
})
server.listen(3000, "127.0.0.1");