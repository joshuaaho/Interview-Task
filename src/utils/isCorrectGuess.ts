import { WordScore } from "..";

function isCorrectGuess(wordScore: WordScore): boolean {
    return wordScore.every((score) => score === "H");
}

export default isCorrectGuess;