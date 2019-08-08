const { makeFindMin } = require("./utils");
const { csv } = require("./fileReader");

describe("integration", () => {
  it("should give property c from record with lowest diff a-b", async () => {
    // given
    const data = await csv("/ressources_test/test.csv");
    const diffAB = item => item.a - item.b;
    const getPropC = item => item.c;
    const findMinDiffAB = makeFindMin(diffAB);

    //expect
    const actual = data.reduce(findMinDiffAB, []).map(getPropC);
    const expected = [" wednesday"];

    expect(actual).toEqual(expected);
  });
});
