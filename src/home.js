import About from "./about";
import Contact from "./contact";
import Resume from "./resume";

import { Button } from 'primereact/button';
        

function HomePage(){
    return(
            <div className="h" id="home">
                <div id="home">
                    <h4>Hi, my name is</h4>
                    <h1 className="t">Myat Min Htet</h1>
                   <a href="https://github.com/Myat-Min-Htet"> <Button label="Check out my GitHub !" severity="secondary" text className="btn" /></a>
                
                </div>
                <div><img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1704644904~exp=1704645504~hmac=b6d9cddec4a89b6f3409f7636b576d633f07c38f2acfbe2d8efa7d87746f3e46" alt="avatar" id="avatar"/></div>
             
               
                
                
            </div>
    );
}
export default HomePage;