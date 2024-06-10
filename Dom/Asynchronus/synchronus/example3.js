//simulate an asynchronus operation using settimeout
function asyncOperation1(callback) {
  setTimeout(() => {
    console.log("operation1 completed");
    callback();
  },2000);
}

function asyncOperation2(callback) {
  setTimeout(() => {
    console.log("operation2 completed");
    callback();
  }, 2000);
}
function asyncOperation3(callback) {
  setTimeout(() => {
    console.log("operation3 completed");
    callback();
  }, 2000);
}

//nested callback
asyncOperation1(() => {
  asyncOperation2(() => {
    asyncOperation3(() => {
      console.log("all the operation is completed");
    });
  });
});

const data = () => {
  setTimeout(() => {
    console.log("operation");
  });
};
data();
