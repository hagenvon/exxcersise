const { makeFindMin } = require("./utils");

const list = [{ a: 3, b: 2 }, { a: 5, b: 5 }, { a: 6, b: 8 }];
const list_b = [{ a: 2, b: 2 }, { a: 2, b: 2 }, { a: 5, b: 5 }];

describe("makeFindMin()", () => {
  it("should find one item with lowest b", () => {
    const findMinB = makeFindMin(item => item.b);
    const actual = list.reduce(findMinB, []);
    const expected = [{ a: 3, b: 2 }];

    expect(actual).toEqual(expected);
  });

  it("should find two items with lowest b", () => {
    const findMinB = makeFindMin(item => item.b);
    const actual = list_b.reduce(findMinB, []);
    const expected = [{ a: 2, b: 2 }, { a: 2, b: 2 }];

    expect(actual).toEqual(expected);
  });

  it("should find one item with lowest diff a-b", () => {
    const findMinB = makeFindMin(item => item.a - item.b);
    const actual = list.reduce(findMinB, []);
    const expected = [{ a: 6, b: 8 }];

    expect(actual).toEqual(expected);
  });

  it("should find three item with lowest diff a-b", () => {
    const findMinB = makeFindMin(item => item.a - item.b);
    const actual = list_b.reduce(findMinB, []);
    const expected = [{ a: 2, b: 2 }, { a: 2, b: 2 }, { a: 5, b: 5 }];

    expect(actual).toEqual(expected);
  });
});
