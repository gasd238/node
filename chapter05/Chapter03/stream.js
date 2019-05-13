var fs = require('fs')

//1. readStream
const readStream = fs.createReadStream('./readme.txt', {highWaterMark: 16});

const data =[];
readStream.on('data', function(chunk){
    data.push(chunk);
    console.log('data', chunk, chunk.length)
});

readStream.on('end', function(){
    console.log('end', Buffer.concat(data).toString('utf8'));
});

// 2. writeStream

const writeStream = fs.createWriteStream('./write3.txt')
writeStream.on('finish', function(){
    console.log('파일 쓰기 끄읕');
});

writeStream.write('hello\n');
writeStream.write('world\n');
writeStream.end();

//3. pipe
const readStream2 = fs.createReadStream('./readme.txt');
const writeStream2 = fs.createWriteStream('./write4.txt')
readStream2.pipe(writeStream2);