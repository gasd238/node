var path = require('path');

console.log(__dirname);
console.log(__filename, '\n');

console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.basename(__filename));

var pathObj = path.parse(__filename);
console.log(pathObj.name);

var pathFormat = path.format({ root: 'C:\\',
dir: 'C:\\node\\Chapter03',
base: 'pathTest.js',
ext: '.js',
name: 'pathTest' });

console.log(pathFormat);

var createPath = __dirname + path.sep + 'pathExam.txt';
console.log(createPath);

console.log(path.join(__dirname, '/chapter02', '/pulic', 'index.html'));