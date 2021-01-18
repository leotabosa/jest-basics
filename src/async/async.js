export function asyncDelay() {
  setTimeout(() => {}, 1000);
  return Promise.resolve(true);
}

export async function asyncError() {
  const promiseError = () => Promise.reject("Error!");

  try {
    await promiseError();
  } catch (error) {
    console.error(error);
  }
}
