const sumLargestNumbers = (arr) => {
  let highestInt = 0;
  let nextHighestInt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highestInt) {
      nextHighestInt = highestInt;
      highestInt = arr[i];
    } else if (arr[i] > nextHighestInt) {
      nextHighestInt = arr[i];
    } else {
      continue;
    }
  }
  return highestInt + nextHighestInt;
};
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));