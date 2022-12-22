// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)

var passwordLength = 8-128;
var lowerCase ="abcdefghijklmnopqrstuvwxyz";
var upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters ="!@#$%^&*()+=<>";
var numbers = "0123456789";
let all = "";

// Write password to the #password input
function generatePassword() {
  let passwrdLength = prompt(
    "choose a number between 8 and 128"
  );
  if (passwordLength < 8 || passwordLength > 128 ) {
    prompt("enter a number between 8 and 128.");
  } else {
    let lowerCase = confirm("Would you like to use lowerCase letters?");
    if(lowerCase){
      all += lowerCase
    };
    let upperCase = confirm("Would you like to use upperCase letters?");
    if (upperCase){
      all += upperCase
    };
    let specialCharacters = confirm("Would you like to use specialCharacters?");
    if (specialCharacters){
      all += specialCharacters
    };
    let numbers = confirm("Would you like to use numbers?");
    if (numbers){
      all += numbers
    };
   
   return result }
  }

  let password = "";
  for (var i = 0; i < passwordLength; i++){
    password += all.charAt(Math.floor(Math.random() * all.length))
  }

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn)