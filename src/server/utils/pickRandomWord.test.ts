import { describe, it, expect } from 'vitest';
import { pickRandomWord } from './pickRandomWord';
import { WordList } from '../../constants';

describe('pickRandomWord', () => {
  it('should return a 5 letter word', () => {
    const word = pickRandomWord();
    
    expect(word).toBeDefined();
    expect(typeof word).toBe('string');
    expect(word.length).toBe(5);
  });

  it('should return a valid word from WordList enum', () => {
    const word = pickRandomWord();
    
    expect(Object.keys(WordList)).toContain(word);
  });
}); 