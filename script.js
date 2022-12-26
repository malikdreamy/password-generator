// Assignment code here
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,1,2,3,4,5,6,7,8,9];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "/"];
//var howMany = window.prompt("How many characters do you want your password to be?");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//function writePassword(){
//(function (){
//  var upperVal = window.prompt("Do you want capital letters in your password?");
 //x = password.concat(upperChar)
 
//})();
//}
//writePassword();
//alert(x);




function writePassword(){
password = [];
var upperVal = window.prompt("Do you want capital letters in your password?");
if (upperVal == 'yes'){
x = password.concat(upperChar);
} else {
x = "";
}
var lowerVal = window.prompt("Do you want lowercase letters in your password?");
if (lowerVal == 'yes'){
 y = x.concat(lowerChar);
}else{
  y = "";
  x = password.concat(upperChar)
}
var numVal = window.prompt("Do you want numbers in your password?");
if (numVal == 'yes' && lowerVal == 'yes'){
  z = y.concat(numbers)
}else if (lowerVal !== "yes"){ 
  z = x.concat(numbers);
}else{
  z = "";
  y = x.concat(lowerChar)
} 
var special = window.prompt("Do you want special characters letters in your password?");
if (special == 'yes' && numVal == 'yes'){
  w = z.concat(specialChar);
}else if(numVal !== 'yes'){
  w = y.concat(specialChar);
}
if (special !== "yes" && lowerVal == "yes" && numVal == "yes"){
  w = y.concat(numbers);
}
else if (lowerVal !== 'yes' && upperChar !== 'yes'){
  w = z.concat(specialChar);
} if (special !== "yes" && lowerVal !== "yes" && numVal !== "yes"){ 
  w = password.concat(upperChar);
} else if(specialChar == "yes") {
  w = password.concat(specialChar);
} else if (special !== "yes" && numVal == "yes") {
  w = y.concat(numbers);

} if (special !== "yes" && numVal == "yes" && upperVal == "yes") {
w = z;
}




function checkAmount() {
howMany = window.prompt("How many characters do you want your password to be?");

if (howMany < 8 || howMany > 130){
  alert("Your Password Must Be Longer Than 8 Characters And Shorter Than 130 Characters");
howMany = window.prompt("How many characters do you want your password to be?");
}};
checkAmount();
howMany1 = parseInt(howMany, 10);

let randomArray = [];
    for (var i = 0; i < howMany1 ; i++) {
         //get random value from array
        let randomValue = w[Math.floor(Math.random() * w.length)];
        // put that value inside newArray
       randomArray.unshift(randomValue);
      // turn array to string
       let password1 = randomArray.join('');
      document.getElementById("password").innerText = password1;

    }
  }
  
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
