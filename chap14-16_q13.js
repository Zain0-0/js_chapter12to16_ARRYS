var devices = [];


devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");


document.write("Devices: " + devices.join(", ") + "<br><br>");


while (devices.length > 0) {
  var device = devices.shift();
  document.write("Out: " + device + "<br>");
}
