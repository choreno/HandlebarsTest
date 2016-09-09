angular.module('moneyzoneApp')
	.controller('homeCtrl', homeCtrl);



function homeCtrl(expenseData) {
	var vm = this;

	vm.pageHeader = 'ttt';

	vm.message = 'Checking your expenses...';

	//Alert!, $http.get returns a promise with two methods, success and error
	expenseData
		.success(function (data) {
			vm.expenses = data;

			//ES6 way -- getting the unique folders only
			vm.folders = [...new Set(data.map(x => x.name))]; 

		})
		.error(function (err) {
			console.log(err);
		});


}


