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
// discover prefix 6012, 644, 645, 646, 647, 648, 649, and 65 => length of 16 or 19
//maestro prefix of 5018, 5020, 5038, 6304, && length of 12, 13,14,15,16,17,18,19
function parse(string) {
	return parseInt(string, 10);
}

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  var firstTwo = cardNumber.slice(0,2);
  var firstThree = cardNumber.slice(0,3);
  var firstFour = cardNumber.slice(0,4);
  var firstSix = cardNumber.slice(0,6);
  var num = parse(firstTwo);
  var three = parse(firstThree);
  var four = parse(firstFour);
  var six = parse(firstSix);
  var maestroLengths = [12, 13, 14, 15, 16, 17, 18, 19];
  var switchLengths = [16, 18, 19];
  var switchPrefix = [4903, 4905, 4911, 4936, 564182, 633110, 633, 6759];
  //Switch 
  for (var o = 0; o < switchLengths.length; o++) {
  	debugger;
  	for (var d = 0; d < switchPrefix.length; d++) {
      if (four === switchPrefix[d] && cardNumber.length === switchLengths[o]) {
      	return 'Switch';
      } else if (three === switchPrefix[d] && cardNumber.length === switchLengths[o]) {
      	return 'Switch';
      } else if (six === switchPrefix[d] && cardNumber.length === switchLengths[o]) {
      	return 'Switch';
      }
    }
  }
  //Diner's Club
  if (num === 38 && cardNumber.length === 14 || num === 39 && cardNumber.length === 14) {
  	return "Diner's Club";
  }
  //American Express
  if (num === 34 && cardNumber.length === 15 || num === 37 && cardNumber.length === 15) {
  	return "American Express";
  }
  //MasterCard
  if ((num === 51 || num === 52 || num === 53 || num === 54 ||  num === 55) && cardNumber.length === 16) {
  	return "MasterCard";
  }
  //Visa
  if (parseInt(cardNumber[0], 10) === 4 && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
  	return "Visa";
  }
  //Discover
  if ((four === 6011 || three === 644 || three === 645 || three === 646 || three === 647 || three === 648 || three === 649 || num  === 65) && (cardNumber.length === 16 || cardNumber.length === 19)) return 'Discover';
  //Maestro
  for (var i = 0; i < maestroLengths.length; i++) {
    if ((four === 5018 || four === 5020 || four === 5038 || four === 6304) && (cardNumber.length === maestroLengths[i])) {
      return 'Maestro';
    }
  }
  //China UnionPay
  // create a for loops to iterate possiblities //start @ 622126 and terminate < 622925
  for (var k = 622126; k <= 622925; i ++) {
  	for (var j = 16; j <= 19; j++) {
      if (six === k && cardNumber.length === j) {
      	return 'China UnionPay';
      }
  	}
  }
  for (var a = 6282; a <= 6288; a++) {
  	for (var s = 16; s <= 19; s++) {
  	  if (four === a && cardNumber.length === s) {
  	  	return 'China UnionPay';
  	  }
  	}
  }
  if ((three === 624 || three === 625 || three === 626) && (cardNumber.length === 16 ||cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length === 19)) {
  	return 'China UnionPay';
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};



