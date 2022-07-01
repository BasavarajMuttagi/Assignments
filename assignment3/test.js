// class Employee{
//     constructor(firstName,lastName,employeeID){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.employeeID = employeeID
//     }

//     fullName(){
//         return this.firstName+" "+this.lastName
//     }

//     static displayTeam(emp1,emp2){
//         return emp1.fullName() +" "+emp2.fullName()
//     }

// }

// const Basu = new Employee('Basavaraj','Muttagi',2022);
// const Raj = new Employee('raj','Muttagi',2023);
// console.log(Employee.displayTeam(Basu,Raj)); 


// class Square{
//     constructor(Length,Breadth) {
//         this.Length = Length
//         this.Breadth = Breadth
//     }

//     // get area(){
//     //     return this.Length * this.Breadth
//     // }
//     set area(Number){
//     this.Length = Number
//     this.Breadth = Number
//     }

// }

// const square1 = new Square(10,10);


// console.log(square1);
// square1.area = 100
// console.log(square1);


// let DOB = new Date("Aug 24,2000")
// let Today = new Date()

// let DateUpperLimit = Today.valueOf()
// let DateLowerLimit = DOB.valueOf()
// let Age = Math.floor((DateUpperLimit - DateLowerLimit)/3.154e+10)


// console.log(Age);

function CalculateAge(DateOfBirth){
    let DOB = new Date(DateOfBirth)
    let Today = new Date()
    let DateUpperLimit = Today.valueOf()
    let DateLowerLimit = DOB.valueOf()
    let Age = Math.floor((DateUpperLimit - DateLowerLimit)/3.154e+10)
    return Age
  }

console.log(CalculateAge('2000-08-24'))
