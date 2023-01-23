let length =prompt("Which password length do you want?");

    
    while(isNaN(length)){
        length=prompt("try again. please write a number");
    }
    let hasUpperCase=prompt(`Great, your password length is ${length}. now please answer with yes or no-do you want Upper Case in your password?`);

    while(hasUpperCase!=='yes' || hasUpperCase!=='no'){
        let hasUpperCase=prompt("please answer only with yes or no");
    }
    
    let hasLowerCase=prompt("and what about Lower Case")





// promts
// validate  
// length number
// hasUpperCase hasLowwerCAse ....

