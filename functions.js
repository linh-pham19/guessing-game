//return an array with 3 unique elements 
function createSolution() {
//define array that takes the three digit 
let arrS = [];


//check for duplicates 
  while (arrS.length < 3 ) {
    let ranNum = Math.floor(Math.random() * 10);
    if (!(arrS.includes(ranNum))) {
    arrS.push(ranNum)
    }
  }
  return arrS
}

function checkGuess(guess, solution) {
let arrG = [..`${guess}`];
let arrS = [...`${solution}`];
let hint = [];
//check for complete match. Example: 123 vs 123 
  if (guess === solution){
  hint.push(`Winner`);
  }
  
//check for no match between two strings
  else if ( !(arrG[0] === arrS[1]) && !(arrG[0] === arrS[2]) && (arrG[1] === arrS[2]) ) {
    hint.push(`Red`);
  }

  else {
    for (let i=0; i < 3; i++) {
        if ( arrG[i] === arrS[i] ) { //position matching
          hint.push(`Green);
        }

        else if ( (arrG[0] === arrS[1]) || (arrG[0] === arrS[2]) || (arrG[1] === arrS[2]) ) { //match but not in the same position
        hint.push(`Yellow`);
        }
     }
  }
//   else {
//     hint.push(`Red`);
//   }
return hint
}
