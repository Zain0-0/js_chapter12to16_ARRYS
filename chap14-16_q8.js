var studentNames = ["zain", "John", "Tony"];
var studentScores = [320, 230, 480];
var totalMarks = 500;

for (var i = 0; i < studentNames.length; i++) {
  var name = studentNames[i];
  var score = studentScores[i];
  var percentage = (score / totalMarks) * 100;
  
  document.write("Score of " + name + " is " + score + ". Percentage: " + percentage + "%<br>");
}
