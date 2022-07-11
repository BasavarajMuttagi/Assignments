let bankID = 1000
let customerID = 2000
let accountNumber = 3000
let allBanks = []
let allCustomers = []


class Bank{

constructor(bankName,bankAbbreviation) {
    this.bankID = bankID++
    this.bankName = bankName
    this.bankAbbreviation = bankAbbreviation
}

static createNewBank(bankName,bankAbbreviation){
        for (let index = 0; index < allBanks.length; index++) {
            if(allBanks[index].bankName == bankName || allBanks[index].bankAbbreviation == bankAbbreviation){
                console.log(`Bank with the name ${bankAbbreviation} Already Exists!!!`);
                return [false]
            }
        }
        let  newBank = new Bank(bankName,bankAbbreviation);
        allBanks.push(newBank);
        return newBank
}


static findBank(bankAbbreviation){
    for (let index = 0; index < allBanks.length; index++) {
        const currentBank = allBanks[index];
        if(currentBank.bankAbbreviation == bankAbbreviation){
            return [true]
        }
    }
    return [false]
}

}


class Accounts{

constructor(bankAbbreviation) {
    this.bankAbbreviation = bankAbbreviation
    this.accountNumber = accountNumber++
    this.balance = 1000
}

updateBalance(balance){
this.balance = this.balance + balance
}

static createNewAccount(bankAbbreviation){
    let newAccount = new Accounts(bankAbbreviation);
    return newAccount
}

}


class Customer{

constructor(firstName,lastName) {
    this.customerID = customerID++
    this.firstName = firstName
    this.lastName = lastName
    this.accounts = []
    this.totalBalance = 0
}

findBankAccount(bankAbbreviation){
 for (let index = 0; index < this.accounts.length; index++) {
    const currentAccount = this.accounts[index];
    if(currentAccount.bankAbbreviation == bankAbbreviation){
        return [true,index]
    }
 }

 return [false,null]
}

findCustomer(creditCustomer){
    for (let index = 0; index < allCustomers.length; index++) {
        const currentCustomer = allCustomers[index];
        if(currentCustomer.customerID == creditCustomer.customerID){
            return [true,index]
        }
     }
     return [false,null]
}

updateTotalBalance(){
    let TemporaryBalance = 0;
    this.accounts.forEach(account => {
        TemporaryBalance = TemporaryBalance +  account.balance
    });

    this.totalBalance = TemporaryBalance
}

createNewBankAccount(bankAbbreviation){
    let [message] = Bank.findBank(bankAbbreviation)
    if(!message){
        console.log(`Bank with the name ${bankAbbreviation} doesn't Exists!!!`);
        return 
    }
    let [check,index]= this.findBankAccount(bankAbbreviation)
    if(check){
        console.log(`Bank Account in ${bankAbbreviation} Already Exists!!!`);
        return
    }

    let newCustomerAccount = Accounts.createNewAccount(bankAbbreviation)
    this.accounts.push(newCustomerAccount)
    this.updateTotalBalance()
} 

static createNewCustomer(firstName,lastName){
      let newCustomer = new Customer(firstName,lastName);
      allCustomers.push(newCustomer)
      return newCustomer;
}

deposit(bankAbbreviation,depositMoney){

    let [message,index] = this.findBankAccount(bankAbbreviation)
    if(message && depositMoney > 0){
        this.accounts[index].updateBalance(depositMoney)
        this.updateTotalBalance()
        return [true]
    }
    console.log(`No Bank Named ${bankAbbreviation}!`);

}

withdraw(bankAbbreviation,withdrawMoney){
    let [message,index] = this.findBankAccount(bankAbbreviation)
    if(!message){
        return 
    }

    if(message && this.accounts[index].balance >= withdrawMoney){
        this.accounts[index].updateBalance(-withdrawMoney)
        this.updateTotalBalance()
        return [true]
    }

    console.log(`Low Balance In The Account!!!`);
    return [false]

}

transfer(debitBankAbbr,creditBankAbbr,amount,creditCustomer){

let [BankCheck] = Bank.findBank(creditBankAbbr)
if(!BankCheck){
    return
}

let [message , CustomerIndex] = this.findCustomer(creditCustomer)
if(!message){
    return
}

let customer = allCustomers[CustomerIndex]
let [status,accountIndex] = customer.findBankAccount(creditBankAbbr)

let [withdrawCheck] = this.withdraw(debitBankAbbr,amount)
if(!withdrawCheck)
{
    return
}
this.updateTotalBalance()
customer.accounts[accountIndex].updateBalance(amount)
customer.updateTotalBalance()

}

selfTransfer(debitBankAbbr,creditBankAbbr,amount){
this.transfer(debitBankAbbr,creditBankAbbr,amount,this)
}

}


const Bank1 = Bank.createNewBank('State Bank Of India','SBI')
const Bank2 = Bank.createNewBank('Bank Of Baroda','BOB')
const Bank3 = Bank.createNewBank('Axis Bank','AXIS')

let Person1 = Customer.createNewCustomer('Lewis','Hamilton')
let Person2 = Customer.createNewCustomer('Paul','Walker')

Person1.createNewBankAccount('SBI')
Person1.createNewBankAccount('BOB')
Person1.createNewBankAccount('AXIS')

Person1.deposit('SBI',5000)
Person1.deposit('BOB',5000)
Person1.deposit('AXIS',5000)

console.log(Person1);


Person2.createNewBankAccount('SBI')
Person2.createNewBankAccount('BOB')
Person2.createNewBankAccount('AXIS')

Person2.deposit('SBI',10000)
Person2.deposit('BOB',10000)
Person2.deposit('AXIS',10000)

console.log(Person2);

Person1.withdraw('SBI',1000)
console.log(Person1);

Person1.transfer('SBI','AXIS',6000,Person2)
console.log(Person1);
console.log(Person2);

Person1.selfTransfer('AXIS','SBI',6000)
console.log(Person1);
