const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(input){
    console.log('input msg: ' + input);
    rl.close()
});