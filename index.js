
// 33 Basic JavaScript: Word Blanks


// var wordBlanks = "the" + ' '+ myNoun +" "+ myAdjective+ " " + myVerb +" "+ myAdverb; // Change this line

// In a "Mad Libs" game, you are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.

// Consider this sentence - "It was really ____, and we ____ ourselves ____". This sentence has three missing pieces- an adjective, a verb and an adverb, and we can add words of our choice to complete it. We can then assign the completed sentence to a variable as follows:

// var sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
// In this challenge, we provide you with a noun, a verb, an adjective and an adverb. You need to form a complete sentence using words of your choice, along with the words we provide.

// You will need to use the string concatenation operator + to build a new string, using the provided variables: myNoun, myAdjective, myVerb, and myAdverb. You will then assign the formed string to the wordBlanks variable. You should not change the words assigned to the variables.

// You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. The result should be a complete sentence.


/*
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";
*/


// Only change code below this line
var wordBlanks = "The " + myNoun + " is really " + myAdjective + ' and it ' + myVerb + " very " + myAdverb; // Change this line
// Only change code above this line





// 34 Basic JavaScript: Store Multiple Values in one Variable using JavaScript Arrays


// With JavaScript array variables, we can store several pieces of data in one place.

// You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this:

// var sandwich = ["peanut butter", "jelly", "bread"].

// Modify the new array myArray so that it contains both a string and a number (in that order).
// Only change code below this line
var myArray = ["cheeseburger" 3];




// 35 Basic JavaScript: Nest one Array within Another Array


// You can also nest arrays within other arrays, like below:

// [["Bulls", 23], ["White Sox", 45]]
// This is also called a multi-dimensional array.

// Create a nested array called myArray.

// Only change code below this line
var myArray = [["hello",13],["goodbye"]];



// 36 Basic JavaScript: Access Array Data with Indexes
// We can access the data inside arrays using indexes.

// Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing, so the first element in an array has an index of 0.


// Example

// var array = [50,60,70];
// array[0]; // equals 50
// var data = array[1]; 
// equals 60

// Create a variable called myData and set it to equal the first value of myArray using bracket notation.

// Setup
var myArray = [50,60,70];

// Only change code below this line
var myData = myArray[0]





// 37 Basic JavaScript: Modify Array Data With Indexes
// Unlike strings, the entries of arrays are mutable and can be changed freely.


// Example

// var ourArray = [50,40,30];
// ourArray[0] = 15; // equals [15,40,30]

// Modify the data stored at index 0 of myArray to a value of 45.
// Setup
var myArray = [18,64,99];

// Only change code below this line