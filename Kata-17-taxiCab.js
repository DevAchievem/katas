const blocksAway = function(directions) {
  let output = {};
  output.east = 0;
  output.north = 0;

  let direction = "";

  if (directions[0] === "right") {
    direction = "east";
    output.east += directions[1];
  }

  if (directions[0] === "left") {
    direction = "north";
    output.north += directions[1];
  }

  for (let i = 2; i < directions.length; i += 2) {

    if (direction === 'east' && directions[i] === 'left') {
      direction = 'north';
      output.north += directions[i + 1];
    } else if (direction === 'east' && directions[i] === 'right') {
      direction = 'south';
      output.north -= directions[i + 1];
    } else if (direction === 'north' && directions[i] === 'left') {
      direction = 'west';
      output.east -= directions[i + 1];
    } else if (direction === 'north' && directions[i] === 'right') {
      direction = 'east';
      output.east += directions[i + 1];
    } else if (direction === 'west' && directions[i] === 'left') {
      direction = 'south';
      output.north -= directions[i + 1];
    } else if (direction === 'west' && directions[i] === 'right') {
      direction = 'north';
      output.north += directions[i + 1];
    } else if (direction === 'south' && directions[i] === 'left') {
      direction = 'east';
      output.east += directions[i + 1];
    } else if (direction === 'south' && directions[i] === 'right') {
      direction = 'west';
      output.east -= directions[i + 1];
    }

  }
  return output;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));


// output
// {east: 1, north: 3}
// {east: 3, north: 3}
// {east: 0, north: 0}