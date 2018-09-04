const mongoose = require('mongoose');

const ShoppingItemSchema = mongoose.Schema({
	itemName: {
		type: String,
		require: true,
	},
	itemQuantity: {
		type: Number,
		required: true
	},
	itemBought: {
		type: Boolean,
		required: true
	}
});

const Item = module.exports = mongoose.model('Item', ShoppingItemSchema);