var total = 0;

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


//loop to get total
for (var i = 0; i<shoppingList.length; i++){
	total += shoppingList[i].price;
}

console.log(total);


// Used this to check if I formatted the Array correctly
//console.log(shoppingList[0]);

// This lists out all the items and prices
shoppingList.forEach(function(listAll) {
   console.log(listAll);
});




