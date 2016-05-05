// MAX PRICE 11.50
// Fruits in the market
var fruitList = ['Apples', 'Oranges', 'Bananas', 'Pears'];
var fruitObjects = [];
var initialMarketPrice = 5.00;
var priceDelay = 15000;
var maxPrice = 11.5;
var minPrice = 0.5;

$(document).ready(function () {

  // Create fruit objects
  for (var i = 0; i < fruitList.length; i++) {
    fruitObjects[i] = new Fruit(fruitList[i], initialMarketPrice);
    // Create dom objects for markets
    var object =fruitObjects[i];
        $('#fruit-container').append('<div class = "fruits"></div>');
        var $el = $('#fruit-container').children().last();

        $el.append('<p><span class ="name">' + object.name + '</span></p>' +
        '<p>Market Price: $<span class ="market-price">' + object.marketPrice + '</span></p>' +
        '<p>Average Price: $<span class="avg-price">' + object.avgPrice + ' </span></p>' +
        '<p>Inventory: <span class="inventory">' + object.inventory +'</span></p>' +
        '<button class="btn btn-default">Buy</button>').data(object);
        console.log($('.fruits').last().data());
}
  // Attach data to market DOM elements

  // Event Handler for purchase button
    //get object from DOM
    // call buy function

  // Event Handler for price updates
  var priceUpdaterID = setInterval(updatePrice, priceDelay);
    // call update price function for each fruit
  function updatePrice() {
    for (i=0;i<fruitList.length;i++){
      object = $('.fruits').eq(i).data();
      object.marketPrice = generateRandomPrice(object.marketPrice);
      $('.fruits').eq(i).data(object);
      $('.fruits').eq(i).find('.market-price').text(object.marketPrice);
    }
  }
});
//var price
// Update price function
function generateRandomPrice(price){

  price += randomNumber(-50, 50)/100;

  if (price > maxPrice){
    price = maxPrice;
  } else if (price < minPrice) {
    price = minPrice;
  }
  return price;
}
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
  this.avgPrice = 0;
  this.marketPrice = marketPrice;
  this.inventory = 0;
}

// Random number function
function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}
