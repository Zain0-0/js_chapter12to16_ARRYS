var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

var selectMenuHTML = '<select id="manufacturerSelect">';


for (var i = 0; i < manufacturers.length; i++) {
  selectMenuHTML += '<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>';
}

selectMenuHTML += '</select>';

document.write(selectMenuHTML);
