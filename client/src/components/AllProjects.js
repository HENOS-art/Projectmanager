import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';


const AllProjects= (props) => {
	
	const [projects, setProjects ] = useState([]);
	const [status,setStatus] = useState({});
    

	
	useEffect(() => {
		
		axios.get("http://localhost:8000/api/projects")
			.then((res) => {
				console.log(res.data);
				
			setProjects	(res.data);
				
			})
			.catch((err) => {
				console.log(err);
			});
		

	}, []);
	
	// const updatedproject = e => {
		
	// 	let newProjectObject = { ...project };
	// 	newProjectObject.status =  newStatus;
	// 	setProject(newProjectObject);
	// }
	

    const deletePet =()=>{
        
   axios.delete("http://localhost:8000/api/projects/")
		.then((res) =>navigate("/projects/"))
		.catch((err) => console.log(err));
	};
	

	return (
		<div>
			
			
		
			
				<table>
  <tr>
    <th>BackLog</th>
    <th >inprogress </th>
	<th >completed </th>
  </tr>
  <td>
	  
{
					projects.map((project,index)=>
					<tr key={ index }>

						<h3><b>{project.project}</b></h3>
                         
						 <p><b> Due:{project.date}</b></p>
                         <button>Start Project</button>
						 </tr>
					
                     
					
                    
					 
					
					
					)
				}</td>
		                     <td>
{
					 projects.map((project,index)=>
					<tr key={ index }>

						<h3><b>{project.project}</b></h3>
                         
						 <p><b> Due:{project.date}</b></p>
                         <button >completed</button>
						 </tr>
					
                     
					
                    
					 
					
					
					)
				}</td>
				    <td>
{
					projects.map((project,index)=>
					<tr key={ index }>

						<h3><b>{project.project}</b></h3>
                         
						 <p><b> Due:{project.date}</b></p>
						
                         <button onClick= { deletePet}> Remove Projects{project.project}</button> 
						 </tr>
					
                     
					
                    
					 
					
					
					)
				}
				</td>
		
  
</table>	
							
			

                	    
		</div>
	)
}

export default AllProjects;