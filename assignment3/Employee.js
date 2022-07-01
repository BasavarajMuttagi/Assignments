function CalculateAge(DateOfBirth){
    let DOB = new Date(DateOfBirth)
    let Today = new Date()
    let DateUpperLimit = Today.valueOf()
    let DateLowerLimit = DOB.valueOf()
    let Age = Math.floor((DateUpperLimit - DateLowerLimit)/3.154e+10)
    return Age
  }
  
class Employee {
  constructor(firstName, lastName, salaryPM, annualSalary, employeeID, Age, DateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salaryPM = salaryPM;
    this.annualSalary = annualSalary;
    this.employeeID = employeeID;
    this.Age = Age
    this.DateOfBirth = DateOfBirth
  }

  static createNewEmployee(fullName, salaryPM, employeeID, DateOfBirth) {
    const splitName = fullName.split(" ");
    let firstName = splitName[0];
    let lastName = splitName[1];
    let annualSalary = salaryPM * 12;
    let Age = CalculateAge(DateOfBirth)
    let tempEmployee = new Employee(firstName,lastName,salaryPM,annualSalary,employeeID,Age,DateOfBirth);
    return tempEmployee;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  displayFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  updateFirstName(firstName) {
    this.firstName = firstName;
  }

  updateLastName(lastName) {
    this.lastName = lastName;
  }

  updateSalary(salaryPM) {
    this.salaryPM = salaryPM;
    this.updateAnnualSalary(salaryPM * 12);
  }

  updateAnnualSalary(annualSalary) {
    this.annualSalary = annualSalary;
  }

  updateEmployeeID(employeeID) {
    this.employeeID = employeeID;
  }

  updateDateOfBirth(DateOfBirth){
    this.DateOfBirth = DateOfBirth
    this.updateAge(DateOfBirth)
  }

  updateAge(DateOfBirth)
  {
    this.Age = CalculateAge(DateOfBirth)
  }
 
  
  update(propertyToUpdate,value){
    switch (propertyToUpdate) {
            case 'firstName':this.updateFirstName(value)
                    break;
            case 'lastName':this.updateLastName(value)
                    break;
            case 'salaryPM':this.updateSalary(value)
                    break;
            case 'employeeID':this.updateEmployeeID(value)
                    break;
            case 'DateOfBirth':this.updateDateOfBirth(value)
        default: return "Wrong Property!"
    }
  }
}

const Lewis = Employee.createNewEmployee("Lewis Hamilton", 15000, 2022, '2000-08-24');
console.log(Lewis);
Lewis.update('salaryPM',20000)
console.log(Lewis);
Lewis.update('DateOfBirth','1960-08-24')
console.log(Lewis);