const multiplicationTable = function(maxValue) {

  let table = "";

  for (let i = 1; i <= maxValue; i++) {
    let tableLine = "";
    for (let j = 1; j <= maxValue; j++) {
      tableLine += "" + (i * j) + " ";
    }
    tableLine += "\n";
    table += tableLine;
  }
  return table;
};
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
