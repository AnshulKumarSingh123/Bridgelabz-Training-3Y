// class Student { 
//     #studentId=101;
//     #studentNmae="sahil";


//     getDisplay() {  
//         this.#studentId=102;
//         console.log("StudentId :- "+this.#studentId)
//     }


// }


class Bank {
    #balance = 5000;

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log("Balance is :- " + this.#balance);
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log("Balance is :- " + this.#balance);
        } else {
           alert("Insufficient balance or invalid amount.");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const bank = new Bank();

let choice;
do {
    choice=Number(prompt("Enter your choice: 1. Deposit 2. Withdraw 3. Check Balance 4. Exit"));
    switch(choice) {
        case 1:
            let depositAmount = Number(prompt("Enter deposit amount:"));
            bank.deposit(depositAmount);
            break;
        case 2:
            let withdrawAmount = Number(prompt("Enter withdraw amount:"));
            bank.withdraw(withdrawAmount);
            break;
        case 3:
            console.log("Balance is :- " + bank.getBalance());
            break;
        case 4:
            console.log("Exiting...");
            break;
        default:
            alert("Invalid choice.");
    }
} while(choice !== 4);
