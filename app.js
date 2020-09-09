const prompt =require('prompt-sync')();
const {createSolution, checkGuess} = require('./function');

const solution = createSolution();
let runGame = true;
  while (runGame) {
  let guess = [];
  guess = prompt("Enter a 3 digit number"):
  let arrG = [...`${gues}`];

  //checking for duplicates
  while ( (arrG[0] === arrG[1] || (arrG[0] === arrG[2]) || (arrG[1] === arrG[2]) ) {
  guess = prompt("Please enter another number")
  let arrG = [...`${gues}`];
  }

  const result = checkGuess(guess, solution); 
  console.log(result);

  //If winner, exit loop
  if (guess === solution){
  runGame = false;
  }
}
