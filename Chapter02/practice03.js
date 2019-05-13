//1. add함수 동기식 작성 1초뒤 실행
function addsync(a, b){
    console.log(a+b)
}
setTimeout(addsync,1000, 1, 2)

function addAsync(a, b, callback){
    callback(a + b);
}
setTimeout(addAsync, 1000, 1, 2, result=>console.log(result))

var sync1 = function(param){ return param*2; }
var sync2 = function(param){ return param*3; }
var sync3 = function(param){ return param*4; }
console.log(sync3(sync2(sync1(1))));

var async1 = function(param, callback){ callback(param*2); }
var async2 = function(param, callback){ callback(param*3); }
var async3 = function(param, callback){ callback(param*4); }

var fs = require('fs')

async1(1, function(result1){
    async2(result1, function(result2){
    fs.readFile('./test.txt', 'utf8', (err, data)=>{
        if(err){
            console.error(err);
        }
        else{
            console.log(data);
        }
        async3(result2, function(result3){
            console.log(result3)
            });
        });
        
    });
});


