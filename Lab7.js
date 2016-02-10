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



// Used this to check if I formatted the Array correctly
//console.log(shoppingList[0]);

// This lists out all the items and prices
shoppingList.forEach(function(listAll) {
  total += listAll.price;
  console.log(listAll.item +"....."+ listAll.price);
});

console.log("Total : " +total);



