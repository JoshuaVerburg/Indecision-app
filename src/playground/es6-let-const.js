var nameVar = 'josh';
var nameVar = 'John';
console.log('nameVar', nameVar);

let nameLet = 'jen';
nameLet = 'Julie';

console.log('nameLet', nameLet);

const nameConst = 'josh';
//cannot change the value, it is final
console.log('nameConst', nameConst);

//Block scoping
const fullName = 'Joshua Verburg';
let firstName;

if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName)
}
console.log(firstName);