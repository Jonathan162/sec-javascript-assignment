

var account = {
    accountName: "Svensson Svensson",
    balance: 100,
    getBalance: function () {
        alert(`Your balance is ${this.balance}.`);
    },
    deposit: function () {
        let increaseBalance = parseFloat(prompt(`How much would you like to deposit?`));
        if ((increaseBalance <= 0) || (increaseBalance === NaN) || (isNaN(increaseBalance))) {
            this.accountError();
            this.deposit();
        }
        else {
            this.balance = increaseBalance + this.balance;
            alert(`Your new balance is ${this.balance}.`);
        }

    },
    withdrawal: function () {
        let reduceBalance = parseFloat(prompt(`How much would you like to withdrawal?`));
        if ((reduceBalance <= 0) || (reduceBalance === NaN) || (isNaN(reduceBalance))) {
            this.accountError();
            this.withdrawal();
        }
        else if (reduceBalance > this.balance) {
            alert(`Sorry. You don't have enough money. Would you like to borrow some?`)
            this.withdrawal();
        }
        else {
            this.balance = this.balance - reduceBalance;
            alert(`Your new balance is ${this.balance}.`);
        }
    },
    getAccountName: function () {
        alert(`Name of account: ${this.accountName}.`);
    },
    accountError: function () {
        alert(`Please only enter a positive number.`);
    },
    exitAccount: function () {
        alert(`Goodbye, thanks for your visit. We hope to see you again!`);
    },
}

// STARTER FUNCTION
// I chose to go with the if/else statement not to complicate it more.
function atm() {
    let choice = 0;

    while (choice != 5) {
        choice = parseInt(prompt(`Select a choice: 1.) See balance. 2.) Make a deposit. 3.) Make a withdrawal. 4.) Get account name. 5.) Exit`));

        if (choice === 1) {
            account.getBalance()
        }

        else if (choice === 2) {
            account.deposit()
        }

        else if (choice === 3) {
            account.withdrawal()
        }

        else if (choice === 4) {
            account.getAccountName()
        }

        else if (choice === 5) {
            account.exitAccount()
        }

        else {
            alert(`This is not a valid action. If you want to exit, please go back and enter number 5.`);
        }
    }
}
atm();