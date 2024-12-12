function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; 
}

let result1 = add(5, 3); //result1 is 8
let result2 = subtract(5,3); //result2 is 2
console.log(result1, result2); // Output: 8 2

//This function is problematic. If you pass in two strings, it won't throw an error. It will return a string concatenation.
function concatenate(a: any, b: any): string {
    return a + b;
}

let result3 = concatenate("Hello", "World");
console.log(result3); // Output: HelloWorld

let result4 = concatenate(5,3);
console.log(result4); // Output: 8

let result5 = concatenate(true, false);
console.log(result5); // Output: truefalse