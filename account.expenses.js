const account = {
    name: 'Socheat Yorn',
    expenses: [],
    incomes: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description,
            amount
        });
    },
    addIncome: function (description, amount) {
        this.incomes.push({
            description,
            amount
        });
    },
    getAccountSummery: function () {
        let totalExpense = 0;
        let totalIncome = 0;

        this.expenses.forEach(function (expense) {
            totalExpense += expense.amount;
        });
        this.incomes.forEach(function (income) {
            totalIncome += income.amount;
        });

        return `${this.name.toUpperCase()} has account summary below:\nTotal Expenses has $${totalExpense} \nTotal Income has $${totalIncome} \nAccount Balance has $${totalIncome - totalExpense}`;
    }
};
account.addExpense('House Rent', 240);
account.addExpense('Coffee', 150);
account.addIncome('Salary', 1500);
console.log(account.getAccountSummery());
