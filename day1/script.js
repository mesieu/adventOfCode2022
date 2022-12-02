const { readFileSync } = require('fs');

inputFile = readFileSync(
  'C:/Users/guill/Documents/code/adventOfCode2022/day1/input.txt',
  'utf-8'
);
let calories = inputFile.split('\r\n');

let getCaloriesPerElves = (calories) => {
  let caloriesPerElves = [];
  let tempCalSum = 0;
  calories.forEach((cal) => {
    if (cal === '') {
      caloriesPerElves.push(tempCalSum);
      tempCalSum = 0;
    }
    tempCalSum += Number(cal);
  });
  return caloriesPerElves;
};

let part_1 = () => {
  return Math.max(...getCaloriesPerElves(calories));
};

let part_2 = () => {
  let caloriesPerElves = getCaloriesPerElves(calories);
  let topThree = [];
  while (topThree.length < 3) {
    topThree.push(
      caloriesPerElves.splice(
        caloriesPerElves.indexOf(Math.max(...caloriesPerElves)),
        1
      )
    );
  }
  return topThree.reduce(
    (prevValue, value) => Number(prevValue) + Number(value)
  );
};

module.exports = { part_1, part_2 };
