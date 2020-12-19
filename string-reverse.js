/* 
Write a function that takes a list of characters and reverses the letters.
Please don't use the built-in function 
Input: ['a','b','c','d']
Output: ['d','c','b','a']
*/

const reverseString = list => {
  const result = []
  for (let i = list.length - 1; i >= 0; i--) {
    result.push(list[i])
  }
  return result``
}

console.log(reverseString(['a', 'b', 'c', 'd']))
