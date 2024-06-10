let myPromise= new Promise((resolve, reject)=>{
    let success=true;
    setTimeout(()=>{
        if(success){
            resolve("The opertions was successfull");
        }
        else{
            reject("The operation is failed");
        }
    },2000);
});

// handling the promise with .then() and .catch()

myPromise.then((message)=>{
    console.log(message);
});
myPromise.catch((error)=>{
    console.error(error);
});
