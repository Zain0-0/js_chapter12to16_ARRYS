var cities = ["Karachi", "Islamabad", "Lahore", "Peshawar", "Multan", "Quetta"];
var selectedCities = [];

selectedCities.push(cities[0]);
selectedCities.push(cities[2]);
selectedCities.push(cities[5]);


document.write("Cities list: " + cities.join(", ") + "<br>");
document.write("Selected cities list: " + selectedCities.join(", ") + "<br>");
