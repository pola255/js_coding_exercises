function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  
  if (person.city == "Manchester"){
    return true
  }
  else{
    return false
  }

}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  if (people <= 40 && people > 0){
    return 1
  }
  else{
    return Math.ceil(people / 40)
  }
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let count = 0
  arr.forEach(function(animal){
    if (animal.toLowerCase() == 'sheep')
      count ++
  });
  return count
}


function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  let post_code = person.address.postCode
 
  if (post_code.split("")[0] == "M" && person.address.city == "Manchester"){
    return true
  }
  return false
 
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
