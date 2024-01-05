/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let result = 0;
  for(let i=0;i<str.length;i++){
    if(str[i] in {a:null,e:null,i:null,o:null,u:null,A:null,E:null,I:null,O:null,U:null}){
      result += 1;
    }
  }
  return result;
}

module.exports = countVowels;