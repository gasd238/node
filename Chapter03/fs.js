var fs = require('fs');

// 1. 동기식 파일 읽기
// try{
//     var data = fs.readFileSync('./readme.txt', 'utf8');
//     console.log(data);
// } catch(error) {
//     console.log('file read error', error)
// }


// 2. 비동기식 파일 읽기
// fs.readFile('./readme.txt2', 'utf8', function(err, data){
//     if (err){
//         console.log('file read error', err)
//     }
//     else{
//         console.log(data)
//     }
// });

//3. 동기식 파일 쓰기

fs.writeFileSync('write.txt', 'Ut magna ex quis cupidatat laborum deserunt quis nostrud.')

//4. 비동기식 파일 쓰기
fs.writeFile('write2.txt', 'Minim anim eu occaecat reprehenderit quis duis id minim.', function(err, data){
    fs.readFile('./write2.txt', 'utf8', function(err, data){
        console.log(data)
    })
});

//5. 파일에 내용 추가하기
fs.appendFile('./write2.txt', '\nhello, world', function(err){
    fs.readFile('./write2.txt', 'utf8', function(err, data){
        console.log(data)
    })
});

//6. 파일의 존재 여부
fs.access('./readme.txt', fs.R_OK | fs.f_OK, function(err){
    if(err){
        console.log('파일 없')
    }
    else{
        console.log('있')
    }
});

fs.readdir('./', (err)=>{
    if(err){
        throw err;
    }else{
        console.log(files);
    }
});