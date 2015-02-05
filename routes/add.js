var data = require("../data.json");

exports.addFriend = function(req, res) {   
	friend = {
		name: req.query.name,
		description: req.query.description,
	}
	data["friends"].push(friend)
	res.render('add', {
		'friends': data.friends
	});
 }