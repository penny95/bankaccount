class BankAccount {

  constructor(customerName, accNumber, bankAmount, status){
    this.bankAmount = bankAmount;
    this.status = status;
    this.customerName = customerName;
    this.accNumber = accNumber;

    this.status = ["open","closed"]
  }

  getBalance(){
    for(var i=0; i<=this.status.length; i++){
      if(this.status[i]==="open"){
        return this.bankAmount;
      }
      else if(this.status[i]==="closed"){
        return "Account is closed";
      }
    }}

  open() {
    this.status = "open";
    let newAccount = {'name':this.customerName, 'accNo':this.accNumber, 'status':this.status, 'balance':this.bankAmount}
    return newAccount;
  }
  
  deposit(depositAmount) {
    this.depositAmount=depositAmount;
    for(var i=0; i<=this.status.length; i++){
      if(this.status[i]==="open"){
        if(this.depositAmount <= 0){
          return "Invalid input:Amount should be greater than zero"
        }
        else{
          this.balance = this.depositAmount + this.bankAmount;
          return "Your new balance "+this.balance;
        }
      }
      else if(this.status[i] === "closed"){
        return "Account is closed";
      }
    }
  }
  withdraw(withdrawAmount) {
    this.withdrawAmount = withdrawAmount;
    for(var i=0; i<=this.status.length; i++){
      if(this.status[i] === "open"){
        if((this.withdrawAmount > this.bankAmount)){
           return "Insufficient funds"
          }
          else{
            this.balance = this.bankAmount - this.withdrawAmount;
            return "You have withdrawn " + this.withdrawAmount+ " your remaining balance is "+this.balance;
          }
        }
        else if(this.status[i]==="closed"){
          return "Account is closed";
        }
      }
    }
    close(){
      this.status = "closed";
      this.bankAmount = 0;
      let closedAccount = {
        'status':this.status,
        'AccBalance':this.bankAmount
      }
      return closedAccount;
    }
  }
//myAccount=new BankAccount("penelope","786",3000, "open");
//console.log(myAccount.deposit(-400));
module.exports = BankAccount;
