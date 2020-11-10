// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  var num= +userInput[0];
  var num1 = num*1;
  var num2 = num*2;
  var num3 = num*3;
  console.log(num1,num2,num3);
  //console.log(userInput);

  //end-here
});