var nameVar = 'Carlos';
var nameVar = 'Miguel';
console.log('nameVar', nameVar);

let nameLet = 'Carlos';
nameLet = 'Miguel';
console.log('nameLet', nameLet);

const nameConst = 'Carlos';
console.log('nameConst', nameConst);

const fullName = 'Carlos Castro';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);