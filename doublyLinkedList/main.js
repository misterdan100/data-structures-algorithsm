class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  add(value) {
    this.length++;
    const node = new Node(value)

    if(this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail
      this.tail = node;
    }
  }

  peek(value) {

    if(this.head.value === value) return this.head
    if(this.tail.value === value) return this.tail

    let current = this.head

    while(current.next !== null) {
      if(current.next.value === value) {
        return current.next
      } 
      current = current.next
    }

  }

  show() {
    let current = this.head;
    const list = []

    console.log('-----------------------')
    console.log(`Head: ${this.head?.value}`)
    console.log(`Tail: ${this.tail?.value}`)

    while(current !== null) {
      console.log(`Node: ${current.value}
        Prev: ${current.prev?.value}
        Next: ${current.next?.value}`)
        list.push(current.value)
      current = current.next
    }

    return list
  }

  reverse() {
    let current = this.tail
    const list = []
    console.log('---- tail ----')

    while(current !== null) {
      console.log(`Node: ${current.value}   Prev: ${current.prev?.value} Next: ${current.next?.value}`)
      list.push(current.value)
      current = current.prev
    }

    return list
  }

  delete(value) {
    // if list is empty just return
    if(this.length === 0) return;

    //if the value is the head
    if(this.head.value === value) {
      if(this.head.next) { // if there are more elements
        this.head = this.head.next;
        this.head.prev = null
      } else { // if there are not more elements
        this.head = null
        this.tail = null
      }
      this.length--;
    } else if(this.tail.value === value) { // if value is the tail
      this.tail = this.tail.prev
      this.tail.next = null
      this.length--;
    } else { // if value is in the middle
      let current = this.head;
      
      while(current.next !== null) {
        if(current.next.value === value) { // check if value is the next element to replace the current.next, and the current.next.prev
          current.next = current.next.next
          current.next.prev = current
          this.length--;
          break;
        } else {
          current = current.next
        }
      }
    }
  }

  size() {
    let current = this.head;
    let counter = 0;

    while(current !== null) {
      counter++
      current = current.next
    }

    console.log(`Size is ${counter}`)
  }
  
  clean() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

const list = new DoublyLinkedList();
list.add('Lucas')
list.add('Daniel')
list.add('Antonella')
list.add('Paulina')

list.delete('Antonell')

list.show()
list.size()
list.reverse()

const movies = new DoublyLinkedList();
const title = document.getElementById('title')
const image = document.getElementById('image')
const info = document.getElementById('info')

movies.add('carol')
movies.add('matrix')
movies.add('spiderman')
movies.add('tar')

function showMovie(movieName) {
  const movie = movies.peek(movieName)

  title.textContent = movie.value
  image.src = `../images/${movie.value}.jpg`

  let textInfo = ''
  if(movie.prev) {
    textInfo += `Prev: ${movie.prev.value}`
  }

  textInfo += ' - '
  if(movie.next) {
    textInfo += `Next: ${movie.next.value}`
  }

  info.textContent = textInfo
}

function nextMovie() {
  const currentMovie = movies.peek(title.innerText)
  showMovie(currentMovie.next.value)
}

function prevMovie() {
  const currentMovie = movies.peek(title.innerHTML) 
  showMovie(currentMovie.prev.value)
}

function start() {
  const firstMovie = movies.show()[0]
  console.log(firstMovie)

  if(firstMovie) {
    showMovie(firstMovie)
  } else {
    title.textContent = 'Not movies'
  }

}

start()