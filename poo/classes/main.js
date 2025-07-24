// const daniel = new Object()

// daniel.name = 'Daniel Merchan'
// daniel.age = 30

// console.log(daniel)

// new classe
class People{
  constructor(name, lastname, age) {
    this.name = name
    this.lastname = lastname
    this.age = age
  }

  showLastname() {
    console.log(`${this.name} ${this.lastname}`)
  }
}

// herencia
class Student extends People{
  constructor( name, lastname, age, grade, genre ) {
    super(name, lastname, age) // to send the father's parameters, mandatory
    this.grade = grade
    this.genre = genre
  }

  showGrade() {
    console.log(`${this.name} is in ${this.grade} grade`)
  }
}

const daniel = new People('daniel', 'merchan caceres', 30)
daniel.showLastname()

const danna = new Student('danna', 'merchan', 17, 11, 'female')
danna.showGrade()
danna.showLastname()