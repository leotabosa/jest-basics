const { checkIfHasProperty } = require("./objectBasics");

describe("test the object basics", () => {
  it("should validate object and check if has property", () => {
    const obj = { id: 1 };

    expect(checkIfHasProperty(obj, "id")).toBe(true);
    expect(checkIfHasProperty("", "id")).toEqual(
      "First argument is not an object, please provide an object."
    );
  });
});
