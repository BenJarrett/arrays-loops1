// console.log("This is for Arrays-loops")

const students = ['Katy', 'Jackie', 'Sean', 'Nathan'];
// console.log(students.length);

// // ****** ACCESSING ITEMS IN ARRAY
// console.log(students[students.length - 1]); // Nathan // More Dynamic because it we don't need to know the length of the full array!!
// console.log(students[1]); // Jackie

// ******* REASIGN VALUE OF ARRAY ***** //

// students[0] = 'Matthew' // CHANGES THE FIRST VALUE TO MATTHEW
// console.log(students);

// ****** ARRAY WITH FUNCTION ****** //

// const valuePrinter = (array, index) => {
//   return array[index];
// }

// console.log(valuePrinter(students, 2));

// Write a function that takes an array of something and tells you if the name 'Greg' is in that array

const isGregHere = (array) => {
 return array.includes('Greg');
};

console.log(isGregHere(students));
