// MAX PRICE 11.50
// Fruits in the market
var fruitList = ['apples', 'oranges', 'bananas', 'pears'];
var fruitObjects = [];
var initialMarketPrice = 5;

$(document).ready(function () {

  // Create fruit objects
  for (var i = 0; i < fruitList.length; i++) {
    fruitObjects[i] = new Fruit(fruitList[i], initialMarketPrice);
  }

  // Create dom objects for markets
  $('#fruit-container').append('<div class = "fruits"></div>');
  var $el = $('#fruit-container').children().last();
  $el.append('<div id = ' + fruit.name + '></div>');

  // Attach data to market DOM elements

  // Event Handler for purchase button
    //get object from DOM
    // call buy function

  // Event Handler for price updates
    // call update price function for each fruit
});

// Update price function

// Function to buy a fruit
Fruit.prototype.buy = function () {
  //check if there's enough cash
  // increment inventory
  // adjust avgPrice
  // deduct price from available money
  // update display (add fruit button, update money, update avgPrice)

};

Fruit.prototype.calcAvgPrice = function () {
  // Multiply previous average price by old inventory, add price,
  // and divide result by new inventory
  // return result
};

// Fruit Constructor
function Fruit(name, marketPrice) {
  this.name = name;
  this.avgPrice = undefined;
  this.marketPrice = marketPrice;
  this.inventory = 0;
}

// Random number function
function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}
