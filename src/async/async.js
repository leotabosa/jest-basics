export function asyncDelay() {
  return setTimeout(() => Promise.resolve(true), 1000);
}
