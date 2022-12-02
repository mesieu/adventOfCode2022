const { readFileSync } = require("fs");

inputFile = readFileSync(
  "C:/Users/guill/Documents/code/adventOfCode2022/day2/input.txt",
  "utf-8"
);

grid = inputFile.split("\r\n");

let opponentMove = {
  "A": "Rock",
  "B": "Paper",
  "C": "Scissors",
};
let responseMove = {
  "X": "Rock",
  "Y": "Paper",
  "Z": "Scissors",
};

let part_1 = () => {
  let totalPoints = 0;
  grid.forEach((round) => {
    round = round.split(' ');
    switch (responseMove[round[1]]) {
      case "Rock":
        totalPoints += 1;
        if (opponentMove[round[0]] == "Rock") totalPoints += 3;
        if (opponentMove[round[0]] == "Scissors") totalPoints += 6;
        break;
      case "Paper":
        totalPoints += 2;
        if (opponentMove[round[0]] == "Paper") totalPoints += 3;
        if (opponentMove[round[0]] == "Rock") totalPoints += 6;
        break;
      case "Scissors":
        totalPoints += 3;
        if (opponentMove[round[0]] == "Scissors") totalPoints += 3;
        if (opponentMove[round[0]] == "Paper") totalPoints += 6;
        break;
    }
  });
  return totalPoints;
};

let part_2 = () => {
  let totalPoints = 0;
  grid.forEach((round) => {
    round = round.split(' ');
    switch (opponentMove[round[0]]) {
      case "Rock":
        if (round[1] == "X") totalPoints += (3);
        if (round[1] == "Y") totalPoints += (1 + 3);
        if (round[1] == "Z") totalPoints += (2 + 6);
        break;
      case "Paper":
        if (round[1] == "X") totalPoints += (1);
        if (round[1] == "Y") totalPoints += (2 + 3);
        if (round[1] == "Z") totalPoints += (3 + 6);
        break;
      case "Scissors":
        if (round[1] == "X") totalPoints += (2);
        if (round[1] == "Y") totalPoints += (3 + 3);
        if (round[1] == "Z") totalPoints += (1 + 6);
        break;
    }
  });
  return totalPoints;
};

module.exports = { part_1, part_2 };
