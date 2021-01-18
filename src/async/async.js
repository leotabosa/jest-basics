export function asyncDelay() {
  return setTimeout(() => Promise.resolve(true), 1000);
}

export function asyncError() {
  const promiseError = () => Promise.reject("Error!");
  
  try {
    await promiseError();
  } catch (error) {
      console.error(error);
  }
}
