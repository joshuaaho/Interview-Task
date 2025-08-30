import { WordScore } from "../index";
import { Colors } from "../constants";

export function formatScore(guess: string, score: WordScore): string {
  if (guess.length !== 5) {
    throw new Error('Guess must be exactly 5 letters long');
  }
  
  if (score.length !== 5) {
    throw new Error('Score must have exactly 5 elements');
  }

  let formattedWord = '';
  
  for (let i = 0; i < 5; i++) {
    const letter = guess[i].toUpperCase();
    const letterScore = score[i];
    
    let color: string;
    switch (letterScore) {
      case 'H':
        color = Colors.GREEN;
        break;
      case 'P':
        color = Colors.YELLOW;
        break;
      case 'M':
        color = Colors.GREY;
        break;
      default:
        color = Colors.RESET;
    }
    
    formattedWord += `${color}${letter}${Colors.RESET}`;
  }
  
  return formattedWord;
}

export default formatScore;
