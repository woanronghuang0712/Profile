import Image from 'next/image';
import astrocat from '../ui/figures/astrocat.jpg';
import PetsIcon from '@mui/icons-material/Pets';
import {caveat} from '../fonts';
//history
//skills
//projects
//google pin country google map api
//resume recipe
//movie hit list

//navigation bar


export default function dashboard(){
	return(
		<div className="flex flex-row">
		<div id="cat-portrait" className="basis-1/2">
		<Image
        src={astrocat}
        alt="Picture of the author"
      width={400}
      height={400}
      />
	 </div>
	  <div 
	  	className= "flex flex-col justify-center text-center"
	  	id="portrait-explain"
	  	>
	  	
      <div className = {`${caveat.className} flex flex-row justify-center whitespace-break-spaces capitalize mb-8 pb-2 text-3xl font-bold text-rose-600`}>
      	<p className="">frontend engineer  </p>
      	<PetsIcon className="opacity-70 -translate-x-2 translate-y-2  text-rose-400 z-10" />
      	<p className="hidden line-through text-2xl opacity-45">Astronaut</p></div>
      <h1 className = "text-5xl font-bold -translate-y-9">Elizabeth Huang</h1>
      </div>
		</div>

		);
}



