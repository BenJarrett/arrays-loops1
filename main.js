const array1 = ['cow', 'dog', 'cat'];
const string1 = array1.join(', '); //// turns array into string
const string1ToArray = string1.split(', ');  // turns back into an array // each comma seperates them into a 1 part of the array, without that, it would be one single item of the array, not 3. tell it what you want it to split on, in this case, it is the comma.
// console.log(string1)
// console.log(string1ToArray); 

// ****** .push() & .pop() ****** //
// array1.pop();
// console.log(array1); // takes the last index of array and takes it off the array //
// array1.push('cat');
// console.log(array1); // adds what you want back to the end of the array //// Arrays are mutable so we can change the value fo the array it even though it is assigned with a const // The value of the assignment hasn't actually changed. // does this with both arrays and objects // 

// ***** .unshift() & .shift() ***** // adds to front or back //
array1.unshift('cow');
console.log(array1);
array1.shift();
console.log(array1);
