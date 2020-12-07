// work right
{
  const Student = function () {}

  const obj = new Student()
  const obj2 = new obj.constructor()
  console.log(obj2)  // Student {}
}

// work wrong
{
  // work wrong
  const Student = function () {}
  const person = { name: 'eathyn' }
  Student.prototype = person

  const obj = new Student()
  const obj2 = new obj.constructor()
  console.log(obj2)  // {}

  // fix
  // const person = {
  //   name: 'eathyn',
  //   constructor: Student
  // }
}
