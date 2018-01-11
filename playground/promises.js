var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a + b);
            } else {
                reject("Can only add numbers");
            }
        }, 1500);
    });
}

asyncAdd(10, 39).then((value)=>{
    console.log(value);
    return asyncAdd(value, "92");
}).then((res)=>{
    console.log("New value - ", res);
}).catch((errorMsg)=>{
    console.log(errorMsg);
})

// var somePromise = new Promise((resolve, reject) =>{
//     // resolve("It worked!");
//     setTimeout(()=>{
//         reject("I'm just not working");
//     }, 1000);
// });

// somePromise.then((message) =>{
//     console.log("Success:", message);
// }, (errorMsg) => {
//     console.log(errorMsg);
// })