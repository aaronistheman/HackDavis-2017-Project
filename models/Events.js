var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
	title:      {type: String},
	starthour:  {type: Number},
	endhour:    {type: Number},
	description: {type: String}
});

mongoose.model('Event', EventSchema);