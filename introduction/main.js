const array = [1, 2, 'pato', true];

// function showArray1( array ) {
//   console.log('Start -------------');
//   for( i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
//   console.log('Finish.................');
// }

// function showArrayByForOf(array) {
//   console.log('Start for of ................')
//   for( let item of array ) {
//     console.log(item);
//   }
//   console.log('Finish for of ...............')
// }

// showArray1( array )
// showArrayByForOf(array)

function modArrayReference(array) {
  array.push('Daniel')
  console.log('Array in function: ' + array)
}

console.log(`Array before function: ${array}`)
modArrayReference(array)
console.log(`Array after function: ${array}`)

function sum(num1, num2) {
  console.log(`sum : ${num1 + num2}`)
}

function some( fn, num1, num2) {
  console.log('Start.......')
  fn(num1, num2)
  console.log('Finish.......')
}

some(sum, 2, 2)

