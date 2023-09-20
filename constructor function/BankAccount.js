// BANK ACCOUNT MANAGEMENT
// Task: Implement a bank account management system using JavaScript objects and functions.
// Instructions:
// Create a constructor function called BankAccount that takes accountNumber, name, type, and balance as arguments.
// Inside the constructor, initialize the properties of the bank account object.
// Add the following methods to the BankAccount prototype:
// deposit(amount) - Deposits the specified amount into the account.
// withdraw(amount) - Withdraws the specified amount from the account if the balance is sufficient.
// checkBalance() - Prints the account's balance.
// isActive() - Checks and returns whether the account is active.
// Create multiple BankAccount objects representing different accounts.

// Perform a series of deposit, withdrawal, and balance check operations on these accounts.

// Test the isActive method to check if the accounts are active.

// Implement a function getTotalBalance that calculates and returns the total balance of all active accounts.

// Test the getTotalBalance function to display the total balance of all active accounts.


function BankAccount(accounNumber,name,type,balance){
    this.accounNumber=accounNumber;
    this.name=name;
    this.type=type;
    this.balance=balance;

    this.deposite=function(amount){

        this.balance+=amount;
        console.log(`Your Account  Balance is ${this.balance} rs `)
    }

    this.withdraw=function(amount){
        if(this.balance >= amount && amount > 0)
{
    this.balance-=amount;
    console.log(`After debit ${this.balance} amount is available `)
}
else{
    console.log(`Insuffucient Balance`)
}
     }

    this.checkBalance=function(){
console.log(` Your Account Balance is ${this.balance} rs`)
    }

    this.isActive=function(){
   if(this.balance > 0 ){
    console.log(`Account is active`);
    return true;
   }
   else{
    console.log(`Account is Not Active`);
    return false;
   }
    }
}

let account1=new BankAccount(2345566,"Hardik Pandya","Current",1000);
account1.deposite(10000);
account1.withdraw(3000);
account1.checkBalance();
account1.isActive();

console.log(`--------------------------------------------------------`);


let account2=new BankAccount(8955839,"Rohit Sharma","Saving",2000);
account2.deposite(12000);
account2.withdraw(10000);
account2.checkBalance();
account2.isActive();


console.log(`-------------------------------------------------------------`);


let account3=new BankAccount(3445567,"Virat Kohli","Saving",23459)
account3.deposite(90000);
account3.withdraw(30000);
account3.checkBalance();
account3.isActive();


let account4=new BankAccount(3445567,"Virat Kohli","Saving",100000)
account3.deposite(9000);
account3.withdraw(30000);
account3.checkBalance();
account3.isActive();


let accounts=[account1,account2, account3,account4];
console.log(accounts)

let getTotalBalance = (accounts)=>{
    let sum=0
    accounts.forEach( accounts => {
        if(accounts.isActive()){
          sum+=accounts.balance
        }

    })
    return sum
}

console.log(` Total Of All Active account is : ${getTotalBalance(accounts)} `)