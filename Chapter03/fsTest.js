fs = require('fs')
path = require('path')

fs.writeFile('./practice.txt', 'This file is a practice file');

fs.readFile('./practice.txt', 'utf8', function(err, data){
    console.log(data)
});

