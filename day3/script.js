const { readFileSync } = require("fs");

rucksacks = (readFileSync("./day3/input.txt","utf-8")).split("\r\n");

function part_1() {
  let firstCompartment, secondCompartment, matchingItem;
  let priorities = [];
  rucksacks.forEach(rucksack => {
    firstCompartment = rucksack.slice(0, (rucksack.length / 2));
    secondCompartment = rucksack.slice((rucksack.length / 2), rucksack.length);
    let regex;
    firstCompartment.split('').forEach(item => {
      regex = new RegExp(`${item}`);
        if (regex.test(secondCompartment)) matchingItem = item;
    })
    if (/[A-Z]/.test(matchingItem)) priorities.push(matchingItem.charCodeAt() - 38);
    if (/[a-z]/.test(matchingItem)) priorities.push(matchingItem.charCodeAt() - 96);
  })
  return priorities.reduce((prev, current) => prev + current);
}

function part_2() {
  return ''
}

module.exports = { part_1, part_2 };