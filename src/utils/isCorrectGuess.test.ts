import { expect, test } from "vitest";
import isCorrectGuess from "./isCorrectGuess";

test("isCorrectGuess should return true if the word score is all H", () => {
  expect(isCorrectGuess(["H", "H", "H", "H", "H"])).toBe(true);
});