var app = angular.module('customer',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/',
			{
				controller:'customersController',
				controllerAs:'cc',
				templateUrl:'app/views/customers.html'
			})
        .when('/orders/:customerId',
			{
				controller:'ordersController',
				controllerAs:'oc',
				templateUrl:'app/views/orders.html'
			})
		.otherwise({redirectTo:'/'});
			

});


