var values = [];


values.push("Keyboard");
values.push("Mouse");
values.push("Printer");
values.push("Monitro");


document.write("Original Values: " + values.join(", ") + "<br><br>");


while (values.length > 0) {
  var value = values.pop();
  document.write("Out: " + value + "<br>");
}
