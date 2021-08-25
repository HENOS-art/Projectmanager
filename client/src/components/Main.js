import React, { useState } from 'react';
import {Link, navigate} from '@reach/router';

import AllProjects from './AllProjects';
// import Completed from "./Completed ";
// import InProgress from "./InProgress";

const Main = (props) => {

return (
    
    <div className="box" >
        
               
                 <AllProjects /> 
                
       {/* <Completed/>
       <InProgress/>
       <AllPets/> */}
      <Link to={"/projects/new"} className="box1">
				add a project
			</Link>	
    </div>
     
    
    
)
}

export default Main ;