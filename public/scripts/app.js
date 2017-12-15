'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
  // console.log(arguments);
  return a + b;
};
console.log(add(20, 5));

// this keyword - no longer bound

var user = {
  name: 'Andrew',
  cities: ['Iasi', 'Oslo', 'Torino'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
  }
};
console.log(user.printPlacesLived());

var multiplier = {
  numbers: [2, 4, 6, 8],
  multiplyBy: 3,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return _this2.multiplyBy * number;
    });
  }
};
console.log(multiplier.multiply());
