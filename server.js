var express			= require('express'),
    app				= express(),
    bodyParser		= require('body-parser'),
    mongoose		= require('mongoose'),
    fs				= require('fs'),
    routes          = require('./routes/routes'),
    router			= express.Router(),
    exphbs			= require('express-handlebars');

//Templating
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//Database
mongoose.connect('mongodb://localhost:27017/noblis', function(err) {
	if(err)
		console.log('Could not connect to mongodb');
	console.log('Successfully connected to mongodb');
});

//Models
var models_path = __dirname + '/models'; //require all models in models folder
fs.readdirSync(models_path).forEach(function (file) {
  require(models_path+'/'+file);
});

//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//Routes
app.use(routes);

//Serve static files
app.use(express.static(__dirname + '/public'));



//Start server
app.listen(3000, function() {
	console.log('Listening on port 3000');
});





