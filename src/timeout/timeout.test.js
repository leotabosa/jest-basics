const { delay } = require("./timeout");

jest.useFakeTimers();
describe("test basic operations", () => {
  it("delay - should call function after timeout", () => {
    const mockFn = jest.fn();
    delay(mockFn, 1000);
    jest.runAllTimers();

    expect(mockFn).toHaveBeenCalled();
  });
});
