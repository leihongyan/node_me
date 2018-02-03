var http = require("http")
var querystring = require("querystring")
var formidable = require('formidable'),util = require('util');
var path=require("path")
var fs=require("fs")
//创建服务器
var server = http.createServer(function (req, res) {
    if (req.url = '/dopost' && req.method.toLowerCase() == 'post') {
        // parse a file upload
        var form = new formidable.IncomingForm();
        form.uploadDir = __dirname + '/img';
        form.encoding = 'utf-8';
        form.parse(req, function(err, fields, files) {
            //所有的文本域、单选框，都在fields放；
            //所有的文本域，放在files
            if(err) throw err;
            var oldpath = files.upload.path;
            var newpath = path.join(path.dirname(oldpath),files.upload.name);
            fs.rename(oldpath,newpath,function(){
                res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
                res.end("图片上传成功并改名成功")
            })
            // res.writeHead(200, {'content-type': 'text/plain'});
        });
        // var alldata = '';
        // //post请求接收的一个公式
        // //node为了追求极致，他是一个小段一个小段接收的
        // //接收了一小段，可能就给别人服务了。
        // req.addListener('data', function (chunk) {
        //     alldata += chunk;
        // })
        // req.addListener("end", function () {
        //     res.end("success");
        //     var dataObj = querystring.parse(alldata.toString());
        // })
    }
})
server.listen(3000, "127.0.0.1");