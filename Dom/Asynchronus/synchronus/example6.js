function asyncOperation1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("operation 1 completed");
      resolve("data from operation 1");
    }, 3000);
  });
}
function asyncOperation2(dataFromOp1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("operation 2 completed", dataFromOp1);
      resolve("data from operation 2");
    }, 2000);
  });
}
function asyncOperation3(dataFromOp2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("operation 3 completed", dataFromOp2);
      resolve("data from operation 3");
    }, 2000);
  });
}

asyncOperation1()
  .then((dataFromOp1) => {
    return asyncOperation2(dataFromOp1);
  })
  .then((dataFromOp2) => {
    return asyncOperation3(dataFromOp2);
  })
  .then((dataFromOp3) => {
    console.log(dataFromOp3);
  })
  .catch((error) => {
    console.log(error);
  });
