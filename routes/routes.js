var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    res.render('../views/home', {
		name: 'tin'
	});
});

router.route('/projects')
	.get(function(req, res) {
		Project.find(function(err, projects) {
			if(err)
				res.send(err);
			res.render('../views/projects', {
				project: projects
			});
		});
		
	});


router.route('/addproject')
	.get(function(req, res) {
		
		res.render('../views/addproject');
	})

	.post(function(req, res) {
		var project = new Project();
		project.projectName = req.body.projectName;
		project.projectManager = req.body.projectManager;

		project.save(function(err) {
			if (err)
				res.send(err);
			console.log('project created!');
			
			res.render('../views/addproject');

		});
	});


router.route('/projects/:id')
	.get(function(req, res) {

		var project = Project.findOne({ 'projectName': req.params.id }, function (err, project) {
  	
		if (err) return handleError(err);
	 		console.log('1 - found project: ' + project.projectName);
		  		res.render('../views/partials/projectDetails', {
		  			project: project
		  		});
		}); 
	});


//test
	// router.route('/calculating')
	// 	.get(function(req, res) {
	// 		var val = req.query;
	// 		var ans = Number(val.num1) + Number(val.num2);
	// 		console.log('answer is: ' + ans);
	// 		res.send(ans);

	// });

router.route('/methods')
	.get(function(req, res) {
		res.render('../views/methods');
	})

	.post(function(req, res) {
		var num1 = Number(req.body.num1);
		var num2 = Number(req.body.num2);
		var ans = num1 + num2;
		console.log('ans is ' + ans);
		res.send({ans});	

	});

router.route('/templating')
	.get(function(req, res) {
		res.render('../views/templating');
	})

module.exports = router;