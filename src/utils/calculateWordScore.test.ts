import { test, expect } from "vitest";
import calculateWordScore from "./calculateWordScore";

test("A guess with some M, P and H should show all the letters", () => {
  expect(calculateWordScore("hello", "world")).toEqual([
    "M",
    "M",
    "P",
    "H",
    "P",
  ]);
});

test("A guess with all H should show only H", () => {
  expect(calculateWordScore("hello", "hello")).toEqual([
    "H",
    "H",
    "H",
    "H",
    "H",
  ]);
});

test("A guess with all M should show only M", () => {
  expect(calculateWordScore("horse", "giddy")).toEqual([
    "M",
    "M",
    "M",
    "M",
    "M",
  ]);
});