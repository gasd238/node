var http = require('http');

//1. cookie 만들기
// var server = http.createServer((req, res)=>{

//     //단일 세션
//     res.writeHead(200, {'Set-Cookie': 'myCookie=Bluerain'});

//     //복수 세션
//     res.writeHead(200, {'Set-Cookie': ['yummy_cookie=choco', 'tasty_cookie=strawberry']});

//     //영속적인 쿠키
//     res.writeHead(200, {'Set-Cookie': ['yummy_cookie=choco', 'tasty_cookie=strawberry', `Permanent=cookies; Max-Age=${60*5}`]});  

// }).listen(8080, ()=>{
//     console.log('8080포트 존버중');
// });

//2. cookie 읽기

var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var cookie = require('cookie');

var server = http.createServer(function(req, res){
    console.log('req.headers.cookie: ', req.headers.cookie);

    //cookie 파싱
    var cookies = {}
    if(req.headers.cookie !== undefined){
        cookies = cookie.parse(req.headers.cookie);
    }
    console.log(cookies);

    //setCookie 하는 경우]
    if(req.url.startsWith('./setCookie')){
        var parsedUrl = url.parse(req.url);
        var query = qs.parse(parsedUrl.query);
        res.writeHead(302, {'Location':'/', 'Set-Cookie':`name=${query.name}`, 'Content-Type':'text/html; charset = utf-8'});
        res.end();
    }else if(cookies.name){
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        res.end(`Welcome ${cookies.name}`);
    }else{
        fs.readFile('./hello.html', function(err, data){
            res.end(data);
        });
    }
}).listen(8080, ()=>{
    console.log('8080포트 존버중');
});