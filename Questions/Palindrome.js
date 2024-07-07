///   plaindrome ka matalb ye hota hai koi bhi string agar rverse karte hai to same ata hai usi ko plaindrome kahte hai


{/*   // for example me    = dad isko revese kiye to = dad hi aaye ga 
  // noon=noon,  level=level*/ }


//   function isPal(str) {
//     // Convert the string to lower case
//     str = str.toLowerCase();
    
//     // Split the string into individual characters, reverse them, and join them back into a string
//     let reversed = str.split('').reverse().join('');
    
//     return str === reversed;
// }

// console.log(isPal("manjeet"));  // returns false
// console.log(isPal("madam"));    // returns true
// console.log(isPal("Madam"));    // returns true





/*

/// another method
function isPal(){
  let str = "manjeet";
  let arr = str.split("");
  let reversed = [];

  for (const key of arr) {
    reversed.unshift(key);
  }

  return arr.join("") === reversed.join("");
}

console.log(isPal()); // Output: false

*/