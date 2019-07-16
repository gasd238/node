//1 비동기 처리 no promise
// function delay(sec, callback){
//     setTimeout(() => {
//         callback(new Date().toTimeString());
//     }, sec * 1000);
// }

// console.log('start: ', new Date().toTimeString());

// delay(1, function(time){
//     console.log(time)
// })

// console.log('hi');


//2. promise 사용

function delayP(sec){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve(new Date().toTimeString());
        }, sec * 1000);
    })
}

console.log('start', new Date().toTimeString());

delayP(1)
    .then(function(time){
        console.log(1, time);
        return delayP(1);
    })
    .then(function(time){
        console.log(2, time);
        return delayP(1);
    })
    .then(function(time){
        console.log(3, time);
    })
    .catch(function(){
        console.log('error')
    })