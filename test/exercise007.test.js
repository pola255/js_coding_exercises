const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
} = require("../challenges/exercise007");

describe("sumDigits", () => {
  test("This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example. ", () => {
    expect(sumDigits(234)).toBe(9);
    expect(sumDigits(3469)).toBe(22);
    expect(sumDigits(7)).toBe(7);

  });

  test("if the number is 0 should return 0", () => {
    expect(sumDigits(0)).toBe(0);
  });

});

describe("createRange", () => {
  test("This function creates a range of numbers as an array. It received a start, and end and a step. Step is the gap between numbers in the range", () => {
    expect(createRange(0, 14, 2)).toEqual([0, 2, 4, 6, 8, 10, 12, 14]);
    expect(createRange(1, 13, 3)).toEqual([1, 4, 7, 10, 13]);
    expect(createRange(0, 11, 2)).toEqual([0, 2, 4, 6, 8, 10])

  });
});

describe("getScreentimeAlertList", () => {
  test("This function creates a range of numbers as an array. It received a start, and end and a step. Step is the gap between numbers in the range", () => {
    expect(getScreentimeAlertList([
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
          { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
          { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
          { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
        ]
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
          { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
          { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
        ]
      },
    ], "2019-05-04")).toEqual(["beth_1234"]);


  });
});


describe("hexToRGB", () => {
  test("This function will receive a hexadecimal color code in the format #FF1133 and return rgb color format ", () => {
    expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");


  });


});

describe("findWinner", () => {
  test("This function takes a noughts and crosses board represented as an array. The function should return X if player X has won, 0 if the player 0 has won, and null if there is currently no winner. ", () => {
    expect(findWinner([
      ["X", "0", null],
      ["X", null, "0"],
      ["X", null, "0"]
    ])).toBe("X")

    expect(findWinner([
      ["0", "0", "0"],
      ["X", null, "X"],
      ["X", null, "0"]
    ])).toBe("0")

    expect(findWinner([
      ["0", "0", "X"],
      ["X", "0", "X"],
      ["X", null, "0"]
    ])).toBe("0")

    expect(findWinner([
      ["0", "0", "X"],
      ["0", "X", "X"],
      ["X", null, "0"]
    ])).toBe("X")

  });

});
