var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('My Favorite Drama');
}); 



app.listen(8080, function(){
    console.log('8080포트 머기중')
});