var http = require('http');
var url = require('url');
var qs = require('querystring');

//드라마 목록
var dramaList = [
    {title: '나의 아저씨', actor:'아이유, 이선균'},
    {title:'비밀의 숲', actor:'조승우, 배두나'}
]

//1. get 방식으로 처리
var server = http.createServer(function(req, res){
    console.log('req.url :', req.url);

    //querystring 파싱
    var parsedUrl = url.parse(req.url);
    console.log(parsedUrl);
    var query = qs.parse(parsedUrl.query);
    console.log(query);
    //드라마 목록에 데이터를 추가
    if(query.title && query.actor)
        dramaList.push({title: query.title, actor: query.actor});
    //최종 html 파일을 클라이언트로 전송
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<html><body><h1>My Favorite Drama</h1><ul>');
    for (var i=0; i<dramaList.length;i++){
        res.write(`<li>${dramaList[i].title} (${dramaList[i].actor})</li>`);
    }
    res.end('</ul></body></html>');
}).listen(8080, function(){
    console.log('8080포트에서 대기중');
});