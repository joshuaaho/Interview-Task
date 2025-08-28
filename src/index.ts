import { WordList } from "./constants";

function pickRandomWord(wordList: Record<string, string | number>): WordList {
    const values = Object.keys(wordList);
    const enumKey = values[Math.floor(Math.random() * values.length)];
    return wordList[enumKey] as WordList;
}


