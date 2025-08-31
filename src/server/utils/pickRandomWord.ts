import { WordList } from "../constants";

export function pickRandomWord(): string {
    const values = Object.keys(WordList).filter(key => isNaN(Number(key)));
    const enumKey = values[Math.floor(Math.random() * values.length)];
    return enumKey;
  }
