/*
* Keynotes: 26 letters in alphabet
* Unicode chars for letters (small one): a(97), ...., z(122)
* Key is shiffting value (e.g. A with key 2 is C)
*/

//O(n) Time | O(n) Space
function caesarCipherEncryptor(string, key) {
  let newString = [];
  for(const letter of string) {
    newString.push(encryptLetter(letter,key));
  }
  return newString.join('');
}

function encryptLetter(letter, key) {
  key = key % 26; // there are 26 letters
  let newLetterCode = letter.charCodeAt() + key; // get unicode value for letter; z = 122 max value
  let unicodeLetter =  (newLetterCode <= 122)? newLetterCode : (newLetterCode) % 122 + 96;
  return String.fromCharCode(unicodeLetter);
}

//O(n) Time | O(n) Space
function caesarCipherEncryptor1(string, key) {
  let newString = [];
  for(const letter of string) {
    newString.push(encryptLetter(letter,key));
  }
  return newString.join('');
}

function encryptLetter1(letter, key) {
  key = key % 26; // there are 26 letters
  const alphabet = ["abcdefghijklmnopqrstuvwxyz"];
  let newLetterCode = alphabet.indexOf(letter) + key; // get unicode value for letter; z = 122 max value
  let unicodeLetter =  (newLetterCode <= 26)? newLetterCode : (newLetterCode) % 26;
  return String.fromCharCode(unicodeLetter);
}

// Test

const data = "abcz";
console.log(caesarCipherEncryptor1(data, 0))