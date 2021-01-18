const {
  basicReverse,
  basicMapOfObjects,
  popInNewArray,
  toMatrix,
} = require("./arrayBasics");

describe("should test the array basics", () => {
  it("should revert the array", () => {
    const original = [1, 2, 3, 4, 5];
    const reverso = [5, 4, 3, 2, 1];
    expect(basicReverse(original)).toEqual(reverso);
  });

  it("should attribute id to each object of array", () => {
    const original = [{ nome: "teste 1" }, { nome: "teste 2" }];
    const resultado = [
      { nome: "teste 1", id: 1 },
      { nome: "teste 2", id: 2 },
    ];
    expect(basicMapOfObjects(original)).toEqual(resultado);
  });

  it("should pop and return in new array", () => {
    const original = [1, 2];

    expect(popInNewArray(original)).toEqual([2]);
  });

  it("should transform array to matrix", () => {
    const original = [1, 2];
    const resultMatrix = [[1], [2]];

    expect(toMatrix(original)).toEqual(resultMatrix);
  });
});
