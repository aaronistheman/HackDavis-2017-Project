function event (user_title, user_start_hour, 
				user_end_hour, user_description) {   // Constructor for event objects
	this.title       = user_title;
	this.start_hour  = user_start_hour;
	this.end_hour    = user_end_hour;
	//this.description = user_description;
}

/*function calendar(event) {                // Constructor for calendar objects
	this.add_event = function(event) {    // for adding events
		
	}
	this.delete_event = function(event) { // for deleting events

	}
}*/

function validateForm() {
    var title       = document.forms["eventform"]["title"].value;
    var start_time  = document.forms["eventform"]["starthour"].value;
    var end_time    = document.forms["eventform"]["endhour"].value;
    //var description = document.forms["eventform"]["descriptions"].value;
    var activity    = new event(title, start_time, end_time /*description*/); 
    alert(activity.title);

}