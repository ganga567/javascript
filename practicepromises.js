// Creating a promise
let myPromise = new Promise((resolve, reject) => {
  let success = true; // or false

  if (success) {
    resolve("Promise resolved");
  } else {
    reject("Promise rejected");
  }
});

// Using the promise
myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));
