import movie from './mv.png'
import zodiac2 from './zodiac2.png'
import { Button } from 'primereact/button';
function Project(){
    return(<div  id="project">
<div className="bdr"><h1>My Project</h1></div>

<div className='flx'>
<div className='img-css'>

<img src={zodiac2} alt='zodiac1' className='img1' />

<div className="txt">
<h3>Zodiac Calendar</h3>
<Button label={<i className="pi pi-github"/> } severity="secondary" text />

<a href="" ><Button label={<i className="pi pi-eye" />} severity="success" text className='btnm' /></a>
</div>
</div>
<div className='img-css'>

<img src={movie} alt='zodiac1' className='img1' />

<div className="txt">
<h3>Movie card</h3>
<div></div>
<a href="https://github.com/Myat-Min-Htet/sample-movie-cards" ><Button label={<i className="pi pi-github"/>} severity="secondary" text /></a>
<a href="https://myat-min-htet.github.io/sample-movie-cards/" ><Button label={<i className="pi pi-eye" />} severity="success" text className='btnm' /></a>
</div>
</div>
</div>
    
</div>

    
    );
}
export default Project;