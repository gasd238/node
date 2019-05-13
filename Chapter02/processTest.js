var i = process.argv[2];
var j = process.argv[3];
var sum = parseInt(i) + parseInt(j);
process.exit()
console.log('sum: ' + sum)

process.on('exit', function(){
    console.log('process exit')
})