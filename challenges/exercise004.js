function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required")
  return nums.filter((item) => item < 1)
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required")
  if (!char) throw new Error("char is required")
  return names.filter((name) => name.startsWith(char))
}

function findVerbs(words) {
  if (!words) throw new Error("words is required")
  return findNamesBeginningWith(words, 'to ')
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required")
  return nums.filter((num) => num === Math.round(num))
}

function getCities(users) {
  if (!users) throw new Error("users is required")
  return users.map((user) => user.data.city.displayName)
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required")
  return nums.map((num) => parseFloat(Math.sqrt(num).toFixed(2)))
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required")
  if (!str) throw new Error("str is required")
  str = str.toUpperCase()
  return sentences.filter((sentence) => sentence.toUpperCase().includes(str))
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required")
  return triangles.map((triangle) => triangle.reduce(function (a, b) {
    return Math.max(a, b)
  }))
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
}
