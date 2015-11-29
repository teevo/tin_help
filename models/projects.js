var mongoose = require('mongoose');
var schema = mongoose.Schema;

var projectSchema = mongoose.Schema({
	projectName: String,
	projectManager: String
});

Project = mongoose.model('Project', projectSchema);