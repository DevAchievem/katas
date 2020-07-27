const organizeInstructors = function(instructors) {
  let result = {};
  instructors.forEach(function(elem) {
    if (!result[elem.course]) {
      result[elem.course] = [];
      result[elem.course].push(elem.name);
    } else {
      result[elem.course].push(elem.name);
    }
  });
  return result;
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));

// Expected Output
// {
//   iOS: ["Samuel"],
//   Web: ["Victoria", "Karim", "Donald"]
// }
// {
//   Blockchain: ["Brendan"],
//   Web: ["David", "Carlos"],
//   iOS: ["Martha"]
// }

//  return a new object that has the following format:

//  {
//   CourseName: [instructors]
// } 