const { readFileSync } = require('fs');

const input = readFileSync('./day5/input.txt', 'utf-8').split('\n');

const day5 = () => {
  let startingStacks = getStartingStacksMatrix(input);
  let rearrangementProcs = getRearrangementProcsMatrix(input);
  // let newStacks = runRearrangementProcs(rearrangementProcs, startingStacks);

  return { startingStacks, rearrangementProcs };
  // return { startingStacks, rearrangementProcs, newStacks };
};

// Helper Functions
const getFirstStack = (row) => {
  return row.slice(0, 3);
};

const getSecondStack = (row) => {
  return row.slice(4, 7);
};

const getThirdStack = (row) => {
  return row.slice(8, 11);
};

const getStartingStacksMatrix = (input) => {
  const startingStackString = input.slice(0, input.indexOf(''));
  let startingStacks = [[], [], []];
  startingStackString.forEach((row) => {
    if (getFirstStack(row).trim() !== '') startingStacks[0].push(getFirstStack(row));
    if (getSecondStack(row).trim() !== '') startingStacks[1].push(getSecondStack(row));
    if (getThirdStack(row).trim() !== '') startingStacks[2].push(getThirdStack(row));
  });
  startingStacks.forEach((stack) => {
    stack.reverse();
    stack.shift();
  });
  return startingStacks;
};

const getRearrangementProcsMatrix = (input) => {
  const rearrangementProcString = input.slice(input.indexOf('') + 1, input.length);
  let rearrangementProcs = [];
  const isNumber = /[0-9]/gi;
  rearrangementProcString.forEach((proc) => {
    rearrangementProcs.push(proc.match(isNumber));
  });
  return rearrangementProcs.map((proc) => proc.map((procNumber) => Number(procNumber)));
};

const runRearrangementProcs = (procs, stacks) => {
  let newStacks = stacks.map((stack) => stack);
  let crateQtyToMove, crates, fromStack, toStack;
  procs.forEach((proc) => {
    crateQtyToMove = proc[0];
    fromStack = proc[1];
    toStack = proc[2];

    newStacks[toStack - 1].push(
      stacks[fromStack - 1].slice(stacks.length - crateQtyToMove, stacks.length).reverse()[0]
    );
  });

  return newStacks;
};

module.exports = day5;
