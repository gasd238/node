//readme.txt 파일 존재 확인, 파일 읽기, 파일의 일부분을 수정, 수정된 내용으로 파일 작성, 파일 읽기

//1. callback 함수

//var fs = require('fs');

// fs.access('./readme.txt',(err)=>{
//     if(err){
//         console.log(err.message)
//     }else{
//         fs.readFile('./readme.txt', (err, data)=>{
//             if(err){
//                 console.log(err.message)
//             }else{
//                 var newData = data.toString().replace('world', 'node.js');
//                 fs.writeFile('./readme.txt', newData, (err)=>{
//                     if(err){
//                         console.log(err.message);
//                     }else{
//                         fs.readFile('./readme.txt', (err, data)=>{
//                             if(err){
//                                 console.log(err.message);
//                             }else{
//                                 console.log(data.toString());
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

//2. 프로미스 사용
var fsPromise = require('fs').promises

fsPromise.access('./readme.txt')
    .then(function(){
        return fsPromise.readFile('./readme.txt')
    })
    .then((data)=>{
        console.log(data.toString());
        var newData = data.toString().replace('world', 'node.js')
        return fsPromise.writeFile('./readme.txt', newData);
    })
    .then(function(){
        return fsPromise.readFile('./readme.txt')
    })
    .then((data)=>{
        console.log(data.toString());
    })
    .catch(function(){
        console.log('error');
    })

//어사인씨

async function asdf(){
    await fsPromise.access('./readme.txt');
    let data = await fsPromise.readFile('./readme.txt');
    console.log(data.toString());
    var newData = data.toString().replace('node.js', 'world');
    await fsPromise.writeFile('./readme.txt', newData);
    data = await fsPromise.readFile('./readme.txt');
    console.log(data.toString());
}

asdf()