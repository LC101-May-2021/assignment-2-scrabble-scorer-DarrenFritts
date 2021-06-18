// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
  word = word.toUpperCase();
  let letterPoints = "";

  for (let i = 0; i < word.length; i++) {

    for (const pointValue in oldPointStructure) {

      if (oldPointStructure[pointValue].includes(word[i])) {
        letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      }

    }
  }
  return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  console.log("Let's play some scrabble!");
  let inputWord = input.question("Enter a word to score: ");
  return inputWord;
};

// create simpleScore function
function simpleScore(word) {
  // let numericalScore = 0;
  // for (let i = 0; i < word.length; i++) {
  //   numericalScore = numericalScore +1;
  // }
  // return numericalScore;
  return word.length;
};

// create vowelBonusScore function
vowelArr = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
function vowelBonusScore(word) {
  let numericalScore = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowelArr.includes(word[i])) {
      numericalScore = numericalScore + 3;
    } else {
      numericalScore = numericalScore + 1;
    }
  }
  return numericalScore;
}

// INSTRUCTIONS PART C # 4 ??? supposed to be a function
// use newPointStructure and return a cumalitive score for the whole word entered
let scrabbleScore = function(word) {
  let numericalScore = 0;
  for (let i = 0; i < word.length; i++) {
    let key = word[i].toLowerCase();
    numericalScore = numericalScore + newPointStructure[key];
    // console.log(key);
  }
  // console.log(newPointStructure);
  // console.log(numericalScore);
  return numericalScore;
}

const scoringAlgorithms = [
  // create 3 scoringMethod objects
  {
    name: "Simple Score",
    description: "Each letter is worth 1 point.",
    scoringFunction: simpleScore
  },

  {
    name: "Bonus Vowels",
    description: "Vowels are 3 pts, consonants are 1 pt.",
    scoringFunction: vowelBonusScore
  },

  {
    name: "Scrabble",
    description: "The traditional scoring algorithm.",
    scoringFunction: scrabbleScore
  }
];

function scorerPrompt() {
  let scoringAlgorithmSelected = input.question("Which scoring algorithm would you like to use? \n0 - Simple: One point per character \n1 - Vowel Bonus: Vowels are worth 3 points \n2 - Scrabble: Uses scrablle point system \nEnter 0, 1, or 2: ");
  return scoringAlgorithmSelected;

}

// INSTRUCTIONS PART C # 1 ???
function transform(oldPointStructure) {
  let newPointStructure = {};
  for (let key in oldPointStructure) {
    let letters = oldPointStructure[key];
    // console.log(key + ", " + letters);
    for (let i = 0; i < letters.length; i++) {
      newPointStructure[letters[i].toLowerCase()] = Number(key);
    }
  }
  // console.log(newPointStructure);
  return newPointStructure;
};

// INSTRUCTIONS PART C # 2 && BONUS MISSIONS 2 ??? --- THIS IS SUPPOSED TO BE AN OBJECT ???
// let newPointStructure;
let newPointStructure = transform(oldPointStructure);

function runProgram() {
  let word = initialPrompt();
  let scoringAlgorithmSelected = scorerPrompt();
  if (scoringAlgorithmSelected === "0") {
    let numericalScore = scoringAlgorithms[0].scoringFunction(word);
    console.log(`Score for ${word}: ${numericalScore}`)
  } else if (scoringAlgorithmSelected === "1") {
    let numericalScore = scoringAlgorithms[1].scoringFunction(word);
    console.log(`Score for ${word}: ${numericalScore}`)
  } else if (scoringAlgorithmSelected === "2") {
    let numericalScore = scoringAlgorithms[2].scoringFunction(word);
    console.log(`Score for ${word}: ${numericalScore}`);
  } /*else { // INSTRUCTIONS BONUS MISSIONS 1 ???
    console.log("That is an invalid entry.  Start over.\n");
    runProgram();
   } */
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  initialPrompt: initialPrompt,
  transform: transform,
  oldPointStructure: oldPointStructure,
  simpleScore: simpleScore,
  vowelBonusScore: vowelBonusScore,
  scrabbleScore: scrabbleScore,
  scoringAlgorithms: scoringAlgorithms,
  newPointStructure: newPointStructure,
  runProgram: runProgram,
  scorerPrompt: scorerPrompt
};

