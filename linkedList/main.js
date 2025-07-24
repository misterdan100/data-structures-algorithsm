// node
class Node{
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class LinkedList{
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);

    // when list is empty the new value will be the head
    if(this.head === null) {
      this.head = node;
    } else {
      // when list is not empty
      // 1. look for the head
      let current = this.head;
      
      // 2. loop through the list
      while(current.next !== null) {
        current = current.next;
      }

      // 3. when find the last element (null) add the new node
      current.next = node;
    }
  }

  show() {
    const array = [];

    let current = this.head

    while(current !== null) {
      array.push(current.value)
      current = current.next
    }

    return array
  }

  size() {
    let size = 0
    let current = this.head

    while(current !== null) {
      size ++
      current = current.next
    }

    return size
  }

  delete(value) {
    // 1. loop through the list to find the element in the next of the current element
    // 2. take the next in the element to find
    // 3. replace next value in the current element by the next value in the element to find
    //check if the value is the head
    if(this.head.value === value) {
      this.head = this.head.next;
    } else { // when isn't the head
      let current = this.head;

      while(current.next !== null) {
        if(current.next.value === value) { // if the value is the value in the next node
          current.next = current.next.next; // replace the current.next node with the next node of the current.next
          break;
        }
        current = current.next // if isn't the next value continue
      }
    }

  }

  clear() {
    // break the chain from head
    this.head = null;
  }

}

const linkList = new LinkedList()
linkList.add('A')
linkList.add('B')
linkList.add('C')
linkList.delete('B')
console.log(linkList.show())
console.log(linkList.size())

//ejemplo de uso de lista

const title = document.getElementById('title')
const image = document.getElementById('image')
const divNext = document.getElementById('next')

const moviesLinkedList = new LinkedList()

moviesLinkedList.add({name: 'Spiderman', picture: 'images/spiderman.jpg'})
moviesLinkedList.add({name: 'Matrix', picture: 'images/matrix.jpg'})
moviesLinkedList.add({name: 'Carol', picture: 'images/carol.jpg'})
moviesLinkedList.add({name: 'Tar', picture: 'images/tar.jpg'})

showMovie()

function showMovie() {
  const movie = moviesLinkedList.head.value;

  title.innerHTML = movie.name
  image.setAttribute('src', movie.picture)

  if(moviesLinkedList.head.next) {
    const movieNext = moviesLinkedList.head.next.value;
    divNext.innerHTML = `Next: ${movieNext.name}`
  } else {
    divNext.innerHTML = 'There are not movies to show'
  }
}

function nextMovie() {
  if(moviesLinkedList.head.next) {
    moviesLinkedList.delete(moviesLinkedList.head.value)
    showMovie();
  }
}

