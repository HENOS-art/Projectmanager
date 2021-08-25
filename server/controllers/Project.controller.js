const Project= require('../models/Project.model'); 

module.exports={
  getAll:(req,res) =>{
    Project.find({})
    .then((Projects )=>res.json(Projects))
    .catch((err)=>res.json(err))
},

getOne:(req,res) =>{
    Project.findById(req.params.id)
    .then((Project)=>res.json(Project))
    .catch((err)=>res.json(err))
},
create:(req,res) =>{
    console.log(req.body);
    Project.create(req.body)
    .then((newProject)=>res.json(newProject))
    .catch((err)=>res.json(err));
},
getAllInProgress:(req,res) =>{
    Project.find({})
    .then((Projects )=>res.json(Projects))
    .catch((err)=>res.json(err))
},


//  update : (req, res) => {
//     Pet.findOneAndUpdate(  req.params.id , req.body)
//     .then(updatedPet => res.json(updatedPet ))
//     .catch(err => res.json(err));
//  },
update :(req, res) => {
    Project.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedProject => res.json({ updatedProject }))
    .catch(err => res.json({  err }));
},


delete:(req,res) =>{
    Project.findByIdAndRemove(req.params.id)
    .then((deleted)=>res.json(deleted))
    .catch((err)=>res.json(err));
},
};