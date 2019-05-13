process.on('exit', function(){
    console.log('process.on exit');
});
process.addListener('exit', function(){
    console.log('process.addListener exit');
});
process.once('exit', function(){
    console.log('process.once exit');
});

process.emit('exit')