

module.exports.angularSPA = function (req, res) {
	res.render('angularSPA.handlebars', {

		title: 'R+L Carriers - AnglularSPA',
		months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		years: function () {
			//Adding the target years
			var years = [];
			var startYear = 2009;
			var currentYear = 2016;

			for (var i = startYear + 1; i <= currentYear; i++) {
				years.push(i);
			}

			return years; 

		}

	});
};