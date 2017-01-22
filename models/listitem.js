var mongoose = require('mongoose');

var ListItemSchema = new mongoose.Schema({
	content: String
});

mongoose.model('ListItem', ListItemSchema);