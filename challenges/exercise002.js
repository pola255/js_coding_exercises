function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required")
  return sandwich.fillings
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required")
  return person.city == "Manchester"
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required")
  if (people <= 40 && people > 0) {
    return 1
  }
  else {
    return Math.ceil(people / 40)
  }
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required")
  let count = 0
  arr.forEach(function (animal) {
    if (animal.toLowerCase() == 'sheep')
      count++
  })
  return count
}


function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required")
  const post_code = person.address.postCode
  return post_code.split("")[0] == "M" && person.address.city == "Manchester"
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
}
