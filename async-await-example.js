// The word “async” before a function means one simple thing: a function always returns a promise.
// If the code has return <non-promise> in it, then JavaScript automatically wraps it into a resolved promise with that value.

async function f() {
  return 1;
}

f().then(console.log);