var inputTime = prompt("Enter time in 24-hour clock format (e.g., 1900 for 7:00 PM):");

if (inputTime >= 0 && inputTime < 1200) {
  document.write("Good morning.");
} else if (inputTime >= 1200 && inputTime < 1700) {
  document.write("Good afternoon.");
} else if (inputTime >= 1700 && inputTime < 2100) {
  document.write("Good evening.");
} else if (inputTime >= 2100 && inputTime <= 2359) {
  document.write("Good night.");
} else {
  document.write("Please enter the time in the correct format.");
}
