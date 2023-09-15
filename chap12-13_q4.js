var character = prompt("Enter a single character:");

if (character.length === 1) {
  var isVowel = false;

  if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u" || character === "A" || character === "E" || character === "I" || character === "O" || character === "U") {
    isVowel = true;
  }

  document.write("Is '" + character + "' a vowel? " + isVowel);
} else {
  document.write("Please enter a single character.");
}
