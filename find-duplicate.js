/* Find 3 different solutions for the following problems. Time and space complexity should be different among the 3.
Problem:
Given an array of characters a-z, find if there is any duplicated character

# Example:

Input: a, b, c, d, a
Output: True

Input: a, b, c, d, e
Output: False

 */

// SOLUTION 1
// Time complexity: O(n)

// const findDuplicate = (arr) => {
//   const dict = {};
//   let isDuplicated = false;
//   arr.forEach((item) => {
//     if (typeof dict[item] !== "undefined") {
//       isDuplicated = true;
//       return;
//     }
//     dict[item] = 0;
//   });
//   return isDuplicated;
// };

// SOLUTION 2
// Time complexity: O(n)

// const findDuplicate = (arr) => {
//   const sortedArr = arr.sort();
//   let isDuplicated = false;
//   sortedArr.forEach((item, index) => {
//     if (index < sortedArr.length - 1 && item === sortedArr[index + 1]) {
//       isDuplicated = true;
//       return;
//     }
//   });
//   return isDuplicated;
// };

// SOLUTION 3
// Time complexity: O(1)
const findDuplicate = arr => {
  const deduplicatedArray = Array.from(new Set(arr))
  const isDuplicated = deduplicatedArray.length !== arr.length

  return isDuplicated
}

console.log(findDuplicate(['a', 'b', 'c', 'd', 'e']))
console.log(findDuplicate(['a', 'b', 'c', 'c', 'd', 'e']))
