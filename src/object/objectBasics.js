export function checkIfHasProperty(obj, prop) {
  if (typeof obj !== "object") {
    return "First argument is not an object, please provide an object.";
  }

  return !!obj.hasOwnProperty(prop);
}
