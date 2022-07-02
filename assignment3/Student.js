
class Student{
    constructor(firstName,lastName,fullName,DOB,AGE,SemesterCGPAArray,FinalCGPA,SemesterGrades,FinalGrade,YearofEnrollment,YearofPassing,NumberOfYearstoGraduate){
        this.firstName = firstName
        this.lastName = lastName
        this.fullName = fullName
        this.DOB = DOB
        this.AGE = AGE
        this.SemesterCGPAArray = SemesterCGPAArray
        this.FinalCGPA = FinalCGPA
        this.SemesterGrades = SemesterGrades
        this.FinalGrade = FinalGrade
        this.YearofEnrollment = YearofEnrollment
        this.YearofPassing=YearofPassing
        this.NumberOfYearstoGraduate=NumberOfYearstoGraduate
    }
    static calculateAge(DateOfBirth){
      let DOB = new Date(DateOfBirth)
      let Today = new Date()
      let DateUpperLimit = Today.valueOf()
      let DateLowerLimit = DOB.valueOf()
      let Age = Math.floor((DateUpperLimit - DateLowerLimit)/3.154e+10)
      return Age
    }

   static  calculatAverage(array) {
      var i = 0, sum = 0, len = array.length;
      while (i < len) {
          sum = sum + array[i++];
      }
      return sum / len;
    }

   static  assignGrades(SemesterCGPAArray){
      let tempArray = []
      for(let index = 0; index <SemesterCGPAArray.length; index ++){
        if(SemesterCGPAArray[index] >9 && SemesterCGPAArray[index] <=10){
          tempArray[index] = 'A'
        }
        if(SemesterCGPAArray[index] >8 && SemesterCGPAArray[index] <=9){
          tempArray[index] = 'B'
        }
        if(SemesterCGPAArray[index] >7 && SemesterCGPAArray[index] <=8){
          tempArray[index] = 'C'
        }
        if(SemesterCGPAArray[index] >6 && SemesterCGPAArray[index] <=7) {
          tempArray[index] = 'D'
        }
        if(SemesterCGPAArray[index]<=6) {
          tempArray[index] = 'D'
        }
      }
      return tempArray
    }

    static  assignFinalGrade(FinalCGPA){
      let tempGrade
      
        if(FinalCGPA >9 && FinalCGPA  <=10){
          tempGrade = 'A'
        }
        if(FinalCGPA  >8 && FinalCGPA <=9){
          tempGrade = 'B'
        }
        if(FinalCGPA >7 && FinalCGPA <=8){
          tempGrade = 'C'
        }
        if(FinalCGPA >6 && FinalCGPA <=7) {
          tempGrade = 'D'
        }
        if(FinalCGPA<=6) {
          tempGrade = 'D'
        }
      
      return tempGrade
    }

    static splitName(fullName){
      const splitName = fullName.split(" ");
      return splitName
    }

    static createNewStudent(firstName,lastName,DOB,SemesterCGPAArray,YearofEnrollment,YearofPassing) {
        const fullName = firstName +" "+lastName
        const AGE = Student.calculateAge(DOB)
        const NumberOfYearstoGraduate = YearofPassing - YearofEnrollment
        const CGPA = Student.calculatAverage(SemesterCGPAArray)
        const SemesterGrades = Student.assignGrades(SemesterCGPAArray)
        const FinalGrade = Student.assignFinalGrade(CGPA)
        const tempStudent = new Student(firstName,lastName,fullName,DOB,AGE,SemesterCGPAArray,CGPA,SemesterGrades,FinalGrade,YearofEnrollment,YearofPassing,NumberOfYearstoGraduate)
        return tempStudent;
      }


      displayFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
      }
      updateCGPA(CGPA){
        this.SemesterCGPAArray = CGPA
        this.SemesterGrades = Student.assignGrades(SemesterCGPAArray)
      }
      
      updateFirstName(firstName) {
        this.firstName = firstName;
        this.fullName = this.firstName +" "+this.lastName
      }

      updateLastName(lastName) {
        this.lastName = lastName;
        this.fullName = this.firstName +" "+this.lastName
      }

      updateNumberOfYearstoGraduate(NumberOfYearstoGraduate){
        this.NumberOfYearstoGraduate = NumberOfYearstoGraduate
      }

      updateYearOfPassing(YearofPassing){
        this.YearofPassing = YearofPassing
        this.updateNumberOfYearstoGraduate(this.YearofPassing - this.YearofEnrollment)
    }

    updateYearofEnrollment(YearofEnrollment){
      this.YearofEnrollment = YearofEnrollment
      this.updateNumberOfYearstoGraduate(this.YearofPassing - this.YearofEnrollment)
    }

    updateAge(DateOfBirth){
      this.AGE = Student.calculateAge(DateOfBirth)
    }

    updateDateOfBirth(DateOfBirth){
      this.DOB = DateOfBirth
      this.updateAge(DateOfBirth)
    }

  updateFullName(fullName){
    this.fullName = fullName
    let splitNameArray = Student.splitName(fullName)
    this.updateFirstName(splitNameArray[0])
    this.updateLastName(splitNameArray[1])
  }

 

  
  update(propertyToUpdate,value){
    switch (propertyToUpdate) {
            case 'firstName':this.updateFirstName(value)
                    break;
            case 'lastName':this.updateLastName(value)
                    break;
            case 'fullName':this.updateFullName(value)
                    break;
            case 'YearOfPassing':this.updateYearOfPassing(value)
                    break;
            case 'YearofEnrollment':this.updateYearofEnrollment(value)
                    break;
            case 'DateOfBirth':this.updateDateOfBirth(value)
                    break;
            case 'SemesterCGPAArray ':this.updateCGPA(value)
                    break;
        default: return "Wrong Property!"
    }
  }

}

const Lewis = Student.createNewStudent('Lewis','Hamilton','2000-08-24',[5,6,7,8,9,10],2018,2022)
console.log(Lewis);
