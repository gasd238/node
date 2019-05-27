var express = require('express');
var app = express();
var logger = require('morgan');

app.use(logger('dev')); //로그를 남기는 미들웨어 실행
app.use(express.static('public')); //정적파일 처리 미들웨어 실행
app.use(express.urlencoded({extended:true})); //body로 넘어온 데이터 파싱

var dramaList =[
    {title:'나의 아저씨', actor:'아이유, 이선균'},
    {title:'비밀의 숲', actor:'조승우, 배두나'}
]
//pug 엔진 세팅
app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', function(req, res){
    res.render('dramaList', {title:"Bluerain", list: dramaList});
}); 

app.post('/', function(req, res){
    if(req.body.title && req.body.actor){
        dramaList.push({title:req.body.title, actor:req.body.actor});
        res.redirect('/')
    }else{
        res.redirect('/')
    }
});

app.listen(8080, function(){
    console.log('8080포트 머기중')
});