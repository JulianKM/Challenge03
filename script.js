// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
   
  
  passwordText.value = password;
  
}
function generatePassword() {
  var paawordsLength = 8;
  var characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
  var password = Math.floor(Math.random() * characters.length);
}
for (var i = 0; i < passwordlength; i++) {
  password += characters(Math.floor(Math.random() * characters.length));
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn)
