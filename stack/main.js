class Stack {
  // constructor() {
  //   this.items = [];
  // }

  #items = []

  list() {
    return this.#items
  }


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

const nameList = new Stack()

const contentDiv = document.getElementById('content')

function printStack() {
  contentDiv.innerHTML = ''

  for(let item of nameList.list()) {
    const newP = document.createElement('p')
    newP.textContent = item
    contentDiv.appendChild(newP)
  }
}

function addToStack() {
  const inputElement = document.getElementById('inputName');
  if(inputElement.length === 0) return
  
  nameList.push(inputElement.value)

  printStack()

  inputElement.value = ''
  inputElement.focus()
}

function returnLast() {
  nameList.pop()
  printStack()
}