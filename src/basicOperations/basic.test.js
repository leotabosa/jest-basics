const { sum, subtract, divide, multiplicate } = require("./basic");

describe("test basic operations", () => {
  it("sum - should sum numbers correctly", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("subtract - should subtract numbers correctly", () => {
    expect(subtract(5, 2)).toBe(3);
  });

  it("divide - shoud divide numbers correctly", () => {
    expect(divide(6, 2)).toBe(3);
  });

  it("multiplicate - shoud multiplicate numbers correctly", () => {
    expect(multiplicate(3, 2)).toBe(6);
  });
});
