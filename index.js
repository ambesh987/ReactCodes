//React --> client side  --> LIBRARY

// JS --> 1 round 
//    - loops (for, while, do while)
//    - they'll ask dsa question (reverse string, merge two arrays, two sum, etc.. )
//    - let, const and var ka difference -- 101%
//    - event loops in JS
//    - Hoisting
//    - Clousers
//    - Promises -- (pending, fulfilled, rejected)  -- .then , .catch
//    - aysnc await try catch finally
//    - ES6, ECMA Scripts, diff Es5 and Es6

// React 
//      what do you mean by React?
//      use of React?
//      components in React
//      Props -(properties)
//      diff functional and class components
//      JSX
//      key 
//      useEffect, useState (state management), useRef etc..
//      controlled and unControlled components
//      difference between state and props
//      how does React handle forms?
//      React Lifecycle Methods  -- V. IMP
//      lifting stateup in React
//      event handling in React


// function(){
//     var a =10;
//     if(){
//         let c = 10;
//         const d=3.142;
//     }
// }

// clousers -clousers are function that remember the lexical scope in which they were created, even when executed outside that scope.
// function outer(){
//     const outerVar = "I'm a outer function";

//     function inner(){
//         console.log(outerVar);
//     }
//     return inner();
// }
// outer();

// Hoisting:
// Hositing is a JS mechanism where variables and function declarations are moved to the top
// of their containing scope during the compile phase, although their assignments aren't

// eg:
// console.log(x); // undefined
// var x=5;


//null and undefined:

// null : represents an intentional absence of any object value 
// undefined: default value of variable has not been assigned

// scoping: visibility of variables 
//lexical scoping: lexical scoping means the visibility of variables is determined by their location in the code.

// callback function

// prototypal inheritance

// class-  provides blueprint of objects

// HOF:

// Map(), Filter(), Reduce(), forEach()

// slice and splice

//slice: returns a shallow copy of a portion of an array without modifiying the original array
//splice: changes the contents of an array by removing or replacing existing elements

// arrow function and their advantages 
// destructuring
// template literals
// try..catch blocks

//to check if a given string is a palindrome:

//"madam"  == madam

// function isPlaindrome(str){
//     const reverse =str.split('').reverse().join('');
//     console.log(str===reverse);
// }
// isPlaindrome("raca")

// // remove duplicates from an array
// arr =[1,1,12,2,2,2,2]
// function remove (arr){
//     console.log([...new Set(arr)])
// }
// remove(arr);

// factorial, sorting(bubble sort)

// lifitng stateup in react
//life cycle methods

//synthetic events

// useMemo == memoize

// optimizations of webpage