let conditionalSum = function(values, condition) {
  let sum = 0;
  values.forEach(function(value) {
    if (condition === "even" && value % 2 === 0) {
      sum += value;
    } else if (condition === 'odd' && value % 2 !== 0) {
      sum += value;
    }
  });
  return sum;

};
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));


// Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

