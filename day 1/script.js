const { readFileSync } = require('fs');

let part_1 = () => {
  let inputFile = readFileSync('input.txt', 'utf-8');
  let calArr = inputFile.split('\r\n');
  let elvesArr = [];
  let tempCalCount = 0;
  calArr.forEach((cal) => {
    if (cal != '') {
      tempCalCount += Number(cal);
    } else {
      elvesArr.push(tempCalCount);
      tempCalCount = 0;
    }
  });
  return elvesArr;
};

let part_2 = (elvesArr) => {
  let topThreeElves = [];
  while (topThreeElves.length <= 3) {
    topThreeElves.push(elvesArr.pop(Math.max(...elvesArr)));
  }
  return topThreeElves;
};

console.log(Math.max(...part_1()));
console.log(part_2());
