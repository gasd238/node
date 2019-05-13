function sayHello(name){
    console.log('Hello '+name);
}

var st = setTimeout(sayHello, 3000, '인생성공하신분');
console.log('End');
var si = setInterval(() => {
    console.log('set interval test')
}, 2000);
clearTimeout(st);
clearInterval(si);

console.log(__dirname)
console.log(__filename)