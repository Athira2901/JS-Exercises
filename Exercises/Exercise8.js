class Bankaccount{
    constructor(fname,sname){
        this.fname=fname
        this.sname=sname
        this.balance=0
    }
    

      
    Deposit(amount){
        this.balance=this.balance+amount
        
        console.log("Deposit amount:",amount)
    }
    withdraw(amount){
        this.balance=this.balance-amount
        
        console.log("Withdraw amount:",amount)
    }
    moneyTransfer(account1, cash) {
        if (cash > 0 && this.balance >= cash) {
          this.balance = this.balance - cash;
          account1.balance = account1.balance + cash;
          console.log(cash, "transferred successfully.");
        } else {
          console.log(" insufficient balance.");
        }
      }
      Checkbalance(){
        console.log(this.balance)
      }
}    Bankaccount.prototype.name = function () {
        let n1 = this.fname + " "+this.sname;
        console.log("Name:", n1);
      };
const n2=new Bankaccount("Athira","Prasad")
n2.name()
n2.Deposit(1000)
n2.withdraw(200)

const n3=new Bankaccount("Riswana","Riyas")
n2.moneyTransfer(n3,300)
n3.Checkbalance()
n2.Checkbalance()
