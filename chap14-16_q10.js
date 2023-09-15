var studentScores = [320, 230, 480, 120];

document.write("Scores of students: " + studentScores.join(", ") + "<br>");

studentScores.sort(function(a, b) {
  return a - b;
});


document.write("Ordered scores of students: " + studentScores.join(", ") + "<br>");
