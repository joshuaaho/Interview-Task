
import { WordScore } from "../index";

function calculateWordScore(guess: string, answer: string): WordScore {
    
    
    if (guess.length !== 5 || answer.length !== 5) {
        throw new Error('Both guess and answer must be exactly 5 letters long');
    }
    
    // Check if strings contain only English alphabet letters (case-insensitive)
    const alphabetRegex = /^[a-zA-Z]+$/;
    if (!alphabetRegex.test(guess) || !alphabetRegex.test(answer)) {
        throw new Error('Both guess and answer must contain only English alphabet letters');
    }
    
    // Convert to uppercase for case-insensitive comparison
    const upperGuess = guess.toUpperCase();
    const upperAnswer = answer.toUpperCase();
 
    const result: WordScore = ["P", "P", "P", "P", "P"];

    for (let i = 0; i < 5; i++) {
        if (upperGuess[i] === upperAnswer[i]) {
            result[i] = "H";
        } else if (upperAnswer.includes(upperGuess[i])) {
            result[i] = "P";
        } else {
            result[i] = "M";
        }
    }
    return result;
}

export default calculateWordScore;