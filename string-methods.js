let name = 'Socheat Yorn';

// Length property
//console.log(name.length);

// Convert sting to upper case
//console.log(name.toUpperCase());

// Convert string to lower case
//console.log(name.toLowerCase());

// Search or find string in a string
//let password = 'abc123456!@#myPassword';
//let strExisted = password.includes('my');

// Return true if exist, otherwise return false
//console.log(strExisted);

// Trim string
//console.log(name.trim());

// Check password string is valid from user input
let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
};

console.log(isValidPassword('sfdsfsffpasswordfff'));
