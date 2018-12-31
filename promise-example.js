/* 
 * The function passed to `new Promise` is called executor. When the 
 * promise is created, this executor function runs automatically. 
 *
 * The executor received two arguments: `resolve` and `reject`. These two
 * functions aer pre-defined by the JavaScript engine. We do not need to
 * create them. Instead we should write the executor to call them when ready.
 */

let promise = new Promise(function(resolve, reject) {
  /* The producing code spend 3 seconds running and successfully return a result */
  // setTimeout(() => resolve("done!"), 3000);

  /* The producing code spend 3 seconds running and return a error code */
  setTimeout(() => reject(new Error("Whoops!")), 3000);
});

promise.then(
  function(result) {
    console.log(result);
  },

  function(err) {
    console.log(err);
  }
)
