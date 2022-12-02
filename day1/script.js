const { readFileSync } = require('fs');

calories = (readFileSync('./day1/input.txt','utf-8')).split('\r\n');


function getCaloriesPerElves(calories){
  let caloriesPerElves = [];
  let tempCalorieSum = 0;
  calories.forEach((calorie) => {
    if (calorie === '') {
      caloriesPerElves.push(tempCalorieSum);
      tempCalorieSum = 0;
    }
    tempCalorieSum += Number(calorie);
  });
  return caloriesPerElves;
};

function part_1() {
  return Math.max(...getCaloriesPerElves(calories));
};

function part_2() {
  let caloriesPerElves = getCaloriesPerElves(calories);
  let topThree = [];
  while (topThree.length < 3) {
    topThree.push(caloriesPerElves.splice(caloriesPerElves.indexOf(Math.max(...caloriesPerElves)), 1));
  }
  return topThree.reduce(
    (prevValue, value) => Number(prevValue) + Number(value)
  );
};

module.exports = { part_1, part_2 };
