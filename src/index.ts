import { WordList } from "./constants";

function pickRandomWord(): WordList {
    const values = Object.keys(WordList);
    const enumKey = values[Math.floor(Math.random() * values.length)];
    return WordList[enumKey] as WordList;
}


