// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

//i - given string
//o - string w/ name of network (check w/ prefix and w/ length)

//notes: diner's club start w/ 38 or 39 => 14 digits long / amex 15digits => starts w/ 34 or 37
// check the first two index in the string and the length => make parseInt Func

function parse(string) {
	return parseInt(string, 10);
}

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  var firstTwo = cardNumber.slice(0,2);
  var num = parse(firstTwo);

  (num === 38 && cardNumber.length === 14 || num === 39 && cardNumber.length === 14) return "Diner's Club";
  (num === 34 && cardNumber.length === 15 || num === 37 && cardNumber.length === 15) return "American Express"
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


