const { readFileSync } = require('fs');

rucksacks = readFileSync('./day3/input.txt', 'utf-8').split('\r\n');

const UpperCasePriorityOffSet = 27;
const LowerCasePriorityOffset = 1;
function getPriority(matchingItem) {
  if (matchingItem === matchingItem.toUpperCase()) {
    return (
      matchingItem.charCodeAt() - ('A'.charCodeAt() - UpperCasePriorityOffSet)
    );
  } else {
    return (
      matchingItem.charCodeAt() - ('a'.charCodeAt() - LowerCasePriorityOffset)
    );
  }
}

function part_1() {
  console.log(rucksacks.length);
  let firstCompartment, secondCompartment, matchingItem;
  let priorities = [];
  rucksacks.forEach((rucksack) => {
    firstCompartment = rucksack.slice(0, rucksack.length / 2);
    secondCompartment = rucksack.slice(rucksack.length / 2, rucksack.length);

    firstCompartment.split('').forEach((item) => {
      if (secondCompartment.includes(item)) matchingItem = item;
    });
    priorities.push(getPriority(matchingItem));
  });
  return priorities.reduce((prev, current) => prev + current, 0);
}

function part_2() {
  return '';
}

module.exports = { part_1, part_2 };
