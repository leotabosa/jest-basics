export function basicReverse(array) {
  return array.reverse();
}

export function basicMapOfObjects(array) {
  return array.map((item, index) => ({ ...item, id: index + 1 }));
}
