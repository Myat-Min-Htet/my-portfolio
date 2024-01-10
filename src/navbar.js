import About from "./about";
import "./index.css";
import Resume from "./resume";
import Project from "./myproject";
import Contact from "./contact";


function Navbar(){
    return (
      
            
            <div className="main">
                    <div className="menu"> 
                
                <div className="menulist">
               
               <a href="#home"  className="menuitem">Home</a> 
               <a href='#about' className="menuitem">About</a>
               <a href='#resume' className="menuitem">Resume</a>
               <a href='#project' className="menuitem">Project</a>
               <a href='#contact' className="menuitem">Contact</a>
               
           
              
               </div> 
          </div>
            </div>
             
  
                 
                
            
    
    );
}
export default Navbar;
