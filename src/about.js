import img1 from './js.png'
import img2 from './react.png'
import img3 from './sql.png'
import img4 from './node.png'
import img5 from './redux.png'
import img6 from './next.png'
function About(){
    return(<div id="about" > <div className="bdr"><h1>About me </h1></div>
    <div>
    <ul>
        <ul>
            <li>
            i have strong passion for developing web application.
            </li>
           
            <li>I am always curious and willing to learn new things.</li>
            <li>I have good communication to jion any team.</li>
            <li> Here are a few languages I've been learning recently:</li>
        </ul>
        <ul><img src={img1} className='iml'/> <img src={img2}className='iml' /> <img src={img3} className='iml'/> <img src={img4}className='iml' /> <img src={img5}className='iml' /> <img src={img6}className='iml' /></ul>
    </ul>
    
    </div>
    </div>)
}
export default About;