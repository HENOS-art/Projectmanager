import './App.css';
import { Router } from '@reach/router';
// import AllPets from './components/AllPets';
// import AllPets from './components/AllPets';
// import BackLog from './components/BackLog';
import NewProject from './components/NewProject';
import Main from './components/Main';
function App() {
  return (
    <div className="App">
      <h1>Project manager</h1>
      
       <Router>
         <Main default/>
          {/* <AllPets path = "/projects"/> */}
          <NewProject path = "/projects/new"/>
          
        
      </Router>
    </div> 
  );
}

export default App;
