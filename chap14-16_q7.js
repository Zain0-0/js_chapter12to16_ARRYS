var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
var qualificationList = "Qualifications:<br><br>";

for (var i = 0; i < qualifications.length; i++) {
  qualificationList += (i + 1) + ". " + qualifications[i] + "<br>";
}

document.write(qualificationList);
