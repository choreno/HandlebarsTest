angular.module('moneyzoneApp')
	.service('expenseData', expenseData);


function expenseData($http) {

	
	//var apiData = $http.get('/api');
	return $http.get('/api');


	//return [
	//	{
	//		title: 'My fisrt Entry',
	//		description: 'Borem sodum ....',
	//		author: 'FAbian Vogel',

	//	},
	//	{
	//		title: 'My Second Entry',
	//		description: 'Borem sodum ....',
	//		author: 'FAbian Vogel',
	//	}
	//];

}


