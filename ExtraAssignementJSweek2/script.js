function doubleSwap(string, charA, charB) {
let swap = " ";

for (let i = 0; i < string.length; i++) {

    if (string[i] === charA){
        swap += charB;
    } else if (string[i] === charB) {
        swap += charA;
    } else {
        swap = swap + string[i];
    }
}
return swap;
}
console.log(doubleSwap("this is a string", "i", "s"));
console.log(doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a"));
console.log(doubleSwap("what is the point of this?", "o", "t"));
console.log(doubleSwap("CghJh%!&hu78UHb(gb!hdsl#dakgf!dal!", "g", "!"));
console.log(doubleSwap("let's do one last test", "l", "e"));


// READ CAREFULLY!!

// Complete the function below to accomplish the following:

// Return the string received in the first parameter with the following alterations:

// any letter in the string matching charA (the second parameter in the function) will be replaced with

// charB (the third parameter) and VICE VERSA - meaning letters matching charA will be replaced with charB,

// and letters matching charB will be replaced with charA. See the expected console log comments below.

// function doubleSwap(string, charA, charB) {}

// console.log(doubleSwap("this is a string", "i", "s"));
// console.log(doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a"));
// console.log(doubleSwap("what is the point of this?", "o", "t"));
// console.log(doubleSwap("CghJh%!&hu78UHb(gb!hdsl#dakgf!dal!", "g", "!"));
// console.log(doubleSwap("let's do one last test", "l", "e"));

// this should log the following:

// thsi si a itrsng

// maybe another approach is necessary

// whao is ohe ptino tf ohis?

// C!hJh%g&hu78UHb(!bghdsl#dak!fgdalg

// elt's do onl east tlst
