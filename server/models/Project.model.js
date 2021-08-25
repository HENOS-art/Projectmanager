const mongoose = require("mongoose");


const ProjectSchema = new mongoose.Schema({
	project: { 
		type: String,
		required: [ true, "project is required for pets" ],
		minlength: [ 3, "Name must be atleast 3 characters long" ],
	},
    date: { 
		type: Date,
		required: [ true, " date is required for project" ],
		
	},
    status:[
           "new",
           "inProgres",
           "completed"

],

	
    
		
    
    

   
} ,
           { timestamps: true }
);

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;