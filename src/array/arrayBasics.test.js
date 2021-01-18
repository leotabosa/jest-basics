const { basicReverse, basicMapOfObjects } = require("./arrayBasics");

test("should revert the array", () => {
  const original = [1, 2, 3, 4, 5];
  const reverso = [5, 4, 3, 2, 1];
  expect(basicReverse(original)).toEqual(reverso);
});

test("should attribute id to each object of array", () => {
  const original = [{ nome: "teste 1" }, { nome: "teste 2" }];
  const resultado = [
    { nome: "teste 1", id: 1 },
    { nome: "teste 2", id: 2 },
  ];
  expect(basicMapOfObjects(original)).toEqual(resultado);
});
