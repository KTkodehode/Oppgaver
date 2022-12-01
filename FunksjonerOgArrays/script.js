/* Excercise #1:
      Fix the formatText function below such that it fits the given specification:
       * returns given parameter (str) with leading and trailing spaces removed, and all letters converted to lowercase.
*/

// testrun:
console.log(formatText("      Lorem IPSUM.    ")) // expected output (without quotes): "lorem ipsum."

/**
 * formatText function
 * returns given parameter (str) with leading and trailing spaces removed, and all letters converted to lowercase.
 */
function formatText(str) {
  return str
}

/* Excercise #2:
      Change the function in excercise #1 to be an arrow function. 
      If you're getting errors: google javascript hoising. You may need to move the console.log(formatText("      Lorem IPSUM.    ")) from line 7.

      If you're having issues with this excercise, try to first convert the excercise2alternative arrow function below to be a normal named function:
*/

const excercise2alternative = () => {
  return "hello"
}

/* Excercise #3: The autoReply function below takes a function as parameter, call (run/execute) the autoReply function with console.log as callback function.
                 Doing so, you should see "This is an automated response." in the console.
*/

function autoReply(customFunction) {
  customFunction("This is an automated response.")
}

/* Excercise #3b: Create a function that will display some provided text on the website.
                  For example, assuming you named your function: display
                  I should be able to call (run/execute) it with display("hello world!")
                  That should then display: hello world!
                  on the webpage.

                  And then call the autoReply function with your display function.
*/



/* Excercise #4: Create a function that takes two arguments:
                 1. a callback function
                 2. a string

                 And then call (run/execute) your function
                 (this is similar to Excercise #3 but with a custom message instead of only "This is an automated response.")
*/



/* Excercise #4b: In excercises 3 & 4 you've been providing named functions as callback functions, try to call (run/execute) both functions with anonymous functions instead.
                  Use both the function() {} syntax, and then also arrow function.
*/




/* Excercise #5: Create a function takes the following parameters:
                 1. An array
                 2. A callback function

                 In your function write code that will loop through a given array,
                 and with each iteration it will call your provided callback function.

                 Example behaviour, lets say you named your function forEach, if we call it with:
                 forEach(threeFruits, console.log) // would display: 
                  apple
                  banana
                  mango
                 or if we call it with:
                 forEach(fiveWords, console.log) // would display: 
                  one
                  two
                  three
                  four
                  five

                (For this excercise please use traditional loops (not array methods), for-loop, while loop, or for-of loop)
*/

const fiveWords = ["one", "two", "three", "four", "five"]
const threeFruits = ["apple", "banana", "mango"]


/* Excercise #6: Similar to task 5, but instead of first declaring a function and then writing a loop by hand:
                 Use an array method that loops through an array, and provide a callback function that will either console log or display each array element
                 Resources: https://javascript.info/array-methods
                            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

                 Bonus task: see if you can get the array-method to also display the index of each element in addition to just the element, for example:
                             apple at index 0
                             banana at index 1
                             and so on...
*/


/* Excercise #7: In Excercise #6 your task was to iterate through an array and just display the results, in this task try to use an array method that will 
                 Both iterate through an array and also return a new array with each number changed in value, for example:
                 the following (replace someArrayMethod with an actual array method, and yourCallBackFunctionLogic with some code)
                 here it should multiply each element by 3 and then tripleNums should contain all the numbers multiplied by 3:

                 let tripleNums = nums.someArrayMethod(...yourCallBackFunctionLogic...)
                 console.log(tripleNums) // [3,6,9,12,15]
*/

const nums = [1,2,3,4,5]




/* Excercise #8: Use a different array method that will return a new array based on some filter,
                 For example lets say we just want odd numbers from the nums array: 
                              let oddNumbers = nums.someArrayMethod(...yourCallBackFunctionLogic...) 
                              console.log(oddNumbers) // should display: [1,3,5]


                  Resources: https://javascript.info/array-methods
                             https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/




/* Excercise #9: Open excercise: Look through the list of array methods in the previous excercise Resource links (or google a bit yourself)
                 and try to use some different array methods which you haven't seen before, and/or try to combine (chain together) multiple array methods.
*/