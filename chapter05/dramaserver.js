var http = require('http');
var url = require('url');
var qs = require('querystring');

//드라마 목록
var dramaList = [
    {title: '나의 아저씨', actor:'아이유, 이선균'},
    {title:'비밀의 숲', actor:'조승우, 배두나'}
]

//1. get 방식으로 처리
// var server = http.createServer(function(req, res){
//     console.log('req.url :', req.url);

//     //querystring 파싱
//     var parsedUrl = url.parse(req.url);
//     console.log(parsedUrl);
//     var query = qs.parse(parsedUrl.query);
//     console.log(query);
//     //드라마 목록에 데이터를 추가
//     if(query.title && query.actor)
//         dramaList.push({title: query.title, actor: query.actor});
//         // 최종 html 파일을 클라이언트로 전송
//         showDramaList(res);
    
// }).listen(8080, function(){
//     console.log('8080포트에서 대기중');
// });

// function showDramaList(res){
        
//         res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
//         res.write('<html><body><h1>My Favorite Drama</h1><ul>');
//         for (var i=0; i<dramaList.length;i++){
//             res.write(`<li>${dramaList[i].title} (${dramaList[i].actor})</li>`);
//         }
//         res.end('</ul></body></html>');
// }


//2. post 방식으로 처리

var server = http.createServer(function(req, res){
    console.log('req.url :', req.url);

    if (req.method.toLowerCase() === 'post'){
        //드라마에 목록 추가
        addNewDrama(req, res);
    }
    else{
        showDramaList(res);
    }
}).listen(8080, function(){
    console.log('8080포트에서 대기중');
});

function addNewDrama(req, res){
    var body ='';
    req.on('data', function(chunk){
        body +=chunk;
    });
    req.on('end', function(){
        var query = qs.parse(body);
        dramaList.push({title: query.title, actor: query.actor});
        res.writeHead(302, {'Location':'/'});
        res.end();
    });
}

function showDramaList(res){
        
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write('<html><body><h1>My Favorite Drama</h1><ul>');
        for (var i=0; i<dramaList.length;i++){
            res.write(`<li>${dramaList[i].title} (${dramaList[i].actor})</li>`);
        }
        res.write('</ul>');
        res.write(`-------------------------------------------------------------------
        <form method="POST" action="http://localhost:8080">
        <h3>추천 드라마 입력</h3>
        <p>제목<input type="text", name = "title"></p> 
        <p>배우<input type="text", name = "actor"></p>
        <input type="submit">
    </form>`)
    res.end(`</body></html>`);
}