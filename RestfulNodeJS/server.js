var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://harrymohan:xxxxxx@ds061701.mongolab.com:61701/bear'); // connect to our database

var Bear =  require('./app/models/bear');
//configure body parser to user bodyparser()
//this will let us 
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

var port = process.env.PORT || 8080;

var router = express.Router();  //get an instance of express router
//middleware to use for all request
router.use(function(req,res,next){
	//do logging
	console.log('Somthing is happening');
	next(); //make sure we goto next routes and don't stop here
});

router.get('/',function(req,res){
	res.json({message:'hooray! welcome to our api!'});
});

//on routes that end in /bears
router.route('/bears')
//create a bear (accessed at http://localhost:8080/api/bears)
	.post(function(req,res){
		var bear = new Bear(); //create an instance of the Bear model
		bear.name = req.body.name; //set the bears name (comes from the request)
		//save the bear and check for the errors
		bear.save(function(err){
			if(err)
				res.send(err);

			res.json({message:'Bear Created'});
		});
	})
	//get all the bears
	.get(function(req,res){
		Bear.find(function(err,bears){
			if(err)
				res.send(err);

			res.json(bears);
		});
	})

	// get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        Bear.findById(req.params.bear_id, function(err, bear) {
            if (err)
                res.send(err);
            res.json(bear);
        });
    });
	

//Register our routes
//all of our routes will be prefixed with /api
app.use('/api',router);

//start the server
app.listen(port);
console.log('Magic happens at port '+port);