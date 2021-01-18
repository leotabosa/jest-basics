export function basicReverse(array) {
  return array.reverse();
}

export function basicMapOfObjects(array) {
  return array.map((item, index) => ({ ...item, id: index + 1 }));
}

export function popInNewArray(array) {
  const popped = array.pop();
  return [popped];
}

export function toMatrix(array) {
  return array.map((item) => [item]);
}
