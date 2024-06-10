//define the callback function
function logResult(result) {
  console.log("Result", result);
}
//define the function  that accepts a callback
function processData(callback) {
  let data = "hello, world";

  //asynchronusing function
  setTimeout(() => {
    let newData = data.toUpperCase();
    callback(newData);//call the function
  }, 3000);
}

//call the function with the callback
processData(logResult);
