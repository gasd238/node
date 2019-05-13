var http = require('http');
var fs = require('fs');

// //1. 정적 파일 요청 처리 : (fs.readFile() 사용)
// var server = http.createServer(function(req, res){
//     console.log(req.url);
//     if(req.url === '/'){
//         fs.readFile('./index.html', function(err, data){
//             if(err){
//                 console.log(err);
//                 return;
//             }
//             res.end(data);
//         })
//     }
//     else if(req.url === '/iu.png'){
//         fs.readFile('./iu.png', function(err, data){
//             if(err){
//                 console.log(err);
//                 return;
//             }
//             res.end(data);
//         })
//     }
//     else if(req.url === '/music.mp3'){
//         fs.readFile('./music.mp3', function(err, data){
//             if(err){
//                 console.log(err);
//                 return;
//             }
//             res.end(data);
//         })
//     }
//     else if(req.url === '/streaming.mp4'){
//         res.setHeader('Content-type', 'video/mp4');
//         fs.readFile('./streaming.mp4', function(err, data){
//             if(err){
//                 console.log(err);
//                 return;
//             }
//             res.end(data);
//         })
//     }
//     else if (req.url === 'favicon.ico'){}
// }).listen(8080, function(){
//     console.log('waiting on port 8080');
// });

//3.정적 파일 요청 처리: path, myMIME
var myMIME = require('./myMIME');
var path = require('path');
var server = http.createServer(function(req, res){
    console.log('req.url : ', req.url);
    if(req.url === '/'){
        fs.readFile('./index.html', function(err, data){
            res.end(data);
        });
    }
    var fileName = __dirname + req.url;
    var extension = path.extname(fileName).substring(1);
    var mimeType = myMIME[extension]
    // fs.readFile(fileName, function(err, data){
    //     if(err){
    //         res.end('에러발생');
    //     }
    //     else{
    //         res.setHeader('content-Type', mimeType);
    //         res.end(data);
    //     }
    // })

    fs.open(filePath, 'r', function(err, fd){
        if(err){
            console.log('오류');
            res.setHeader('content-Type', 'text/html; charset=utf-8');
            res.end('<h1>오류</h1>')
        }else{
            res.writeHead(200, {'content-Type':mimeType});
            fs.createReadStream(filePath).pipe(res);
        }
    })
    console.log(fileName);
    console.log(extension);
}).listen(8080, function(){
    console.log('8080포트에서 대기중');
});
