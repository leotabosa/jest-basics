const {
  sum,
  subtract,
  divide,
  multiply,
  increase,
  decrease,
  modulus,
} = require("./basic");

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

  it("multiply- shoud multiply numbers correctly", () => {
    expect(multiply(3, 2)).toBe(6);
  });

  it("increase - should increase number", () => {
    expect(increase(3)).toBe(4);
  });

  it("decrease - should decrease number", () => {
    expect(decrease(4)).toBe(3);
  });

  it("modulus - should return remainder of two operands", () => {
    expect(modulus(3, 2)).toBe(1);
  });
});
