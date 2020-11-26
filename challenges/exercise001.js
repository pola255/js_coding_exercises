function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("")[0].toUpperCase() + word.slice(1)
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  if (firstName !== "" && lastName !== ""){
    return firstName.split("")[0] + '.' + lastName.split("")[0]
  }
  return ""
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return parseFloat((originalPrice + ((vatRate / 100) * originalPrice)).toFixed(2))

}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return parseFloat((originalPrice - ((reduction / 100) * originalPrice)).toFixed(2))
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let n = str.length
  let m = Math.floor(n / 2)
  let text = str.split("")
  console.log(text)
  if (n % 2 == 0) {
    return text[m-1] + text[m]
  } else {
    return text[m]
  }
    
 

}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let new_words = []
  words.forEach(function (item) {
    new_words.push(reverseWord(item))
  });
  return new_words
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count = 0
  for (let user of users) {
    if (user.type == 'Linux'){
      count ++

    }
  }
  return count
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let sum = 0
  scores.forEach(function(number){
    sum = sum + number
  });
  return parseFloat((sum / scores.length).toFixed(2))
 
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 == 0 && n % 5 == 0){
    return "fizzbuzz"
    }
  if (n % 3 == 0){
    return "fizz"
  }
  if (n % 5 == 0){
    return "buzz"
  }
  return n
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
