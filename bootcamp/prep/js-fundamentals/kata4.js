const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let count = 0;
  let longestCount = 0;
  let result;

  for (let instructor of instructors){
    count = instructor.name.length;
    if(count > longestCount){
      longestCount = count;
      result = instructor;
    }
  }
  return result;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));