var shoppingList =[
	{
		item: "Chicken",
		price: 2.00
	},
	{
		item: "garlic",
		price: .99
	},
	{
		item: "banana",
		price: .49
	},
	{
		item: "sweet potato",
		price: 1.00
	}
]


// Used this to check if I formatted the Array correctly
//console.log(shoppingList[0]);

// This lists out all the items and prices
// shoppingList.forEach(function(entry) {
//    console.log(entry);
// });


//This finds the total
function findTotal () {
	console.log("$" + (shoppingList[0].price + shoppingList[1].price + shoppingList[2].price + shoppingList[3].price));
}

console.log(findTotal());
