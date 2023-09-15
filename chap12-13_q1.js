var userInput = prompt("Enter a character:");

if (userInput.length === 1) {
  var charCode = userInput.charCodeAt(0);

  if (charCode >= 48 && charCode <= 57) {
    document.write("The input is a number.");
  } else if (charCode >= 65 && charCode <= 90) {
    document.write("The input is an uppercase letter.");
  } else if (charCode >= 97 && charCode <= 122) {
    document.write("The input is a lowercase letter.");
  } else {
    document.write("The input is neither a number nor a letter.");
  }
} else {
  document.write("Please enter a single character.");
}
