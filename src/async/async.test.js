const { asyncDelay, asyncError } = require("./async");

describe("should test async functions", () => {
  it("shoud await for promise to resolve", async () => {
    let res = false;
    res = await asyncDelay();

    expect(res).toBe(true);
  });

  it("should await for promise and handle error", async () => {
    let spy = {};
    spy.console = jest.spyOn(console, "error").mockImplementation(() => {});

    await asyncError();
    expect(spy["console"]).toHaveBeenCalled();
  });
});
