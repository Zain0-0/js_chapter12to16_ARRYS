var num1 = (prompt("Enter the first integer:"));
var num2 = (prompt("Enter the second integer:"));

if (num1 > num2) {
  document.write("The larger integer is: " + num1);
} else if (num2 > num1) {
  document.write("The larger integer is: " + num2);
} else {
  document.write("Both integers are equal.");
}
