const instructorWithLongestName = instructors => {
  const longestNameLength = instructors.reduce((longestLength, instructor) => {
    return instructor.name.length > longestLength ? instructor.name.length : longestLength;
  }, 0);
  return instructors.filter(instructor => instructor.name.length === longestNameLength);
};


// OTHER OPTION //

// const instructorWithLongestName = function(instructors) {
//     let max_length_el = instructors[0];
//     for(let i=1;i<instructors.length;i++)
//     {
//     if(instructors[i].name.length>max_length_el.name.length){
//         max_length_el = instructors[i];
//     }
//   }
//   return max_length_el;
// }


console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));

console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));