app.controller('ordersController',function($routeParams,customersFactory){
	//alert('orders controller init');
    var customerId = $routeParams.customerId;
	
   // alert('customerID'+customerId);
    var vm = this; 
    vm.customer = [];
    
	    function init(){
        vm.customer = customersFactory.getCustomer(customerId);
          
    }
    
  init();
		
});