import React, { useState } from 'react'
import axios from 'axios';

import {Link, navigate} from '@reach/router';
const NewProject = (props) => {
const [ errors,setErrors] =useState({});
const [project, setProject] = useState({
    project:" ",
    date:"",
   
}); 


const handleSubmit = e => {
    
    e.preventDefault();
    
    axios.post('http://localhost:8000/api/projects/new',project )
      
    .then((res) => {
        console.log(res.data);
        
        if(res.data.errors) {
            setErrors(res.data.errors);
        }
        else {
            
            navigate("/projects");
        }
    })
    .catch((err) => {
        
        console.log(err);
    })
}

const inputChange = (e) => {
    console.log("input project: " + e.target.project);
    console.log("input value: " + e.target.value);
    let newProjectObject = { ...project };
    newProjectObject[e.target.name] = e.target.value;
    setProject(newProjectObject);
}

return (
    <div className="box3">
      
      <Link to = { "/projects/" } >
								
								back to home 
								</Link>
                                <h3>  Plan a new project</h3>
    <form onSubmit={ (e) => handleSubmit(e) }>
        <div className="nav1">
       <div >
                <label ><b>Project</b> </label>
                
         {
                errors.project?
                <span className="error-text">{errors.project.message}</span>
                :null
            }
             <br/>
                <input
                    type="text"
                    name="project"
                    value={project.project }
                    onChange={ (e) => inputChange(e) }
                    />
                    
            </div>
            <div>
                <label><b>Date</b></label>
                <br/>
                {
                    errors.date ?
                        <span className="error-text">{errors.date.message}</span>
                        : null
                }
                <input
                    type="date"
                    name="date"
                    value={ project.date }
                    onChange={ (e) => inputChange(e) }
                    />
            </div>
            
            </div>
            <button type="submit">Plan to a Project</button>
           
           
        </form>
    </div>
      
)
}

export default NewProject;