app.controller('customersController',function(customersFactory){
	
	this.sortBy ='name';
	
    var vmc = this;
    
    vmc.customers = [];
    
    function init(){
        vmc.customers = customersFactory.getCustomers();
    }
	
	init();
	this.doSort = function(propName){
	
		this.sortBy = propName;
		this.reverse = !this.reverse;
	}
	this.total = function(){
	
		return vmc.customers.length;
	}
		
});