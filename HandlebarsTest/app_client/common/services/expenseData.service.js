angular.module('moneyzoneApp')
	.service('expenseData', expenseData);


function expenseData($http) {

	//var allExpneses = function () {
	//	return $http.get('/api');
	//};

	//return {
	//	allExpenses: allExpneses
	//};

	var temp = $http.get('/api');

	//console.log(temp);

	//var tt = function () {

	//	return $http.get('/api');
	//};

	
	return temp
	

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




