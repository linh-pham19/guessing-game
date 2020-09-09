//return an array with 3 unique elements 
function createSolution() {
//define array that takes the three digit 
let arrS = [];


//check for duplicates 
  while (arrS.length < 3 ) {
    let ranNum = Math.floor(Math.random() * 10);
    if (!(arrS.include(ranNum))) {
    arrS.push(ranNum)
    }
  }
  return arrS
}

function checkGuess(guess, solution) {
let arrG = [..`${guess}`];
let arrS = [...`${solution}`];
let hint = [];

  if (guess === solution){
  hint.push(`Winner);
  }

  else if {
    for (let i=0; i < 3; i++) {
        if ( arrG[i] === arrS[i] ) {
          hint.push(`Green);
        }

        else if ( (arrG[0] === arrS[1]) || (arrG[0] === arrS[2]) || (arrG[1] === arrS[2]) ) {
        hint.push(`Yellow`);
        }
     }
  }
  else {
    hint.push(`Red`);
  }
return hint
}
