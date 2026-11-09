
# 📘 Assignment: Hangman Game

## 🎯 Objective

Build a word-guessing game in Python. Practice using strings, loops, conditionals, random selection, and user input.

## 📝 Tasks

### 🛠️	Build the Core Game

#### Description
Complete the starter code to select a secret word and let the player guess its letters until the word is revealed or the player runs out of attempts.

#### Requirements
Completed program should:

- Randomly select one word from the provided word list
- Display each letter as a blank until it has been guessed
- Ask the player for a letter and reveal every matching position in the secret word


### 🛠️	Track Guesses and End the Game

#### Description
Track incorrect guesses and finish the game with a clear result when the player wins or uses all available attempts.

#### Requirements
Completed program should:

- Decrease the remaining attempts when a guess is not in the secret word
- Continue the game while the word has unguessed letters and attempts remain
- Display a win message when the word is guessed, or a loss message and the secret word when attempts run out
