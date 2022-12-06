const { readFileSync } = require('fs');

assignmentPairs = readFileSync('./day4/input.txt', 'utf-8')
  .split('\r\n')
  .map((row) => row.split(',').map((pair) => pair.split('-').map((number) => Number(number))));

console.log(assignmentPairs);
let containedAssignments = 0;
let overlappingAssignments = 0;
function day4() {
  assignmentPairs.forEach((assignmentPair) => {
    firstAssignment = assignmentPair[0];
    secondAssignment = assignmentPair[1];
    containedAssignments = assignmentIsContained(firstAssignment, secondAssignment)
      ? (containedAssignments += 1)
      : containedAssignments;
    overlappingAssignments = assignmentIsOverlapping(firstAssignment, secondAssignment)
      ? (overlappingAssignments += 1)
      : overlappingAssignments;
  });
  return {
    part1Result: containedAssignments,
    part2Result: overlappingAssignments,
  };
}

// Helper Functions
function assignmentIsContained(firstAssignment, secondAssignment) {
  return (
    (firstAssignment[0] >= secondAssignment[0] && firstAssignment[1] <= secondAssignment[1]) ||
    (secondAssignment[0] >= firstAssignment[0] && secondAssignment[1] <= firstAssignment[1])
  );
}

function assignmentIsOverlapping(firstAssignment, secondAssignment) {
  return firstAssignment[0] <= secondAssignment[1] && firstAssignment[1] >= secondAssignment[0];
}

module.exports = day4;
