function isPalindrome(word) {
    // Implementing  algorithm here
    // First,  remove any spaces and convert the word to lowercase
    const cleanedWord = word.toLowerCase().replace(/\s/g, '');
  
    // Compare the cleaned word with its reverse
    const reversedWord = cleanedWord.split('').reverse().join('');
  
    // Check if the cleaned word and its reverse are the same
    return cleanedWord === reversedWord;
  }
  
  /* 
    Pseudocode:
    1. Remove spaces from the input word and convert it to lowercase.
    2. Create a reversed version of the cleaned word.
    3. Compare the cleaned word with its reverse.
    4. If they are the same, return true (it's a palindrome); otherwise, return false.
  
    Written Explanation:
    - To determine if a word is a palindrome, we first clean the word by
     removing spaces and converting it to lowercase to ensure case and 
     spaces don't affect the result.
    - Then, we create a reversed version of the cleaned word.
    - Finally, we compare the cleaned word with its reverse.
     If they are the same, it means the word is a palindrome, 
     and we return true; otherwise, we return false.
  */
  
  if (require.main === module) {
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
  }
  
  module.exports = isPalindrome;
  
  