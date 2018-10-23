let promise = new Promise(function(resolve, reject) {
  /* The producing code spend 3 seconds running and successfully return a result */
  // setTimeout(() => resolve("done!"), 1000);

  /* The producing code spend 3 seconds running and return a error code */
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

promise.then(
  function(result) {
    console.log(result);
  },

  function(err) {
    console.log(err);
  }
)
