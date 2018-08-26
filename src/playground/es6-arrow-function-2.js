// arguments object= no longer bound with arrow functions
const add =  (a, b) => {
    console.log();
    return a +b;

};
console.log(add(56, 1));




//this keyword no longer bound

const user = {
    name: 'Josh',
    cities: ['Calgary', 'Edmonton', 'Tuscany'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);

    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2,4,6],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());