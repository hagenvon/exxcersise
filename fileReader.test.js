const { csv } = require("./fileReader");

describe("read a csv file", () => {
  it("should return an array of objects", async () => {
    const actual = await csv("/ressources_test/test.csv");
    const expected = [
      { a: 1, b: 2, c: "monday" },
      { a: 2, b: 5, c: "tuesday" },
      { a: 1, b: 6, c: " wednesday" }
    ];

    expect(actual).toEqual(expected);
  });
});
