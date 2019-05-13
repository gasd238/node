//querystring으로 넘어온 두 값(start, end)을 활용하여 두 값 사이의 합계 구하기
var http = require('http');
var url = require('url');
var qeurystring = require('querystring');

// var server = http.createServer(function(req, res){
//   const parsedURL = url.parse(req.url)// <1> url을 parsing하여 객체로 저장한다. 
//   console.log('parsedURL.query : ', parsedURL.query);
//   const query = qeurystring.parse(parsedURL.query) // <2> parsedURL을 parsing하여 querystring을 추출한 객체를 저장한다.
//   console.log('query : ', query);

//   // start와 end에 합계를 구할 범위를 저장한다.
//   let start = parseInt(query.start);
//   let end = parseInt(query.end);// <3> query.end를 정수로 parsing한다.
//   console.log(`start : ${start}, end : ${end}`);

//   if( !start || !end){
//     res.statusCode = 404;
//     res.end('Wrong Parameter');
//   }else{
//     // <4> start부터 end까지의 합계를 <h1>태그로 감싸서 출력한다.
//     var sum=0;
//     for(var i=start;i<=end;i++){
//       sum=sum+i;
//     }
//     res.end(`<h1>${sum}<h1>`);
//   }
// }).listen(8080, function(){
//   console.log('8080 포트에서 대기중');
// });


// 2. 정적 파일 요청 처리 streampipe
// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function(req,res){
//     console.log(req.url);
//     if(req.url==='/'){
//       fs.createReadStream('./index.html').pipe(res);
//     }else if(req.url==='/smoking.jpg'){
//       fs.createReadStream('./smoking.jpg').pipe(res);
//     }else if(req.url==='/streaming.mp4'){
//         res.setHeader('Content-Type','video/mp4');
//         fs.createReadStream('./streaming.mp4').pipe(res);
//     }else if(req.url==='/music.mp3'){
//       fs.createReadStream('./music.mp3').pipe(res);
//     }else if(req.url==='favicon.ico'){}
       //res.end();
// }).listen(8080,function(){
//     console.log('using PORT 8080');
// });

//2. POST방식
var server = http.createServer(function(req, res){
  
})