
var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperChar =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers =[0,1,2,3,4,5,6,7,8,9];
var specialChar =["!","@","#","$","%","^","&","*","(",")","_","-","+","=","/"];
var combination = lowerChar.concat(upperChar, numbers, specialChar);



let newArrayAll = []; 
let newArraylower = [];
let newArrayupper = [];
let newArrayspecial = [];
let newArrayNumbers =[];

let arrayLengthComb = combination.length;
let lowerLength = lowerChar.length;
let upperLength = upperChar.length;
let specialLength = specialChar.length;
let numberLength = numbers.length;
var msg = '';


// Create random password with all characters
for (i = 0; i < arrayLengthComb; i++) {
// get random value from combination array
let randomValue = combination[Math.floor(Math.random()*combination.length)];
// put that value inside newArray
newArrayAll.unshift(randomValue)
//also move that value to the front of the combination array
combination[0][i] = randomValue;
msg += combination[i];
};


for (i = 0; i < upperLength; i++) {
    // get random value from lower array
    let randomValue = upperChar[Math.floor(Math.random()*upperChar.length)];
    // put that value inside newArraylower
    newArrayupper.unshift(randomValue)
    //also move that value to the front of the lowerChar array
    upperChar[0][i] = randomValue;
    msg += upperChar[i];
    };

for (i = 0; i < lowerLength; i++) {
        // get random value from combination array
        let randomValue = lowerChar[Math.floor(Math.random()*lowerChar.length)];
        // put that value inside newArray
        newArraylower.unshift(randomValue)
        //also move that value to the front of the combination array
        lowerChar[0][i] = randomValue;
        msg += lowerChar[i];
        };

    for (i = 0; i < specialLength; i++) {
            // get random value from combination array
         let randomValue = specialChar[Math.floor(Math.random()*specialChar.length)];
            // put that value inside newArray
        newArrayspecial.unshift(randomValue)
            //also move that value to the front of the combination array
        specialChar[0][i] = randomValue;
        msg += specialChar[i];
            };

            for (i = 0; i < numberLength; i++) {
                // get random value from combination array
             let randomValue = numbers[Math.floor(Math.random()*numbers.length)];
                // put that value inside newArray
            newArrayNumbers.unshift(randomValue)
                //also move that value to the front of the combination array
            numbers[0][i] = randomValue;
            msg += numbers[i];
                };
    



// turn array to string for allChacters
let passwordAllChar = newArrayAll.join('');
let passwordUpper = newArrayupper.join('');
let passwordLower = newArraylower.join('');
let passwordNumbers = newArrayNumbers.join('');
let passwordSpec = newArrayspecial.join('');


document.getElementById("upperCasePassword").addEventListener("click", upperCaseOption);

function upperCaseOption() {
    if (document.getElementById("charAmount").value == ""){
        alert("You must put in a number value");
        document.getElementById("upperCasePassword").style.backgroundColor = "rgb(62, 163, 150);";
    } else{
        
        
        let howLong = document.getElementById("charAmount").value;
            let password = passwordUpper;
    
            if ( howLong < 10 || howLong > 130){
                alert("Your password must be longer than 10 characters and shorter than 130 charachters")
                var nothing = "";
                return nothing;
            } else if (password.length < howLong ){
              let growPassword = password.repeat(howLong);
              let newPassword = growPassword.substring(0, howLong);
              document.getElementById("YourPassword").innerText = newPassword;
            }else { 
                
                document.getElementById("YourPassword").innerText =  password.substring(0, howLong);
               } 
    }
};

document.getElementById("lowerCasePassword").addEventListener("click", lowerCaseOption);

function lowerCaseOption() {
    if (document.getElementById("charAmount").value == ""){
        alert("You must put in a number value");
        document.getElementById("lowerCasePassword").style.backgroundColor = "rgb(62, 163, 150);";
    } else{
        
        
        let howLong = document.getElementById("charAmount").value;
            let password = passwordLower;
    
            if ( howLong < 10 || howLong > 130){
                alert("Your password must be longer than 10 characters and shorter than 130 charachters")
                var nothing = "";
                return nothing;
            } else if (password.length < howLong ){
              let growPassword = password.repeat(howLong);
              let newPassword = growPassword.substring(0, howLong);
              document.getElementById("YourPassword").innerText = newPassword;
            }else { 
                
                document.getElementById("YourPassword").innerText =  password.substring(0, howLong);
               } 
    }
};

document.getElementById("numberPassword").addEventListener("click", numberOption);

function numberOption() {
if (document.getElementById("charAmount").value == ""){
    alert("You must put in  number input value");
    document.getElementById("numberPassword").style.backgroundColor = "rgb(62, 163, 150);";
} else{
    
    
    let howLong = document.getElementById("charAmount").value;
        let password = passwordNumbers;

        if ( howLong < 10 || howLong > 130){
            alert("Your password must be longer than 10 characters and shorter than 130 charachters")
            var nothing = "";
            return nothing;
        } else if (password.length < howLong ){
          let growPassword = password.repeat(howLong);
          let newPassword = growPassword.substring(0, howLong);
          document.getElementById("YourPassword").innerText = newPassword;
        }else { 
            
            document.getElementById("YourPassword").innerText =  password.substring(0, howLong);
           } 
}
};

document.getElementById("specialCharPassword").addEventListener("click", specialOption);

function specialOption() {
if (document.getElementById("charAmount").value == ""){
    alert("You must put in  number input value");
    document.getElementById("specialCharPassword").style.backgroundColor = "rgb(62, 163, 150);";
} else{
    
    
    let howLong = document.getElementById("charAmount").value;
        let password = passwordSpec;

        if ( howLong < 10 || howLong > 130){
            alert("Your password must be longer than 10 characters and shorter than 130 charachters")
            var nothing = "";
            return nothing;
        } else if (password.length < howLong ){
          let growPassword = password.repeat(howLong);
          let newPassword = growPassword.substring(0, howLong);
          document.getElementById("YourPassword").innerText = newPassword;
        }else { 
            
            document.getElementById("YourPassword").innerText =  password.substring(0, howLong);
           } 
}
};

document.getElementById("allCharPassword").addEventListener("click", allOption);

function allOption() {
    if (document.getElementById("charAmount").value == ""){
        alert("You must put in  number input value");
        document.getElementById("allCharPassword").style.backgroundColor = "rgb(62, 163, 150);";
    } else{
        
        
        let howLong = document.getElementById("charAmount").value;
            let password = passwordAllChar;
    
            if ( howLong < 10 || howLong > 130){
                alert("Your password must be longer than 10 characters and shorter than 130 charachters")
                var nothing = "";
                return nothing;
            } else if (password.length < howLong ){
              let growPassword = password.repeat(howLong);
              let newPassword = growPassword.substring(0, howLong);
              document.getElementById("YourPassword").innerText = newPassword;
            }else { 
                
              return  document.getElementById("YourPassword").innerText =  password.substring(0, howLong);
               } 
    }
    };

    document.getElementById("refresh").addEventListener("click", refresh)

    function refresh(){
        window.location.reload();
    }
