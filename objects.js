let books = {
    title: 'Headfirst',
    author: 'Tom Wilken',
    pageCount: 1234
};

let basicInfo = {
    name: 'Socheat Yorn',
    age: 30,
    location: 'Phnom Penh, Cambodia.'
};

let otherBooks = books;
// Add a property to object reference
otherBooks.test = '123';

//console.log(otherBooks);
//console.log(books);
//console.log(`${basicInfo.name} is ${basicInfo.age} and live in ${basicInfo.location}`);

//basicInfo.age = basicInfo.age + 1;
//basicInfo.age += 1;
//console.log(`${basicInfo.name} is ${basicInfo.age} and live in ${basicInfo.location}`);

/////////////////////
// My account object
let myAccount = {
    name: 'Socheat Yorn',
    expense: 0,
    income: 0
}
// Add income function
let addExpense = function (account, amount) {
    account.expense = account.expense + amount;
};

// Add expense function
let addIncome = function (account, amount) {
    account.income = account.income + amount;
};

// Reset account expense and income
let resetAccountExpenseIncome = function (account, amount) {
    account.expense = 0;
    account.income = 0;
}

// Get account summary
let getAccountSummary = function (account) {
    let balance = account.income - account.expense;
    return `Hi ${account.name}. Your balance summery is ${balance}`;
}

addExpense(myAccount, 5);
addExpense(myAccount, 10);
addIncome(myAccount, 200);

console.log(getAccountSummary(myAccount));
