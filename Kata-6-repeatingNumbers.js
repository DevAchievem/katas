const repeatNumbers = (arr) => {
  return arr.map(([n, count]) => n.toString().repeat(count)).join(',');
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));