


var customerFactory = function(){
    var customers = [{id:1,name:'Jason',age:'35',OrderedPlaced:'12/01/2012',
                   orders:[
                       {
                           id:1,
                           product:'shoes',
                           total:9.94
                       }
                           
                   ]
                  },
                  {id:2,name:'Sally',age:'32',OrderedPlaced:'06/21/2010',
                  orders:[
                       {
                           id:2,
                           product:'baseball',
                           total:19.94
                       }
                           
                   ]
                  },
                  {id:3,name:'Harry',age:'29',OrderedPlaced:'01/04/2007',
                  orders:[
                       {
                           id:3,
                           product:'Perfume',
                           total:123.21
                       }
                           
                   ]
                  }
            ];
    var factory ={};
    //this shall be synchronous call
    factory.getCustomers = function(){
        return customers;
    }
    var orders = {};
    
    
    factory.getCustomer = function(customerId){
  
  
        var len = customers.length;
     
       
        for(var i=0;i<len;i++)
        {
            if(customers[i].id === parseInt(customerId))
            {
                
                return customers[i];
                
               
            }
            
        }
       
        return{};
      
    }
    
    return factory;
}
angular.module('customer').factory('customersFactory',customerFactory);