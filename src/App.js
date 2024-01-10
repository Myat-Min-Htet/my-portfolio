
import react from "react";
import "./index.css";
import { ReactDOM } from "react";
import Navbar from "./navbar";
import HomePage from "./home";
import About from "./about";
import Contact from "./contact";
import Resume from "./resume";

import Project from "./myproject";

 
function App(){

    return( 
    <div >
      <Navbar/>
    
  <HomePage/>
  <About />
  <Project />
  <Resume />
  <Contact/>
  
  
    </div>
      
      
 
  

      
     
    );

};



export default App;