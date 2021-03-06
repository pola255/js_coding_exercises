const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required")
  if (n === undefined) throw new Error("n is required")
  let next_num = null
  nums.forEach((num, index) => {
    if (num === n && next_num === null && index !== nums.length - 1) {
      next_num = nums[index + 1]
    }
  })
  return next_num
}

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required")
  const count = {
    0: 0,
    1: 0
  }
  for (let i = 0; i < str.length; i++) {
    count[str[i]]++
  }
  return count
}

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required")
  const m = Math.abs(n)
  return parseFloat(m.toString().split('').reverse().join('')) * Math.sign(n)
}

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required")
  return arrs.reduce((acc, arr) => arr.reduce(function (a, b) {
    return a + b
  }) + acc, 0) 
}

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required")
  const l = arr.length
  if (l < 2) {
    return arr
  }
  else {
    let aux = arr[l - 1]
    arr[l - 1] = arr[0]
    arr[0] = aux
  }
  return arr
}

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required")
  if (searchTerm === undefined) throw new Error("searchTerm is required")
  searchTerm = searchTerm.toUpperCase()
  for (const key in haystack) {
    const element = haystack[key].toString()
    if (element.toUpperCase().includes(searchTerm))
      return true
  }
  return false
}

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required")
  const wordFrecuencies = {}
  for (let word of str.split(' ')) {
    word = word.toLowerCase()
    word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"")
    if (word in wordFrecuencies) {
      wordFrecuencies[word]++
    }
    else {
      wordFrecuencies[word] = 1
    }
  }
  return wordFrecuencies
}

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
}
