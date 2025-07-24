class Stack {
  // constructor() {
  //   this.items = [];
  // }

  #items = []


  // add an element to the last of the array
  push(newElement) {
    this.#items.push(newElement)
  }

  // subtract the las element in the array
  pop() {
  
    return this.#items.pop()
  }

  // return the last element without delete it
  peek() {
    console.log("peek:" + this.#items[this.#items.length - 1])
    return this.#items[this.#items.length - 1]
  }

  // return boolean weather the array is empty or not
  isEmpty() {
    console.log("isEmpty:" + this.#items.length === 0)
    return this.#items.length === 0
  }

  // return the size of array
  size() {
    console.log("size:" + this.#items.length)
    return this.#items.length;
  }
}

const array = new Stack()
// array.#items = ['Lucas']

array.push('Daniel')
array.peek()
array.push('Merchan')
array.push('Caceres')
array.pop()
console.log(array)
array.isEmpty()
array.size()