var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    console.log(__dirname + url); // 자바 스크립트를 이용하여 이용하는 파일을 읽어서 올수 잇게 된다.
    response.end(fs.readFileSync(__dirname + url)); 
 
});
app.listen(3000);