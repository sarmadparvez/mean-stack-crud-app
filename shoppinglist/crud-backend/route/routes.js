var express = require('express');
var router = express.Router();

const Item = require('../model/shoppingItem');

// retrieving data from database
router.get('/items', (req, res, next) => {
	res.send('items route triggered');
	Item.find(function(err, items){
		if (err) {
			res.json(err);
		} else {
			res.json(items);
		}
	});
});

// inserting new data
router.post('/item', (req, res, next) =>{
	// to do later
	let newShippingItem = new Item({
		itemName: req.body.itemName,
		itemQuantity: req.body.itemQuantity,
		itemBought: req.body.itemBought
	});

	newShippingItem.save((err, item) =>{
		if (err) {
			//res.json(req.body);
			res.json(err);
		} else {
			res.json({msg: "Item has been added successfully"})
		}
	});
});

// updating the data
router.put('/put_route', (req, res, next) =>{
	// to do later
});


// deleting the data
router.delete('/delete_route', (req, res, next) =>{
	// to do later
});

module.exports = router;