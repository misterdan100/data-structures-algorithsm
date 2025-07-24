// valores primitivos en JS
// string, number, bigint, boolean, undefined, symbol


let number = 4;

function edit(num, value) {
  num = value
  console.log('El valor interno es: ' + num)

}

edit(5, 10)

// clase original, valor no primitivo
class A {
  constructor(number) {
    this.number = number
  }
}

let a = new A(10) // new object A instance

// function that modify and object attribute
function editObject(obj, value) {
  obj.number = value // modify object attribute
  console.log(`Object value between function is: ${obj.number}`)
}

console.log('a object before function: ' + a.number) // before mod 10
editObject(a, 20) // 20
console.log('a object after function: ' + a.number) // after mod 20