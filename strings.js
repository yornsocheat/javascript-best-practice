let firstName = 'Socheat';
let lastName = 'Yorn';
let fullName = firstName + ' ' + lastName;
let gender = 'Male';
let city = 'Phnom Penh';
let country = 'Cambodia';
let location = city + ', ' + country;

// template string
let myProfile = `My name is ${fullName}. I am ${gender}. I am living in ${location}`;

console.log('Your full name is', fullName);
console.log('Your location is', location);
console.log(myProfile);
