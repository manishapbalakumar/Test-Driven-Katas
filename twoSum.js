// function twoSum(numbers, target) {
//   console.log(numbers);

//   if (numbers.length < 2) {
//     return [];
//   }

//   let sumNums = numbers.reduce(
//     (accum, currentVal) =>
//       //sum of all numbers in numbers array
//       accum + currentVal,
//     0
//   );
//   //if all numbers don't equal the target, then no two elements will equal the target so return an emmpty array
//   console.log(sumNums);
//   if (sumNums < target) {
//     return [];
//   } else {
//     return [1, 2];
//   }
// }

const twoSum = (numbers, target) => {
  if (numbers.length < 2) return [];
  const seen = {};
  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];
    const numToFind = target - currentNum;
    if (seen[numToFind] !== undefined) return [seen[numToFind], i];
    seen[currentNum] = i;
  }
  return [];
};

module.exports = twoSum;
