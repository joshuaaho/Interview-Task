import { WordList } from "./constants";

function pickRandomWord(wordList: WordList): WordList {
    const values = Object.keys(wordList);
    const enumKey = values[Math.floor(Math.random() * values.length)];
    return wordList[enumKey];
}

