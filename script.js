
// Random number function
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
// MAX PRICE 11.50
// Fruits in the market
var fruitList = ['apples', 'oranges', 'bananas', 'pears'];
var fruitObjects = [];

// Create fruit objects
for (var i = 0; i < fruitList.length; i++){
	 fruitObjects[i] = new Fruit (fruitList[i], 5);
}

console.log(fruitObjects);

// Fruit Constructor
function Fruit (name, marketPrice) {
	this.name = name;
	this.avgPrice = undefined;
	this.marketPrice = marketPrice;
	this.inventory = 0;
}
/*
Fruit.prototype.buy = function () {

};

Fruit.prototype.calcAvgPrice = function () {

};

$(document).ready(function () {
	$('#fruit-container').append('<div class = "fruits"></div>');
	var $el = $('#fruit-container').children().last();
	$el.append('<div id = ' + fruit.name + '></div>')
});

function createFruitDisplay () {

}
*/
