function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; 
}

let result1 = add(5, 3); //result1 is 8
let result2 = subtract(5,3); //result2 is 2
console.log(result1, result2); // Output: 8 2

//Improved function using type guards and type assertions
function concatenate(a: string | number, b: string | number): string {
  if (typeof a === 'number' && typeof b === 'number') {
    return (a + b).toString();
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  } else {
     return a.toString() + b.toString();
  }
}

let result3 = concatenate("Hello", "World");
console.log(result3); // Output: HelloWorld

let result4 = concatenate(5,3);
console.log(result4); // Output: 8

let result5 = concatenate(true, false);
console.log(result5); // Output: truefalse

//Alternatively, overload the function
function concatenate2(a: number, b: number): string;
function concatenate2(a: string, b: string): string;
function concatenate2(a: any, b: any): string {
    return a.toString() + b.toString();
}
console.log(concatenate2(1,2));
console.log(concatenate2("a","b"));