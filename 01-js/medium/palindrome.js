/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str1 = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let revStr = "";
    for(let i=str1.length-1;i>=0;i--){
    
      revStr += str1[i];
    }
    console.log(str1);
    console.log(revStr);
    if(str1 === revStr){
      return true;
    }else{
      return false;
    }
}

module.exports = isPalindrome;
