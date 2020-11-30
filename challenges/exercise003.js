const {
  capitalize
} = require("./exercise001");

function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(n => n * n)
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let text = ""
  words.forEach((word, index) => {
    if (index !== 0) {
      word = capitalize(word)
    }
    text += word
  });
  return text
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  return people.reduce((count, p) => count + p.subjects.length, 0)
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  return menu.some(m => m.ingredients.includes(ingredient))
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  return arr1.filter((number, index) => arr2.includes(number) && arr1.indexOf(number) === index).sort()
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
