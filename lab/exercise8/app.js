alert("Welcome! Please view console on your browser.");
  
  var fullName = "Jake Arthur Jellison";
  var age = 20;
  var nineteen = "twenty"
  var admin = false
  var statement = fullName + age;

console.log(fullName + age + nineteen + admin + statement);

  console.log(10 + 10);
  console.log(40 / 2);
  console.log(30 - 10);
  console.log(10 * 2 + 0);
  console.log(12 * 0 + 14 + 7 - 1);

var country = ["Germany", "Italy", "Japan", "Austrailia", "Mexico"]
  console.log(country[0]);
  console.log(country.length);

var time = "The current time is ";
var d = new Date().getHours() + ":" + new Date().getMinutes() + ".";
  console.log(time + d);


var currentHour = new Date().getHours();
  console.log(currentHour);
    if (currentHour == 11) {
      var msg = "It is 11 now."
    } else {
      var msg = "It is not 11 yet."
    };
  console.log(msg);


if (fullName.length - 2 <= 9)  {
  var response = "My name is relatively short."
} else if (fullName.length - 2 >= 14) {
  var response = "My name is relatively long."
} else {
  var response = "My name is neither short nor long."
}

console.log(response);

var currentTemp = 53;
var spainTemp = 64;

var convert = function(num) {
  return (num - 32) * (5/9);
}

console.log("The temperature in New York City is " + (convert(currentTemp)) + "°C at " + d)
console.log("The temperature in Barcelona, Spain is " + (convert(spainTemp)) + "°C at " + d)



document.getElementById("#box2");

var addPattern = document.createDocumentFragment();
for(var i = 0; i < 50; i++){
   var newDiv = document.createElement('div');
   newDiv.id = "box2"+i;
   newDiv.className = "box";
   addPattern.appendChild(newDiv);
}
document.getElementById("box2").appendChild(addPattern);