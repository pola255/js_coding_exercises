function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const newArr = nums.filter((item) => item < 1

  );
  return newArr
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let arr_names = names.filter((name) => name.startsWith(char)

  );
  return arr_names

}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return findNamesBeginningWith(words, 'to ')

}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let arr_int = nums.filter((nums) => nums === Math.round(nums));
  return arr_int
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let cities = users.map((user) => user.data.city.displayName);
  return cities

}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let arr_root = nums.map((num) => parseFloat(Math.sqrt(num).toFixed(2)))
  return arr_root


}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  str = str.toUpperCase()
  let arr_sentence = sentences.filter((sentence) => sentence.toUpperCase().includes(str));
  return arr_sentence
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let long_side = triangles.map((triangle) => triangle.reduce(function (a, b) {
    return Math.max(a, b)
  })
  )
  return long_side
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
