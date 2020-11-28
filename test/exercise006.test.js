const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
} = require("../challenges/exercise006");


describe("sumMultiples", () => {
  test("This function will receive an array of numbers and should return the sum of any numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
    expect(sumMultiples([15, 18, 7, 9, 1, 10])).toBe(52);

  });

  test("if there are not multiple of 3 or 5  in the array, returns 0", () => {
    expect(sumMultiples([2, 88, 7, 8, 1])).toBe(0);
  });

  test("if the array is empty should return null", () => {
    expect(sumMultiples([])).toBe(null);
  });

});

describe("isValidDNA", () => {
  test("This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only", () => {
    expect(isValidDNA("CGTA")).toBe(true);
    expect(isValidDNA("ghAgyftC")).toBe(false);
    expect(isValidDNA("T")).toBe(true)

  });
});

describe("getComplementaryDNA", () => {
  test(" This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of ACTG would have a complementary DNA string of TGAC", () => {
    expect(getComplementaryDNA("CGTA")).toBe("GCAT");
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    expect(getComplementaryDNA("T")).toBe("A")

  });
});

describe("isItPrime", () => {
  test("This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)", () => {
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(0)).toBe(false)

  });
});

describe("createMatrix", () => {
  test("This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)", () => {
    expect(createMatrix(3, "foo")).toEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"]
    ]);
    expect(createMatrix(2, 4)).toEqual([
      [4, 4],
      [4, 4]
    ]);
    expect(createMatrix(1, 'a')).toEqual([['a']]);
    expect(createMatrix(0, 'b')).toEqual([])

  });
});


describe("areWeCovered", () => {
  test("This function takes an array of staff objects and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day", () => {
    expect(areWeCovered([
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Paul", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Sofie", rota: ["Saturday", "Monday", "Tuesday", "Wednesday"] }
    ], 'Saturday')).toBe(true);
    expect(areWeCovered([
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Paul", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Sofie", rota: ["Saturday", "Monday", "Tuesday", "Wednesday"] }
    ], 'Monday')).toBe(false)



  });
});

