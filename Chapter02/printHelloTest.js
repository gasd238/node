var print = require('./printHello');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(input){
    print(input)
    rl.close()
});