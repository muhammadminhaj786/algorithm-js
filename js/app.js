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

// Confirm the Ending algo 
function confirmEnding(str, target) {
  var len = target.length
  var len2 = str.length 
  var newStr = str.slice(len2-len,len2)
  if(newStr==target){
    return true
  }else{
    return false
  }
}

console.log(confirmEnding("Bastian sasome", "some"));

// Repeat a String Repeat a String algo 
function repeatStringNumTimes(str, num) {
  var newStr2 = ""
  for (let i =0;i<num;i++){
    newStr2 += str
  }
  return newStr2
}

console.log(repeatStringNumTimes("abc", 3));

// Truncate a String algo 
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
truncateString("t basket",4)

// Title Case a Sentence algo
function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}

titleCase("I'm a little baby")
// Sum All Numbers in a Range algo
function sumAll(arr) {
    var temp=0
    if(arr[0]>arr[1]){
        var num = arr[0]
        for(let i=1;i<=num;i++){
            temp+=i
        }
    }else{
        var num = arr[1]
        for(let i=1;i<=num;i++){
            temp+=i
        }
    }
    return temp;
}
  
console.log(sumAll([5, 10]));

//destroyer
function destroyer(arr) {
  const valsToRemove = Object.values(arguments).slice(1);
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    let removeElement = false;
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        removeElement = true;
      }
    }
    if (!removeElement) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

//sum of all prime numbers
function sumPrimes(num) {
  // Helper function to check primality
  function isPrime(num) {
    const sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0)
        return false;
    }
    return true;
  }

  // Check all numbers for primality
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      sum += i;
  }
  return sum;
}