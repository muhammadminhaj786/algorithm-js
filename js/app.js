//create factorilze algo
function factorialize(num) {
    if (num <= 0) {
      return 1;
    }
    return num * factorialize(num - 1);
  }
  
var result = factorialize(5);
console.log('result=>',result)

var new1 = "old"
console.log(new1) 
//create palindrome algo
// let str = https://github.com/muhammadminhaj786
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

var z = 90
var y = 80;

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

//find mising letters
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    /* code of current character */
    const charCode = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
        then a letter was skipped */
    if (charCode !== str.charCodeAt(0) + i) {
      /* if current character skipped past a character find previous character and return */
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}

// test here
fearNotLetter("abce");

//Wherefore art thou
function whatIsInAName(collection, source) {
  // What's in a name?
  const collectionMatches = [];

  for (let i = 0; i < collection.length; i++) {
    let foundMismatch = false;

    for (const sourceProp in source) {
      if (collection[i][sourceProp] !== source[sourceProp]) {
        foundMismatch = true;
      }
    }
    if (!foundMismatch) {
      collectionMatches.push(collection[i]);
    }
  }
  return collectionMatches;
}

Sum All Odd Fibonacci Numbers
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

// test here
sumFibs(4);

//ceaser cipher
function rot13(str) {
  var cracker = {
    A: "N",B: "O",C: "P", D: "Q", E:"R", F:"S",
    G:"T",H:"U",I:"V",J:"W",K:"X",L:"Y",
    M:"Z",N:"A",O:"B",P:"C",Q:"D",
    R:"E",S:"F",T:"G",U:"H",V:"I",
    W:"J",X:"K",Y:"L",Z:"M", " ":" ", 
    ".":".", "!":"!", "?":"?"
  }

  return str.split("").map(char => cracker[char]).join("");
}

rot13("SERR PBQR PNZC!");

var new = 'string'

//Quick sort
const quickSort = arr => {
    //use spread operator for copy array
  const newArr = [...arr];
  if (newArr.length < 2) return newArr;
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = newArr[pivotIndex];
  const [lo, hi] = newArr.reduce(
    (acc, val, i) => {
      if (val < pivot || (val === pivot && i != pivotIndex)) {
        acc[0].push(val);
      } else if (val > pivot) {
        acc[1].push(val);
      }
      return acc;
    },
    [[], []]
  );
  return [...quickSort(lo), pivot, ...quickSort(hi)];
};
    
//Fibonacci sequence
let number = 10;
let n1 = 0, n2 = 1, nextTerm;
for (let i =1;i<number;i++){
    console.log(n1)
    nextTerm = n1 + n2
    n1 = n2
    n2 = nextTerm
}

var n = 1
 var n1 = 2;
console.log(n)
var b = n1

// remove duplicate characters 
function removeDuplicateChar(str){
  var len = str.length,
      char, 
      charCount = {}, 
      newStr = [];
  for(var i =0; i<len; i++){
    char = str[i];
    if(charCount[char]){
      charCount[char]++;
    }
    else
      charCount[char] = 1;
  }
  for (var j in charCount){
    if (charCount[j]==1)
       newStr.push(j);
  }
  return newStr.join('');
}

removeDuplicateChar('hi my name is name and name')
