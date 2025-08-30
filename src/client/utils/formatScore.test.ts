import { describe, it, expect } from 'vitest';
import { formatScore } from './formatScore';
import { WordScore } from '../index';

describe('formatScore', () => {
  it('should format a word with correct colors for mixed scores', () => {
    const guess = "HEART";
    const score: WordScore = ["M", "P", "H", "M", "P"];
    
    const result = formatScore(guess, score);
    
    expect(result).toBe(
      '\x1b[90mH\x1b[0m\x1b[33mE\x1b[0m\x1b[32mA\x1b[0m\x1b[90mR\x1b[0m\x1b[33mT\x1b[0m'
    );
  });

  it('should display all letters in green for perfect match', () => {
    const guess = "APPLE";
    const score: WordScore = ["H", "H", "H", "H", "H"];
    
    const result = formatScore(guess, score);
    
    expect(result).toBe(
      '\x1b[32mA\x1b[0m\x1b[32mP\x1b[0m\x1b[32mP\x1b[0m\x1b[32mL\x1b[0m\x1b[32mE\x1b[0m'
    );
  });

  it('should display all letters in grey for no matches', () => {
    const guess = "ZZZZZ";
    const score: WordScore = ["M", "M", "M", "M", "M"];
    
    const result = formatScore(guess, score);
    
    expect(result).toBe(
      '\x1b[90mZ\x1b[0m\x1b[90mZ\x1b[0m\x1b[90mZ\x1b[0m\x1b[90mZ\x1b[0m\x1b[90mZ\x1b[0m'
    );
  });

  it('should display all letters in yellow for wrong positions', () => {
    const guess = "CHAIR";
    const score: WordScore = ["P", "P", "P", "P", "P"];
    
    const result = formatScore(guess, score);
    
    expect(result).toBe(
      '\x1b[33mC\x1b[0m\x1b[33mH\x1b[0m\x1b[33mA\x1b[0m\x1b[33mI\x1b[0m\x1b[33mR\x1b[0m'
    );
  });

}); 