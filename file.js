// Declare a new function
// Highlight the three parameters—placeholders for the words we’ll pass in

function getComputerChoice(a, b, c) {

// Math.random() returns a floating‑point number in the range [0, 1) (including 0, excluding 1).
// Multiplying by 3 scales that to [0, 3).
// Math.floor(...) then rounds down to the nearest integer, giving one of 0, 1, or 2.
// Store it in the constant i, which is used to decide which word to return.

    const i = Math.floor(Math.random() * 3);

// Branch to pick one of the three inputs

    if (i === 0) {          // Checks whether our random index is exactly 0.
      return a;             // If so, return a hands back the first argument.
    } else if (i === 1) {   // Handles the case where the index is 1, returning the second argument
      return b;         
    } else {                // Covers everything else—in this setup that's only when i is 2—so it returns c.
      return c;       
    }
  }
  
  console.log(getComputerChoice('rock', 'paper', 'scissors'));
  
// BASIC EXPLANATION
 // Picks a random number: 0, 1, or 2
 // If it’s 0, give you the first word (a).
 // If it’s 1, give you the second word (b).
 // Otherwise (it must be 2), give you the third word (c).

// DETAILED EXPLAINATION
 // Math.random() - gives you a random decimal between 0 and almost 1 (like 0.73 or 0.05).
 // * 3 - turns that into a number from 0 up to almost 3 (so something like 2.19 or 0.15).
 // Math.floor(...) - rounds down to 0, 1, or 2. That’s our “choice number.”
 // if - checks if choice is 0 → return the first word you passed in (a).
 // if - checks if choice is 1 → return the second word (b).
 // Otherwise (it must be 2) → return the third word (c).
 // So each time you call it, you get back one of your three words at random!

 

 function getHumanChoice() {
    // 1) prompt and capture the result
    let choice = prompt("Choose: Rock, Paper, or Scissors!");
    if (!choice) return null;              // user hit “Cancel”
  
    // 2) optionally validate it
    if (choice === "Rock" || choice === "Paper" || choice === "Scissors") {
      return choice;                       // return the valid choice
    } 
  }
  
  console.log(getHumanChoice());