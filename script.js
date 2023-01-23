// promts
// validate  
// length number
// hasUpperCase hasLowwerCAse ....

//call the generator
// Generate(length, hasUppercase , hasLowercase , hasNumbers, hasSpecial )



//12
const special = ['!', '@', '#', '$', '^', '&', '*', '+', '-', '.', '`', '~'];
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
    resultArr[i] = tempArr[Math.random() * tempArr.length];
  }
  return resultArr.join('');
}

console.log(generate(10, true, true, true, true));