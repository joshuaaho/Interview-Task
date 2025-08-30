import {  MAX_ATTEMPTS} from "./constants";
import calculateWordScore from "./utils/calculateWordScore";
import isCorrectGuess from "./utils/isCorrectGuess";
import promptSync from "prompt-sync";
import { pickRandomWord } from "./utils/pickRandomWord";
import { formatScore } from "./utils/formatScore";

const prompt = promptSync();


export type LetterScore = "P" | "M" | "H";

export type WordScore = [LetterScore, LetterScore, LetterScore, LetterScore, LetterScore];


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