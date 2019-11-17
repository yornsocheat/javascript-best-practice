/////////////////////
// My account object
let myAccount = {
    name: 'Socheat Yorn',
    expense: 0,
    income: 0,
    addExpense: function (amount) {
        this.expense = this.expense + amount;
    },
    addIncome: function (amount) {
        this.income = this.income + amount;
    },
    resetAccountExpenseIncome: function () {
        this.expense = 0;
        this.income = 0;
    },
    getAccountSummary: function () {
        let balance = this.income - this.expense;
        return `Hi ${this.name}. Your balance summery is ${balance}`;
    }
}

myAccount.addExpense(5);
myAccount.addExpense(10);
myAccount.addIncome(200);

console.log(myAccount.getAccountSummary());
