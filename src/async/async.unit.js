const { asyncDelay } = require("./async");

describe("should test async functions", () => {
  it("shoud await for promise to resolve", async () => {
    let res = false;
    res = await asyncDelay();

    expect(res).toBe(true);
  });
});
