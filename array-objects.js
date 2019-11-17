let products = [{}, {
    name: 'Macbook Air',
    color: 'Silver',
    storage: '256GB',
    ram: '8GB'
}, {
    name: 'Macbook Pro',
    color: 'Black',
    storage: '500GB',
    ram: '16GB'
}, {
    name: 'Macbook Pro X',
    color: 'Red',
    storage: '1TB',
    ram: '32GB'
}];

console.log(products.indexOf({}));
console.log({} === {}); // false

let obj = {};
let otherObj = obj;

console.log('s' === 's');
