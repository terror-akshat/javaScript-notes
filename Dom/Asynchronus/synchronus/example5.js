function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = Math.random();

      if (success) {
        resolve({ name: "Akash", age: 30 });
      } else {
        reject("failed to fetch the user data");
      }
    });
  }, 2000);
}

fetchUser()
  .then((userData) => {
    console.log("user data", userData);
  })
  .catch((error) => {
    console.log(error);
});
