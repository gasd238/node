var express = require('express');
var app = express();

//1.Hello World 예제
// app.get('/', function(req, res){
//     res.send('Hello, world');
// });

app.listen(8080, function(){
    console.log('8080포트 대기중...');
});

// //2. 라우팅 처리
// app.get('/', function(req, res){
//     res.send('<h1> / GET request</h1>');
// });

// app.post('/', function(req, res){
//     res.send('<h1> / POST request</h1>');
// });

// app.get('/book', function(req, res){
//     res.send('<h1>Get a book</h1>');
// });

// app.post('/book', function(req, res){
//     res.send('<h1>Add a book</h1>');
// });

// app.put('/book', function(req, res){
//     res.send('<h1>Update a book</h1>');
// });

// app.delete('/book', function(req, res){
//     res.send('<h1>Delete a book</h1>');
// });


//app.route() 체인 라우팅 핸들링
// app.route('/book')
//     .get(function(req, res){
//         res.send('<h1>Get a book</h1>');
//     })
//     .post(function(req, res){
//         res.send('<h1>Add a book</h1>');
//     })
    
//     .put(function(req, res){
//         res.send('<h1>Update a book</h1>');
//     })
    
//     .delete(function(req, res){
//         res.send('<h1>Delete a book</h1>');
//     });
    

//3. 미들웨어 사용
//express는 뼈대, 미들웨어는 중간에 실행되는 함수로 특정한 기능을 추가하는 역할

// function mw1(req, res, next){
//     console.log('middle ware 1');
//     next();
// }

// function mw2(req, res, next){
//     console.log('middle ware 2');
//     next();
// }

// app.use(mw1);
// app.use(mw2);

// app.get('/', function(req, res){
//     res.send('/');
// });

//4. 미들웨어 사용(써드파티)
// var logger = require('morgan')

// app.use(logger('dev'));
// app.use(express.static('public'));

// app.get('/', function(req, res){
//     res.sendFile('./public/index.html')
// });

//5. querystring처리
app.get('/', function(req, res){
    if(req.query.start&&req.query.end){
        var start = parseInt(req.query.start)
        var end = parseInt(req.query.end)
        console.log(`start=${start}, end=${end}`);
        res.send(`<h1>${calculateSum(start, end)}</h1>`)
    }
    else{
        res.sendFile('C:/node/hello-express/public/formTest.html')
    }
});

function calculateSum(start, end){
    var sum =0;
    for(var i =start; i<=end;i++){
        sum+=i;
    }
    return sum;
}

//6. post 방식 처리
app.use(express.urlencoded({extended:true}));
app.post('/', function(req, res){
    if(req.query.start&&req.query.end){
        var start = parseInt(req.query.start)
        var end = parseInt(req.query.end)
        console.log(`start=${start}, end=${end}`);
        res.send(`<h1>${calculateSum(start, end)}</h1>`)
    }
    else{
        res.sendFile('C:/node/hello-express/public/formTest.html')
    }
});