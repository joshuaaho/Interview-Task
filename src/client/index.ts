import {  MAX_ATTEMPTS} from "./constants";
import calculateWordScore from "./utils/calculateWordScore";
import isCorrectGuess from "./server/utils/isCorrectGuess";
import promptSync from "prompt-sync";
import { pickRandomWord } from "./server/utils/pickRandomWord";
import { formatScore } from "./utils/formatScore";

const prompt = promptSync();




const randomWord: any = pickRandomWord();


for (let i = 0; i < MAX_ATTEMPTS; i++) {
  const guess: any = prompt("Enter your guess: ");

  const score = calculateWordScore(guess, randomWord);


  console.log(formatScore(guess, score))
  if (isCorrectGuess(score)) {
    console.log("You win!");
    break;
  }

  if (i === MAX_ATTEMPTS - 1) {
    console.log("You lose!")
    break;
  }

}

console.log("The word was ", randomWord)