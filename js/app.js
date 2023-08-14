//create factorilze algo
function factorialize(num) {
    if (num <= 0) {
      return 1;
    }
    return num * factorialize(num - 1);
  }
  
var result = factorialize(5);
console.log('result=>',result)

//create palindrome algo
// let str = str.length
function palindrome(str){
  for (let i=0;i<str.length/2;i++){
    if(str[i]==str[str.length-1]){
      return ('palindrome')
    }else{
      return ("Not a palindrome")
    }
  }
}

var resultPalindrome= palindrome('madam')
console.log(resultPalindrome)

//Find the Longest Word in a String algo
var temp = 0
function findLongestWordLength(str) {
  var Word = str.split(" ")
  for (let i =0;i<Word.length;i++){
    // console.log(Word[i])
    if(Word[i].length>temp){
      temp = Word[i].length
        }
  }
  return temp;
}

var result2 = findLongestWordLength("May the force be with you");
console.log(result2)

//Return Largest Numbers in Arrays algo
function largestOfFour(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Confirm the Ending algo
function confirmEnding(str, target) {
  var len = str.length
  var newStr = str.split(" ")
  for (let i=0;i<newStr.length;i++){
    console.log(i)

  } 
  // if(str[len-1]==target){
  //   return true
  // }else{
  //   return false
  // }
}

console.log(confirmEnding("Bastian jsd df same", "n"));