const { makeFindMin, makeProcessAll, pipe } = require("./utils");
const { csv } = require("./fileReader");

describe("integration", () => {
  it("should give property c from record with lowest diff a-b", async () => {
    // given
    const data = await csv("/ressources_test/test.csv");
    const diffAB = item => item.a - item.b;
    const getPropC = makeProcessAll(item => item.c);
    const findMinDiffAB = makeFindMin(diffAB);

    //expect
    const actual = pipe(
        findMinDiffAB,
        getPropC
    )( await csv("/ressources_test/test.csv") );

    const expected = [" wednesday"];

    expect(actual).toEqual(expected);
  });
});
