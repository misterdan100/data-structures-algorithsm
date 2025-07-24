// implementation of Queue

class Queue{
  #items = []

  // add the item to the end of the queue
  enqueue(item){
    this.#items.push(item)
  }

  // remove and return the first element 
  dequeue() {
    return this.#items.shift()
  }

  isEmpty(){
    return this.#items.length === 0
  }

  peek() {
    return this.#items[0]
  }

  size() {
    return this.#items.length
  }

  getItems() {
    return [...this.#items]
  }
}

class Stack{
  #items = []

  getItems() {
    return [...this.#items]
  }

  push(item) {
    this.#items.push(item)
  }

  pop(item) {
    return this.#items.pop()
  }

  isEmpty() {
    return this.#items.length === 0
  }
}

const queue = new Queue()
const solicitudes = new Stack()

const queueList = document.getElementById('queueList')
const contentDiv = document.getElementById('queueDiv')

function agregar() {
  
  if(queue.isEmpty()) {
    queue.enqueue(1)
  } else {
    const currentQueue = queue.getItems()
    const lastItem = currentQueue[queue.size() - 1]
    console.log(lastItem)
    queue.enqueue(lastItem + 1)
  }

  showQueue()
}

function solicitar() {
  if(!queue.isEmpty()) {
    solicitudes.push(queue.dequeue())
  }

  showSolicitudes()

  showQueue()
}

function showQueue() {
  queueList.textContent = ''
  if(queue.isEmpty()) {
    queueList.textContent = 'Sin solicitudes'
  } else {
    queue.getItems().forEach( item => {
      queueList.textContent += ` | ${item}`
    })
  }
}

function showSolicitudes() {
  contentDiv.textContent = '';
  console.log(solicitudes.getItems())

  if(!solicitudes.isEmpty()) {
    solicitudes.getItems().reverse().forEach( item => {
      contentDiv.innerHTML += `<p>${item} - Atendido</p>`
    })
  }
}

showQueue()