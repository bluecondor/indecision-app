// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};
console.log(add(20, 5)); 

// this keyword - no longer bound

const user = {
  name: 'Andrew',
  cities: ['Iasi', 'Oslo', 'Torino'],
  printPlacesLived () {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }  
};
console.log(user.printPlacesLived());

const multiplier = {
  numbers: [2, 4, 6, 8],
  multiplyBy: 3,
  multiply () {
    return this.numbers.map((number) => this.multiplyBy * number);
  }
};
console.log(multiplier.multiply());