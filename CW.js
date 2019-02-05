//create variable to access HTML element
var clickme = document.getElementById("clickme");
//event
clickme.onclick = function () {
  var userInput = prompt("Would you like to continue?");
  var countArray = [];
  //while loop for prompt
  while (userInput !== "n"){
      countArray.push(userInput);
      userInput = prompt("Would you like to continue? Enter n to quit");
  }
    console.log(countArray.length);
};