let length =prompt("Which password length do you want?");

    
    while(isNaN(length)){
        length=prompt("try again. please write a number");
    }
    
    let hasUpperCase=prompt(`Great, your password length is ${length}. now please answer with yes or no-do you want Upper Case in your password?`);

    while(hasUpperCase!=='yes' && hasUpperCase!=='no'){
         hasUpperCase=prompt("please answer only with yes or no");
    }
    hasUpperCase =  hasUpperCase==='yes'  ?  true : false;
    
    let hasLowerCase=prompt("and what about Lower Case?");

    while(hasLowerCase!=='yes' && hasLowerCase!=='no'){
         hasLowerCase=prompt("please answer only with yes or no");
    }
    hasLowerCase =  hasLowerCase==='yes'  ?  true : false;
    let hasNumber=prompt("do you want your password be contained numbers?");
    
    while(hasNumber!=='yes' && hasNumber!=='no'){
        hasNumber=prompt("please answer only with yes or no");
    }
    hasNumber = hasNumber==="yes" ?  true : false;
    
    let hasSpecial=prompt("do you want your password be contained Specials Charecterrs?");
    
    
    while(hasSpecial!=='yes' && hasSpecial!=='no'){
        hasSpecial=prompt("please answer only with yes or no");
    }
   
   hasSpecial =  hasSpecial==='yes'  ?  true : false;
    

    




//11
const special = ['!', '@', '#', '$', '^', '&', '*', '+', '-', '.', '~'];
//26
const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//26
const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//9
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// implement the generate()
const generate = (length, hasUppercase , hasLowercase , hasNumbers, hasSpecial) => {
  
  const resultArr = [];
  const tempArr = [];

  if(hasLowercase) tempArr.push(...lower);
  if(hasUppercase) tempArr.push(...upper);
  if(hasNumbers)   tempArr.push(...digits);
  if(hasSpecial)   tempArr.push(...special);

  for (let i = 0; i < length; i++) {  
    resultArr[i] = tempArr[Math.floor(Math.random() * tempArr.length)];
  }
  return resultArr.join('');
}


ok = false;
while(!ok){
    let password=generate(length, hasUpperCase, hasLowerCase, hasNumber, hasSpecial);

    ok= prompt("are you ok with this password?", password);

    while(ok!=='yes' && ok!=='no'){
        ok=prompt("please answer only with yes or no");
    
    }
    ok = ok==="yes" ? true :false;
}

console.log("This is your password : ", password);



