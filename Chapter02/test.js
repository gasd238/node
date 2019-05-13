function addAsync(a, b, callback){
    setTimeout(() => {
        console.log(callback(a+b))
    }, 1000);
}
console.log('before');
addAsync(1,2, function(result){
    console.log(result);
});
console.log('after');