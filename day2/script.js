const { readFileSync } = require('fs');

inputFile = readFileSync(
  'C:/Users/guill/Documents/code/adventOfCode2022/day2/input.txt',
  'utf-8'
);

grid = inputFile.split('\r\n');

let part_1 = () => {
  console.log(grid);
};

let part_2 = () => {
  return 'No answer yet';
};

module.exports = { part_1, part_2 };
