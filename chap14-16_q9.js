var colorArray = ["Red", "Green", "Blue", "Yellow", "Orange"];

document.write("Original Array: " + colorArray.join(", ") + "<br><br><br>");

var colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
colorArray.unshift(colorToAddAtBeginning);
document.write("After adding at the beginning: " + colorArray.join(", ") + "<br><br>");

var colorToAddAtEnd = prompt("Enter a color to add to the end:");
colorArray.push(colorToAddAtEnd);
document.write("After adding at the end: " + colorArray.join(", ") + "<br><br>");

colorArray.unshift("Purple", "Pink");
document.write("After adding two colors at the beginning: " + colorArray.join(", ") + "<br><br>");

colorArray.shift();
document.write("After deleting the first color: " + colorArray.join(", ") + "<br><br>");

colorArray.pop();
document.write("After deleting the last color: " + colorArray.join(", ") + "<br><br>");

var indexToAdd = prompt("Enter the index to add a color:");
var colorToAddAtIndex = prompt("Enter a color to add at that index:");
if (indexToAdd >= 0 && indexToAdd <= colorArray.length) {
  colorArray.splice(indexToAdd, 0, colorToAddAtIndex);
}
document.write("After adding at index " + indexToAdd + ": " + colorArray.join(", ") + "<br><br>");

var indexToDelete = prompt("Enter the index to delete color(s):");
var numColorsToDelete = prompt("Enter the number of colors to delete:");
if (indexToDelete >= 0 && indexToDelete < colorArray.length && numColorsToDelete > 0) {
  colorArray.splice(indexToDelete, numColorsToDelete);
}
document.write("After deleting from index " + indexToDelete + ": " + colorArray.join(", ") + "<br><br>");
