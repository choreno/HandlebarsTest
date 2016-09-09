angular.module('moneyzoneApp')
	.controller('homeCtrl', homeCtrl);



function homeCtrl(expenseData) {
	var vm = this;

	vm.pageHeader = 'ttt';

	vm.message = 'Checking your expenses...'; 

	expenseData
		.success(function (data) {
			vm.data = data;
		})
		.error(function (err) {
			console.log(err); 
		});


}


